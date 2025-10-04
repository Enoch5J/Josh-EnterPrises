import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ParticleBackground from '@/components/ParticleBackground';
import Contact from '@/components/Contact';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - Josh Enterprises | Get Free Consultation & Quote';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Contact Josh Enterprises for professional waterproofing, pest control & painting services. Free consultation & quote. Available in South India areas. Call +91 98401 68401.'
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
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default ContactPage;
