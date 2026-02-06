import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Global GSAP configuration (matching original main.js)
gsap.ticker.lagSmoothing(0);

// Note: Lenis is disabled in the original migration-package
// Uncomment below if you want to enable smooth scrolling:
// import Lenis from "lenis";
// const lenis = new Lenis({
//   smoothWheel: true,
//   smoothTouch: false,
// });
// lenis.on("scroll", () => {
//   ScrollTrigger.update();
// });
// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

export { gsap, ScrollTrigger };
