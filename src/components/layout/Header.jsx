import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import SariraLogoImg from '@/assets/images/SARIRA.logo.png';
import { NAVIGATION, SITE_CONFIG } from '@/constants/content';
import { cn } from '@/utils/cn';

export function Header() {
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

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  const closeMenu = () => setIsOpen(false);

  const handleHashNav = (href) => (e) => {
    if (!href.includes('#')) return;
    e.preventDefault();
    const id = href.split('#')[1];
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback: navigate to home with hash to allow section to mount
      window.location.href = href;
    }
    closeMenu();
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent',
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <Link to="/" className="text-primary">
          <img src={SariraLogoImg} alt="SARIRA" className="h-14 w-auto" />
        </Link>
        {/* Mobile Menu Button - Always green for mobile with dark green background */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 bg-[#364A22] shadow-sm"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {NAVIGATION.main.map(link => (
            link.href.includes('#') ? (
              <a
                key={link.href}
                href={link.href}
                onClick={handleHashNav(link.href)}
                className={`${location.pathname === '/' ? (isScrolled ? 'text-primary hover:text-[#E38A30]' : 'text-white hover:text-[#E38A30]') : 'text-[#364A22] hover:text-[#E38A30]'} transition-colors duration-300 font-medium`}
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.href} 
                to={link.href} 
                className={`${location.pathname === '/' ? (isScrolled ? 'text-primary hover:text-[#E38A30]' : 'text-white hover:text-[#E38A30]') : 'text-[#364A22] hover:text-[#E38A30]'} transition-colors duration-300 font-medium`}
              >
                {link.label}
              </Link>
            )
          ))}
          <Button asChild>
            <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              Order Now
            </a>
          </Button>
        </nav>
      </div>
      
      {/* Mobile Menu - Slide-in from right side */}
      <div className={cn(
        'md:hidden fixed top-0 right-0 h-screen w-80 max-w-[85vw] bg-[#364A22] z-50 transform transition-transform duration-300 ease-in-out shadow-2xl',
        isOpen ? 'translate-x-0' : 'translate-x-full'
      )}>
        {/* Mobile Menu Header - Fixed at top */}
        <div className="flex justify-between items-center p-6 border-b border-white/20 bg-[#364A22]">
          <Link to="/" onClick={closeMenu} className="text-white">
            <img src={SariraLogoImg} alt="SARIRA" className="h-12 w-auto" />
          </Link>
          <button 
            onClick={closeMenu} 
            className="p-3 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Navigation - Centered and scrollable */}
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)] p-6 space-y-6 overflow-y-auto">
          {NAVIGATION.main.map(link => (
            link.href.includes('#') ? (
              <a
                key={link.href}
                href={link.href}
                onClick={handleHashNav(link.href)}
                className="text-xl text-white hover:text-[#E38A30] hover:bg-[#E38A30]/10 px-6 py-4 rounded-lg transition-all duration-200 font-medium w-full text-center"
              >
                {link.label}
              </a>
            ) : (
              <Link 
                key={link.href} 
                to={link.href} 
                onClick={closeMenu} 
                className="text-xl text-white hover:text-[#E38A30] hover:bg-[#E38A30]/10 px-6 py-4 rounded-lg transition-all duration-200 font-medium w-full text-center"
              >
                {link.label}
              </Link>
            )
          ))}
          
          {/* Mobile CTA Button */}
          <div className="pt-6 border-t border-white/20 w-full">
            <Button 
              asChild 
              size="lg" 
              className="w-full bg-[#E38A30] text-white hover:bg-[#E38A30]/90 shadow-lg py-4 text-lg font-medium"
            >
              <a 
                href={SITE_CONFIG.contact.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={closeMenu}
              >
                Order Now
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}