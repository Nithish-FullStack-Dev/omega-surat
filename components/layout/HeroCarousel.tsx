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
    mobileImage: "/banners/mobile-1.jpg",
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
    mobileImage: "/banners/mobile-2.jpg",
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
    mobileImage: "/banners/mobile-3.jpg",
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

  const animateSlide = contextSafe(
    (newIndex: number, direction: "next" | "prev") => {
      if (isAnimating || newIndex === activeIndex) return;
      setIsAnimating(true);

      const currentSlide = slideRefs.current[activeIndex];
      const nextSlide = slideRefs.current[newIndex];

      if (!currentSlide || !nextSlide) {
        setIsAnimating(false);
        return;
      }

      const xMove = direction === "next" ? 100 : -100;

      // Reset next slide position before animating in
      gsap.set(nextSlide, {
        xPercent: xMove,
        visibility: "visible",
        opacity: 1,
        zIndex: 2,
      });

      gsap.set(currentSlide, { zIndex: 1 });

      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          setActiveIndex(newIndex);
          gsap.set(currentSlide, { visibility: "hidden" });
        },
      });

      tl.to(currentSlide, {
        xPercent: -xMove,
        duration: 0.8,
        ease: "power3.inOut",
      });

      tl.to(
        nextSlide,
        {
          xPercent: 0,
          duration: 0.8,
          ease: "power3.inOut",
        },
        0
      );
    }
  );

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % SLIDES.length;
    animateSlide(nextIndex, "next");
    resetTimer();
  };

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? SLIDES.length - 1 : activeIndex - 1;
    animateSlide(prevIndex, "prev");
    resetTimer();
  };

  const handleDotClick = (index: number) => {
    const direction = index > activeIndex ? "next" : "prev";
    animateSlide(index, direction);
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
      className="relative w-full aspect-[4/5] sm:aspect-[4/3] md:aspect-[21/9] lg:max-h-[700px] overflow-hidden font-sans bg-gray-50"
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          ref={(el) => {
            slideRefs.current[index] = el;
          }}
          className="absolute inset-0 w-full h-full flex flex-col md:block"
          style={{
            visibility: index === 0 ? "visible" : "hidden",
            zIndex: index === 0 ? 2 : 1,
          }}
        >
          {/* IMAGE SECTION */}
          <div className="relative w-full h-1/2 md:h-full">
            <Image
              src={slide.image}
              alt="Hero Banner"
              fill
              priority={index === 0}
              className="hidden md:block object-cover"
            />
            <Image
              src={slide.mobileImage}
              alt="Hero Banner Mobile"
              fill
              priority={index === 0}
              className="block md:hidden object-cover"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="relative flex-1 md:absolute md:inset-0 z-20 flex flex-col justify-center items-center text-center px-6 py-8 md:items-start md:text-left md:ml-[10%] lg:ml-[12%]">
            <div className="w-full max-w-[520px] space-y-4 md:space-y-6">
              {slide.subTitle && (
                <div className="animate-fade-in">{slide.subTitle}</div>
              )}

              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {slide.title}
              </h2>

              {slide.description && (
                <p className="text-sm md:text-lg text-gray-700 max-w-md">
                  {slide.description}
                </p>
              )}

              {slide.emergency && (
                <p className="text-sm font-semibold text-[#258195] tracking-wide uppercase">
                  {slide.emergency}
                </p>
              )}

              <button className="mx-auto md:mx-0 bg-[#E56E1B] hover:bg-[#c45a13] transition-colors text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                Book Consultation
                <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* DESKTOP CONTROLS */}
      <div className="hidden md:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-6 z-40 pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto bg-white/90 hover:bg-[#e56e1b] hover:text-white text-gray-800 p-3 rounded-full shadow-xl transition-all"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto bg-white/90 hover:bg-[#e56e1b] hover:text-white text-gray-800 p-3 rounded-full shadow-xl transition-all"
        >
          <ArrowRight size={24} />
        </button>
      </div>

      {/* MOBILE CONTROLS (Overlapping Image) */}
      <div className="md:hidden absolute top-[25%] -translate-y-1/2 w-full flex justify-between px-4 z-40 pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto bg-[#e56e1b]/90 text-white p-2 rounded-full shadow-lg"
        >
          <ArrowLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto bg-[#e56e1b]/90 text-white p-2 rounded-full shadow-lg"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* PAGINATION DOTS */}
      <div className="absolute md:bottom-6 bottom-0 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "bg-[#e56e1b] w-8"
                : "bg-gray-300 w-2.5 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
