import clsx from "clsx"
import { footer } from "../constant"

const Footer = () => {
  return (
    <footer className="sm:pt-section_desktop_margin pt-8 pb-[62px] flex flex-col gap-8">
      <div className="w-full xl:px-[115px] flex justify-between max-sm:flex-col max-sm:gap-8">
        <div className="flex flex-col gap-3">
          {footer[0].map((MenusItems,index)=>(
            <a
            key={MenusItems.text}

            className={clsx(
              "body hover:text-accent transition-colors ease-out duration-150",
              index==0?"font-bold underline":"font-normal"
            )}
            href={MenusItems.href}>{MenusItems.text}</a>
          ))}
        </div>
        <div className="flex flex-col gap-3">
           {footer[1].map((MenusItems,index)=>(
            <a
            key={MenusItems.text}
            className={clsx(
              "body hover:text-accent transition-colors ease-out duration-150",
              index==0?"font-bold underline":"font-normal"
            )}
            href={MenusItems.href}>{MenusItems.text}</a>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
           <div className="span">Developed & Designed By Mehmet Bardakci</div> 
           <p className="body font-semibold">© 2025 Adnan Karatas rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer