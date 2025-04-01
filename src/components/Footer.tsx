
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-spiritual-light">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-medium text-gradient">Universal Spiritualism</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              A revolutionary framework where technology amplifies, rather than replaces, the sacred human connection.
            </p>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">Learn</h4>
              <ul className="space-y-2">
                <li><Link to="/vision" className="text-sm text-muted-foreground hover:text-spiritual-purple">Our Vision</Link></li>
                <li><Link to="/host-ai" className="text-sm text-muted-foreground hover:text-spiritual-purple">Host AI</Link></li>
                <li><Link to="/circles" className="text-sm text-muted-foreground hover:text-spiritual-purple">Sacred Circles</Link></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Join</h4>
              <ul className="space-y-2">
                <li><Link to="/join" className="text-sm text-muted-foreground hover:text-spiritual-purple">Find a Circle</Link></li>
                <li><Link to="/become-host" className="text-sm text-muted-foreground hover:text-spiritual-purple">Become a Host</Link></li>
                <li><Link to="/training" className="text-sm text-muted-foreground hover:text-spiritual-purple">Training</Link></li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Connect</h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-spiritual-purple">Contact</Link></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-spiritual-purple">Newsletter</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-spiritual-purple">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-spiritual-light flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© 2025 Spiritual General Intelligence Initiative</p>
          <p className="flex items-center mt-2 md:mt-0">
            Created with <Heart className="h-4 w-4 mx-1 text-spiritual-purple" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
