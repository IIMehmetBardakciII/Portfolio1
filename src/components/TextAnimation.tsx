import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";
gsap.registerPlugin(SplitText, ScrollTrigger);

type PropsType = {
  children: React.ReactElement<any, any>;
  animateOnScroll?: boolean;
  delay?: number;
};
const TextAnimation = ({
  children,
  animateOnScroll = true,
  delay = 0,
}: PropsType) => {
  const containerRef = useRef<HTMLDivElement|null>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<any[]>([]);
  const lines = useRef<any[]>([]);

useGSAP(() => {
  if (!containerRef.current) return;

  // SplitText çalıştırılmadan önce fontların yüklenmesini bekle
  document.fonts.ready.then(() => {
    splitRef.current = [];
    elementRef.current = [];
    lines.current = [];

    let elements: HTMLElement[] = [];
    const container = containerRef.current as HTMLElement;

    if (container.hasAttribute("data-copy-wrapper")) {
      elements = Array.from(container.children) as HTMLElement[];
    } else {
      elements = [container];
    }

    elements.forEach((element) => {
      elementRef.current.push(element);

      const split = SplitText.create(element, {
        type: "lines",
        mask: "lines",
        linesClass: "line++",
      });

      splitRef.current.push(split);

      const computedStyle = window.getComputedStyle(element);
      const textIndent = computedStyle.textIndent;

      if (textIndent && textIndent !== "0px") {
        if (split.lines.length > 0) {
          (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
        }
        element.style.textIndent = "0";
      }

      lines.current.push(...split.lines);
    });

    gsap.set(lines.current, { y: "100%" });

    const animationProps = {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      delay: delay,
    };

    if (animateOnScroll) {
      gsap.to(lines.current, {
        ...animationProps,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });
    } else {
      gsap.to(lines.current, animationProps);
    }
  });

  // Temizleme
  return () => {
    splitRef.current.forEach((split) => {
      if (split) split.revert();
    });
  };
}, {
  scope: containerRef,
  dependencies: [animateOnScroll, delay],
});

  if(React.Children.count(children)===1){
  return React.cloneElement(children, { ref: containerRef });
  }
  return (
    <div ref={containerRef} data-copy-wrapper="true">
        {children}
    </div>
  )
};

export default TextAnimation;
