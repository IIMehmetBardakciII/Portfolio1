import SectionHeader from "../components/SectionHeader";

const About = () => {
  return (
    <section className="w-full min-h-screen mt-section_desktop_margin" id="about">
      <SectionHeader
        sectionNumber="04"
        title="about me"
        icon="/questionIcon.svg"
        variant="left"
      />
      <div className="pb-4 w-full h-[657px]  max-sm:h-full flex max-sm:flex-col xl:gap-[124px] sm:gap-6 gap-4">
        <img
          src="/ImageHeroLeftSide.webp"
          alt="heroImage"
          className=" h-full object-cover w-1/2 max-sm:w-full  border "
        />
        <div className="flex flex-col gap-[50px] max-sm:gap-4 max-md:gap-3 ">
          <p className="text-secondary md:body span">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <span className="text-body_color_Dark">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </span>
          <span className="text-body_color_Dark">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </span>
          <span className="text-body_color_Dark">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
