import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '../../components/ui/card';

export const EmblaCarousel = ({ images }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex -ml-4">
        {images.map((src, index) => (
          <div className="flex-[0_0_85%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.333%]" key={index}>
             <div className="p-1">
                <Card className="border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200">
                  <CardContent className="flex items-center justify-center p-0 aspect-square overflow-hidden rounded-lg">
                    <img 
                        src={src} 
                        alt={`Slide ${index + 1}`} 
                        className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};
