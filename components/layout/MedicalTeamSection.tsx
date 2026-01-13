"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

// --- Types ---
interface Doctor {
  name: string;
  quals: string;
  image: string;
  bio?: string;
}

// --- Data ---
const doctors: Doctor[] = [
  {
    name: "Dr. Anand Shah",
    quals:
      "MBBS, MS (Gen. Surgery), FMAS, MCh (Surgical Oncology) Senior Consultant Surgical Oncology",
    image: "/images/medical-team/Rectangle 60.png",
    bio: "Dr. Anand Shah is a highly skilled surgical oncologist specializing in the diagnosis and treatment of complex cancers through advanced surgical techniques. With extensive training in minimally invasive and precision-based oncologic surgery, he is committed to achieving the best outcomes while preserving quality of life for his patients.",
  },
  {
    name: "Dr. Jay Upadhyay",
    quals:
      "MBBS, DNB (Radiation Oncology), FCPM HOD & Consultant – Radiation Oncology",
    image: "/images/medical-team/Rectangle 60-1.png",
    bio: "Dr. Jay Upadhyay leads the radiation oncology department with a focus on precision targeting and patient-centric care protocols.",
  },
  {
    name: "Dr. Ashish B. Agrawal",
    quals:
      "MBBS, DNB (General Medicine),DNB (Medical Oncology) Senior Consultant & HOD Medical Oncology",
    image: "/images/medical-team/Rectangle 60-2.png",
    bio: "Dr. Ashish Agrawal specializes in systemic therapies, including chemotherapy and immunotherapy, for comprehensive cancer management.",
  },
];

const DoctorCardDesktop: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="relative w-full">
      <div className="bg-white  rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-[40px]   border border-gray-200 relative z-10 overflow-hidden">
        <div className="relative w-full mb-8 border-b border-[#e56e1b] rounded-bl-[40px] flex flex-col items-center">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={364}
            height={314}
            className="object-cover rounded-3xl"
          />
        </div>

        <div className="flex flex-col items-center p-5">
          <h3 className="text-[#E86B1E] text-xl font-bold mb-3">
            {doctor.name}
          </h3>
          <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-4 text-center px-4">
            {doctor.quals}
          </p>

          <button className="flex items-center gap-2 bg-[#E86B1E] text-white text-sm font-bold px-8 py-3 rounded-full hover:bg-[#cf5a15] transition-colors shadow-md">
            Book Appointment
            <span className="text-sm">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function MedicalTeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % doctors.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + doctors.length) % doctors.length);

  const activeDoc = doctors[currentSlide];

  return (
    <section className="relative bg-white py-12 md:py-20 overflow-hidden font-sans">
      {/* Top Right Decorative Asset (Frame) */}
      <div className="absolute top-0 right-0  z-0">
        <Image
          src="/images/medical-team/decorative-vectors.png"
          alt="decoration"
          width={132.02}
          height={118.78}
          className="object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Shared Header */}
        <div className="text-center mb-10 md:mb-20">
          <div className="inline-block bg-[#FFF4EE] rounded-full px-8 py-3 mb-4">
            <h2 className="text-[#E86B1E] font-extrabold text-lg tracking-tight">
              Our Medical Team
            </h2>
          </div>
          <h1 className="text-sm md:text-lg text-gray-700 font-medium">
            Meet the Specialists Leading Your Treatment
          </h1>
        </div>

        {/* --- DESKTOP VIEW --- */}
        <div className="hidden md:grid grid-cols-3 gap-4 mx-auto">
          {doctors.map((doc, idx) => (
            <DoctorCardDesktop key={idx} doctor={doc} />
          ))}
        </div>

        {/* --- MOBILE VIEW --- */}
        <div className="md:hidden flex flex-col items-center">
          {/* Large Profile Image with Background Gradient */}
          <div className="relative w-full aspect-square max-w-85 rounded-[2.5rem] overflow-hidden bg-linear-to-b from-[#fce3d2] to-[#E86B1E] mb-6 shadow-xl">
            <Image
              src={activeDoc.image}
              alt={activeDoc.name}
              fill
              className="object-cover object-top pt-10"
            />
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-[#E86B1E] flex items-center justify-center text-[#E86B1E] active:bg-[#E86B1E] active:text-white transition-all"
            >
              <ArrowLeft size={20} strokeWidth={3} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#E86B1E] flex items-center justify-center text-white active:bg-[#cf5a15] shadow-lg transition-all"
            >
              <ArrowRight size={20} strokeWidth={3} />
            </button>
          </div>

          {/* Biographical Content */}
          <div className="text-left w-full px-2">
            <h3 className="text-[#E86B1E] text-2xl font-bold mb-4">
              {activeDoc.name}
            </h3>
            <p className="text-gray-700 text-sm font-medium leading-relaxed mb-6">
              {activeDoc.quals}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              {activeDoc.bio}
            </p>

            <button className="w-full bg-[#E86B1E] text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform">
              Book Appointment
              <span className="text-xl">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
