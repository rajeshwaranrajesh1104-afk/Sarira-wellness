import React from 'react';
import { GALLERY } from '@/constants/content';
import { Carousel, CarouselItem } from '@/components/ui/Carousel';

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {GALLERY.title}
          </h2>
          <p className="text-xl text-muted-foreground">{GALLERY.subtitle}</p>
        </div>
        <Carousel autoplay autoplayDelay={3000} className="w-full">
          {GALLERY.images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-[4/3] bg-white">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </section>
  );
}


