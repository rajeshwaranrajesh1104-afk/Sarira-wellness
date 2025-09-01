import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, HeartPulse, Baby, Sparkles } from 'lucide-react';
import { HERO, IMAGES } from '@/constants/content';
import heroBg from '@/assets/images/BG01.jpg';

const iconMap = {
  HeartPulse,
  Baby,
  ShieldCheck,
  Sparkles
};

export function Hero() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [typedHeadline, setTypedHeadline] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  
  // Adding home-section ID for smooth scrolling

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      let charIndex = 0;
      let isDeleting = false;
      let timeoutId;

      const type = () => {
        const currentHeadline = HERO.headlines[headlineIndex];
        
        if (isDeleting) {
          if (charIndex > 0) {
            setTypedHeadline(currentHeadline.substring(0, charIndex - 1));
            charIndex--;
            timeoutId = setTimeout(type, 60);
          } else {
            isDeleting = false;
            setHeadlineIndex((prevIndex) => (prevIndex + 1) % HERO.headlines.length);
          }
        } else {
          if (charIndex < currentHeadline.length) {
            setTypedHeadline(currentHeadline.substring(0, charIndex + 1));
            charIndex++;
            timeoutId = setTimeout(type, 120);
          } else {
            timeoutId = setTimeout(() => {
              isDeleting = true;
              type();
            }, 2000); 
          }
        }
      };

      type();
      return () => clearTimeout(timeoutId);
    }
  }, [isMounted, headlineIndex]);

  return (
    <section id="home-section" className="relative min-h-[90vh] flex items-center pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#364A22]/90 via-[#4A5F2E]/80 to-[#E38A30]/70 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative z-10 gap-8 md:gap-12">
        {/* Centered text content */}
        <div className="w-full text-center">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline text-white mb-4 leading-tight">
            Welcome to SARIRA Wellness
          </p>
          <h1 className="text-[#E38A30] font-body mb-2 text-xl sm:text-2xl h-8">
            <span>{typedHeadline}</span>
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4 sm:px-6">
            {HERO.subtitle}
          </p>
          
          {/* CTA Buttons - Mobile Optimized with Creative Design */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-lg mx-auto px-4 sm:px-0">
            {/* Try Fig Malt Button - Primary CTA */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E38A30] to-[#F4A261] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Button 
                asChild 
                size="lg" 
                className="relative bg-gradient-to-r from-[#E38A30] to-[#F4A261] text-white hover:from-[#F4A261] hover:to-[#E38A30] shadow-xl hover:shadow-2xl w-full sm:w-auto px-8 py-4 text-lg md:text-xl font-bold border-0 transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/product" className="flex items-center gap-2">
                  <span>🍃</span>
                  <span>Try Fig Malt</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </Button>
            </div>
            
            {/* Learn Our Story Button - Secondary CTA */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#364A22] to-[#4A5F2E] rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Button 
                asChild 
                size="lg" 
                variant="custom" 
                className="relative bg-gradient-to-r from-[#364A22] to-[#4A5F2E] text-white hover:from-[#4A5F2E] hover:to-[#364A22] shadow-xl hover:shadow-2xl w-full sm:w-auto px-8 py-4 text-lg md:text-xl font-bold border-2 border-white/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/tamil-culture" className="flex items-center gap-2">
                  <span>Learn Our Story</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-white/20 rounded-xl p-6 shadow-lg border border-white/30 mb-12 backdrop-blur-sm animate-[floating_3s_ease-in-out_infinite] hover:shadow-xl">
              <p className="text-center text-lg font-semibold text-[#FFFFFF]">
                {HERO.guarantee}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {HERO.benefits.map(benefit => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <div key={benefit.text} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:shadow-lg hover:-translate-y-1">
                  <div className="text-[#E38A30] bg-white/20 p-3 rounded-full">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-semibold text-white">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}