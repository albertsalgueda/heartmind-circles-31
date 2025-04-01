
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <nav className="py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-serif font-medium text-gradient">
          Universal Spiritualism
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
          <Button variant="outline" className="rounded-full border-spiritual-purple text-spiritual-purple hover:bg-spiritual-light">
            Join a Circle
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gradient-to-b from-white to-spiritual-gray">
              <div className="flex flex-col gap-6 mt-10">
                <NavLinks mobile />
                <Button className="rounded-full bg-spiritual-purple hover:bg-spiritual-purple/90">
                  Join a Circle
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const linkClass = mobile 
    ? "text-lg font-medium hover:text-spiritual-purple transition-colors" 
    : "text-sm font-medium hover:text-spiritual-purple transition-colors";
  
  return (
    <div className={`${mobile ? 'flex flex-col space-y-4' : 'flex space-x-6'}`}>
      <Link to="/" className={linkClass}>Home</Link>
      <Link to="/vision" className={linkClass}>Vision</Link>
      <Link to="/host-ai" className={linkClass}>Host AI</Link>
      <Link to="/circles" className={linkClass}>Sacred Circles</Link>
    </div>
  );
};

export default NavBar;
