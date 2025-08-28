import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Star, Leaf, Heart, Shield } from 'lucide-react';
import { PRODUCT } from '@/constants/content';
import img2 from '@/assets/images/img44.jpg';

export function Product() {
  return (
    <section id="product" className="bg-gradient-to-br from-[#F8F5EF] to-[#F0EDE6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#364A22] mb-4">
            {PRODUCT.name}
          </h2>
          <p className="text-xl text-[#5A6B3A]">{PRODUCT.subtitle}</p>
        </div>
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left: Product Details */}
          <div className="lg:w-1/2 w-full max-w-3xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#364A22] mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {PRODUCT.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#E38A30] mr-3 mt-1 shrink-0" />
                    <span className="text-[#5A6B3A]">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Product features grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-[#E38A30]/20">
                <div className="flex items-center gap-2 text-[#364A22] font-semibold">
                  <Star className="w-5 h-5 text-[#E38A30]" />
                  <span>No Added Sugar</span>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-[#E38A30]/20">
                <div className="flex items-center gap-2 text-[#364A22] font-semibold">
                  <Heart className="w-5 h-5 text-[#E38A30]" />
                  <span>Gut Friendly</span>
                </div>
              </div>
            </div>
            
            {/* Pricing and CTA */}
            <div className="flex items-center justify-between bg:white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-[#E38A30]/20">
              <div>
                <div className="text-3xl font-bold text-[#364A22]">{PRODUCT.price}</div>
                <div className="text-[#5A6B3A]">{PRODUCT.weight}</div>
                <div className="text-sm text-[#E38A30] font-semibold mt-1">Free Shipping</div>
              </div>
              <Button asChild size="lg" className="bg-[#E38A30] text-white hover:bg-[#E38A30]/90 shadow-lg">
                <Link to="/product">Buy Now</Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-[#5A6B3A]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E38A30]" />
                <span>100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-[#E38A30]" />
                <span>Organic</span>
              </div>
            </div>
          </div>

          {/* Right: Single Product Image */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.5 }
              }}
              className="w-full max-w-md mx-auto"
            >
              <motion.img
                src={img2}
                alt="SARIRA Fig Malt product"
                className="w-full rounded-2xl shadow-2xl object-cover animate-floating"
                whileHover={{ filter: "brightness(1.1)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}