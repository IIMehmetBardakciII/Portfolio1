import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import HamburgerMenu from "./HamburgerMenu";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const FixedRightNavigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: `${window.innerHeight + 200} top`,
      onEnter: () => setShowMenu(true),
      onLeaveBack: () => setShowMenu(false),
    });

    return () => {
      trigger.kill();
    };
  }, []);



  if (!showMenu) return null;

  return (
    <div ref={menuRef} className="fixed right-5 top-5 z-50 flex gap-10 min-h-[64px]">
         <Button variant="variant2" additionalClass="relative z-100" />
        <HamburgerMenu variant="variant2" />
     
    </div>
  );
};

export default FixedRightNavigation;
