import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  texts, 
  interval = 3000,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'} ${className}`}>
      <span 
        className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%] font-black"
        style={{
          textShadow: '0 4px 20px rgba(255, 138, 31, 0.3), 0 0 30px rgba(255, 138, 31, 0.2)',
          fontWeight: '900',
          filter: 'drop-shadow(0 0 10px rgba(255, 138, 31, 0.4))'
        }}
      >
        {texts[currentIndex]}
      </span>
    </div>
  );
};

export default AnimatedText;