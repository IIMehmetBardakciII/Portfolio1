import gsap from "gsap";
import {  SplitText } from "gsap/all";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(SplitText);
import { useLenis } from "lenis/react";
import Curve from "./Curve";
import HoverTextAnimationSecondary from "./HoverTextAnimationSecondary";


const links = [
  {
    id: "01",
    text: "Home",
  },
  {
    id: "02",
    text: "Services",
  },
  {
    id: "03",
    text: "Projects",
  },
  {
    id: "04",
    text: "About",
  },
  {
    id: "05",
    text: "Contact",
  },
];
const HamburgerMenu = () => {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const hamburgerContainerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setOpen((current) => !current);

    const tl = gsap.timeline();
    const splitText = SplitText.create(".splitP", {
      type: "words,lines",
      mask: "lines",
    });

    if (!open) {
      tl.fromTo(
        hamburgerContainerRef.current,
        { x: "100%" },
        { x: "0%", duration: 1, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
      );
      tl.from(
        splitText.words,
        {
          duration: 0.8,
          yPercent: 100,
          opacity: 0,
          stagger: 0.05,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          onComplete: () => {},
        },
        "-=0.3"
      );
    } else {
      tl.to(splitText.words, {
        duration: 0.8,
        yPercent: 100,
        opacity: 0,
        stagger: 0.05,
        ease: "expo.out",
      });
      tl.to(
        hamburgerContainerRef.current,
        {
          x: "100%",
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            splitText.revert(); // animasyon sonunda temizle
          },
        },
        "-=1"
      );
    }
  };

  useEffect(() => {
  if (!open) return;

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClick(); // Menü kapat
    }
  };

  document.addEventListener("keydown", handleEscape);

  return () => {
    document.removeEventListener("keydown", handleEscape);
  };
}, [open]);

  return (
    <>
      <button
        className={`w-16 h-16 rounded-full  cursor-pointer relative z-10
          ${open ? "bg-secondary" : "bg-primary"}
          `}
        onClick={handleClick}
      >
        {/* Top Line */}
        <span
          className={`absolute left-4 top-1/2 w-8 h-[0.75px]  transition-transform duration-500 ease-in-out origin-center ${
            open ? "rotate-45 bg-primary " : "-translate-y-1 bg-secondary"
          }`}
        />

        {/* Bottom Line */}
        <span
          className={`absolute left-4 top-1/2 w-8 h-[0.75px]  transition-transform duration-500 ease-in-out origin-center ${
            open ? "-rotate-45 bg-primary " : "translate-y-1 bg-secondary"
          }`}
        />
      </button>

      {/* Side menu  */}
      <div className="fixed inset-0   w-full max-sm:w-screen  translate-x-full   z-[2]"  
      ref={hamburgerContainerRef}>
        <div
          className="w-[600px] max-sm:w-full   h-screen bg-primary absolute right-0 top-0 pointer-events-auto"
        >
          <div className="w-full px-[34px] mt-8 h-full flex justify-center flex-col gap-2 max-sm:gap-8 relative">
            {links.map((link) => (
              <div
                key={link.id}
                className="flex gap-5 items-center hover:bg-accent transition-colors cursor-pointer"
              >
                <span className="body text-body_color_Dark">[{link.id}]</span>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick();
                    const targetId = link.text.toLowerCase();
                    const element = document.querySelector(
                      `#${targetId}`
                    ) as HTMLElement;
                    if (element) {
                      lenis?.scrollTo(element);
                    }
                  }}
                  href={`#${link.text.toLowerCase()}`}
                >
                  <span className="splitP sm:h3 max-sm:font-semibold body text-secondary">
                    {link.text}
                  </span>
                </a>
              </div>
            ))}

            {/* Social media */}
            <div className="flex flex-col gap-3" >
              <span className="min_text text-body_color_Dark block">Socials</span>
              <span className="min_text text-secondary">adnankaratas@gmail.com</span>
              <div className="flex gap-4 max-sm:flex-col">
                            <HoverTextAnimationSecondary href="#" title="Instagram" /> 
                            <HoverTextAnimationSecondary href="#" title="Linkedin" /> 
                            <HoverTextAnimationSecondary href="#" title="Github" /> 
                            <HoverTextAnimationSecondary href="#" title="Twitter" /> 
              </div>
            </div>
          </div>

          <Curve isOpen={open} />
        </div>
      </div>
      
     
   
    </>
  );
};

export default HamburgerMenu;
