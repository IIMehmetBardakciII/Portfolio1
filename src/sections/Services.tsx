import SectionHeader from "../components/SectionHeader";
import ServicesSteps from "../components/ServicesSteps.tsx";
import {servicesSteps} from "../constant/index.ts";

const Services = () => {
  return (
    <section id="services" className="pt-section_desktop_margin w-full relative ">
      <SectionHeader
        sectionNumber="02"
        title="services"
        subtitle="Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. "
        icon="/servicesIcon.svg"
        variant="left"
      />
      {/* Services steps */}
     <div className="flex flex-col mt-[84px] max-sm:mt-16 w-full ">
       {(servicesSteps as any).map((service:any)=>(
        <ServicesSteps key={service.number} description={service.description} title={service.title} number={service.number} />
       ))}
     </div>
    </section>
  );
};

export default Services;
