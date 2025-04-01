
import React from 'react';
import { cn } from '@/lib/utils';

interface CircleAnimationProps {
  className?: string;
}

const CircleAnimation: React.FC<CircleAnimationProps> = ({ className }) => {
  return (
    <div className={cn("relative w-full max-w-lg mx-auto", className)}>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-spiritual-purple/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-spiritual-lilac rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-spiritual-blue/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-4000"></div>
      <div className="relative">
        <div className="border border-spiritual-lilac/30 rounded-full h-64 w-64 mx-auto flex items-center justify-center animate-circle-expand">
          <div className="border border-spiritual-purple/50 rounded-full h-48 w-48 flex items-center justify-center animate-circle-expand animation-delay-1000">
            <div className="border border-spiritual-blue/50 rounded-full h-32 w-32 flex items-center justify-center animate-circle-expand animation-delay-2000">
              <div className="bg-white rounded-full h-16 w-16 flex items-center justify-center shadow-md">
                <span className="font-serif text-gradient font-medium">Unity</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleAnimation;
