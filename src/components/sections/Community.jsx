import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Home, Store, Instagram, Facebook, Utensils, CheckCircle2, X } from 'lucide-react';
import { COMMUNITY, SITE_CONFIG } from '@/constants/content';

const iconMap = {
  Home,
  Store,
  Utensils
};

export function Community() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showResellerPopup, setShowResellerPopup] = useState(false);

  return (
    <section id="community" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {COMMUNITY.title}
          </h2>
          <p className="text-xl text-muted-foreground">{COMMUNITY.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {COMMUNITY.sections.map((section, index) => {
            const IconComponent = iconMap[section.icon];
            
            if (section.title === "For Stores & Retailers") {
              return (
                <Card key={index} className="bg-gradient-to-br from-secondary/50 to-secondary/70 border-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-500 group flex flex-col">
                  <CardHeader>
                    <div className="text-accent group-hover:text-accent mb-4 bg-accent/10 p-3 rounded-full w-fit shadow-md">
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary-foreground">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <div className="flex-grow">
                      <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-4 transition-all duration-300 leading-relaxed">
                        {section.description}
                      </p>
                      <Button 
                        variant="link" 
                        onClick={() => setIsExpanded(!isExpanded)} 
                        className="text-accent p-0 h-auto self-start mb-4"
                      >
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </Button>
                    </div>
                    <div className="mt-auto">
                      <Button 
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-all duration-300" 
                        size="lg"
                        onClick={() => setShowResellerPopup(true)}
                      >
                        Become a Reseller
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            }

            return (
              <Card key={index} className="bg-gradient-to-br from-secondary/50 to-secondary/70 border-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-500 group flex flex-col">
                <CardHeader>
                  <div className="text-accent group-hover:text-accent mb-4 bg-accent/10 p-3 rounded-full w-fit shadow-md">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary-foreground">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <CardDescription className="mb-6 text-muted-foreground group-hover:text-primary-foreground/80 min-h-[140px] leading-relaxed">
                    {section.description}
                  </CardDescription>
                  <div className="space-y-4 mt-auto">
                    {section.title === "For Families" && (
                      <>
                        <div className="flex items-center justify-center space-x-4 mb-4">
                          <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-primary group-hover:text-primary-foreground hover:text-accent">
                            <Instagram className="w-7 h-7" />
                          </a>
                          <a href={SITE_CONFIG.social.facebook} className="text-primary group-hover:text-primary-foreground hover:text-accent">
                            <Facebook className="w-7 h-7" />
                          </a>
                        </div>
                        <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" size="lg">
                          <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                            Join on WhatsApp
                          </a>
                        </Button>
                      </>
                    )}
                    {section.title === "Nourishing Recipes" && (
                      <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg" size="lg">
                        <Link to="/recipes">Explore Recipes</Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Reseller Popup Modal */}
      {showResellerPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="sticky top-0 bg-white rounded-t-2xl p-6 border-b border-gray-200 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Partner with SARIRA</h3>
                <p className="text-muted-foreground">Let's build a healthier community — together.</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowResellerPopup(false)}
                className="text-muted-foreground hover:text-primary hover:bg-gray-100 rounded-full p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Benefits Section */}
                <div>
                  <h4 className="font-bold text-xl text-primary mb-6">Why Partner with Us?</h4>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-accent mr-4 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-primary">Attractive Wholesale Pricing</span>
                        <p className="text-sm mt-1">Competitive margins and volume discounts for growing businesses</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-accent mr-4 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-primary">Fast-Moving Wellness Product</span>
                        <p className="text-sm mt-1">Clean-label product with growing consumer demand</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-accent mr-4 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-primary">Marketing Support</span>
                        <p className="text-sm mt-1">Promotional materials, social media content, and brand assets</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-accent mr-4 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-primary">Reliable Supply Chain</span>
                        <p className="text-sm mt-1">Timely delivery and consistent product quality</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-accent mr-4 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-medium text-primary">Dedicated Support</span>
                        <p className="text-sm mt-1">Personal account management and ongoing assistance</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Contact Section */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <h4 className="font-bold text-xl text-primary mb-4">Get Started Today</h4>
                    <p className="text-muted-foreground mb-6">
                      Ready to join our network of wellness partners? Contact us to learn more about our reseller program.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      asChild 
                      size="lg" 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <a href={`mailto:${SITE_CONFIG.contact.email}?subject=Become a SARIRA Reseller&body=Hi SARIRA Team,%0D%0A%0D%0AI'm interested in becoming a reseller for your products.%0D%0A%0D%0APlease provide more information about:%0D%0A- Wholesale pricing%0D%0A- Minimum order quantities%0D%0A- Delivery terms%0D%0A- Marketing support%0D%0A%0D%0AThank you!`}>
                        📧 Email Us to Get Started
                      </a>
                    </Button>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <a href={SITE_CONFIG.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                        💬 WhatsApp Us
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}