import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import GoogleMap from './GoogleMap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    'Waterproofing Services',
    'Pest Control Services',
    'Painting Services',
    'Complete Building Protection',
    'AMC(Annual Maintainance Contract)',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll contact you within 24 hours for a free consultation.",
    });

    setFormData({
      name: '',
      phone: '',
      service: '',
      location: '',
      message: ''
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-2xl mx-auto">
            Ready to protect your building? Contact us for a free consultation and quote
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-fade-in-left">
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground font-rajdhani">+91 98401 68401</p>
                    <p className="text-muted-foreground font-rajdhani">+91 90943 34334</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground font-rajdhani">joshenterpris@gmail.com</p>

                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-foreground mb-1">Service Areas</h4>
                    <p className="text-muted-foreground font-rajdhani">South India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground font-rajdhani">Monday - Saturday: 8:00 AM - 7:00 PM</p>
                    <p className="text-muted-foreground font-rajdhani">Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={() => window.open('tel:+919840168401', '_self')}
                    className="bg-gradient-primary hover:shadow-glow font-rajdhani font-semibold"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    onClick={() => window.open('https://wa.me/919840168401?text=Hi, I want a quote for building protection services.', '_blank')}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-rajdhani font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8">
              <GoogleMap />
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-right">
            <div className="bg-surface rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-orbitron font-bold text-foreground mb-8">
                Request Free Consultation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground font-rajdhani font-medium mb-2">
                    Full Name 
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground font-rajdhani"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-foreground font-rajdhani font-medium mb-2">
                    Phone Number 
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground font-rajdhani"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-foreground font-rajdhani font-medium mb-2">
                    Service Needed 
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground font-rajdhani"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-foreground font-rajdhani font-medium mb-2">
                    Location 
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground font-rajdhani"
                    placeholder="Enter your city and area"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-foreground font-rajdhani font-medium mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-foreground font-rajdhani resize-none"
                    placeholder="Tell us about your project requirements, building size, specific issues, etc."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow font-rajdhani font-semibold text-lg py-4 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground font-rajdhani">
                  We'll respond within 24 hours with a free consultation and quote
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;