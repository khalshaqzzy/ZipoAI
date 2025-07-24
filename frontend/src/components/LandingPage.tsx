import React, { useState, useEffect } from 'react';
import zipoLogo from '../../assets/zipo_rounded.png';
import { 
  ArrowRight, 
  Sparkles, 
  MessageCircle, 
  Upload, 
  Eye, 
  Play,
  Users,
  Star,
  BookOpen,
  Brain,
  Zap,
  Shield,
  Globe,
  Award,
  TrendingUp,
  CheckCircle,
  Bot,
  Mic,
  Volume2,
  ChevronRight
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

// Floating transcript messages for demo
const transcriptMessages = [
  {
    id: 1,
    text: "Jumpstart your learning and transform your education with our conversational AI tutor, Zipo"
  },
  {
    id: 2,
    text: "Transform your learning experience with personalized AI tutoring and visual breakdowns."
  },
  {
    id: 3,
    text: "Upload any document and watch as complex concepts become crystal clear through interactive visuals."
  },
  {
    id: 4,
    text: "Experience the future of learning with AI-powered visual explanations that adapt to your pace."
  },
  {
    id: 5,
    text: "Revolutionary AI technology that makes complex topics simple and engaging for everyone."
  },
  {
    id: 6,
    text: "Start your personalized learning journey today; Learn Anything, Understand Everything with Zipo",
  }
];

const features = [
  {
    icon: MessageCircle,
    title: "Conversational AI Learning",
    description: "Engage in natural conversations with our advanced AI tutor that adapts to your learning style and pace.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Eye,
    title: "Visual Explanations",
    description: "Watch complex concepts come to life on our generative whiteboard with real-time visual breakdowns.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Upload,
    title: "Document Analysis",
    description: "Upload PDFs, images, or text files and get instant AI-powered explanations with visual summaries.",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: Brain,
    title: "Adaptive Learning",
    description: "Zipo understands your knowledge gaps and creates personalized learning paths just for you.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "Instant Understanding",
    description: "Get immediate answers to your questions with synchronized audio and visual explanations.",
    gradient: "from-yellow-500 to-orange-500"
  }
];

const learningStats = [
  {
    number: "100%",
    label: "Concepts Explained",
    description: "Complex topics broken down into digestible visual explanations",
    icon: BookOpen,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: "98%",
    label: "Learning Retention",
    description: "Students retain information better with visual learning",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    number: "24/7",
    label: "AI Availability",
    description: "Your personal AI tutor is always ready to help you learn",
    icon: Zap,
    gradient: "from-green-500 to-teal-500"
  },
  {
    number: "150+",
    label: "Subject Areas",
    description: "From science to humanities, we cover all learning domains",
    icon: Globe,
    gradient: "from-orange-500 to-red-500"
  }
];

// const stats = [
//   { number: "100%", label: "Active Learners", icon: Users },
//   { number: "100%", label: "Questions Answered", icon: MessageCircle },
//   { number: "95%", label: "Success Rate", icon: TrendingUp },
//   { number: "24/7", label: "AI Availability", icon: Bot }
// ];

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onLogin }) => {
  const [currentTranscriptIndex, setCurrentTranscriptIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Continuous transcript cycling
    const transcriptInterval = setInterval(() => {
      setCurrentTranscriptIndex(prev => (prev + 1) % transcriptMessages.length);
    }, 4000);

    // Auto-cycle features
    const featureInterval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);

    return () => {
      clearInterval(transcriptInterval);
      clearInterval(featureInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Large gradient orbs */}
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating particles */}
        {mounted && [...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div 
                className="w-12 h-12 bg-cover bg-center rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
                style={{ backgroundImage: `url(${zipoLogo})` }}
              >
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Sparkles className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Zipo
              </h1>
              <p className="text-xs text-slate-500 font-medium">AI Learning Platform</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={onLogin}
              className="text-slate-600 hover:text-slate-900 font-semibold transition-colors px-4 py-2 rounded-xl hover:bg-white/50"
            >
              Sign In
            </button>
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-5xl mx-auto mb-20">
            <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <Sparkles className="text-blue-500 animate-pulse" size={20} />
                <span className="text-blue-600 font-semibold">Revolutionary AI-Powered Learning</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-8 leading-tight">
                Learn Anything.
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 bg-clip-text text-transparent">
                  Understand Everything.
                </span>
              </h1>
              
              <p className="text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                Experience the future of education with AI that explains complex topics through 
                <span className="text-blue-600 font-semibold"> conversational learning</span> and 
                <span className="text-purple-600 font-semibold"> synchronized visual breakdowns </span> 
                on our generative whiteboard.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <button
                  onClick={onGetStarted}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-10 py-5 rounded-2xl flex items-center gap-4 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-lg group"
                >
                  <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Start Learning Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-32 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zipo</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover the revolutionary features that make learning more engaging, effective, and enjoyable than ever before.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === activeFeature;
                return (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                      isActive 
                        ? 'bg-white shadow-2xl border-blue-200 scale-105' 
                        : 'bg-white/60 backdrop-blur-sm border-slate-200 hover:bg-white/80 hover:shadow-lg'
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r ${feature.gradient} shadow-lg ${isActive ? 'scale-110' : ''} transition-transform duration-300`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feature Demo */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-400 text-sm font-medium">Zipo Learning Canvas</span>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 h-80 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2220%22 cy=%2220%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
                  
                  {/* Animated demo content */}
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      {features[activeFeature].title}
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Interactive learning in progress...
                    </p>
                    
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 -right-6 w-4 h-4 bg-pink-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
                
                {/* Fixed AI Transcript */}
                {transcriptMessages[currentTranscriptIndex] && (
                  <div className="absolute -bottom-24 left-0 right-0 z-10">
                    <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 text-white shadow-2xl border border-white/20 mx-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Bot size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm font-bold text-blue-300">Zipo AI</span>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-white/70 font-medium">LIVE PREVIEW</span>
                            </div>
                          </div>
                          <p className="text-white leading-relaxed text-base font-medium">
                            {transcriptMessages[currentTranscriptIndex].text}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Volume2 className="w-5 h-5 text-white/70" />
                          <Mic className="w-5 h-5 text-green-400 animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Animated waveform */}
                      <div className="flex items-center justify-center gap-1 mt-4">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-gradient-to-t from-blue-400 to-purple-400 rounded-full animate-pulse"
                            style={{
                              height: `${Math.random() * 16 + 6}px`,
                              animationDelay: `${i * 100}ms`,
                              animationDuration: '1.2s'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Impact Stats */}
      <section className="relative z-10 px-6 py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Floating particles */}
          {mounted && [...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <TrendingUp className="text-green-400 animate-pulse" size={20} />
              <span className="font-semibold text-green-300">Proven Learning Impact</span>
            </div>
            
            <h2 className="text-5xl font-bold mb-6">
              Transforming <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span> Globally
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the measurable impact of AI-powered learning on students and professionals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {learningStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`relative group transition-all duration-500 hover:-translate-y-4 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-2xl">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    
                    {/* Number */}
                    <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {stat.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-blue-100 leading-relaxed text-sm">
                      {stat.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-60"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Additional Impact Section */}
          <div className="mt-20 text-center relative z-10">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                    <CheckCircle className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Faster Learning</h4>
                  <p className="text-blue-100">3x faster comprehension with visual AI explanations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                    <Award className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Better Retention</h4>
                  <p className="text-blue-100">Visual learning improves memory by 400%</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                    <Star className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Higher Engagement</h4>
                  <p className="text-blue-100">Students stay engaged 5x longer with AI tutoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Learning Methods */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 mb-8">
              <Brain className="text-blue-500 animate-pulse" size={20} />
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Advanced Learning Methods</span>
            </div>
            
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              How <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zipo</span> Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Experience cutting-edge AI technology that adapts to your learning style and pace.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Method 1 */}
            <div className={`group transition-all duration-700 hover:-translate-y-2 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Conversational AI
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Engage in natural conversations with our advanced AI tutor that understands context and adapts to your learning pace.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Natural language processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Context-aware responses</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Personalized explanations</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Method 2 */}
            <div className={`group transition-all duration-700 hover:-translate-y-2 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Eye className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Visual Learning
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Watch complex concepts come to life through dynamic visual representations on our generative whiteboard.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Real-time visualizations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Interactive diagrams</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Step-by-step breakdowns</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Method 3 */}
            <div className={`group transition-all duration-700 hover:-translate-y-2 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>
              <div
                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-8 border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Upload className="text-white" size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Document Analysis
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Upload any document and get instant AI-powered analysis with visual summaries and explanations.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">PDF & image support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Instant summarization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">Key concept extraction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Sparkles className="text-yellow-300 animate-pulse" size={20} />
                <span className="font-semibold">Currently in Development</span>
              </div>
              
              <h2 className="text-5xl font-bold mb-6">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Join other learners who are already experiencing the future of education. 
                Start your journey today with our AI-powered learning platform.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                  onClick={onGetStarted}
                  className="bg-white text-blue-600 font-bold px-10 py-5 rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg flex items-center gap-3 group"
                >
                  <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Get Started Free
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center relative z-10">
            {/* Enhanced Logo */}
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="relative">
                <img src={zipoLogo} alt="Zipo Logo" className="w-32 h-32" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-2">
                  Zipo
                </h1>
                <p className="text-blue-300 text-lg font-semibold tracking-wide">AI Learning Platform</p>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl text-slate-300 leading-relaxed font-light">
                Revolutionizing education through{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  AI-powered conversational learning
                </span>{' '}
                and{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                  visual explanations
                </span>
                .
              </p>
              <p className="text-xl text-slate-400 mt-4 font-light">
                Join the future of learning today.
              </p>
            </div>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-slate-700/50 pt-8">
              <p className="text-slate-400 text-lg font-light">
                © 2025 Zipo
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
