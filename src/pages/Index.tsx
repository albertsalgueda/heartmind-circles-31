
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import VisionSection from '@/components/VisionSection';
import HostAISection from '@/components/HostAISection';
import CircleSection from '@/components/CircleSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <VisionSection />
        <HostAISection />
        <CircleSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
