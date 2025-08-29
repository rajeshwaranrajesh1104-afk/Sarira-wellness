import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { Carousel, CarouselItem } from '@/components/ui/Carousel';
import { CheckCircle2, Leaf, Sprout, Brain, Utensils, Sandwich, Soup, Baby, Minus, Plus, HeartHandshake, ShieldCheck, Star, Truck, RefreshCw, Lock, MessageSquare } from 'lucide-react';
import { WhatsappIcon } from '@/components/icons/IconComponents';
import { PRODUCT, IMAGES } from '@/constants/content';
import productImage from '@/assets/images/img2.png';

const galleryImages = [
  { src: IMAGES.productMain, alt: "SARIRA Fig Malt Pouch" },
  { src: "https://placehold.co/800x800.png", alt: "Spoonful of Fig Malt" },
  { src: "https://placehold.co/800x800.png", alt: "Organic Figs and Nuts" }
];

const ingredients = [
  { 
    name: "Organic Fig", 
    description: "Rich in fiber for gut health and digestion support.",
    icon: <Leaf />
  },
  { 
    name: "Almonds", 
    description: "Packed with vitamin E for brain function and skin health.",
    icon: <Brain />
  },
  { 
    name: "Cashew", 
    description: "Provides magnesium and copper for bone strength.",
    icon: <Sprout />
  },
];

const howToUse = [
  {
    title: "Toast Topper",
    description: "Spread ghee or nut butter on warm toast, then sprinkle 1 tsp of Fig Malt on top.",
    icon: <Sandwich />
  },
  {
    title: "String Hopper Topping", 
    description: "Mix Fig Malt with grated coconut and serve over warm string hoppers.",
    icon: <Utensils />
  },
  {
    title: "Chapati / Paratha Filling",
    description: "Add Fig Malt and chopped nuts into a folded chapati or roll.",
    icon: <Soup />
  },
  {
    title: "Toddler & Postpartum Meal",
    description: "Add to ragi/millet kanji, mashed bananas, or dal mash.",
    icon: <Baby />
  }
];

const trustBuilders = [
  { text: "Free Shipping on orders over ₹800", icon: <Truck className="w-5 h-5"/> },
  { text: "Easy 7-Day Returns", icon: <RefreshCw className="w-5 h-5"/> },
  { text: "Secure Payments", icon: <Lock className="w-5 h-5"/> },
  { text: "4.9/5 Star Rating", icon: <Star className="w-5 h-5"/> }
];

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F5EF]">
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Product Image */}
                <div className="lg:sticky lg:top-32">
                  <div className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/20">
                    <img 
                      src={productImage} 
                      alt="SARIRA Fig Malt" 
                      className="w-full rounded-2xl shadow-xl animate-floating mx-auto max-w-lg" 
                    />
                  </div>
                </div>

                {/* Right Column - Product Details */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="outline" className="border-[#E38A30] text-[#E38A30] px-4 py-1 text-sm font-semibold">Bestseller</Badge>
                      {PRODUCT.badges.map((badge, index) => (
                        <Badge key={index} variant="secondary" className="bg-[#364A22] text-white border-none px-4 py-1">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#364A22] mb-4 font-headline leading-tight">SARIRA Fig Malt</h1>
                      <p className="text-xl md:text-2xl text-[#5A6B3A] font-body leading-relaxed">{PRODUCT.subtitle}</p>
                    </div>
                  </div>
                
                  {/* Pricing Card */}
                  <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#E38A30]/10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-baseline gap-3">
                        <span className="text-4xl md:text-5xl font-bold text-[#364A22] font-headline">{PRODUCT.price}</span>
                        <span className="text-xl text-[#5A6B3A] line-through font-body">{PRODUCT.originalPrice}</span>
                      </div>
                      <div className="text-sm font-semibold px-4 py-2 bg-[#E38A30]/10 text-[#E38A30] rounded-full">
                        {PRODUCT.discount}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border-2 border-[#E38A30]/20 rounded-xl bg-white">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={decrementQuantity} 
                            className="h-12 w-12 hover:bg-[#E38A30]/10"
                          >
                            <Minus className="h-4 w-4 text-[#364A22]" />
                          </Button>
                          <span className="w-12 text-center font-bold text-lg text-[#364A22]">{quantity}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={incrementQuantity} 
                            className="h-12 w-12 hover:bg-[#E38A30]/10"
                          >
                            <Plus className="h-4 w-4 text-[#364A22]" />
                          </Button>
                        </div>
                        <Button 
                          asChild 
                          size="lg" 
                          className="flex-1 bg-[#E38A30] text-white hover:bg-[#364A22] transition-all duration-300 hover:scale-105 h-12"
                        >
                          <a href="https://wa.me/917010422748" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                            <WhatsappIcon className="mr-2 h-5 w-5" /> Order now
                          </a>
                        </Button>
                      </div>
                      <p className="text-sm text-center text-[#5A6B3A] font-medium">{PRODUCT.servings}</p>
                    </div>
                  </Card>

                  {/* Testimonial Card */}
                  <Card className="border border-[#E38A30]/20 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="p-3 bg-[#E38A30]/10 rounded-full">
                        <MessageSquare className="w-6 h-6 text-[#E38A30]"/>
                      </div>
                      <p className="text-[#5A6B3A] italic text-lg font-body">"{PRODUCT.testimonial}"</p>
                    </CardContent>
                  </Card>

                  {/* Key Benefits Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#364A22] font-headline">Key Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {PRODUCT.keyBenefits.map((benefit, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-4 bg-white/80 p-5 rounded-xl border border-[#E38A30]/10 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                        >
                          <div className="p-3 bg-[#E38A30]/10 rounded-full">
                            {benefit.icon === 'Leaf' && <Leaf className="w-6 h-6 text-[#E38A30]" />}
                            {benefit.icon === 'HeartHandshake' && <HeartHandshake className="w-6 h-6 text-[#E38A30]" />}
                            {benefit.icon === 'Brain' && <Brain className="w-6 h-6 text-[#E38A30]" />}
                            {benefit.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6 text-[#E38A30]" />}
                          </div>
                          <span className="text-[#5A6B3A] text-lg font-body">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                
                  {/* Ingredients and Usage Section */}
                  <div className="space-y-8">
                    <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="ingredients">
                      <AccordionItem value="ingredients" className="border border-[#E38A30]/20 rounded-xl bg-white/80 backdrop-blur-sm">
                        <AccordionTrigger className="text-xl font-bold text-[#364A22] px-6 py-4 hover:bg-[#E38A30]/5">
                          Ingredients
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="p-6 pt-2">
                            <ul className="space-y-6">
                              {ingredients.map((item) => (
                                <li key={item.name} className="flex items-start gap-4">
                                  <div className="p-3 bg-[#E38A30]/10 rounded-full mt-1">
                                    <div className="w-6 h-6 text-[#E38A30]">
                                      {item.icon}
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-[#364A22] text-lg mb-1">{item.name}</h4>
                                    <p className="text-[#5A6B3A] text-base leading-relaxed">{item.description}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="how-to-use" className="border border-[#E38A30]/20 rounded-xl bg-white/80 backdrop-blur-sm">
                        <AccordionTrigger className="text-xl font-bold text-[#364A22] px-6 py-4 hover:bg-[#E38A30]/5">
                          How to Use
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="p-6 pt-2">
                            <ul className="space-y-6">
                              {howToUse.map((item) => (
                                <li key={item.title} className="flex items-start gap-4">
                                  <div className="p-3 bg-[#E38A30]/10 rounded-full mt-1">
                                    <div className="w-6 h-6 text-[#E38A30]">
                                      {item.icon}
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-[#364A22] text-lg mb-1">{item.title}</h4>
                                    <p className="text-[#5A6B3A] text-base leading-relaxed">{item.description}</p>
                                  </div>
                                </li>
                              ))}
                            </ul>
                            <video
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-auto object-cover rounded-lg mt-8"
                            >
                              <source src="fig-tree-video.mp4" type="video/mp4" />
                            </video>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Trust Builders Section */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-[#364A22] font-headline">Our Promise</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {trustBuilders.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-4 bg-white/60 p-4 rounded-xl border border-[#E38A30]/10 transition-all duration-300 hover:shadow-md"
                        >
                          <div className="p-2 bg-[#E38A30]/10 rounded-full">
                            {item.icon}
                          </div>
                          <span className="text-[#5A6B3A] font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Security Note */}
                  <div className="text-center py-6">
                    <p className="text-[#5A6B3A] text-sm font-medium">
                      Your information is safe with us. We use bank-grade security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}