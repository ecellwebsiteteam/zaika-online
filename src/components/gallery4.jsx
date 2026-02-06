"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import pg1 from "../assets/team/pg1.png";
import pg2 from "../assets/team/pg2.png";
import pg3 from "../assets/team/pg3.png";
import pg4 from "../assets/team/pg4.png";
import pg5 from "../assets/team/pg5.png";
import pg6 from "../assets/team/pg6.png";
import pg7 from "../assets/team/pg7.png";
import pg8 from "../assets/team/pg8.png";

const data = [
  {
    id: "design-weekly",
    title: "Design Weekly",
    category: "Design",
    description: "Latest trends & insights in modern design aesthetics and UI/UX patterns.",
    href: "/newsletters",
    image: pg1,
  },
  {
    id: "tech-digest",
    title: "Tech Digest",
    category: "Technology",
    description: "Weekly updates from the fast-paced tech world, featuring AI and Web3.",
    href: "/newsletters",
    image: pg2,
  },
  {
    id: "startup-spotlight",
    title: "Startup Spotlight",
    category: "Business",
    description: "Highlighting the most innovative startups disrupting industries today.",
    href: "/newsletters",
    image: pg3,
  },
  {
    id: "innovation-hub",
    title: "Innovation Hub",
    category: "Innovation",
    description: "Deep dives into ideas and insights to fuel your creative thinking.",
    href: "/newsletters",
    image: pg4,
  },
  {
    id: "creative-minds",
    title: "Creative Minds",
    category: "Creativity",
    description: "Exploring strategies for creative professionals to stay ahead.",
    href: "/newsletters",
    image: pg5,
  },
  {
    id: "future-tech",
    title: "Future Tech",
    category: "Futurism",
    description: "Emerging technologies, blockchain, and cutting-edge developments.",
    href: "/newsletters",
    image: pg6,
  },
];

const NewsletterCard = ({ item }) => {
  return (
    <a href={item.href} className="block group relative h-[450px] w-full overflow-hidden rounded-[2rem]">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full">
         <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
      </div>

      {/* Glassmorphism Border/Glow */}
      <div className="absolute inset-0 border border-white/10 rounded-[2rem] transition-colors duration-300 group-hover:border-purple-500/50 pointer-events-none"></div>
      
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent via-purple-500/5 to-purple-500/20 pointer-events-none" />

      {/* Content Container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        
        {/* Category Tag */}
        <div className="mb-auto transform translate-y-[-10px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md border border-white/20 text-white">
            <Sparkles className="w-3 h-3 mr-1 text-purple-300" />
            {item.category}
          </span>
        </div>

        {/* Text Content */}
        <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight font-sans tracking-wide">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-90 group-hover:opacity-100 group-hover:text-white transition-colors">
            {item.description}
          </p>
          
          {/* animated underline/link */}
          <div className="flex items-center text-sm font-semibold text-purple-300 group-hover:text-purple-200 transition-colors">
            <span>Read Issue</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </a>
  );
};

const Gallery4 = ({
  title = "EIC Newsletters",
  description = "Stay informed with our curated selection of articles, insights, and stories from the E-Cell ecosystem.",
  items = data
}) => {
  const [carouselApi, setCarouselApi] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => setCurrentSlide(carouselApi.selectedScrollSnap());
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => carouselApi.off("select", updateSelection);
  }, [carouselApi]);

  return (
    <section className="relative py-24 w-full overflow-hidden">
        {/* Ambient Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-xl font-[vampire]">
              {title}
            </h2>
            <p className="text-lg text-gray-400 font-[font1] leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Custom Navigation Indicators (Desktop) */}
          <div className="hidden md:flex gap-2">
             {/* Styled via Carousel controls if needed, or just custom indicators below */}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
            <Carousel
            setApi={setCarouselApi}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
            >
            <CarouselContent className="-ml-4">
                {items.map((item) => (
                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <NewsletterCard item={item} />
                </CarouselItem>
                ))}
            </CarouselContent>
            {/* Optional: Add navigation arrows if desired */}
            {/* <CarouselPrevious className="left-0 -translate-x-1/2" />
            <CarouselNext className="right-0 translate-x-1/2" /> */}
            </Carousel>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-10 gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => carouselApi?.scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                currentSlide === index ? "w-8 bg-purple-500" : "w-2 bg-white/20 hover:bg-white/40"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
