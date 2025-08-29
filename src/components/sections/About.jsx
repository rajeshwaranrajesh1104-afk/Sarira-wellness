import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Leaf, Heart, Stars, History } from 'lucide-react';
import { ABOUT } from '@/constants/content';
import rightImage from '@/assets/images/img6.jpg';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.99]
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleOnHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const imageReveal = {
  initial: { scale: 1.2, opacity: 0 },
  animate: { 
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export function About() {
  const [isHovered, setIsHovered] = useState(false);

  const values = [
    { icon: <Leaf className="w-6 h-6" />, text: "Pure & Natural" },
    { icon: <Heart className="w-6 h-6" />, text: "Made with Love" },
    { icon: <Stars className="w-6 h-6" />, text: "Premium Quality" },
    { icon: <History className="w-6 h-6" />, text: "Ancient Wisdom" }
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#E8ECDF] py-24">
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.03, 0.07, 0.03] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column - Content */}
          <motion.div 
            variants={fadeIn}
            className="space-y-8"
          >
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-[#5A6B3A] to-[#8BA663] text-transparent bg-clip-text"
            >
              {ABOUT.title}
            </motion.h2>

            <motion.div 
              variants={{
                ...fadeIn,
                hover: scaleOnHover.hover
              }}
              className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-primary/10"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-primary/10 rounded-xl opacity-50"></div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative z-10"
              >
                <p className="text-center text-2xl font-headline text-primary/90 mb-3 leading-relaxed">
                  "{ABOUT.quote.tamil}"
                </p>
                <p className="text-center text-muted-foreground italic font-medium">
                  — {ABOUT.quote.english}
                </p>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={{
                    ...fadeIn,
                    hover: scaleOnHover.hover
                  }}
                  whileHover="hover"
                  className="group flex items-center gap-3 bg-gradient-to-br from-white/80 to-white/60 rounded-lg p-4 backdrop-blur-sm border border-primary/5 hover:border-accent/20 transition-all duration-300 cursor-pointer"
                >
                  <motion.span 
                    className="text-accent p-2 bg-accent/10 rounded-full"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.span>
                  <span className="text-primary/80 font-medium group-hover:text-accent transition-colors duration-300">
                    {value.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {ABOUT.story.map((paragraph, index) => (
              <motion.p 
                key={index}
                variants={fadeIn}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div variants={fadeIn}>
              <Button 
                asChild 
                variant="outline"
                className="group bg-white/80 hover:bg-accent/10 border-accent hover:border-accent text-accent hover:text-accent-foreground px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Link to="/tamil-culture" className="flex items-center">
                  Explore Our Heritage 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            variants={fadeIn}
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background decorative elements */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/10 rounded-2xl transform rotate-3"
              animate={{ 
                opacity: [0.2, 0.3, 0.2],
                scale: [1, 1.02, 1],
                rotate: [3, 2, 3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div 
              className="relative z-10"
              variants={imageReveal}
            >
              <div className="overflow-hidden rounded-2xl">
                <motion.img 
                  src={rightImage}
                  alt="Rooted in Tamil Tradition"
                  className="w-full rounded-2xl shadow-2xl filter brightness-105 contrast-105"
                  animate={isHovered ? { 
                    scale: 1.05,
                    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
                  } : { 
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut" }
                  }}
                />
              </div>

              {/* Enhanced gradient overlays */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Interactive corner decorations */}
              <motion.div 
                className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent/40 rounded-tl-lg"
                animate={isHovered ? { 
                  width: 80,
                  height: 80,
                  opacity: 1
                } : { 
                  width: 48,
                  height: 48,
                  opacity: 0.3
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-accent/40 rounded-br-lg"
                animate={isHovered ? { 
                  width: 80,
                  height: 80,
                  opacity: 1
                } : { 
                  width: 48,
                  height: 48,
                  opacity: 0.3
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Hover state indicators */}
              <motion.div 
                className="absolute inset-0 rounded-2xl border-2 border-accent/0"
                animate={isHovered ? { 
                  borderColor: "rgba(227, 138, 48, 0.2)",
                  scale: 1.02
                } : { 
                  borderColor: "rgba(227, 138, 48, 0)",
                  scale: 1
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}