import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useLenis } from "lenis/react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import FixedRightNavigation from "./components/FixedRightNavigation";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useLenis();

  // === Lenis Scroll setup ===
  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);



  return isLoading ? (
    <PreLoader onComplete={() => setIsLoading(false)}   /> 
    
  ) : (
    <div
      id="main-content"
      className=" w-screen min-h-screen object-cover bg-[url('/white_Bg.webp')]"
    >
      <div className="container whitegrid">
        <Navbar />
        <Hero />
      </div>

      <div className="w-full h-full object-cover bg-[url('/dark_Bg.webp')] relative z-20">
        <div className="container darkgrid">
          <Services />
          <Projects />
          <About />
        </div>
      </div>

      <div className="w-full h-full bg-[url('/dark_Bg.webp')] relative z-20">
        <div className="container darkgrid">
          <Contact />
        </div>
      </div>

      <div className="container">
        <FixedRightNavigation />
      </div>

      <div className="container whitegrid">
        <Footer />
      </div>
    </div>
  );
};

export default App;
