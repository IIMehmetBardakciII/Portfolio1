type PropsType = {
  projectImage: string;
  projectName: string;
  projectNumber: string;
  projectDescription: string;
};
const ProjectSlider = ({
  projectImage,
  projectName,
  projectNumber,
  projectDescription,
}: PropsType) => {
  return (
<div className="w-[calc(100vw-48px)] sm:w-[calc(100vw-80px)] max-w-[1440px] max-lg:h-max flex-shrink-0">
      <img src={projectImage} alt={projectName} className="  w-full max-lg:h-[400px] max-sm:h-[276px] max-h-[667px]   object-cover object-[center_30%]  "  />
      {/* Number , project name , description */}
      <div className="flex sm:justify-between w-full sm:items-center max-sm:flex-col gap-5  max-sm:gap-3 max-sm:h-[235px]">
        <div className="w-2/3 max-sm:w-full">
          <p className="body text-body_color_Dark">[{projectNumber}]</p>
          <p className="xl:h3 body text-secondary">{projectName}</p>
        </div>
        <span className=" xl:w-1/3 sm:w-1/2 span text-body_color_Dark h-[98px] max-lg:h-full w-full">{projectDescription}</span>
      </div>
    </div>
  );
};

export default ProjectSlider;
