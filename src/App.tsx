import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import { useLenis } from "lenis/react";
import { useEffect } from "react";


// import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import FixedRightNavigation from "./components/FixedRightNavigation";
import About from "./sections/About";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const lenis = useLenis();
  

  useEffect(() => {
    if (!lenis) return;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
    return () => {
  lenis.off('scroll', ScrollTrigger.update);
};
  }, [lenis]);

 gsap.ticker.lagSmoothing(0);

  return (

     <div className="  object-contain w-screen bg-[url('/white_Bg.svg')] min-h-screen">
   <div className="container whitegrid">
     <Navbar />
      <Hero />
   </div>
   {/* Black area */}

   <div className="w-full h-full bg-[url('/dark_Bg.svg')] relative z-20">
      <div className="container darkgrid">
        <Services />
        <Projects />
        <About />
      </div>
   </div>

   <div className="container">
      <FixedRightNavigation />
    </div>
   </div>

  
  );
};

export default App;
