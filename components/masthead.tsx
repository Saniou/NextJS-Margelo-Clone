import React, { useRef, useState, useContext, useEffect, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "@/utils/scroll-observer";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  const [translateY, setTranslateY] = useState(0);
  const [imageLoader, setImageLoader] = useState(false)

  useEffect(() => {
    if (refContainer.current) {
      const { clientHeight } = refContainer.current;
      const progress = Math.min(1, scrollY / clientHeight);
      setTranslateY(progress * 80);
    }
  }, [scrollY]);
  
  const handleLoader = useCallback(() => {
    setImageLoader(true)
  }, [])

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center relative z-0"
      style={{
        transform: `translateY(${translateY}vh)`,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover brightness-50"
      >
        <source src="/assets/header-bg.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/assets/header-bg.webm" type="video/webm; codecs=vp9" />
      </video>
      <div className={`flex-grow-0 pt-0 transition-opacity duration-1000 ${imageLoader ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
        <Image
          src="/assets/logo1.png"
          className="z-100 absolute top-10"
          width={128 / 3}
          height={114 / 3}
          alt="logo"
          onLoad={handleLoader}
        />
      </div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Krasulk@</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>App Development,</span> <span>done right.</span>
        </h2>
      </div>
      <div className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${imageLoader ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
        <Image
          className="z-100 absolute bottom-10"
          src="/assets/arrow-down.webp"
          width={128 / 3}
          height={114 / 3}
          alt="arrow-down"
        />
      </div>
    </div>
  );
};

export default Masthead;