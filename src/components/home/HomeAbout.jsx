import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useRef, useEffect } from "react";
// import AnimatedCopy from "../AnimatedCopy";

gsap.registerPlugin(ScrollTrigger, SplitText);

const HomeAbout = () => {
  const AboutRef = useRef(null);
  const AboutContentRef = useRef(null);

  useGSAP(() => {
    
    // Animate About Title
    gsap.from(AboutRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: AboutRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });


    // const split = new SplitText(AboutContentRef.current, {
    //   type: "lines,words,chars",
    // });

    // // Animate characters glowing in
    // gsap.from(split.chars, {
    //   opacity: 0,
    //   color: "#444", // start dim
    //   textShadow: "5px 5px 5px #7638e8", // glow effect
    //   duration: 0.7,
    //   ease: "power2.out",
    //   stagger: 0.03, // delay per character
    //   scrollTrigger: {
    //     trigger: AboutContentRef.current,
    //     start: "top 70%",
    //     end: "bottom 100%",
    //     scrub: true, // sync with scroll
    //   },
    // });
  });

  return (
    <div>
      <div className="home-about h-auto  w-screen flex flex-col lg:flex-col  text-[#afafb2]">
        {/* Left / Top (About title) */}
        <div
          ref={AboutRef}
          className=" home-about-1 w-full lg:w-2/3 font-[vampire] flex justify-center lg:justify-start items-center text-3xl sm:text-6xl md:text-6xl lg:text-7xl text-white pt-[10vh]  lg:pt-[10vh] px-4 lg:pl-48 text-center lg:text-left"
        >
          About <br />
          EIC Sakec
        </div>

        {/* Right / Bottom (Content) */}
       
        <div
          ref={AboutContentRef}
          className="about-text w-full lg:w-2/3 pt-5  lg:pt-[5vh] px-[10vw]  lg:px-[10vw] lg:ml-[30vw] sm:px-10 md:px-[15vw] text-l sm:text-lg md:text-xl  font-[font1] text-center lg:text-center"
        >
          Every great journey begins with an idea and at SAKEC EIC, ideas have been our driving force since 2017. From leadership talks and innovation-driven events like Meet the Entrepreneur, Meet the Innovator, Design Thinking Workshops, Food Fiesta, and Project Pillar, we’ve grown with every step. Starting with Hunar in 2017, launching Project Pillar in 2022, and now hosting our biggest Food Fiesta in 2025, our journey has been one of impact and growth. And this is just the beginning, the best of SAKEC EIC is yet to come.
        </div>
        
      </div>
    </div>
  );
};

export default HomeAbout;
