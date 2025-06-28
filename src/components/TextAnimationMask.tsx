import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

const TextAnimationMask = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const splitTextRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!splitTextRef.current || !splitTextRef.current.firstChild) return;
    
    document.fonts.ready.then(() => {
      const target = splitTextRef.current!.firstElementChild as HTMLElement;
      if (!target) return;

      const splitText = SplitText.create(target, {
        type: "words, lines",
        mask:"lines"
      });

      gsap.from(splitText.words, {
        duration: 1,
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
      });
    });
  }, []);

  return <div ref={splitTextRef}>{children}</div>;
};

export default TextAnimationMask;
