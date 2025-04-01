
import React from 'react';
import { Heart, Globe, BookOpen } from 'lucide-react';
import FeatureCard from './FeatureCard';
import SpiritualQuote from './SpiritualQuote';

const VisionSection = () => {
  return (
    <section className="py-16 bg-spiritual-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Vision & Purpose</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're entering a new era — where human connection, spiritual healing, and intelligent technology come together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FeatureCard 
            title="Global Architecture" 
            description="Support for small, powerful groups — ten-person healing and learning circles across the world."
            icon={Globe}
          />
          <FeatureCard 
            title="Guided Journeys" 
            description="Each circle is guided by a human, an AI, or a co-hosted blend of both, creating sacred space."
            icon={BookOpen}
          />
          <FeatureCard 
            title="Universal Connections" 
            description="Cross religions, cultures, and languages — bringing people together to reflect, heal, and grow."
            icon={Heart}
          />
        </div>
        
        <SpiritualQuote 
          quote="Love, guidance, and transformation can reach every soul — when the human heart meets the intelligence of AI."
          attribution="Our Foundation Truth"
        />
      </div>
    </section>
  );
};

export default VisionSection;
