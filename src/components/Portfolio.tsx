import React, { useState, useEffect } from 'react';
import { ExternalLink, Calendar, MapPin, CheckCircle, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [imageModal, setImageModal] = useState<{ isOpen: boolean; image: string; title: string; type: string }>({
    isOpen: false,
    image: '',
    title: '',
    type: ''
  });

  const projects = [
    {
      id: 1,
      title: 'RESIDENTIAL WATERPROOFING',
      category: 'Waterproofing',
      location: 'TamilNadu, Chennai',
      duration: '3 Days',
      description: 'Advanced crystalline waterproofing technology',
      stats: [
        { label: '5 DAYS', icon: '📅' },
        { label: '100% SUCCESS', icon: '💯' },
        { label: '10 YEAR WARRANTY', icon: '🛡️' }
      ],
      beforeImage: '/lovable-uploads/bef1.jpg',
      afterImage: '/lovable-uploads/aft1.jpg'
    },
    {
      id: 2,
      title: 'HEAT PROOFING & TERMITE CONTROL',
      category: 'Heat Proofing',
      location: 'Tamilnadu,Chennai',
      duration: '3 Days',
      description: 'Complete Heat Proofing with eco-friendly treatment',
      stats: [
        { label: '3 DAYS', icon: '📅' },
        { label: '99% ', icon: '🎯' },
        { label: '5 YEAR PROTECTION', icon: '🛡️' }
      ],
      beforeImage: '/lovable-uploads/bef2.jpg',
      afterImage: '/lovable-uploads/aft2.jpg'
    },
    {
      id: 3,
      title: 'WATER PROOFING',
      category: 'WaterProofing',
      location: 'Chennai,Tamilnadu',
      duration: '7 Days',
      description: 'Weather-resistant coating application for manufacturing unit extending building life',
      stats: [
        { label: '7 DAYS', icon: '📅' },
        { label: '15+ YEARS', icon: '⏳' },
        { label: 'WEATHER PROOF', icon: '🌧️' }
      ],
      beforeImage: '/lovable-uploads/befff.jpeg',
      afterImage: '/lovable-uploads/aft4.jpg'
    },
    {
      id: 4,
      title: 'HOUSE PROTECTION',
      category: 'All Services',
      location: 'Chennai,Tamilnadu',
      duration: '15 Days',
      description: 'Complete protection package',
      stats: [
        { label: '15 DAYS', icon: '📅' },
        { label: 'ISO STANDARD', icon: '⭐' },
        { label: 'PROTECTION', icon: '🦠' }
      ],
      beforeImage: '/lovable-uploads/triangle house.jpg',
      afterImage: '/lovable-uploads/red1.jpg'
    },
    {
      id: 4,
      title: 'HOUSE PROTECTION',
      category: 'All Services',
      location: 'Chennai,Tamilnadu',
      duration: '15 Days',
      description: 'Complete protection package',
      stats: [
        { label: '15 DAYS', icon: '📅' },
        { label: 'ISO STANDARD', icon: '⭐' },
        { label: 'PROTECTION', icon: '🦠' }
      ],
      beforeImage: '/lovable-uploads/beff.jpeg',
      afterImage: '/lovable-uploads/aftt.jpeg'
    }
  ];

  const testimonials = [
    {
      name: 'COGNIZANT Pvt Ltd',
      company: 'Chennai',
      text: 'Josh Enterprises transformed our facility with their comprehensive protection services.',
      rating: 5
    },
    {
      name: 'Sri Vari Solar Panel plant',
      company: 'Andhra Pradesh',
      text: 'Josh Enterprises transformed our facility with their comprehensive protection services.',
      rating: 5
    },
    {
      name: 'Jummy Pharmaceuticals',
      company: 'Chennai',
      text: 'Josh Enterprises transformed our facility with their comprehensive protection services.',
      rating: 5
    },
    {
      name: 'Autotech pvt Ltd.',
      company: 'Chennai',
      text: 'Professional team, quality materials, and excellent after-service support.',
      rating: 5
    },
    {
      name: 'Poclain Hydraulics',
      company: 'Pondicherry',
      text: 'Josh Enterprises transformed our facility with their comprehensive protection services.',
      rating: 5
    },
    {
      name: 'Stanpack India Ltd',
      company: 'Pondicherry',
      text: 'Josh Enterprises transformed our facility with their comprehensive protection services.',
      rating: 5
    },
    {
      name: 'Cinema Theatres & Mall',
      company: 'Andhra Pradesh',
      text: 'Josh Enterprises transformed our facility with their comprehensive protection services.',
      rating: 5
    },
    {
      name: 'Mahendra World City',
      company: 'SP Kovil (Near Chennai)',
      text: 'Professional team, quality materials, and excellent after-service support. Great value for money.',
      rating: 5
    }
  ];

  useEffect(() => {
    const projectInterval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 2000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => {
      clearInterval(projectInterval);
      clearInterval(testimonialInterval);
    };
  }, [projects.length, testimonials.length]);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Our <span className="text-primary">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Discover how we've transformed buildings and exceeded expectations
          </p>
        </div>

        {/* Project Gallery - Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl">
            <div className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="group bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-scale-in mx-4">
                    {/* Before/After Image Comparison */}
                    <div className="relative h-80 sm:h-96">
                      <div className="grid grid-cols-2 h-full">
                        {/* Before Image */}
                        <div className="relative overflow-hidden group cursor-pointer" onClick={() => setImageModal({ isOpen: true, image: project.beforeImage, title: project.title, type: 'Before' })}>
                          <img
                            src={project.beforeImage}
                            alt={`${project.title} - Before`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <ZoomIn className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-rajdhani font-semibold animate-pulse">
                              BEFORE
                            </span>
                          </div>
                        </div>

                        {/* After Image */}
                        <div className="relative overflow-hidden group cursor-pointer" onClick={() => setImageModal({ isOpen: true, image: project.afterImage, title: project.title, type: 'After' })}>
                          <img
                            src={project.afterImage}
                            alt={`${project.title} - After`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <ZoomIn className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-rajdhani font-semibold animate-pulse">
                              AFTER
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Center Plus Icon */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center border-4 border-surface shadow-xl animate-pulse">
                          <span className="text-primary-foreground text-2xl font-bold">+</span>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-rajdhani font-semibold shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-primary mb-3 uppercase tracking-wide">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground font-rajdhani mb-6 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {project.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="text-center p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-border/50 hover:from-primary/20 hover:to-primary/10 transition-all duration-300">
                            <div className="text-lg mb-1">{stat.icon}</div>
                            <div className="text-xs sm:text-sm font-rajdhani font-semibold text-primary">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-surface/80 hover:bg-surface border border-border hover:border-primary/50 rounded-full p-3 transition-all duration-300 hover:shadow-glow backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={() => setCurrentProject((prev) => (prev + 1) % projects.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-surface/80 hover:bg-surface border border-border hover:border-primary/50 rounded-full p-3 transition-all duration-300 hover:shadow-glow backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentProject === index
                  ? 'bg-primary shadow-glow'
                  : 'bg-border hover:bg-primary/50'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-16">
          <h3 className="text-3xl font-orbitron font-bold text-center text-foreground mb-12 animate-fade-in">
            What Our <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-gradient-to-br from-surface to-surface/50 rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-glow backdrop-blur-sm">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-primary text-2xl animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                        ))}
                      </div>
                      <p className="text-muted-foreground font-rajdhani mb-6 italic text-lg leading-relaxed text-center">
                        "{testimonial.text}"
                      </p>
                      <div className="border-t border-border pt-6 text-center">
                        <div className="font-orbitron font-bold text-foreground text-xl mb-2">{testimonial.name}</div>
                        <div className="text-primary font-rajdhani font-semibold">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index
                    ? 'bg-primary shadow-glow'
                    : 'bg-border hover:bg-primary/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-orbitron font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-muted-foreground font-rajdhani mb-8">
            We Assure that we can protect and enhance your building
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300 px-8 py-4 rounded-lg font-rajdhani font-semibold text-primary-foreground"
          >
            Start Your Project Today
          </button>
        </div>

        {/* Image Modal */}
        {imageModal.isOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setImageModal({ isOpen: false, image: '', title: '', type: '' })}
                className="absolute top-4 right-4 z-10 bg-surface/80 hover:bg-surface border border-border hover:border-primary/50 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
              <div className="bg-surface rounded-2xl overflow-hidden border border-border animate-scale-in">
                <div className="relative">
                  <img
                    src={imageModal.image}
                    alt={`${imageModal.title} - ${imageModal.type}`}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-surface/90 to-transparent p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-orbitron font-bold text-foreground mb-1">
                          {imageModal.title}
                        </h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-rajdhani font-semibold ${imageModal.type === 'Before'
                          ? 'bg-destructive text-destructive-foreground'
                          : 'bg-success text-success-foreground'
                          }`}>
                          {imageModal.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;