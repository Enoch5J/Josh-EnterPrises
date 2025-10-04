import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const services = [
    'Waterproofing Solutions',
    'Pest Control Services',
    'Painting Services',
    'Building Maintenance',
    'Emergency Repairs'
  ];

  const serviceAreas = [
    'South India',
  
    'Bangalore',
    'Chennai',
    'Hyderabad'
  ];

  const quickLinks = [
    'About Us',
    'Our Services', 
    'Portfolio',
    'Contact Us',
    'Get Quote'
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-surface border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-orbitron font-bold text-primary-foreground">J</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-orbitron font-bold text-foreground">
                  Josh Enterprises
                </span>
                <span className="text-sm text-muted-foreground font-rajdhani">
                  Building Protection Experts
                </span>
              </div>
            </div>
            
            <p className="text-muted-foreground font-rajdhani leading-relaxed mb-6">
              Your trusted partner for comprehensive building protection services. 
              We deliver quality waterproofing, pest control, and painting solutions 
              with 10+ years of industry expertise.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-rajdhani">+91 98401 68401</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="font-rajdhani">joshenterpris@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-rajdhani">Serving major cities across south India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-orbitron font-bold text-foreground mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 font-rajdhani"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-orbitron font-bold text-foreground mb-6">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreas.map((area, index) => (
                <li key={index} className="text-muted-foreground font-rajdhani">
                  {area}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-lg font-orbitron font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 font-rajdhani text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Media & CTA */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-orbitron font-bold text-foreground mb-6">
              Connect With Us
            </h3>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-8">
              <a 
                href="#" 
                className="p-3 bg-surface border border-border rounded-lg hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="p-3 bg-surface border border-border rounded-lg hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
             
              <a 
                href="https://wa.me/919840168401" 
                className="p-3 bg-surface border border-border rounded-lg hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-surface rounded-xl p-6 border border-border">
              <h4 className="text-lg font-orbitron font-semibold text-foreground mb-3">
                Get Free Tips
              </h4>
              <p className="text-sm text-muted-foreground font-rajdhani mb-4">
                Subscribe for building protection tips and maintenance guides
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-background border border-border rounded text-sm font-rajdhani focus:ring-1 focus:ring-primary focus:border-primary w-full"
                />
                <button className="bg-gradient-primary px-4 py-2 rounded text-primary-foreground text-sm font-rajdhani font-semibold hover:shadow-glow transition-all duration-300 whitespace-nowrap w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground font-rajdhani text-sm">
                © 2024 Josh Enterprises. All rights reserved. | 
                <span className="text-primary"> ISO Certified</span> | 
                <span className="text-primary"> Govt. Approved</span>
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-rajdhani">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-rajdhani">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-rajdhani">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;