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

import { EventsPage } from './components/EventsPage';

const getPathname = () => (typeof window !== 'undefined' ? window.location.pathname : '/');

const getBaseRoot = () => {
  if (typeof window === 'undefined') return '/';
  const segments = window.location.pathname.split('/').filter(Boolean);
  if (segments.length === 0) return '/';
  // If we are on /events, skip the last segment to find the root
  if (segments[segments.length - 1] === 'events') {
    const rootSegments = segments.slice(0, -1);
    return rootSegments.length === 0 ? '/' : `/${rootSegments.join('/')}/`;
  }
  return `/${segments.join('/')}/`;
};

function App() {
  const [pathname, setPathname] = useState<string>(getPathname());
  const baseRoot = useMemo(() => getBaseRoot(), []);
  const homePath = baseRoot;
  const eventsPath = useMemo(() => {
    if (homePath === '/') return '/events';
    return homePath + 'events';
  }, [homePath]);

  // Handle direct loads with hash and navigation from other pages
  useEffect(() => {
    const handleScrollToHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash;
      if (hash && pathname === homePath) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Use requestAnimationFrame loop or timeout to ensure content is fully rendered
          const scroll = () => {
            const el = document.getElementById(id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          };
          requestAnimationFrame(scroll);
          // Fallback timeout
          setTimeout(scroll, 100);
        }
      }
    };

    handleScrollToHash();
  }, [pathname, homePath]);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getPathname());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = useCallback((path: string) => {
    if (typeof window === 'undefined') return;
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setPathname(path);
      // Only scroll to top if there's no hash
      if (!path.includes('#')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  const handleSectionNavigate = useCallback((id: string) => {
    const targetPath = homePath + '#' + id;
    if (pathname !== homePath) {
      window.history.pushState({}, '', targetPath);
      setPathname(homePath);
    } else {
      // Already on home, just scroll
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      if (window.location.hash !== '#' + id) {
        window.history.replaceState({}, '', targetPath);
      }
    }
  }, [pathname, homePath]);

  const scrollToContact = useCallback(() => {
    document.getElementById('free-chat')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const isEventsPage = pathname === eventsPath;

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onContactClick={scrollToContact}
        onLogoClick={() => navigateTo(homePath)}
        onEventsClick={() => navigateTo(eventsPath)}
        onSectionNavigate={handleSectionNavigate}
      />

      {isEventsPage ? (
        <EventsPage onBack={() => navigateTo(homePath)} />
      ) : (
        <>
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
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
