import React, { useState } from 'react';
import { MessageCircle, X, Phone } from 'lucide-react';

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "919840168401"; // Josh Enterprises WhatsApp number
  const defaultMessage = "Hi! I'm interested in Josh Enterprises' building protection services. I'd like to get a quote.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const openPhone = () => {
    window.open(`tel:+${whatsappNumber}`, '_self');
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-primary hover:shadow-glow p-4 rounded-full text-primary-foreground animate-glow-pulse transition-all duration-300 hover:scale-110"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>

        {/* Expanded Menu */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-2 animate-scale-in">
            <div className="bg-surface rounded-xl border border-border shadow-hard p-4 min-w-[280px]">
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-border">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-lg font-orbitron font-bold text-primary-foreground">J</span>
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-foreground">Josh Enterprises</h3>
                  <p className="text-sm text-muted-foreground font-rajdhani">Building Protection Experts</p>
                </div>
              </div>

              {/* Quick Message */}
              <div className="mb-4">
                <p className="text-sm text-muted-foreground font-rajdhani leading-relaxed">
                  👋 Hi there! Need help with waterproofing, pest control, or painting services?
                  We're here to help!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-center space-x-2 bg-success hover:bg-success/90 text-white px-4 py-3 rounded-lg transition-all duration-300 font-rajdhani font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>

                <button
                  onClick={openPhone}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-primary hover:shadow-glow text-primary-foreground px-4 py-3 rounded-lg transition-all duration-300 font-rajdhani font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </button>
              </div>

              {/* Quick Info */}
              <div className="mt-4 pt-4 border-t border-border text-center">
                <p className="text-xs text-muted-foreground font-rajdhani">
                  🕒 Available: Mon-Sat 8AM-7PM
                </p>
                <p className="text-xs text-muted-foreground font-rajdhani">
                  🚨 Emergency support: 24/7
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default FloatingWhatsApp;