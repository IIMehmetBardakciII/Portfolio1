import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

const Curve = ({isOpen}:{isOpen:boolean}) => {
    const initialPath=`M100 0 L100 ${window.innerHeight} Q-50 ${window.innerHeight/2} 100 0`
    const targetPath=`M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`
    const pathRef=useRef<SVGPathElement|null>(null);
    useGSAP(()=>{
        if(!pathRef.current) return;
        gsap.to(pathRef.current,{
                  duration: isOpen ? 1.2 : 0.7,
      ease: "power2.inOut", // Framer-motion easing benzeri
      attr: { d: isOpen ? targetPath : initialPath },

        })
       
    },[isOpen])
  return (
    <svg className="svgCurve max-sm:hidden">
      <path       
        ref={pathRef}
        d={initialPath}
 ></path>
    </svg>
  )
}

export default Curve