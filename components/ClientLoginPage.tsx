import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface ClientLoginPageProps {
  onNavigateHome?: () => void;
  onNavigateClientLogin?: () => void;
}

export const ClientLoginPage: React.FC<ClientLoginPageProps> = ({ onNavigateHome, onNavigateClientLogin }) => {
  const handleContactClick = () => {
    window.location.href = '/#free-chat';
  };

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onContactClick={handleContactClick}
        onClientLoginNavigate={onNavigateClientLogin}
        onLogoClick={onNavigateHome}
      />

      <main className="pt-28 pb-16 bg-white">
        {/* Client overview hero */}
        {/* ...rest of the file is unchanged... */}
      </main>

      <Footer />
    </div>
  );
};