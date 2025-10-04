import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) return;

      // Create an interactive map with Ambattur, Chennai location
      const mapElement = mapRef.current;
      mapElement.innerHTML = `
        <div class="relative w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 rounded-xl overflow-hidden shadow-3d">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124442.87569891486!2d80.09654545!3d13.098675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f446a1c3187%3A0x659b37b8db1b2ddd!2sAmbattur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1697123456789!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style="border:0;border-radius:12px;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            class="animate-fade-in">
          </iframe>
          <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-xl animate-slide-in-left">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div>
                <h4 class="font-orbitron font-bold text-foreground text-sm">Josh Enterprises</h4>
                <p class="text-xs text-muted-foreground font-rajdhani">Ambattur, Chennai</p>
              </div>
            </div>
          </div>
        </div>
      `;
    };

    initMap();
  }, []);

  return (
    <div className="bg-surface rounded-2xl p-4 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-orbitron font-semibold text-foreground flex items-center">
          <MapPin className="w-5 h-5 text-primary mr-2" />
          Our Location
        </h4>
        <button 
          onClick={() => window.open('https://www.google.com/maps/place/Ambattur,+Chennai,+Tamil+Nadu/@13.098675,80.0965455,12z', '_blank')}
          className="text-sm text-primary hover:text-primary/80 font-rajdhani font-medium transition-colors"
        >
          View Larger Map
        </button>
      </div>
      <div ref={mapRef} className="h-64 rounded-xl" />
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground font-rajdhani">
          Serving customers across Chennai and surrounding areas
        </p>
      </div>
    </div>
  );
};

export default GoogleMap;