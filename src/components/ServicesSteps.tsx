import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

type PropsType = {
  title: string;
  number: string;
  description: string;
};
const ServicesSteps = ({ title, number, description }: PropsType) => {
  const serviceContainerRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);
 useGSAP(() => {
    if (
      !serviceContainerRef.current ||
      !titleRef.current ||
      !spanRef.current ||
      !descriptionRef.current
    )
      return;

    const ctx = gsap.context(() => {
      // span animation
      gsap.fromTo(
        spanRef.current,
        { backgroundColor: "var(--color-bg)", width: "0%" },
        {
          backgroundColor: "var(--color-secondary)",
          width: "100%",
          scrollTrigger: {
            trigger: serviceContainerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 2,
          },
        }
      );

      // timeline for title and description
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: serviceContainerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      tl.fromTo(titleRef.current, { opacity: 0, y: "50%" }, { opacity: 1, y: 0 }).fromTo(
        descriptionRef.current,
        { opacity: 0, y: "-50%" },
        { opacity: 1, y: 0 },
        "<"
      );
    }, serviceContainerRef); // scope veriyoruz

    return () => {
      ctx.revert(); // tüm GSAP ve ScrollTrigger animasyonlarını temizler
    };
  }, []);
  // useGSAP(() => {
    
  // }, []);

  return (
    <div ref={serviceContainerRef} className="w-full flex flex-col gap-[34px]">
      <div
        ref={titleRef}
        className="flex w-full justify-between text-secondary"
      >
        <h3 className="xl:h3 sm:body span">{title}</h3>
        <h3 className="xl:h3 sm:body span">[{number}]</h3>
      </div>
      <span ref={spanRef} className="inline-block h-[1px] mt-[-32px] bg-secondary" />
      <p
        ref={descriptionRef}
        className="text-bg sm:body span max-w-[668px] pb-4"
      >
        {description}
      </p>
    </div>
  );
};

export default ServicesSteps;
