
import React from 'react';
import { cn } from '@/lib/utils';

interface SpiritualQuoteProps {
  quote: string;
  attribution?: string;
  className?: string;
}

const SpiritualQuote: React.FC<SpiritualQuoteProps> = ({ 
  quote, 
  attribution,
  className 
}) => {
  return (
    <blockquote className={cn(
      "bg-spiritual-gray/50 backdrop-blur-sm p-8 rounded-xl border-l-4 border-spiritual-purple",
      "font-serif text-lg md:text-xl italic max-w-prose mx-auto my-8",
      className
    )}>
      <p className="mb-4">{quote}</p>
      {attribution && (
        <footer className="text-right text-sm text-muted-foreground">— {attribution}</footer>
      )}
    </blockquote>
  );
};

export default SpiritualQuote;
