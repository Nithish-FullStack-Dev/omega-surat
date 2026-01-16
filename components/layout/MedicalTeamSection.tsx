"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Doctor, doctors } from "../constants/MedicalTeam";

const DoctorCardDesktop: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  return (
    <div className="relative w-full h-full">
      <div className="bg-white rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-[40px] border border-gray-200 relative z-10 overflow-hidden flex flex-col h-full">
        <div className="relative w-full mb-6 sm:mb-8 border-b-8 border-[#e56e1b] rounded-bl-[40px] flex flex-col items-center">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={364}
            height={314}
            className="object-cover rounded-3xl w-full h-auto"
          />
        </div>

        <div className="flex flex-col items-center p-4 sm:p-5 flex-1">
          <h3
            className="text-[#E86B1E] text-lg sm:text-xl font-bold mb-3 text-center"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            {doctor.name}
          </h3>
          <p
            className="text-[11px] sm:text-xs text-gray-500 font-medium leading-relaxed mb-4 text-center px-2 sm:px-4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            {doctor.quals}
          </p>

          <button
            className="group mt-auto flex items-center gap-2 bg-[#E86B1E] text-white text-sm font-bold px-6 sm:px-8 py-3 rounded-full hover:bg-[#cf5a15] transition-colors shadow-md"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            Book Appointment
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 ease-out
      group-hover:translate-x-1
      group-hover:-translate-y-1"
            />
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
    <section className="relative bg-white py-10 sm:py-14 md:py-20 overflow-hidden font-sans">
      <div className="absolute top-0 right-0 z-0 hidden sm:block">
        <Image
          src="/images/medical-team/decorative-vectors.png"
          alt="decoration"
          width={132.02}
          height={118.78}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-20">
          <div
            className="inline-block bg-[#FFF4EE] rounded-full px-6 sm:px-8 py-2.5 sm:py-3 mb-4"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="text-[#E86B1E] font-extrabold text-base sm:text-lg tracking-tight">
              Our Medical Team
            </h2>
          </div>
          <h1
            className="text-xs sm:text-sm md:text-lg text-gray-700 font-medium"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            Meet the Specialists Leading Your Treatment
          </h1>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {doctors.map((doc, idx) => (
            <DoctorCardDesktop key={idx} doctor={doc} />
          ))}
        </div>

        <div className="md:hidden flex flex-col items-center md:max-w-full max-w-[75%] mx-auto">
          <div className="relative w-full aspect-square max-w-[320px] sm:max-w-90 rounded-[2.5rem] overflow-hidden bg-linear-to-b from-[#fce3d2] to-[#E86B1E] mb-6 shadow-xl">
            <Image
              src={activeDoc.image}
              alt={activeDoc.name}
              fill
              className="object-cover object-top pt-10"
            />
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-full border-2 border-[#E86B1E] flex items-center justify-center text-[#E86B1E] active:bg-[#E86B1E] active:text-white transition-all"
            >
              <ArrowLeft size={18} strokeWidth={3} />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-full bg-[#E86B1E] flex items-center justify-center text-white active:bg-[#cf5a15] shadow-lg transition-all"
            >
              <ArrowRight size={18} strokeWidth={3} />
            </button>
          </div>

          <div className="text-left px-1 sm:px-2">
            <h3
              className="text-[#E86B1E] text-xl sm:text-2xl font-bold mb-3"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="0"
            >
              {activeDoc.name}
            </h3>
            <p
              className="text-gray-700 text-sm font-medium leading-relaxed mb-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              {activeDoc.quals}
            </p>
            <p
              className="text-gray-600 text-sm leading-relaxed mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              {activeDoc.bio}
            </p>

            <button
              className="group  w-full bg-[#E86B1E] text-white font-bold py-3.5 sm:py-4 rounded-full flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              Book Appointment
              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 ease-out
      group-hover:translate-x-1
      group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
