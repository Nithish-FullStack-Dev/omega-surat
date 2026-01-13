"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    image: "/banners/Banner - 1.png",
    subTitle: (
      <p className="text-gray-600 text-sm md:text-base font-medium mb-2 tracking-wide font-sans">
        Advanced Cancer Care in the Heart of{" "}
        <span className="text-[#e76f51]">Surat</span>
      </p>
    ),
    title: (
      <>
        India's First <span className="text-[#e76f51]">AI Powered</span>
      </>
    ),
    description: (
      <>
        ETHOS Radiotherapy | Expert Oncologists |{" "}
        <br className="hidden md:block" />
        Compassionate Support
      </>
    ),
    emergency: "24/7 Emergency: 0261-226-5552",
  },
  {
    id: 2,
    image: "/banners/Banner - 2.png",
    subTitle: "",
    title: (
      <>
        World-Class <br />
        <span className="text-[#e76f51]">Cancer Technology.</span> <br />
        Right Here in <span className="text-[#e76f51]">Surat.</span>
      </>
    ),
    description: "",
    emergency: "24/7 Emergency: 0261-226-5552",
  },
  {
    id: 3,
    image: "/banners/Banner - 3.png",
    subTitle: "",
    title: (
      <>
        Complete <span className="text-[#e76f51]">Healthcare.</span> <br />
        One <span className="text-[#e76f51]">Trusted</span> Hospital.
      </>
    ),
    description:
      "From Heart to Ortho, Cancer to Critical Care. Expert Specialists Under One Roof!",
    emergency: null,
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const animateSlide = contextSafe((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const currentSlide = slideRefs.current[activeIndex];
    const nextSlide = slideRefs.current[newIndex];

    if (!currentSlide || !nextSlide) {
      setIsAnimating(false);
      return;
    }

    gsap.to(currentSlide, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      zIndex: 1,
    });

    gsap.fromTo(
      nextSlide,
      {
        opacity: 0,
        zIndex: 2,
        visibility: "visible",
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setIsAnimating(false);
          setActiveIndex(newIndex);
        },
      }
    );
  });

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % SLIDES.length;
    animateSlide(nextIndex);
    resetTimer();
  };

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? SLIDES.length - 1 : activeIndex - 1;
    animateSlide(prevIndex);
    resetTimer();
  };

  const handleDotClick = (index: number) => {
    if (index === activeIndex || isAnimating) return;
    animateSlide(index);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(handleNext, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[650px] md:h-125 overflow-hidden bg-gray-100 font-sans"
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => {
            slideRefs.current[index] = el;
          }}
          className="absolute inset-0 w-full h-full"
          style={{
            opacity: index === 0 ? 1 : 0,
            visibility: index === 0 ? "visible" : "hidden",
            zIndex: index === 0 ? 2 : 1,
          }}
        >
          <div className="absolute inset-0 w-full h-1/2 md:h-full z-0">
            <Image
              src={slide.image}
              alt="Hero Banner"
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          </div>

          <div
            className="
              relative z-20
              flex flex-col items-center text-center
              md:items-start md:text-left
              px-6
              pt-[320px] md:pt-0
              md:mt-36 lg:mt-[6.5rem]
              md:ml-[8rem]
              mt-5
            "
          >
            <div className="w-full max-w-[520px] md:max-w-[503px] space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
              {slide.subTitle && slide.subTitle}

              <h2 className="text-2xl md:text-4xl font-bold md:font-medium text-gray-900 leading-snug font-sans">
                {slide.title}
              </h2>

              {slide.description && (
                <p className="text-gray-700 text-base md:text-lg font-normal md:font-medium leading-relaxed">
                  {slide.description}
                </p>
              )}

              {slide.emergency && (
                <p className="text-[#258195] font-normal text-sm md:text-base">
                  {slide.emergency}
                </p>
              )}

              <button className="bg-[#E56E1B] hover:bg-[#d65f43] text-white px-10 md:px-8 py-3 rounded-lg md:rounded-md font-semibold transition-colors flex items-center gap-2 mt-4 w-fit">
                Book Consultation
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="absolute bottom-32 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === idx ? "bg-[#e56e1b] w-2.5" : "bg-gray-300 w-2.5"
            }`}
          />
        ))}
      </div> */}

      <div className="absolute md:bottom-10 bottom-1 left-1/2 -translate-x-1/2 flex gap-10 md:gap-0 md:block z-30 w-full max-w-fit md:max-w-none">
        <button
          onClick={handlePrev}
          className="md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 bg-[#e56e1b] text-white p-3 rounded-full shadow-md transition-all"
        >
          <ArrowLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          className="md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 bg-[#e56e1b] text-white p-3 rounded-full shadow-md transition-all"
        >
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
