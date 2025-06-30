import clsx from "clsx";

type PropsType = {
  variant: "variant1" | "variant2";
  additionalClass?: string;
};
const Button = ({ variant, additionalClass }: PropsType) => {
  return (
    <a
      href="#"
      className={clsx(
        "xl:px-[50px] xl:py-[20px] sm:px-[30px] sm:py-[20px] px-[10px] py-[20px] rounded-full hover:scale-95 duration-500 transition-all ease-[cubic-bezier(0.25, 1, 0.5, 1)] flex gap-[10px] w-max max-sm:w-full max-sm:items-center max-sm:justify-center cursor-pointer span relative   overflow-hidden",
        variant == "variant1"
          ? "bg-primary text-secondary button_hover"
          : "bg-accent text-secondary hover:text-primary  button_hover2",
          "flex items-center",
        additionalClass
      )}
    >
      <span className="span relative z-[3]">LET'S WORK TOGETHER</span>
      <div>
        <svg
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-[2] text-current transition-colors duration-300 group-hover:text-primary"
      >
        <path
          d="M1.88462 0V2.76923H13.7785L0.5 16.0477L2.45231 18L15.7308 4.72154V16.6154H18.5V0H1.88462Z"
          fill="currentColor"
        />
      </svg>
      </div>
    </a>
  );
};

export default Button;
