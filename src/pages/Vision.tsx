
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import SpiritualQuote from '@/components/SpiritualQuote';
import { Button } from '@/components/ui/button';

const Vision = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-spiritual-gray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-center">
                Vision & Purpose
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We're entering a new era — where human connection, spiritual healing, and intelligent technology come together.
              </p>
              
              <SpiritualQuote 
                quote="At the heart of this vision is a core belief: Love, guidance, and transformation can reach every soul — when the human heart meets the intelligence of AI."
              />
              
              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif text-2xl mt-10 mb-4">A Global Architecture for Connection</h2>
                <p>
                  Universal Spiritualism is a global architecture to support small, powerful groups — ten-person healing and learning circles. Each circle is guided by a human, an AI, or a co-hosted blend of both. They cross religions, cultures, and languages — bringing people together to reflect, to heal, and to grow. One group at a time.
                </p>
                
                <h2 className="font-serif text-2xl mt-10 mb-4">Our Foundation Truth</h2>
                <p>
                  Spiritual presence can scale. When human heart-wisdom meets artificial intelligence, transformation becomes universal.
                </p>
                
                <h2 className="font-serif text-2xl mt-10 mb-4">Impact & Evolution</h2>
                <p>Our vision manifests as:</p>
                <ul className="space-y-2 mb-8">
                  <li>Universal access to spiritual guidance</li>
                  <li>Accelerated facilitator development</li>
                  <li>Cross-cultural healing and understanding</li>
                  <li>A sustainable model of spiritual technology</li>
                </ul>
              </div>
              
              <div className="mt-10 text-center">
                <Button className="bg-spiritual-purple hover:bg-spiritual-purple/90 rounded-full">
                  Join Our Vision
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Vision;
