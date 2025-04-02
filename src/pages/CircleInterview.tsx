
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { SendIcon, RefreshCw } from 'lucide-react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CircleInterview = () => {
  const navigate = useNavigate();
  const [chatStep, setChatStep] = useState(0);
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: 'Welcome to Universal Spiritualism. I\'m here to help find the perfect circle for your spiritual journey. Let\'s start with your name.'}
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [userResponses, setUserResponses] = useState<Record<string, string>>({});
  const [currentInput, setCurrentInput] = useState('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const questions = [
    'What spiritual traditions or practices resonate with you the most?',
    'What are you seeking most in your spiritual journey right now? (e.g., healing, connection, wisdom, purpose)',
    'Do you prefer structured practices or more intuitive approaches?',
    'What time of day do you feel most spiritually connected?',
    'Would you prefer a human facilitator, an AI facilitator, or a co-hosted circle?',
    'Is there a specific life challenge or transition you\'re currently navigating?',
    'How comfortable are you with sharing in group settings?',
    'What languages do you speak fluently?',
  ];

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    setChatMessages(prev => [...prev, {role, content}]);
  };

  const simulateTyping = async (message: string) => {
    setIsTyping(true);
    // Wait a realistic amount of time before showing the message
    await new Promise(resolve => setTimeout(resolve, 1000 + message.length * 10));
    addMessage('assistant', message);
    setIsTyping(false);
  };

  const handleUserResponse = () => {
    if (!currentInput.trim()) return;
    
    // Add user's message to chat
    addMessage('user', currentInput);
    
    // Store the answer
    setUserResponses(prev => ({
      ...prev,
      [`question_${chatStep}`]: currentInput
    }));
    
    // Clear the input
    setCurrentInput('');
    
    // If we have more questions, prepare the next one
    if (chatStep < questions.length) {
      simulateTyping(questions[chatStep]);
      setChatStep(chatStep + 1);
    } else {
      // If we've asked all questions, thank the user and direct to review
      simulateTyping("Thank you for sharing. Based on your responses, we'll find the perfect circle for you. I'll send you an email when we have a match. Is there anything else you'd like to add before we finalize?");
      setChatStep(chatStep + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserResponse();
    }
  };

  const handleFinalSubmit = async () => {
    // In a real implementation, you would submit all responses to your database
    console.log("Saving responses:", userResponses);
    
    // Simulate saving data
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsTyping(false);
    
    // Show success message
    toast.success("Your responses have been saved! We'll match you with the perfect circle soon.");
    
    // Navigate back to the circles page
    navigate('/circles');
  };

  const handleFormSubmit = (data: FormValues) => {
    // Store the initial form data
    setUserResponses(prev => ({
      ...prev,
      name: data.name,
      email: data.email,
      initial_message: data.message || ''
    }));
    
    // Start the interview
    simulateTyping(`Thank you, ${data.name}. Now I'll ask you a few questions to help find the right circle for you.`);
    simulateTyping(questions[0]);
    setChatStep(1);
  };

  const resetInterview = () => {
    setChatStep(0);
    setUserResponses({});
    setChatMessages([
      {role: 'assistant', content: 'Welcome to Universal Spiritualism. I\'m here to help find the perfect circle for your spiritual journey. Let\'s start with your name.'}
    ]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <NavBar />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-medium mb-6 text-center">
              Find Your Circle
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 text-center">
              Our AI guide will help match you with the perfect spiritual circle based on your journey, needs, and preferences.
            </p>
            
            {chatStep === 0 ? (
              <div className="bg-spiritual-gray/20 rounded-xl p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormDescription>
                            We'll use this to notify you when we find a match.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Initial Thoughts (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Share any initial thoughts about what you're looking for in a circle..."
                              {...field}
                              className="h-24"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full bg-spiritual-purple hover:bg-spiritual-purple/90 rounded-full">
                      Begin Interview
                    </Button>
                  </form>
                </Form>
              </div>
            ) : (
              <div className="bg-spiritual-gray/20 rounded-xl">
                <div className="p-6 max-h-[600px] overflow-y-auto flex flex-col gap-4">
                  {chatMessages.map((message, index) => (
                    <div 
                      key={index} 
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[80%] p-4 rounded-2xl ${
                          message.role === 'user' 
                            ? 'bg-spiritual-purple text-white rounded-br-none' 
                            : 'bg-white border border-spiritual-light rounded-bl-none'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] p-4 rounded-2xl bg-white border border-spiritual-light rounded-bl-none">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-spiritual-purple/60 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 rounded-full bg-spiritual-purple/60 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          <div className="w-2 h-2 rounded-full bg-spiritual-purple/60 animate-bounce" style={{ animationDelay: '600ms' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="border-t border-spiritual-light p-4">
                  {chatStep <= questions.length ? (
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Type your response..."
                        value={currentInput}
                        onChange={(e) => setCurrentInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 resize-none"
                        rows={1}
                      />
                      <Button 
                        className="bg-spiritual-purple hover:bg-spiritual-purple/90 rounded-full h-10 w-10 p-0 flex items-center justify-center"
                        onClick={handleUserResponse}
                        disabled={isTyping || !currentInput.trim()}
                      >
                        <SendIcon className="h-5 w-5" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex justify-between">
                      <Button 
                        variant="outline" 
                        className="rounded-full" 
                        onClick={resetInterview}
                      >
                        <RefreshCw className="mr-2 h-4 w-4" /> Start Over
                      </Button>
                      <Button 
                        className="bg-spiritual-purple hover:bg-spiritual-purple/90 rounded-full"
                        onClick={handleFinalSubmit}
                      >
                        Complete Matching Process
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CircleInterview;
