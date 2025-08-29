import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SHIPPING_DELIVERY } from '@/constants/content';
import { ArrowUp, Truck, Clock, MapPin, AlertCircle, RefreshCcw } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const cardVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  }
};

const icons = {
  "1": Truck,
  "2": Clock,
  "3": MapPin,
  "4": AlertCircle,
  "5": RefreshCcw
};

export default function ShippingDeliveryPage() {
  const [activeSection, setActiveSection] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 pt-24">
        <motion.section 
          className="py-12 md:py-20 relative"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          {/* Background Gradient Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                {SHIPPING_DELIVERY.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                Last Updated: {SHIPPING_DELIVERY.lastUpdated}
              </p>
            </div>

            {/* Quick Navigation */}
            <motion.div 
              variants={cardVariants}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg border border-accent/10"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
              <div className="flex flex-wrap gap-3">
                {SHIPPING_DELIVERY.sections.map((section, index) => (
                  <button
                    key={section.title}
                    onClick={() => {
                      const element = document.getElementById(`shipping-section-${index}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="px-3 py-1 text-sm rounded-full bg-primary/5 hover:bg-primary/10 text-primary/80 transition-colors"
                  >
                    {section.title.split('.')[1].trim()}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Policy Sections */}
            <div className="space-y-8">
              {SHIPPING_DELIVERY.sections.map((section, index) => {
                const IconComponent = icons[section.title.split('.')[0]];
                return (
                  <motion.div 
                    key={section.title}
                    id={`shipping-section-${index}`}
                    variants={cardVariants}
                    whileHover="hover"
                    onMouseEnter={() => setActiveSection(index)}
                    onMouseLeave={() => setActiveSection(null)}
                    className="relative bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-accent/10 transition-all duration-300"
                  >
                    <AnimatePresence>
                      {activeSection === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl"
                        />
                      )}
                    </AnimatePresence>
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {section.title}
                        </h2>
                      </div>
                      <div className="text-foreground/80 whitespace-pre-line prose prose-lg">
                        {section.content}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Information */}
            <motion.div 
              variants={cardVariants}
              whileHover="hover"
              className="mt-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg border border-accent/10"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {SHIPPING_DELIVERY.contactInfo.title}
              </h2>
              <p className="text-lg font-medium text-primary/80 mb-2">{SHIPPING_DELIVERY.contactInfo.subtitle}</p>
              <p className="text-lg mb-6">{SHIPPING_DELIVERY.contactInfo.content}</p>
              <div className="space-y-4">
                <motion.a 
                  href={`mailto:${SHIPPING_DELIVERY.contactInfo.email}`}
                  className="block text-accent hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {SHIPPING_DELIVERY.contactInfo.email}
                </motion.a>
                <motion.a 
                  href={`tel:${SHIPPING_DELIVERY.contactInfo.phone}`}
                  className="block text-accent hover:text-primary transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {SHIPPING_DELIVERY.contactInfo.phone}
                </motion.a>
                <p className="text-primary/70 font-medium mt-4">
                  {SHIPPING_DELIVERY.contactInfo.hours}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scroll to Top Button */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}