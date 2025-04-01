
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-serif font-medium mb-4">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8">
            The spiritual path you seek is not here, but there are many others to explore.
          </p>
          <Button className="bg-spiritual-purple hover:bg-spiritual-purple/90 rounded-full">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
