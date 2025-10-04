import React from 'react';
import { ArrowRight, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AnimatedText from './AnimatedText';
import heroImage from '@/assets/hero-waterproofing.jpg';

const Hero = () => {
  const navigate = useNavigate();

  const taglines = [
    "Waterproofing.",
    "Pest Control.",
    "Painting Services.",
    "Protect Buildings from Pigeon.",
    "Interior and Exterior Protection.",
    "Your Building's First Line of Defense.",

  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-lg animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/20 rounded-lg animate-float" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold text-foreground mb-12 leading-tight mt-8">
            <span className="bg-gradient-primary bg-clip-text text-transparent animate-blink drop-shadow-2xl">
              JOSH ENTERPRISES
            </span>
          </h1>
        </div>

        <div className="h-24 md:h-32 flex items-center justify-center mb-12">
          <AnimatedText
            texts={taglines}
            interval={3000}
            className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-rajdhani font-black text-foreground drop-shadow-2xl transform-gpu perspective-1000 animate-float-3d"
          />
        </div>

        <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={() => window.open('tel:+919876543210', '_self')}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300 font-rajdhani font-semibold text-lg px-8 py-6 animate-glow-pulse"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Now
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>

            <Button
              onClick={() => navigate('/contact')}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300 font-rajdhani font-semibold text-lg px-8 py-6"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Book Service
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary mb-2">17+</div>
            <div className="text-sm md:text-base text-muted-foreground font-rajdhani">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary mb-2">1000+</div>
            <div className="text-sm md:text-base text-muted-foreground font-rajdhani">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary mb-2">99%</div>
            <div className="text-sm md:text-base text-muted-foreground font-rajdhani">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-orbitron font-bold text-primary mb-2">24/7</div>
            <div className="text-sm md:text-base text-muted-foreground font-rajdhani">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;