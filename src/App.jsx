import React, { useRef, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Newsletters from "./pages/Newsletters";
import FoodFiesta from "./pages/FoodFiesta";
import NavBar from "./components/nav/NavBar";
import Navbar from "./components/nav/NavbarNew";


import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const lenisRef = useRef();
  const location = useLocation();
  const hideMainNavbar = location.pathname === "/food-fiesta";

  useEffect(() => {
    // Hook Lenis into GSAP’s ticker for sync
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);



  return (
    <ReactLenis 
      ref={lenisRef} 
      root 
      options={{ autoRaf: false }}
    >
      <div>
        
        <ScrollToTop lenis={lenisRef.current?.lenis} />

        {/* Routes */}
        <Routes>
    
          <Route path="/" element={<FoodFiesta />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/newsletters" element={<Newsletters />} />

        </Routes>
      </div>
    </ReactLenis>
  );
};

export default App;
