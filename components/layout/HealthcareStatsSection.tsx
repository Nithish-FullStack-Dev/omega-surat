"use client";

import Image from "next/image";
import { AnimatedCounter } from "../helpers/AnimatedCounter";
import { stats } from "../constants/Healthcare";

export default function HealthcareStatsSection() {
  return (
    <section className="bg-white py-16 lg:py-20 overflow-hidden relative">
      {/* Subtle orange dot pattern on the right (matches the screenshot) */}
      <div className="absolute bottom-0 right-0 z-30">
        <Image
          alt="layer_1"
          src="/images/health-care/Layer_2.png"
          height={128}
          width={99}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Title */}
        <h2 className="text-center text-3xl lg:text-4xl font-bold text-[#e56e1b] mb-12 lg:mb-16">
          Healthcare That Touches Lives Every Day
        </h2>

        {/* Stats Grid - Fully Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Icon */}
              <div className="relative w-16 h-16 lg:w-20 lg:h-20 flex-center-col">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  height={44}
                  width={44}
                  className="object-contain drop-shadow-sm"
                />
              </div>

              {/* Number */}
              <p className="text-[16px] font-bold text-gray-900 leading-tight">
                <AnimatedCounter value={stat.number} />
              </p>

              {/* Label */}
              <p className="text-sm lg:text-base text-gray-600 font-medium max-w-35 leading-snug font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
