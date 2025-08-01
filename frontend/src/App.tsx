import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate, useLocation, useParams } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Dashboard from './components/Dashboard';
import ChatPage from './components/ChatPage';
import SettingsPage from './components/SettingsPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import LandingPage from './components/LandingPage';
import QuizSetupPage from './components/QuizSetupPage';
import QuizPage from './components/QuizPage';
import { ToastProvider } from './contexts/ToastContext';

// --- Type Definitions ---

/**
 * Represents a summary of a learning session for display in the navigation bar.
 */
interface Session {
  _id: string;
  title: string;
  updatedAt: string;
}

/**
 * Represents a file that has been uploaded and is ready for processing.
 */
interface UploadedFile {
  fileId: string;
  filename: string;
}

/**
 * The main application component.
 * It manages routing, authentication state, and global data fetching.
 */
function App() {
  // --- State Management ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Manages initial loading state for authentication check.
  const [quizFiles, setQuizFiles] = useState<UploadedFile[]>([]); // Stores files selected for quiz generation.
  
  const navigate = useNavigate(); // Hook for programmatic navigation.
  const location = useLocation(); // Hook to access the current URL location.

  // --- Data Fetching ---

  /**
   * Fetches the list of recent sessions for the authenticated user.
   * This function is called upon successful login and when a new session is created.
   */
  const fetchSessions = async () => {
    const token = localStorage.getItem('token');
    if (!token) return; // If no token, user is not authenticated, so do nothing.

    try {
      const response = await fetch('/api/sessions', {
        headers: { 'Authorization': `Bearer ${token}` } // Include the auth token.
      });
      if (response.ok) {
        const data = await response.json();
        setSessions(data); // Update the sessions state with fetched data.
      } else {
        console.error('Failed to fetch sessions');
        handleLogout(); // Log out if the token is invalid or expired.
      }
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  // --- Effects ---

  /**
   * Effect hook to check for an authentication token on initial component mount.
   * It sets the authentication status and fetches sessions if a token is found.
   */
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      fetchSessions(); // Fetch sessions for the authenticated user.
    }
    setIsLoading(false); // Mark loading as complete after the check.
  }, []);

  /**
   * Effect hook to listen for a custom 'setupQuiz' event.
   * This event is dispatched from other components (e.g., Dashboard) to initiate quiz setup
   * with specific uploaded files.
   */
  useEffect(() => {
    const handleSetupQuiz = (event: Event) => {
      const customEvent = event as CustomEvent<UploadedFile[]>;
      setQuizFiles(customEvent.detail); // Store the files for quiz generation.
      navigate('/app/quiz/setup'); // Navigate to the quiz setup page.
    };

    window.addEventListener('setupQuiz', handleSetupQuiz);

    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener('setupQuiz', handleSetupQuiz);
    };
  }, [navigate]); // Dependency array includes navigate to ensure the effect re-runs if navigate changes (though it's stable).

  // --- Event Handlers ---

  /**
   * Handles successful user login.
   * Updates authentication state, fetches sessions, and navigates to the dashboard.
   */
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    fetchSessions(); // Refresh sessions after login.
    navigate('/app'); // Redirect to the main application dashboard.
  };

  /**
   * Handles user logout.
   * Clears authentication token, resets states, and navigates to the landing page.
   */
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the authentication token.
    setIsAuthenticated(false);
    setSessions([]); // Clear session data.
    navigate('/landing'); // Redirect to the landing page.
  };

  /**
   * Navigates to the new chat page to start a fresh session.
   */
  const handleStartNewSession = () => {
    navigate('/app/new');
  };

  /**
   * Handles the quiz generation request from the setup page.
   * Sends the instructions and question count to the backend to generate a quiz.
   * @param {string} instructions - The user's instructions for the quiz.
   * @param {number} questionCount - The number of questions to generate.
   */
  const handleGenerateQuiz = async (instructions: string, questionCount: number) => {
    const token = localStorage.getItem('token');
    const fileIds = quizFiles.map(f => f.fileId); // Extract file IDs from the staged quiz files.

    try {
      const response = await fetch('/api/quiz/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ fileIds, instructions, questionCount }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate quiz');
      }

      const data = await response.json();
      navigate(`/app/quiz/play/${data.quiz._id}`); // Navigate to the generated quiz page.

    } catch (error) {
      console.error('Error generating quiz:', error);
      // Error is typically displayed via a toast notification in the component.
    }
  };
  
  // --- Components ---

  /**
   * A wrapper component that protects routes requiring authentication.
   * If the user is not authenticated, it redirects them to the landing page.
   * @param {JSX.Element} children - The child components to render if authenticated.
   */
  const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/landing" replace />; // Redirect unauthenticated users.
    }
    return children;
  };

  // --- Render Logic ---

  // Show a simple loading screen while checking authentication status.
  if (isLoading) {
    return <div className="min-h-screen bg-slate-100" />;
  }
  
  // Determine whether to show the navigation bar based on authentication and current path.
  const showNavBar = isAuthenticated && !location.pathname.startsWith('/landing');

  return (
    <ToastProvider> {/* Provides toast notifications throughout the app. */}
      <div className="min-h-screen bg-slate-50">
        {showNavBar && (
          <NavigationBar
            sessions={sessions}
            onStartSession={handleStartNewSession}
            onLogout={handleLogout} // Pass handleLogout to NavigationBar
          />
        )}
        <main className={showNavBar ? 'ml-80' : ''}> {/* Adjust main content margin if nav bar is visible. */}
          <Routes> {/* Defines the application's routes. */}
            {/* Public Routes: Accessible to all users. */}
            <Route path="/landing" element={<LandingPage onGetStarted={() => navigate('/register')} onLogin={() => navigate('/login')} />} />
            <Route path="/login" element={isAuthenticated ? <Navigate to="/app" /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/app" /> : <RegisterPage onRegisterSuccess={() => navigate('/login')} />} />
            
            {/* Protected Routes: Require user authentication. */}
            <Route path="/app" element={<ProtectedRoute><Dashboard onStartSession={handleStartNewSession} /></ProtectedRoute>} />
            
            {/* Route for existing sessions, dynamically loads ChatPage based on sessionId. */}
            <Route 
              path="/app/:sessionId" 
              element={
                <ProtectedRoute>
                  <ChatPageWrapper onSessionCreated={fetchSessions}/>
                </ProtectedRoute>
              } 
            />

            {/* Dedicated route for creating a new session. */}
            <Route 
              path="/app/new" 
              element={
                <ProtectedRoute>
                  <ChatPageWrapper onSessionCreated={fetchSessions}/>
                </ProtectedRoute>
              } 
            />

            <Route path="/app/settings" element={<ProtectedRoute><SettingsPage onLogout={handleLogout} /></ProtectedRoute>} /> {/* Pass handleLogout to SettingsPage */}
            <Route path="/app/quiz/setup" element={<ProtectedRoute><QuizSetupPage files={quizFiles} onGenerateQuiz={handleGenerateQuiz} /></ProtectedRoute>} />
            <Route path="/app/quiz/play/:quizId" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />

            {/* Fallback Route: Redirects to dashboard if authenticated, otherwise to landing. */}
            <Route path="*" element={<Navigate to={isAuthenticated ? "/app" : "/landing"} />} />
          </Routes>
        </main>
      </div>
    </ToastProvider>
  );
}

/**
 * A wrapper component for the ChatPage.
 * It extracts the sessionId from the URL parameters and passes it to ChatPage.
 * It also forces a re-mount of ChatPage when the sessionId changes or when starting a new session,
 * ensuring the component's state is reset for the new session.
 * @param {() => void} onSessionCreated - Callback to refresh sessions in the parent component.
 */
const ChatPageWrapper: React.FC<{onSessionCreated: () => void}> = ({ onSessionCreated }) => {
  const { sessionId } = useParams<{ sessionId: string }>(); // Get sessionId from URL.
  const location = useLocation(); // Get current location to check if it's a new session.
  const isNew = location.pathname === '/app/new'; // Determine if it's a new session.

  // Use sessionId as key to force re-mount when navigating between sessions.
  // 'new' is used as a key for new sessions to ensure a fresh mount.
  return <ChatPage key={sessionId || 'new'} sessionId={sessionId} isNew={isNew} onSessionCreated={onSessionCreated} />;
};

export default App;

