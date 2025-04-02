
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CircleSection = () => {
  return (
    <section className="py-16 bg-spiritual-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">The Sacred Circle Structure</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each group of ten is thoughtfully matched to create a harmonious healing environment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl border border-spiritual-light p-6 shadow-sm">
            <h3 className="font-serif text-xl mb-4">Thoughtful Matching</h3>
            <ul className="space-y-3">
              <CirclePoint>Spiritual resonance and shared values</CirclePoint>
              <CirclePoint>Life challenges and growth intentions</CirclePoint>
              <CirclePoint>Cultural and linguistic harmony</CirclePoint>
              <CirclePoint>Emotional and energetic compatibility</CirclePoint>
            </ul>
          </div>
          
          <div className="bg-white rounded-xl border border-spiritual-light p-6 shadow-sm">
            <h3 className="font-serif text-xl mb-4">Organic Flow</h3>
            <ul className="space-y-3">
              <CirclePoint>Deep sharing and sacred silence</CirclePoint>
              <CirclePoint>Guided meditation and free expression</CirclePoint>
              <CirclePoint>Traditional ceremony and spontaneous healing</CirclePoint>
              <CirclePoint>Adaptive support for what the group needs most</CirclePoint>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join a circle and experience the transformative power of connection in a sacred, supportive environment guided by both human wisdom and artificial intelligence.
          </p>
          <Link to="/circle-interview">
            <Button className="bg-spiritual-purple hover:bg-spiritual-purple/90 rounded-full">
              Find Your Circle
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

interface CirclePointProps {
  children: React.ReactNode;
}

const CirclePoint: React.FC<CirclePointProps> = ({ children }) => {
  return (
    <li className="flex items-start">
      <div className="h-6 w-6 rounded-full bg-spiritual-light flex items-center justify-center mr-3 mt-0.5">
        <span className="text-spiritual-purple text-sm">•</span>
      </div>
      <span className="text-muted-foreground">{children}</span>
    </li>
  );
};

export default CircleSection;
