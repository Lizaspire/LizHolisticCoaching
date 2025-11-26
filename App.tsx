import React from 'react';
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

function App() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';

  if (pathname === '/client-login') {
    return <ClientLoginPage />;
  }

  const scrollToContact = () => {
    document.getElementById('free-chat')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onContactClick={scrollToContact} />
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