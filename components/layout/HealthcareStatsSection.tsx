"use client";

import Image from "next/image";

const stats = [
  {
    icon: "/images/health-care/Statistic Icon.png",
    number: "13.15 Lakh+",
    label: "Patients Consulted",
  },
  {
    icon: "/images/health-care/Statistic Icon-1.png",
    number: "5.75 Lakh+",
    label: "Hospital Admissions",
  },
  {
    icon: "/images/health-care/Statistic Icon-2.png",
    number: "66,500+",
    label: "Surgeries Performed",
  },
  {
    icon: "/images/health-care/Statistic Icon-3.png",
    number: "1,000+",
    label: "Beds Across Network",
  },
  {
    icon: "/images/health-care/Statistic Icon-4.png",
    number: "3.78 Lakh+",
    label: "Chemotherapy Sessions",
  },
  {
    icon: "/images/health-care/Statistic Icon-5.png",
    number: "54,000+",
    label: "Radiation Treatments",
  },
  {
    icon: "/images/health-care/Statistic Icon-6.png",
    number: "9",
    label: "Hospital Locations",
  },
  {
    icon: "/images/health-care/Statistic Icon-7.png",
    number: "52.63 Lakh+",
    label: "Total Lives Touched",
  },
];

export default function HealthcareStatsSection() {
  return (
    <section className="bg-white py-16 lg:py-20 overflow-hidden relative">
      {/* Subtle orange dot pattern on the right (matches the screenshot) */}
      <div className="absolute right-0 top-0 h-full w-full pointer-events-none opacity-20">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(229,110,27,0.3)_1px,transparent_1px)] bg-[length:30px_30px]" />
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
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Icon */}
              <div className="relative w-16 h-16 lg:w-20 lg:h-20">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  fill
                  className="object-contain drop-shadow-sm"
                />
              </div>

              {/* Number */}
              <p className="text-[16px] font-bold text-gray-900 leading-tight">
                {stat.number}
              </p>

              {/* Label */}
              <p className="text-sm lg:text-base text-gray-600 font-medium max-w-[140px] leading-snug font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
