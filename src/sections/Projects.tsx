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
  const containerRefProjects = useRef<HTMLDivElement | null>(null);

  function getScrollDistance() {
  return (
    (sliderRef.current?.scrollWidth || 0) -
    (containerRefProjects.current?.offsetWidth || 0)
  );
}
useGSAP(() => {
  if (
    !sliderRef.current ||
    !containerRefProjects.current ||
    getScrollDistance() <= 0
  )
    return;

  const ctx = gsap.context(() => {
    const mediaGsap = gsap.matchMedia();

    mediaGsap.add("(min-width: 768px)", () => {
      gsap.to(sliderRef.current, {
        x: () => -getScrollDistance(), // ✅ Fonksiyon olarak verildi
        scrollTrigger: {
          trigger: containerRefProjects.current,
          start: "top+=100 top",
          end: () => `+=${getScrollDistance()}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // ✅ Scroll mesafesi yeniden hesaplanır
        },
      });
    });
  });

  // ✅ Resize durumunda refresh yap (scrollTrigger tekrar ölçüm alsın)
  const handleResize = () => {
   ScrollTrigger.refresh()
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    ctx.revert(); // Tüm GSAP context temizlik
  };
});


  return (
    <section className="pt-section_desktop_margin w-full relative h-full ">
      <SectionHeader
        title="Projects"
        subtitle="Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
        sectionNumber="03"
        variant="right"
        icon="/projectsIcon.svg"
      />
      <div
        ref={containerRefProjects}
        className="w-full mt-[100px] overflow-x-clip  overflow-y-hidden "
      >
        <div
          ref={sliderRef}
          className="xl:h-[855px]  h-full w-auto flex max-md:flex-col gap-10  "
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
