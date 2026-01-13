"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

// --- Data Structure ---
const SLIDES = [
  {
    id: 1,
    image: "/banners/Banner - 1.png",
    subTitle: (
      <p className="text-gray-600 text-[16px] md:text-base font-medium mb-2 tracking-wide font-sans">
        Advanced Cancer Care in the Heart of{" "}
        <span className="text-[#e76f51]">Surat</span>,
      </p>
    ),
    title: (
      <>
        India's First <span className="text-[#e76f51]">AI-Powered</span> <br />
      </>
    ),
    description: (
      <>
        ETHOS Radiotherapy | Expert Oncologists | <br />
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
    image: "/banners/Banner - 3.png", // Ensure this path exists in your public folder
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

  // --- Animation Logic (Pure Fade) ---
  const animateSlide = contextSafe((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const currentSlide = slideRefs.current[activeIndex];
    const nextSlide = slideRefs.current[newIndex];

    if (!currentSlide || !nextSlide) {
      setIsAnimating(false);
      return;
    }

    // 1. Fade OUT Current Slide
    gsap.to(currentSlide, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      zIndex: 1,
      onComplete: () => {
        // Optional: You could set visibility: 'hidden' here if needed,
        // but opacity 0 is usually sufficient for fade effects.
      },
    });

    // 2. Fade IN Next Slide
    gsap.fromTo(
      nextSlide,
      {
        opacity: 0,
        zIndex: 2, // Bring to front
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

  // --- Handlers ---
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
      className="relative w-full h-125 overflow-hidden bg-gray-100 font-sans group"
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
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={slide.image}
              alt="Hero Banner"
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
            {/* Gradient Overlay for Text Readability
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-10" /> */}
          </div>

          {/* Text Content */}
          <div className="relative z-20 h-full container ml-[130px] mt-[103px] px-6 md:px-20 flex ">
            <div className="max-w-[503px] space-y-6">
              {slide.subTitle && slide.subTitle}

              <h2 className="text-4xl md:text-4xl font-medium text-gray-900 leading-tight font-sans">
                {slide.title}
              </h2>

              {slide.description && (
                <p className="text-gray-700 text-lg font-medium">
                  {slide.description}
                </p>
              )}

              {slide.emergency && (
                <p className="text-[#258195] font-normal text-[14px]">
                  {slide.emergency}
                </p>
              )}

              <button className="bg-[#E56E1B] hover:bg-[#d65f43] text-white px-8 py-3 rounded-md font-semibold transition-colors flex items-center gap-2 mt-4">
                Book Consultation
                <span className="text-xl">
                  <ArrowUpRight size={20} color="currentColor" />
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* --- Arrows --- */}
      {/* Previous */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-[#e56e1b] text-gray-800 p-3 rounded-full shadow-md backdrop-blur-sm transition-all duration-300"
        aria-label="Previous Slide"
      >
        <ArrowLeft color="#fff" />
      </button>

      {/* Next */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-[#e56e1b]  text-gray-800 p-3 rounded-full shadow-md backdrop-blur-sm transition-all duration-300"
        aria-label="Next Slide"
      >
        <ArrowRight color="#fff" />
      </button>

      {/* --- Dots --- */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? "bg-[#e76f51] w-8"
                : "bg-gray-400/50 hover:bg-gray-600 w-3"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
