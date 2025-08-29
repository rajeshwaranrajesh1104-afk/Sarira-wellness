import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TERMS_OF_SERVICE } from '@/constants/content';
import { ArrowUp } from 'lucide-react';

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
    transition: { 
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    transition: { duration: 0.3 }
  }
};

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
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
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                {TERMS_OF_SERVICE.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                Last Updated: {TERMS_OF_SERVICE.lastUpdated}
              </p>
            </div>

            {/* Introduction */}
            <div className="prose lg:prose-lg max-w-none mx-auto text-foreground/80">
              <div className="bg-white/50 rounded-xl p-6 shadow-sm border border-accent/10 mb-8">
                <p className="text-lg leading-relaxed">
                  {TERMS_OF_SERVICE.introduction}
                </p>
              </div>

              {/* Quick Navigation */}
              <motion.div 
                variants={cardVariants}
                className="bg-white/60 backdrop-blur-sm rounded-xl p-6 mb-8 shadow-lg border border-accent/10"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">Quick Navigation</h3>
                <div className="flex flex-wrap gap-3">
                  {TERMS_OF_SERVICE.sections.map((section, index) => (
                    <button
                      key={section.title}
                      onClick={() => {
                        const element = document.getElementById(`section-${index}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="px-3 py-1 text-sm rounded-full bg-primary/5 hover:bg-primary/10 text-primary/80 transition-colors"
                    >
                      {section.title.split('.')[0]}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Terms Sections */}
              <div className="space-y-8">
                {TERMS_OF_SERVICE.sections.map((section, index) => (
                  <motion.div 
                    key={section.title}
                    id={`section-${index}`}
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
                      <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                        {section.title}
                      </h2>
                      <div className="text-foreground/80 whitespace-pre-line prose prose-lg">
                        {section.content}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Information */}
              <motion.div 
                variants={cardVariants}
                whileHover="hover"
                className="mt-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg border border-accent/10"
              >
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  {TERMS_OF_SERVICE.contactInfo.title}
                </h2>
                <p className="text-lg mb-6">{TERMS_OF_SERVICE.contactInfo.content}</p>
                <div className="space-y-4">
                  <a 
                    href="mailto:sariranutrition@gmail.com" 
                    className="block text-accent hover:text-primary transition-colors group"
                  >
                    <motion.span 
                      className="inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      {TERMS_OF_SERVICE.contactInfo.email}
                    </motion.span>
                  </a>
                  <a 
                    href="tel:+917010422748" 
                    className="block text-accent hover:text-primary transition-colors group"
                  >
                    <motion.span 
                      className="inline-block"
                      whileHover={{ scale: 1.05 }}
                    >
                      {TERMS_OF_SERVICE.contactInfo.phone}
                    </motion.span>
                  </a>
                </div>
              </motion.div>

              {/* Footer Note */}
              <motion.div 
                variants={fadeIn}
                className="mt-12 text-center text-lg text-primary/80 whitespace-pre-line font-medium"
              >
                {TERMS_OF_SERVICE.footer}
              </motion.div>
            </div>
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