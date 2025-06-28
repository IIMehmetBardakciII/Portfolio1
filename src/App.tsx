import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./components/Navbar";
import { useLenis } from "lenis/react";
import { useEffect } from "react";


// import Footer from "./components/Footer";
// import Hero from "./sections/Hero";

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
  }, [lenis]);

 gsap.ticker.lagSmoothing(0);
  return (
   <div className=" min-h-screen object-contain w-screen bg-[url('/white_Bg.svg')]">
   <div className="container whitegrid">
     <Navbar />
     {/* <main>
      <Hero />
     </main> */}
     {/* <Footer /> */}
   </div>
   </div>

  
  );
};

export default App;
