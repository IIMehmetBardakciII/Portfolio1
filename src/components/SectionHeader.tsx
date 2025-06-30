import clsx from "clsx";
import TextAnimation from "./TextAnimation";
import ServicesSteps from "./ServicesSteps";

type PropsType = {
  title: string;
  subtitle: string;
  icon: string;
  variant: "left" | "right";
  sectionNumber: string;
};
const SectionHeader = ({
  title,
  subtitle,
  icon,
  variant,
  sectionNumber,
}: PropsType) => {
  return (
    <div className="flex flex-col gap-10 max-sm:gap-[30px] w-full ">
      <div
        className={clsx(
          "flex justify-between w-full relative",
          variant == "right" && "flex-row-reverse"
        )}
      >
        <div>
          <TextAnimation>
            <div>
              <span className="span text-body_color_Dark">
                [{sectionNumber}]
              </span>
              <h1 className="h3 sm:h2 xl:h1 text-secondary">{title}</h1>
            </div>
          </TextAnimation>
          <img src="/lineVector.svg" alt="HeaderLineVector" />
        </div>
        <img
          src={icon}
          alt={icon}
          className="max-sm:scale-50 max-sm:absolute max-sm:right-0 max-sm:top-[-50px]"
        />
      </div>
      <div
        className={clsx(
          "w-full flex ",
          variant == "left" ? "justify-end" : "justify-start"
        )}
      >
        <TextAnimation>
          <p className="body max-sm:span text-body_color_Dark  xl:w-1/2 w-full h-[132px]">
            {subtitle}
          </p>
        </TextAnimation>
      </div>

      
    </div>
  );
};

export default SectionHeader;
