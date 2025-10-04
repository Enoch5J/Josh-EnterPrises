import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border'
      : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl font-orbitron font-bold text-primary-foreground">JE</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-orbitron font-bold text-foreground">
                Josh Enterprises
              </span>
              <span className="text-xs text-muted-foreground font-rajdhani">
                Building Protection Experts
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors duration-300 font-rajdhani font-medium text-lg ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors duration-300 font-rajdhani font-medium text-lg ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
            >
              About
            </Link>
            <Link
              to="/success-stories"
              className={`transition-colors duration-300 font-rajdhani font-medium text-lg ${isActive('/success-stories') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
            >
              Our Works
            </Link>
            <Link
              to="/contact"
              className={`transition-colors duration-300 font-rajdhani font-medium text-lg ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Button
              onClick={() => window.open('tel:+919840168401', '_self')}
              className="bg-gradient-primary hover:shadow-glow transform hover:scale-105 transition-all duration-300 font-rajdhani font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={closeMenu}
                className={`text-left transition-colors duration-300 font-rajdhani font-medium text-lg ${isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className={`text-left transition-colors duration-300 font-rajdhani font-medium text-lg ${isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
              >
                About
              </Link>
              <Link
                to="/success-stories"
                onClick={closeMenu}
                className={`text-left transition-colors duration-300 font-rajdhani font-medium text-lg ${isActive('/success-stories') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
              >
                Success Stories
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`text-left transition-colors duration-300 font-rajdhani font-medium text-lg ${isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
              >
                Contact
              </Link>
              <Button
                onClick={() => window.open('tel:+919840168401', '_self')}
                className="bg-gradient-primary hover:shadow-glow w-fit font-rajdhani font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;