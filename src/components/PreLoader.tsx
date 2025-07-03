import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useState } from "react";
gsap.registerPlugin(SplitText);


const PreLoader = ({onComplete}:{onComplete:()=>void}) => {
  const [progress, setProgress] = useState<number>(0);

  function randomIncrease() {
    const randomIncrease = Math.floor(Math.random() * 15) + 10;
    return randomIncrease;
  }
  // Counter random increase
  useEffect(() => {
  const intervalId = setInterval(() => {
    setProgress((prev) => {
      const raw = prev + randomIncrease();
      const next = Math.min(raw, 100);
      return next;
    });
  }, 600);

  return () => clearInterval(intervalId);
}, []);

useGSAP(() => {
  // 1) split olayı oluştur
  document.fonts.ready.then(()=>{
const split = SplitText.create(".digit", {
    type: "chars",
    mask:"chars"
  });

  // 2) animasyonu tetikle
  gsap.fromTo(
      split.chars,
      { y: 100, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        stagger: 0.05,    // hızlı ama ardışık
        duration: 0.3,   // tek char animasyonu 150ms sürsün
        ease: "power2.out",
      }
    );
     return () => {
    split.revert();
  };
  })
  

  // 3) cleanup: render sonrası önceki split’i geri al
 
}, [progress]);

  useGSAP(() => {
        if (progress !== 100) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "cubic-bezier(0.61, 1, 0.88, 1),",
        },
        onComplete:()=>onComplete()
      });
      if(progress===100){
        tl.to(".digit",{opacity:0})
        tl.fromTo(".name",{
            y:50,opacity:0
        },{y:0,opacity:1})
        .fromTo(".divider",{height:0},{height:"100%"})
        .to(".block1",{y:"100%"}).to(".block2",{y:"-100%"},"<")
        .to(".name",{opacity:0,y:50},"<").to(".spinner",{opacity:0},"<")
        
      }
    });

    return () => ctx.revert();
  },[progress]);
  return (
    <div className=" w-screen h-screen relative overflow-hidden">
        <div className="flex ">
        <span className=" block1 inline-block right-0 h-full w-1/2 absolute bg-primary"/>
        <span className=" block2 inline-block h-full w-1/2 absolute bg-primary"/>
        </div>
      <span className="spinner inline-block w-16 h-16 rounded-full border border-secondary border-t-[rgba(255,255,255,0.125)] animate-spin absolute bottom-[10%] left-1/2 -translate-x-1/2 bg-primary z-[10] " />
      <span className="w-[1px] h-[0px] bg-secondary inline-block left-1/2 -translate-x-1/2 absolute divider" />
      {/* Name */}
      <h1 className="h3 max-sm:body opacity-0 text-secondary absolute left-1/2 top-1/2 -translate-1/2 max-sm:w-full max-sm:text-center pl-10 max-sm:pl-5 name">
        Adnan Karatas
      </h1>
      {/* Counter */}
      <div className="w-full h-full flex items-center justify-center">
        <span className="digit text-secondary h1 max-sm:h2 inline-block">
          {String(progress ?? 0).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default PreLoader;
