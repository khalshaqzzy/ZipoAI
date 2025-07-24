import React, { useState, useEffect } from 'react';
import { User, Bell, Palette, Volume2, Globe, Shield, LogOut, Loader2 } from 'lucide-react';
import { useSettings, Language } from '../contexts/SettingsContext';
import { useToast } from '../hooks/useToast';

interface UserProfile {
  username: string;
}

interface SettingsPageProps {
  onLogout: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onLogout }) => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { language, setLanguage } = useSettings();
  const { addToast } = useToast();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value as Language;
    setLanguage(newLanguage);
    addToast(`Language changed to ${newLanguage === 'id-ID' ? 'Bahasa Indonesia' : 'English'}`, 'success');
  };

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const response = await fetch('/api/user/profile', {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        const data: UserProfile = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Handle error, e.g., redirect to login
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const getInitials = (name: string) => {
    if (!name) return '';
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Settings</h1>
          <p className="text-slate-600">Manage your account and app preferences</p>
        </div>

        {/* Profile Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <User className="text-blue-500" size={24} />
            <h2 className="text-xl font-bold text-slate-800">Profile</h2>
          </div>
          
          {isLoading ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
            </div>
          ) : profile ? (
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">{getInitials(profile.username)}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">{profile.username}</h3>
                <p className="text-slate-600">Zipo Learner</p>
              </div>
            </div>
          ) : (
            <p className="text-slate-500">Could not load profile information.</p>
          )}
        </div>

        {/* Preferences Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <Palette className="text-purple-500" size={24} />
            <h2 className="text-xl font-bold text-slate-800">Preferences</h2>
          </div>
          
          <div className="space-y-6">
            {/* Speech Language */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Globe className="text-slate-400" size={20} />
                <div>
                  <h3 className="font-medium text-slate-800">Speech Language</h3>
                  <p className="text-sm text-slate-600">Select the language for speech recognition and synthesis</p>
                </div>
              </div>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en-US">English</option>
                <option value="id-ID">Bahasa Indonesia</option>
              </select>
            </div>
          </div>
        </div>

        

        {/* Account Actions */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
          <div className="flex items-center gap-4 mb-6">
            <LogOut className="text-red-500" size={24} />
            <h2 className="text-xl font-bold text-slate-800">Account</h2>
          </div>
          
          <div className="space-y-4">
            <button onClick={onLogout} className="w-full text-left p-4 rounded-lg border border-red-200 hover:bg-red-50 transition-colors text-red-600">
              <h3 className="font-medium">Logout</h3>
              <p className="text-sm text-red-500 mt-1">Logout from your account and return to Landing Page</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;