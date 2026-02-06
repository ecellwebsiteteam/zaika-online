"use client";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import AnimatedCopy from "@/components/AnimatedCopy";
import { Button } from "@/components/ui/button";
// import { ImageSwiper } from "../image-swiper";

export default function EventsPage() {
  const navigate = useNavigate();

  // const ffUrls = "/events/ff1.jpg,/events/ff2.jpg,/events/ff3.jpg,/events/ff4.jpg,/events/ff5.png,/events/ff6.png";

  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} options={{ autoRaf: false }}>
      {/* Hero Section */}
      <section className="relative w-full h-[100svh] p-4">
  {/* Background Image */}
  <img
    src="https://i.pinimg.com/736x/e6/d8/76/e6d876af65ad4ebd42c677f90d5e3066.jpg"
    alt="Hero"
    className="w-full h-full object-cover rounded-xl"
  />

  {/* Full-section Blur & Tint Overlay */}
  <div className="absolute inset-0 bg-black/30 backdrop-blur-md flex flex-col items-center justify-center text-center px-4 rounded-xl">
    <h2 className="text-white text-5xl font-[vampire] md:text-9xl font-bold mb-4">
      Welcome to the Hub of Innovation
    </h2>
    <p className="text-white font-[font1] text-base md:text-xl px-5 max-w-2xl">
      Explore, Connect, and Celebrate Bold Ideas — Where Visionaries Meet
      to Share, Learn, and Build the Future.
    </p>
  </div>
</section>



      {/* About Section */}
      <section className="border-dashed border-4 border-zinc-700 rounded-4xl  my-[5svh] mx-[4svw] relative w-[92svw] min-h-[90svh] p-4 flex flex-col items-center justify-center text-center">
        <h1 className=" font-[vampire] p-10 text-4xl md:text-[4rem] font-semibold leading-tight md:leading-[1.1]  md:tracking-[0.1rem] w-full md:w-2/3 max-w-5xl mx-auto mb-6 text-white">
         Ideas That Spark the Future
        </h1>
        <div className="w-full md:w-1/3 md:min-w-2xl px-2">
          <AnimatedCopy>
            <p className="text-base font-[font1] md:text-xl leading-relaxed font-bold">
              Showcasing innovation, collaboration, and entrepreneurship — these events bring together students, startups, and leaders to celebrate bold ideas and real-world impact. From hands-on workshops to high-energy pitch competitions, each experience empowers participants to explore new technologies, develop creative solutions, and connect with mentors and investors. Join us to learn, grow, and be inspired by the brightest minds shaping tomorrow.
            </p>
          </AnimatedCopy>
        </div>
      </section>

      {/* Banner Section */}
      <section className="  relative w-full h-[20vh] md:h-[60svh] p-4 mb-10">
        <img src="https://i.pinimg.com/originals/d8/e6/eb/d8e6eb6b345ada088e2448947c483ab4.gif" alt="" className="w-full h-full overflow-hidden object-cover rounded-3xl" />
      </section>

      {/* Services Section */}
      <div className="flex flex-col">
        {/* Service 1 */}
        <div className="border-dashed border-4 border-zinc-700 rounded-4xl  my-[5svh] mx-[4svw] w-[92svw] min-h-[90svh]  flex  flex-col md:flex-row gap-4 md:gap-8  p-4">
          <div className="flex-1 flex flex-col justify-center items-center rounded-xl overflow-hidden">
            <div className="w-full md:w-3/4 p-2 md:p-0">
              <h3 className="text-3xl md:text-[2.5rem] font-semibold leading-snug font-[vampire] tracking-[0.1rem] text-white mb-4">
                Food Fiesta
              </h3>
              <AnimatedCopy>
                <p className="font-[font1]  text-sm md:text-xl leading-relaxed font-medium">
                  A buzzing campus food fest blending taste with entrepreneurship. Over 1500+ visitors experienced student-led stalls, culinary innovations, and interactive activities. The event promotes creative business ideas, hands-on experimentation, and connects aspiring food entrepreneurs with mentors and enthusiasts.
                </p>
              </AnimatedCopy>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/90/42/c5/9042c5c6833f4a4932062f892691294f.jpg"
              alt="Project Pillar"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Service 2 */}
        <div className="border-dashed border-4 border-zinc-700 rounded-4xl  my-[5svh] mx-[4svw] w-[92svw] min-h-[90svh]
        flex flex-col-reverse md:flex-row gap-4 md:gap-8  p-4">
          <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/f2/95/41/f2954155cfcd3da4e6b66263cee9351a.jpg"
              alt="Project Pillar"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center rounded-xl overflow-hidden">
            <div className="w-full md:w-3/4 p-2 md:p-0">
              <h3 className="text-3xl md:text-[2.5rem] font-semibold leading-snug font-[vampire] tracking-[0.1rem] text-white mb-4">
                Project Pillar
              </h3>
              <AnimatedCopy>
                <p className="font-[font1]  text-sm md:text-xl leading-relaxed font-medium">
                  Our flagship pitch event where startups connect with top investors, industry mentors, and potential partners. 30% of 2022 startups successfully secured funding or strategic collaborations, gaining exposure and valuable guidance to scale their ideas. The event provides startups a platform to pitch, network, and receive feedback from experienced professionals.
                </p>
              </AnimatedCopy>
            
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="border-dashed border-4 border-zinc-700 rounded-4xl  my-[5svh] mx-[4svw] w-[92svw] min-h-[90svh]
        flex flex-col md:flex-row gap-4 md:gap-8 p-4">
          <div className="flex-1 flex flex-col justify-center items-center rounded-xl overflow-hidden">
            <div className="w-full md:w-3/4 p-2 md:p-0">
              <h3 className="text-3xl md:text-[2.5rem] font-semibold leading-snug font-[vampire] tracking-[0.1rem] text-white mb-4">
                Meet the Innovator
              </h3>
              <AnimatedCopy>
                <p className="font-[font1]  text-sm md:text-xl leading-relaxed font-medium">
                  High-energy session with Shark Tank–recognized founders sharing real startup journeys, failures, pivots, and growth strategies. Attendees gain insight into practical challenges, business decision-making, and lessons learned, inspiring the next generation of innovators to take bold steps.
                </p>
              </AnimatedCopy>
            
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/75/6e/5b/756e5bcdaf1fb0a2c03f8017a05f17a8.jpg"
              alt="Meet the Innovator"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Service 4 */}
        <div className="border-dashed border-4 border-zinc-700 rounded-4xl  my-[5svh] mx-[4svw] w-[92svw] min-h-[90svh]
        flex flex-col-reverse md:flex-row gap-4 md:gap-8  p-4">
          <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/11/47/aa/1147aa32861e5722534c6234af83c268.jpg"
              alt="Meet the Entrepreneur"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center rounded-xl overflow-hidden">
            <div className="w-full md:w-3/4 p-2 md:p-0">
              <h3 className="text-3xl md:text-[2.5rem] font-semibold leading-snug font-[vampire] tracking-[0.1rem] text-white mb-4">
                Meet the Entrepreneur
              </h3>
              <AnimatedCopy>
                <p className="font-[font1]  text-sm md:text-xl leading-relaxed font-medium">
                  Inspiring talks with founders and industry leaders on building sustainable businesses, overcoming challenges, and scaling ideas. Participants learn actionable strategies, funding tips, and team-building approaches while gaining motivation to execute their entrepreneurial visions.
                </p>
              </AnimatedCopy>
            
            </div>
          </div>
        </div>
      </div>

      {/* Service 5 */}
        <div className="border-dashed border-4 border-zinc-700 rounded-4xl  my-[5svh] mx-[4svw] w-[92svw] min-h-[90svh]  flex  flex-col md:flex-row gap-4 md:gap-8  p-4">
          <div className="flex-1 flex flex-col justify-center items-center rounded-xl overflow-hidden">
            <div className="w-full md:w-3/4 p-2 md:p-0">
              <h3 className="text-3xl md:text-[2.5rem] font-semibold leading-snug font-[vampire] tracking-[0.1rem] text-white mb-4">
                Design Thinking Workshop
              </h3>
              <AnimatedCopy>
                <p className="font-[font1]  text-sm md:text-xl leading-relaxed font-medium">
                  Hands-on workshop fostering creativity, empathy, and problem-solving through design thinking principles. Participants engage in practical exercises, prototyping, and collaborative problem-solving to design impactful solutions.
                </p>
              </AnimatedCopy>
            
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center rounded-xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/3d/2f/01/3d2f01cbfcced247d73375c54f4b3ccc.jpg"
              alt="Design thinking"
              className="w-full h-[35vh] lg:h-[50vh] object-cover rounded-xl"
            />
          </div>
        </div>

      {/* Outro Section */}
      <section className="relative w-full min-h-[70svh] p-4 flex items-center justify-center text-center">
        <h3 className="text-2xl text-white md:text-[2.5rem] font-semibold leading-snug tracking-tight mb-4">
          Stay tuned for our upcoming events!
        </h3>
      </section>
    </ReactLenis>
  );
}
