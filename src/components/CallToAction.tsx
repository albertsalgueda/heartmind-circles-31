
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-spiritual-purple/10 to-spiritual-blue/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">The Future Calls</h2>
        <p className="text-xl md:text-2xl font-serif max-w-2xl mx-auto mb-8">
          Envision a world where every soul finds its circle, every tradition finds its voice, every heart finds its path home.
        </p>
        <p className="text-lg text-muted-foreground italic mb-10 max-w-xl mx-auto">
          "This is Universal Spiritualism — Where presence scales infinitely. Where technology serves the sacred. Where humanity evolves together."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-spiritual-purple hover:bg-spiritual-purple/90 rounded-full">
            Join the Movement
          </Button>
          <Button variant="outline" className="rounded-full border-spiritual-purple text-spiritual-purple hover:bg-spiritual-light">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
