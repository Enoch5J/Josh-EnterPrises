import React, { useState } from 'react';
import { Droplets, Bug, Brush, Shield, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import waterproofingImage from '@/assets/hero-waterproofing.jpg';
import pestControlImage from '@/assets/pest-control.jpg';
import paintingImage from '@/assets/painting-services.jpg';

const Services = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 0,
      title: 'Waterproofing Technology Works',
      icon: Droplets,
      image: waterproofingImage,
      description: 'Advanced waterproofing solutions to protect your building from water damage.',
      technologies: [
        { icon: Shield, title: 'Membrane Waterproofing', desc: 'High-grade membrane systems for long-lasting protection' },
        { icon: Star, title: 'Brush Coatings', desc: 'create uniform and fine lines on surfaces and metal ' },
        { icon: Star, title: 'Spray', desc: 'Using rollers, or sprayers depending on the roof size and texture' },
        { icon: Zap, title: 'Crystalline Technology', desc: 'Self-healing concrete waterproofing solutions' },
        { icon: Star, title: 'Injection Grouting', desc: 'Precision crack sealing and structural repairs' },
        { icon: Zap, title: 'Epoxy Flooring', desc: 'water-dissolved, limited flexible, UV-resistant, and durable coating' }

      ]
    },
    {
      id: 1,
      title: 'Pest Control Technology Works',
      icon: Bug,
      image: pestControlImage,
      description: 'Eco-friendly pest control solutions using advanced technology and safe methods.',
      technologies: [
        { icon: Shield, title: 'Integrated Pest Management', desc: 'Comprehensive pest prevention and control strategies' },
        { icon: Zap, title: 'Bio-Safe Treatments', desc: 'Environmentally friendly pest control solutions' },
        { icon: Star, title: 'Smart Monitoring', desc: '24/7 pest activity monitoring and alerts' }
      ]
    },
    {
      id: 2,
      title: 'Painting Technology Works',
      icon: Brush,
      image: paintingImage,
      description: 'Premium painting services with weather-resistant and eco-friendly coatings.',
      technologies: [
        { icon: Shield, title: 'Weather Shield Coating', desc: 'Advanced weather-resistant paint systems' },
        { icon: Zap, title: 'Nano-Technology Paint', desc: 'Self-cleaning and anti-bacterial paint solutions' },
        { icon: Star, title: 'Thermal Insulation', desc: 'Energy-efficient thermal barrier coatings' }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6 animate-text-glow-pulse">
            Our <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Cutting-edge technology meets expert craftsmanship in every service we provide
          </p>
        </div>

        {/* Service Tabs - Single Row */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`group relative overflow-hidden px-8 py-4 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105 ${activeService === index
                ? 'bg-gradient-primary border-primary shadow-glow text-primary-foreground animate-pulse'
                : 'bg-surface/50 border-border hover:border-primary/70 text-foreground backdrop-blur-sm'
                }`}
            >
              <div className="flex items-center space-x-3 relative z-10">
                <div className={`p-2 rounded-full transition-all duration-300 ${activeService === index ? 'bg-primary-foreground/20 rotate-12' : 'bg-primary/20 group-hover:rotate-12'
                  }`}>
                  <service.icon className={`w-6 h-6 ${activeService === index ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                </div>
                <span className="font-orbitron font-bold text-lg">
                  {service.title.split(' ')[0]}
                </span>
              </div>
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 transform transition-transform duration-500 ${activeService === index ? 'scale-100' : 'scale-0 group-hover:scale-100'
                }`} />
            </button>
          ))}
        </div>

        {/* Service Details - Full Width */}
        <div className="w-full">
          <div className="relative bg-surface rounded-2xl overflow-hidden border border-border animate-scale-in">
            {/* Service Image */}
            <div className="h-64 md:h-80 relative overflow-hidden">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground mb-2 animate-text-shimmer">
                  {services[activeService].title}
                </h3>
                <p className="text-muted-foreground font-rajdhani text-lg">
                  {services[activeService].description}
                </p>
              </div>
            </div>

            {/* Technology Cards */}
            <div className="p-6">
              <h4 className="text-xl font-orbitron font-bold text-foreground mb-6 animate-text-glow-pulse">
                Advanced Technologies
              </h4>
              <div className="grid gap-4">
                {services[activeService].technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-start space-x-4 p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-soft animate-scale-in"
                    style={{ animationDelay: `${techIndex * 0.1}s` }}
                  >
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0 group-hover:rotate-6">
                      <tech.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-orbitron font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                        {tech.title}
                      </h5>
                      <p className="text-muted-foreground font-rajdhani text-sm">
                        {tech.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300 px-8 py-4 rounded-lg font-rajdhani font-semibold text-primary-foreground w-full md:w-auto"
                >
                  Get Quote for {services[activeService].title.split(' ')[0]}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;