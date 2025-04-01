
import React from 'react';
import { Button } from '@/components/ui/button';
import CircleAnimation from './CircleAnimation';

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8 mb-10 lg:mb-0">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 animate-fade-in">
              A New Dawn of <span className="text-gradient">Spiritual Connection</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in">
              We stand at the threshold of an extraordinary convergence — where ancient wisdom meets cutting-edge technology, where spiritual traditions find common ground through digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <Button className="bg-spiritual-purple hover:bg-spiritual-purple/90 rounded-full">
                Join a Circle
              </Button>
              <Button variant="outline" className="rounded-full border-spiritual-purple text-spiritual-purple hover:bg-spiritual-light">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <CircleAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
