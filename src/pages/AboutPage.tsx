import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ParticleBackground from '@/components/ParticleBackground';
import About from '@/components/About';

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About Us - Josh Enterprises | Building Protection Experts Since 2007';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Learn about Josh Enterprises - 18+ years of excellence in waterproofing, pest control & painting services. ISO certified, govt approved, expert team serving major cities across India.'
      );
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="pt-20">
          <About />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default AboutPage;
