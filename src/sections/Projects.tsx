import { useRef } from "react";
import ProjectSlider from "../components/ProjectSlider";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
useGSAP(() => {
  const initScrollAnimation = () => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) {
      // cleanup (animasyon varsa iptal et)
      ScrollTrigger.getAll().forEach((t) => t.kill());
      return;
    }

    const sliderWidth = sliderRef.current?.scrollWidth || 0;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const scrollDistance = sliderWidth - containerWidth;

    if (!sliderRef.current || !containerRef.current || scrollDistance <= 0) return;

    gsap.to(sliderRef.current, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top+=100 top",
        end: `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  };

  // İlk başlatma
  initScrollAnimation();

  // Resize durumunda yeniden başlat
  const handleResize = () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    initScrollAnimation();
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);

  return (
    <section className="pt-section_desktop_margin w-full relative h-full">
      <SectionHeader
        title="Projects"
        subtitle="Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
        sectionNumber="03"
        variant="right"
        icon="/projectsIcon.svg"
      />
      <div
        ref={containerRef}
        className="w-full mt-[100px] overflow-x-clip  overflow-y-hidden "
      >
        <div
          ref={sliderRef}
  className="xl:h-[855px] sm:h-[818px] h-full w-auto flex max-md:flex-col gap-10"
        >
          {projects.map((project) => (
            <ProjectSlider
              key={project.projectNumber}
              projectImage={project.projectImage}
              projectDescription={project.projectDescription}
              projectName={project.projectName}
              projectNumber={project.projectNumber}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
