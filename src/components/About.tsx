import React from 'react';
import { CheckCircle, Award, Shield, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import aboutImage from '@/assets/about-building.jpg';

const About = () => {
  const navigate = useNavigate();

  const trustPoints = [
    { icon: CheckCircle, text: 'ISO Certified' },
    { icon: Award, text: 'Govt Approved' },
    { icon: Shield, text: '17+ Years Experience' },
    { icon: Users, text: 'Expert Team' }
  ];

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-foreground mb-6 transform-gpu perspective-1000 animate-float-3d bg-gradient-primary bg-clip-text text-transparent">
            <span>About</span> JOSH ENTERPRISES
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-rajdhani max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
            Your trusted partner in building protection from all Weathers and Maintenance </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-slide-in-left">
            <div className="relative overflow-hidden rounded-2xl transform-gpu perspective-1000 hover:rotate-y-12 transition-all duration-700 shadow-3d">
              <img
                src={aboutImage}
                alt="Josh Enterprises - Professional Building Services"
                className="w-full h-[400px] md:h-[500px] object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white animate-float-up">
                <p className="text-lg md:text-xl font-rajdhani font-semibold drop-shadow-lg">Building Excellence Since 2007</p>
              </div>
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-lg animate-float"></div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-rajdhani font-bold text-foreground mb-6 transform-gpu perspective-1000 animate-float-3d">
              Excellence in Every Project
            </h3>
            <p className="text-muted-foreground font-rajdhani text-lg md:text-xl mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              With over a decade of experience in the building protection from all weathers and maintenance industry, Josh Enterprises
              has established itself as a leading provider of comprehensive waterproofing, pest control,
              and painting services across major cities in South India.
            </p>

            <div className="space-y-6 mb-8">
              <div className="transform-gpu hover:translate-x-4 transition-transform duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h4 className="text-xl md:text-2xl font-orbitron font-semibold text-foreground mb-3 bg-gradient-primary bg-clip-text text-transparent">Our Mission</h4>
                <p className="text-muted-foreground font-rajdhani leading-relaxed text-lg">
                  To protect and enhance buildings through innovative, eco-friendly solutions
                  that ensure lasting durability and aesthetic appeal.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {trustPoints.map((point, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-background rounded-xl border border-border hover:border-primary transition-all duration-300 transform-gpu hover:scale-110 hover:rotate-y-12 shadow-3d animate-scale-in cursor-pointer group"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <point.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:animate-bounce transition-transform duration-300" />
                  <p className="text-sm font-rajdhani font-medium text-foreground group-hover:text-primary transition-colors">{point.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 animate-fade-in" style={{ animationDelay: '1s' }}>
              <button
                onClick={() => navigate('/contact')}
                className="bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300 px-8 py-4 rounded-lg font-rajdhani font-semibold text-primary-foreground animate-glow-pulse"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;