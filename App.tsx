import React, { useCallback, useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ThreePillars } from './components/ThreePillars';
import { WhatMakesDifferent } from './components/WhatMakesDifferent';
import { IsThisForMe } from './components/IsThisForMe';
import { HowItWorks } from './components/HowItWorks';
import { WhyDifferent } from './components/WhyDifferent';
import { MeetEnes } from './components/MeetEnes';
import { PlansAndPricing } from './components/PlansAndPricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ClientLoginPage } from './components/ClientLoginPage';

const getPathname = () => (typeof window !== 'undefined' ? window.location.pathname : '/');

function App() {
  const [pathname, setPathname] = useState<string>(getPathname());

  useEffect(() => {
    const handlePopState = () => setPathname(getPathname());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((path: string) => {
    if (typeof window === 'undefined') return;
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setPathname(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const scrollToContact = useCallback(() => {
    document.getElementById('free-chat')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (pathname === '/client-login') {
    return <ClientLoginPage onNavigateHome={() => navigateTo('/')} onNavigateClientLogin={() => navigateTo('/client-login')} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onContactClick={scrollToContact}
        onClientLoginNavigate={() => navigateTo('/client-login')}
        onLogoClick={() => navigateTo('/')}
      />
      <Hero onContactClick={scrollToContact} />
      <TrustBadges />
      <ThreePillars />
      <WhatMakesDifferent />
      <IsThisForMe />
      <HowItWorks />
      <WhyDifferent />
      <MeetEnes />
      <PlansAndPricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;