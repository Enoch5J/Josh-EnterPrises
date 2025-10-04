import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  useEffect(() => {
    // Update document title and meta tags for SEO
    document.title = 'Josh Enterprises - Waterproofing, Pest Control & Painting Services | Building Protection Experts';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Professional waterproofing, pest control & painting services by Josh Enterprises. 18+ years experience, ISO certified, govt approved. Serving across South Inida.'
      );
    }

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Josh Enterprises",
      "description": "Professional building protection services including waterproofing, pest control, and painting",
      "url": window.location.origin,
      "telephone": "+919840168401",
      "email": "joshenterpris@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Tamil Nadu",
        "addressLocality": "Chennai",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.0760",
        "longitude": "72.8777"
      },
      "openingHours": "Mo-Sa 08:00-19:00",
      "serviceArea": {
        "@type": "State",
        "name": "Andhra Pradesh, Karnataka, Kerala, Tamil Nadu, Telangana"
      },
      "services": [
        "Waterproofing Services",
        "Pest Control Services",
        "Painting Services",
        "Building Maintenance"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
      }
    };

    // Add structured data to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup structured data on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <WhyChooseUs />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  );
};

export default Index;
