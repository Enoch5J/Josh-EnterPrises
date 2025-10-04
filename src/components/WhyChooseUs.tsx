import React, { useEffect, useState } from 'react';
import { Users, Leaf, DollarSign, Shield, Clock, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: Users,
      title: 'Experienced Professionals',
      description: '10+ years of expertise in building protection services'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly & Safe',
      description: 'Environmentally responsible solutions that are safe for your family'
    },
    {
      icon: DollarSign,
      title: 'Affordable Packages',
      description: 'Competitive pricing without compromising on quality'
    },
    {
      icon: Shield,
      title: 'Warranty Provided',
      description: 'Comprehensive warranty on all our services and materials'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for all your needs'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'ISO certified processes ensuring highest quality standards'
    },
    {
      icon: Award,
      title: 'Material Excellence', // Dr.FIXIT, Nerolac 
      // //Bostick, zydex ,fosroc and Asian paints, roff
      description: 'Top quality,durable materials for long-lasting protection '
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6 animate-text-glow-pulse">
            Why Choose <span className="text-primary bg-gradient-primary bg-clip-text text-transparent animate-text-shimmer">Josh Enterprises?</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Experience the difference that quality, reliability, and expertise make
          </p>
        </div>

        {/* Features Carousel */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="group bg-surface rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-glow mx-auto max-w-md animate-scale-in">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-6 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mb-6 group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-500 group-hover:rotate-12 transform shadow-lg">
                      <feature.icon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 animate-text-glow-pulse">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-rajdhani leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'bg-primary shadow-glow'
                    : 'bg-border hover:bg-primary/50'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-surface rounded-2xl p-8 border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-4">
              Ready to Protect Your Building?
            </h3>
            <p className="text-lg text-muted-foreground font-rajdhani mb-8">
              Join hundreds of satisfied customers who trust Josh Enterprises for their building protection needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('tel:+919840168401', '_self')}
                className="bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300 px-8 py-4 rounded-lg font-rajdhani font-semibold text-primary-foreground"
              >
                Call Now for Free Quote
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300 px-8 py-4 rounded-lg font-rajdhani font-semibold"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;