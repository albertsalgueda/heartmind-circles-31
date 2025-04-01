
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon,
  className 
}) => {
  return (
    <div className={cn(
      "bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-spiritual-light hover:border-spiritual-lilac transition-all duration-300",
      "flex flex-col items-center text-center",
      className
    )}>
      <div className="h-12 w-12 rounded-full bg-spiritual-light flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-spiritual-purple" />
      </div>
      <h3 className="text-lg font-serif mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
