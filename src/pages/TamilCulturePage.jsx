import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { IMAGES } from '@/constants/content';
import heroBg from '@/assets/images/image01.jpg';
import rightImg from '@/assets/images/imge11.jpg';
import legacyImg from '@/assets/images/img44.jpg';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  viewport: { once: true, amount: 0.3 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TamilCulturePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        {/* Chapter 1: The Poetic Opening */}
        <section ref={heroRef} id="chapter-1" className="relative h-screen overflow-hidden">
          <motion.div className="absolute inset-0" style={{ scale: videoScale, y: videoY }}>
            <img
              src={heroBg}
              alt="Tamil culture background"
              className="w-full h-full object-cover brightness-50"
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="container mx-auto px-4">
              <motion.p variants={staggerItem} className="font-headline text-4xl md:text-6xl text-white/90 mb-2">
                "அந்தணர்நூல் வழி நின் றார்"
              </motion.p>
              <motion.p variants={staggerItem} className="font-headline text-4xl md:text-6xl text-white/90">
                "அத்திப்பழம் பபால்"
              </motion.p>
              <motion.p variants={staggerItem} className="mt-6 text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-body italic">
                A metaphor from Sangam poetry comparing pure character to the sweetness of a fig.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Chapter 2: Rooted in Tradition */}
        <motion.section {...fadeIn} id="chapter-2" className="relative bg-gradient-to-b from-secondary/50 to-secondary/30 py-20 md:py-32 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[100px] transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] transform translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent/90 text-transparent bg-clip-text leading-tight">
                    Rooted in Tamil Tradition
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                </motion.div>

                <div className="space-y-8 prose prose-lg">
                  <motion.p 
                    className="text-lg md:text-xl text-primary/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Long before wellness became a trend or a marketable word, Tamil households embraced it as a way of life — a life rooted in balance, nourishment, and respect for nature. Our ancestors didn't measure health with supplements or fads; they lived wellness every single day through food, rituals, and wisdom passed from one generation to the next.
                  </motion.p>
                  <motion.p 
                    className="text-lg md:text-xl text-primary/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    At the heart of this ancestral knowledge lies the fig (<span className="text-accent font-semibold">அத்திப்பழம்</span>). More than just a fruit, it has always been a symbol of vitality, fertility, and spiritual well-being. In Siddha medicine, figs were prescribed for strength and digestion. In temples, they were offered as sacred blessings. At home, they were given to children for growth and to new mothers for recovery and vitality.
                  </motion.p>
                  <motion.p 
                    className="text-lg md:text-xl text-primary/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Our grandmothers didn't need labels like 'superfoods' or 'gut health.' They trusted their senses, their soil, and the timeless science written not in textbooks but on banana leaves. For them, food was medicine, and figs were nature's perfect supplement.
                  </motion.p>
                  <motion.p 
                    className="text-lg md:text-xl text-primary/80 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    Today, SARIRA carries forward this legacy — blending the ancient Tamil way with modern convenience. Because true wellness is not a passing trend; it is tradition, it is love, and it is life itself.
                  </motion.p>
                </div>
              </div>

              <motion.div 
                className="relative group"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Background decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl blur-2xl transition-all duration-500 group-hover:from-accent/20 group-hover:to-primary/10"></div>
                
                {/* Image container */}
                <motion.div 
                  className="relative rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={rightImg}
                    alt="Rooted in Tamil Tradition"
                    className="w-full rounded-2xl shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Image overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent opacity-40"></div>
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-lg"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Chapter 5: Grandmother's Wisdom */}
        <motion.section {...fadeIn} id="chapter-5" className="relative bg-white py-20 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={IMAGES.traditionalKitchen}
                alt="Traditional Kitchen Background"
                className="w-full h-full object-cover brightness-75"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 backdrop-blur-sm"></div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -left-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 
              }}
            />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 max-w-4xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-center"
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent/90 bg-clip-text text-transparent mb-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
              >
                If your grandmother ran a wellness brand...
              </motion.h2>

              <motion.div 
                className="space-y-8 text-xl text-primary/80 mb-12"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
              >
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  className="leading-relaxed"
                >
                  She trusted her senses, her soil, and the timeless science passed down on banana leaves — not textbooks. To her, wellness was never a trend; it was instinct. Every meal she prepared carried the wisdom of generations before her. You call it functional food. She simply called it breakfast. The West calls it gut health. She just reminded you not to skip vendhaya kanji on Mondays.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  className="leading-relaxed"
                >
                  Her kitchen was her pharmacy, her ladle the doctor's tool. A pinch of turmeric soothed inflammation, sukku kaapi awakened the body at dawn, and figs — nature's sweetest gift — nourished strength and fertility. She didn't chase nutrition labels, because she already knew which grain healed, which spice protected, and which fruit gave life.
                </motion.p>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  className="leading-relaxed"
                >
                  What she passed on was more than recipes; it was a philosophy of living. A way where food was love, medicine, and wellness — all in one.
                </motion.p>
              </motion.div>
              <motion.p
                className="text-2xl md:text-3xl font-headline text-brown my-12"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] } }}
                viewport={{ once: true, amount: 0.5 }}
              >
                "We didn't invent anything. We simply bottled what they believed in."
              </motion.p>
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/product">Discover Your Roots</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section {...fadeIn} id="final-cta" className="bg-white">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Taste the Legacy</h2>
            <p className="text-xl text-muted-foreground mb-10">Experience the pure, time-tested goodness of SARIRA Fig Malt.</p>
            <div className="flex justify-center">
              <img
                src={legacyImg}
                alt="SARIRA Fig Malt"
                className="w-full max-w-sm rounded-lg shadow-2xl mb-10"
              />
            </div>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
              <Link to="/product">Shop Now</Link>
            </Button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}