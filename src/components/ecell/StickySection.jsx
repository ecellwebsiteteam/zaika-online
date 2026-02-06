import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./Card";
import "../utils/gsap-setup";
// Using public assets via root-relative paths to avoid build-time resolution issues

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const StickySection = () => {
  const stickyRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  // Card data
  const cardData = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/f2/95/41/f2954155cfcd3da4e6b66263cee9351a.jpg",
      title: "Project Pillar",
      description:
        "Our flagship pitch event where startups connect with top investors. 30% of 2022 startups secured funding or partnerships.",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/90/42/c5/9042c5c6833f4a4932062f892691294f.jpg",
      title: "Food Fiesta",
      description:
        "A buzzing campus food fest blending taste with entrepreneurship. 1500+ visitors experienced student-led stalls and innovation.",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/3d/2f/01/3d2f01cbfcced247d73375c54f4b3ccc.jpg",
      title: "Design Thinking Workshop",
      description:
        "Hands-on workshop fostering creativity, empathy, and problem-solving through design thinking principles.",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/75/6e/5b/756e5bcdaf1fb0a2c03f8017a05f17a8.jpg",
      title: "Meet the Innovator",
      description:
        "High-energy session with Shark Tank–recognized founders sharing real startup journeys, failures, and growth strategies.",
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/11/47/aa/1147aa32861e5722534c6234af83c268.jpg",
      title: "Meet the Entrepreneur",
      description:
        "Inspiring talks with founders and leaders on building businesses, tackling challenges, and scaling ideas.",
    },
    {
      id: 6,
      image: "https://i.pinimg.com/736x/ed/a2/f2/eda2f2674db3ec284b211f946b5ffe73.jpg",
      title: "SIH Internal Hackathon 2024",
      description:
        "Campus-level hackathon under Smart India Hackathon 2024, sparking innovation and selecting teams for the national stage.",
    },
  ];

  // Animation transforms data
  const transforms = [
    [
      [10, 50, -10, 10],
      [20, -10, -45, 20],
    ],
    [
      [0, 47.5, -10, 15],
      [-25, 15, -45, 30],
    ],
    [
      [0, 52.5, -10, 5],
      [15, -5, -40, 60],
    ],
    [
      [0, 50, 30, -80],
      [15, -5, -40, 60],
    ],
    [
      [0, 55, -15, 30],
      [15, -5, -40, 60],
    ],
    [
      [0, 45, -20, 25],
      [30, -20, -50, 15],
    ],
  ];

  useEffect(() => {
    const stickySection = stickyRef.current;
    const stickyHeader = headerRef.current;
    const cards = cardsRef.current;
    const stickyHeight = window.innerHeight * 5;

    if (!stickySection || !stickyHeader) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: stickySection,
      start: "top top",
      end: `+=${stickyHeight}px`,
      pin: true,
      pinSpacing: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const maxTranslate = stickyHeader.offsetWidth - window.innerWidth;
        const translateX = -progress * maxTranslate;
        gsap.set(stickyHeader, { x: translateX });

        cards.forEach((card, index) => {
          if (!card) return;

          const delay = index * 0.1125;
          const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));

          if (cardProgress > 0) {
            const cardStartX = 25;
            const cardEndX = -650;
            const yPos = transforms[index][0];
            const rotations = transforms[index][1];

            const cardX = gsap.utils.interpolate(
              cardStartX,
              cardEndX,
              cardProgress
            );

            const yProgress = cardProgress * 3;
            const yIndex = Math.min(Math.floor(yProgress), yPos.length - 2);
            const yInterpolation = yProgress - yIndex;
            const cardY = gsap.utils.interpolate(
              yPos[yIndex],
              yPos[yIndex + 1],
              yInterpolation
            );

            const cardRotation = gsap.utils.interpolate(
              rotations[yIndex],
              rotations[yIndex + 1],
              yInterpolation
            );

            gsap.set(card, {
              xPercent: cardX,
              yPercent: cardY,
              rotation: cardRotation,
              opacity: 1,
            });
          } else {
            gsap.set(card, { opacity: 0 });
          }
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section
      ref={stickyRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <div
        ref={headerRef}
        className="absolute top-0 left-0 w-180vw h-full flex justify-center items-center"
        style={{ willChange: "transform" }}
      >
        <h1 className="m-0 text-cream text-30vw font-medium tracking-tighter-custom leading-none ">
          Our Journey
        </h1>
      </div>

      {cardData.map((card, index) => (
        <Card
          key={card.id}
          imageSrc={card.image}
          title={card.title}
          description={card.description}
          ref={(el) => (cardsRef.current[index] = el)}
        />
      ))}
    </section>
  );
};

export default StickySection;
