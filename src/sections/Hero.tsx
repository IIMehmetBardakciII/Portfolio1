  import { useGSAP } from "@gsap/react";
  import Button from "../components/Button";
  import TextAnimation from "../components/TextAnimation";
  import gsap from "gsap";
  import { useRef } from "react";
  import { ScrollTrigger } from "gsap/all";

  const Hero = () => {
    const herocontainerRef=useRef<HTMLElement|null>(null);

 
useGSAP(()=>{
  const ctx=gsap.context(()=>{
      // 🎯 Giriş animasyonu sadece image için
      gsap.from("#imagehero", {
        x: "-50%",
        opacity: 0,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        duration: 1,
      });

      // 🎯 Hero section'u pinliyoruz
      ScrollTrigger.create({
        trigger: herocontainerRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        // markers: true,
      });
gsap.fromTo(
        herocontainerRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: "-50%",
          scale: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: herocontainerRef.current,
            start: "top top",
            end: "+=100%",
            scrub: true,
          },
        }
      );
  },herocontainerRef);
  return ()=>ctx.revert();
},[])

    return (
      <header id="home" ref={herocontainerRef} className="relative z-10 xl:mt-[60px] sm:mt-10 mt-5 flex  flex-col gap-[40px] min-h-screen pb-section_desktop_margin">
        <div className="w-full ">
        <TextAnimation><h1 className="xl:h1 sm:h2 h3">adnan karatas</h1></TextAnimation>
        </div>
        <div className="flex w-full justify-between max-sm:flex-col gap-4 h-[524px]">
          <img id="imagehero" src="/ImageHeroLeftSide.webp" alt="HeroLeftImage" className="object-cover w-1/2 max-sm:h-[230px] max-sm:w-full  h-full " />

          <div className="w-[548px] max-xl:w-full flex flex-col sm:justify-around  max-sm:gap-5 ">
          <div className="w-full flex flex-col gap-4">
            <TextAnimation>
            <div >
            <span className="span text-body_color_Light">[01]</span>
            <p className="body max-xl:span text-body_color_Light">
              I develop solutions that shape the future through embedded systems
              and artificial intelligence. I love coding and solving complex
              problems. Explore my projects and let’s create new ideas together!
            </p>
          </div>
          </TextAnimation>
          </div>
          <div className="flex justify-center ">
            <Button variant="variant1" />
          </div>
          </div>
        </div>

      </header>
    );
  };

  export default Hero;
