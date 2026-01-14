"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  points: string[];
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Digital PET-CT – Artificial Intelligence (AI) Powered",
    subtitle: "INDIA'S FIRST & WORLD'S BEST",
    points: [
      "A revolution in imaging for cancer diagnosis.",
      "India’s first true digital PET-CT with LYSO digital PET detector.",
      "AI-driven imaging for accurate diagnosis and staging of cancer.",
      "65% less radiation exposure compared to analog PET-CT.",
      "Whole body scan in just a few minutes.",
      "Detection of tiny lesions for rapid diagnosis.",
      "Superior resolution & shortest scan acquisition time.",
      "One-stop solution for cardiac imaging including CT coronary angio.",
      "320-slice CT useful for early cardiology diagnosis.",
    ],
    image: "/images/expert-treatment/Section Image.png",
  },
  {
    id: 2,
    title: "Brachytherapy",
    points: [
      "Brachytherapy, or internal radiation therapy, is an important modality of treatment for cancers. It can be used alone or with external beam radiation therapy (done on linear accelerators). Brachy in Greek means short",
    ],
    image: "/images/expert-treatment/Section Image-1.png",
  },
  {
    id: 3,
    title: "CyberKnife VSI - Artificial Intelligence (AI) Powered",
    subtitle:
      "Only State of art Robotic Radiosurgery System in twin Telugu States",
    points: [
      "A revolution in Cancer treatment.",
      "The only whole body (100% of the body covered robotic radiosurgery system in the world, designed to treat tumors anywhere in the body",
      "Best treatment for specific conditions such as trigeminal neuralgia and vascular malformations.",
      "Shortest treatment duration of 1-5 days as against 30-40 days for traditional radiation freatment.",
      "Delivers high cancer-killing dose of radiation with minimal side effects.",
      "Provides a better, less invasive method of treatment for benign lesions.",
      "Motion adaptive delivery technology accommodates all forms of patient and tumor motion during treatment.",
    ],
    image: "/images/expert-treatment/Section Image-3.png",
  },
  {
    id: 4,
    title: "Digital PET-MR - Artificial Intelligence (AI) Powered",
    subtitle: "INDIA'S FIRST & WORLD'S BEST",
    points: [
      "A revolution in imaging for Cancer diagnosis.",
      "Al driven imaging for accurate diagnosis and staging of cancer.",
      "Best treatment for specific conditions such as trigeminal neuralgia and vascular malformations.",
      "90% less radiation exposure compared to analog PET-CT.",
      "Superior resolution & Shortest Scan acquisition time.",
      "One-stop shop for accurate imaging evaluation of Brain, Head and Neck tumor, HCC, lymphoma, melanoma.prostate gland tumor, pelvic malignancy, bone & soft tissue tumors,",
      "Most useful in evaluation for suspected tumor recurrence and newly developed distant metastasis.",
      "In addition to traditional F-18FDG. PET-MR imaging new agents such as FDOPA, Gallium-68 PSMA, Gallium-68 DOTANOC, Galium-68 DOTATATE & Gallium-68 FAPI are used to diagnose and stage various types of cancers.",
    ],
    image: "/images/expert-treatment/Section Image-3.png",
  },
  {
    id: 5,
    title: "ETHOS - Artificial Intelligence (AI) Powered",
    subtitle: "INDIA'S FIRST & WORLD'S BEST",
    points: [
      "A revolution in cancer radiation treatment",
      "Al driven adaptive radiation therapy enabling personalized patient treatment",
      "Diagnostic quality images during planning and treatment.",
      "On couch adaptive planning, ensures precise dose delivery.",
      "ETHOS a machine which sees, thinks, adapts, plans & delivers. treatment in a few minutes. (POWER OF AI)",
      "Designed to deliver cancer care Precisely, Quickly & Comfortably.",
    ],
    image: "/images/expert-treatment/Section Image-3.png",
  },
  {
    id: 6,
    title: "AngioTab 9030DRF",
    subtitle:
      "A Truly dual capability Digital Radio Fluoro system. AngioTAB DRF is highly efficient system for conducting a variety of examinations with exceptional image quality at very low dose.",
    points: [
      "Versatile applications capability: Interventional procedures, ERCP, Myelography, Venography. Cholangiography, etc.",
      "Complete Radiography and Fluoroscopy with single fixed Detector.",
      "Excellent image quality with substantial dose reduction.",
      "Advanced pre and post-processing features.",
      "Head-to-toe coverage with remote and tableside control.",
    ],
    image: "/images/expert-treatment/Section Image-3.png",
  },
];

const ModernMachine = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current, isPaused]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full">
      {/* Background image (Modern Machines text is part of image) */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/modern-machines/machinaery-carousel.jpg')",
        }}
      />

      {/* ---------- TOP TEXT ---------- */}
      <div className="max-w-5xl mx-auto text-center mb-12 px-4">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-[#e56e1b]">
          Modern Machines, Trusted Outcomes
        </h2>
        <p className="mt-4 text-slate-600 text-sm md:text-base">
          Omega Hospitals features advanced medical technology, including
          high-precision imaging, robotic surgery systems, and modern diagnostic
          tools, ensuring accurate treatment and faster recovery for every
          patient.
        </p> */}
      </div>

      <div
        className="relative w-[90%] mx-auto overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* --- Slider Track --- */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8
                         px-10 py-14"
            >
              {/* IMAGE */}
              <div className="flex items-center justify-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={520}
                  height={360}
                  className="object-contain"
                  priority
                />
              </div>

              {/* TEXT */}
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-[#e56e1b]">
                  {slide.title}
                </h3>

                {slide.subtitle && (
                  <p className="mt-2 text-sm text-slate-600">
                    {slide.subtitle}
                  </p>
                )}

                <ul className="mt-6 space-y-3">
                  {slide.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700">
                      <span className="text-teal-500 mt-1">✱</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTONS */}
                <div className="mt-auto pt-8 flex gap-4">
                  <button
                    className="px-6 py-2 border border-[#e56e1b] text-[#e56e1b]
                                     rounded-md hover:bg-[#e56e1b] hover:text-white transition"
                  >
                    Know More ↗
                  </button>

                  <button
                    className="px-6 py-2 bg-teal-600 text-white rounded-md
                                     hover:bg-teal-700 transition"
                  >
                    ⬇ Download PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Controls: Arrows --- */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2
                     bg-white border rounded-full p-2 shadow hover:bg-slate-100"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2
                     bg-white border rounded-full p-2 shadow hover:bg-slate-100"
        >
          ›
        </button>

        {/* --- Controls: Dots --- */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === idx
                  ? "bg-[#e56e1b] w-6"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernMachine;
