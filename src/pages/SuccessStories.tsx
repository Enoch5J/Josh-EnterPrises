import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ParticleBackground from '@/components/ParticleBackground';
import Portfolio from '@/components/Portfolio';

const SuccessStories = () => {
  useEffect(() => {
    document.title = 'Success Stories & Client Testimonials - Josh Enterprises';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Discover Josh Enterprises success stories and client testimonials. See our completed waterproofing, pest control & painting projects across South India.'
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
          <Portfolio />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default SuccessStories;
