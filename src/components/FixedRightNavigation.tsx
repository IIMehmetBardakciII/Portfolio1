import { useRef, useEffect } from "react"; // useEffect'i ekleyin
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import HamburgerMenu from "./HamburgerMenu";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const FixedRightNavigation = () => {
  const menuRef = useRef<HTMLDivElement | null>(null);

// useEffect(() => {
//   const handleResize = () => {
//     ScrollTrigger.refresh();
//   };
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);

useGSAP(() => {
  if (!menuRef.current) return;

  const tween = gsap.fromTo(
    menuRef.current,
    { opacity: 0},
    { opacity: 1, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
  );

  const trigger=ScrollTrigger.create({
    trigger: document.body,
    start: () => `${window.innerHeight + 200} top`,
    end: () => `${window.innerHeight + 400} top`,
    scrub: true,
    animation: tween,
    // markers: true,
    invalidateOnRefresh: true,
  });

  return  ()=> {trigger.kill(),tween.kill()}
});


  return (
    <div
      ref={menuRef}
      className="fixed right-5 top-5 z-30 flex gap-10 max-sm:gap-5 min-h-[64px]"
    >
      <Button
        variant="variant2"
        additionalClass="relative z-100 max-sm:py-[5px]"
      />

      <HamburgerMenu variant="variant2" />
    </div>
  );
};

export default FixedRightNavigation;
