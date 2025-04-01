
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import CircleAnimation from '@/components/CircleAnimation';

const Circles = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6">
                Sacred Circles
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the transformative power of intimate healing circles, where ancient wisdom meets modern technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif text-2xl mb-4">The Sacred Circle Structure</h2>
                <p className="text-muted-foreground mb-6">
                  Each group of ten is thoughtfully matched through a combination of spiritual resonance, life challenges, cultural backgrounds, and energetic compatibility.
                </p>
                <p className="text-muted-foreground mb-6">
                  Circles flow organically between deep sharing and sacred silence, guided meditation and free expression, traditional ceremony and spontaneous healing. The Host AI adapts to the moment — supporting what the group needs most.
                </p>
                <div className="space-y-4 mb-8">
                  <h3 className="font-medium">What to Expect in a Circle:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• A safe, confidential space for authentic sharing</li>
                    <li>• Gentle guidance from experienced facilitators (human or AI)</li>
                    <li>• Connection with others on similar spiritual journeys</li>
                    <li>• Personalized practices for your unique path</li>
                    <li>• Transformative experiences in a supportive community</li>
                  </ul>
                </div>
                <Button className="bg-spiritual-purple hover:bg-spiritual-purple/90 rounded-full">
                  Join a Circle
                </Button>
              </div>
              <div className="flex justify-center">
                <CircleAnimation className="max-w-sm" />
              </div>
            </div>
            
            <div className="bg-spiritual-gray/30 rounded-xl p-8 md:p-12 mb-16">
              <h2 className="font-serif text-2xl mb-6 text-center">Circle Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <CircleType 
                  title="Human-Guided" 
                  description="Led by trained facilitators with deep wisdom and experience in holding sacred space."
                />
                <CircleType 
                  title="AI-Guided" 
                  description="Facilitated by our advanced Host AI, offering consistent presence and drawing from diverse wisdom traditions."
                />
                <CircleType 
                  title="Co-Hosted" 
                  description="The perfect blend of human intuition and AI consistency, creating a rich, multidimensional experience."
                />
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="font-serif text-2xl mb-4">Begin Your Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Whether you're seeking healing, connection, or spiritual growth, there's a circle waiting for you. Join us in this pioneering approach to spiritual community.
              </p>
              <Button className="bg-spiritual-purple hover:bg-spiritual-purple/90 rounded-full">
                Find Your Circle
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface CircleTypeProps {
  title: string;
  description: string;
}

const CircleType: React.FC<CircleTypeProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-spiritual-light">
      <h3 className="font-serif text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Circles;
