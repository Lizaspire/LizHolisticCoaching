import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { ThreePillars } from './components/ThreePillars';
import { WhatMakesDifferent } from './components/WhatMakesDifferent';
import { IsThisForMe } from './components/IsThisForMe';
import { HowItWorks } from './components/HowItWorks';
import { WhyDifferent } from './components/WhyDifferent';
import { MeetLiz } from './components/MeetLiz';
import { PlansAndPricing } from './components/PlansAndPricing';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const getPathname = () => (typeof window !== 'undefined' ? window.location.pathname : '/');

const getBaseRoot = () => {
  if (typeof window === 'undefined') return '/';
  const segments = window.location.pathname.split('/').filter(Boolean);
  if (segments.length === 0) return '/';
  return `/${segments.join('/')}/`;
};

function App() {
  const [pathname, setPathname] = useState<string>(getPathname());
  const baseRoot = useMemo(() => getBaseRoot(), []);
  const homePath = baseRoot;

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

  // Keep pathname state “used” intentionally; future routes (eg /events) will rely on it.
  void pathname;

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onContactClick={scrollToContact}
        onLogoClick={() => navigateTo(homePath)}
      />
      <Hero onContactClick={scrollToContact} />
      <TrustBadges />
      <ThreePillars />
      <WhatMakesDifferent />
      <IsThisForMe />
      <HowItWorks />
      <WhyDifferent />
      <MeetLiz />
      <PlansAndPricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
