import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Carousel, CarouselItem } from '@/components/ui/Carousel';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from '@/components/ui/Dialog';
import { JOURNAL } from '@/constants/content';

export function Journal() {
  return (
    <section id="journal" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {JOURNAL.title}
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore mindful eating, cultural roots, and the philosophy of nourishment through stories that honor tradition and inspire everyday wellness.
          </p>
          <div className="mt-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" aria-label="Read more about SARIRA Journal">
                  Read More
                </Button>
              </DialogTrigger>
              <DialogContent className="animate-fadeIn">
                <DialogHeader>
                  <DialogTitle>SARIRA Journal – Where Food Meets Philosophy</DialogTitle>
                  <DialogDescription>
                    SARIRA Journal is a home for thoughtful stories at the intersection of food, culture, and inner life. We explore how daily meals become rituals of meaning—grounded in Tamil wisdom yet open to the best of modern understanding. Here, you will find reflective essays that invite mindfulness in the kitchen and at the table; family recipes explained with clarity and care; and interviews with cultivators, cooks, mothers, and healers who embody nourishment as a way of living. Our aim is to help you slow down and reconnect: to seasons and soil, to community and memory, to balance and wellbeing. Whether you are seeking gentle postpartum foods, gut-friendly habits, or deeper context behind everyday ingredients, the Journal offers graceful companions for your journey. Read to be inspired, return to be restored—and carry these insights into warm, nourishing moments shared with the ones you love.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-6 flex justify-end gap-3">
                  <DialogClose className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600" aria-label="Close">
                    Close
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <Carousel autoplay autoplayDelay={3000} className="w-full">
          {JOURNAL.posts.map((post, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="overflow-hidden h-full flex flex-col bg-gradient-to-br from-white to-secondary/20">
                  <CardHeader className="p-0">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover" 
                    />
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-primary mb-3 h-20 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 h-24 overflow-hidden flex-grow leading-relaxed">
                      {post.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link to="/tamil-culture">Explore Our Heritage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}