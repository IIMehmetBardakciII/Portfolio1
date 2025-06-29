import clsx from "clsx"

type PropsType={
    variant:"variant1"|"variant2";
    additionalClass?:string;
}
const Button = ({variant,additionalClass}:PropsType) => {
  return (
    <a href="#" className={clsx(
        "xl:px-[50px] xl:py-[20px] sm:px-[30px] sm:py-[20px] px-[10px] py-[20px] rounded-full hover:scale-95 duration-500 transition-all ease-[cubic-bezier(0.25, 1, 0.5, 1)] flex gap-[10px] w-max max-sm:w-full max-sm:items-center max-sm:justify-center cursor-pointer span relative button_hover overflow-hidden    ",
        variant=="variant1"?"bg-primary text-secondary":"bg-accent text-secondary",
        additionalClass
    )}>
      <span className="span relative z-[3] group-hover:text-accent">LET'S WORK TOGETHER</span>
      <img src="/arrow.svg" alt="arrowIcon" className="relative z-[2]" />  
    
    </a>
  )
}

export default Button