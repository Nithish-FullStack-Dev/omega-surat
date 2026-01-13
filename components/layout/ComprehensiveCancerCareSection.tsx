"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";

const departments = [
  {
    id: "01",
    title: "MEDICAL ONCOLOGY",
    description:
      "Personalized chemotherapy, targeted therapy, immunotherapy, and hormonal treatments tailored to your cancer type, stage, and genetic profile. Our experienced medical oncologists create a treatment plan that balances effectiveness with quality of life.",
    servicetTitle: "Services Include:",
    services: [
      "Personalized Chemotherapy Protocols",
      "Targeted Molecular Therapy",
      "Immunotherapy & Biologic Agents",
      "Hormonal Therapy",
      "Clinical Trial Access",
      "24/7 Emergency Oncology Support",
    ],
    support:
      "Infusion center, nutritional counseling, psychological support, symptom management",
    image: "/images/Comprehensive-Cancer/1.png",
  },
  {
    id: "02",
    title: "SURGICAL ONCOLOGY",
    description:
      "Minimally invasive, laparoscopic, and robotic-assisted techniques, we ensure faster recovery and better outcomes.",
    servicetTitle: "pecialties Covered:",
    services: [
      "Head & Neck Cancer Surgery",
      "Breast Cancer Surgery (Oncoplastic & Reconstruction)",
      "GI & Hepatobiliary Oncology",
      "Gynecologic & Urologic Cancer Surgery",
      "Thoracic & Lung Cancer Surgery",
      "Musculoskeletal Oncology",
    ],
    support: "ICU care, pain management, physiotherapy, rehabilitation",
    image: "/images/Comprehensive-Cancer/2.png",
  },
  {
    id: "03",
    title: "RADIATION ONCOLOGY",
    description:
      "Powered by India's first Al-integrated ETHOS LINAC and advanced imaging, our radiation oncology department delivers precision treatment that targets cancer while protecting healthy tissue. From conventional therapy to robotic radiosurgery, we offer the most advanced radiation options available globally.",
    servicetTitle: "Technologies Available:",
    services: [
      "ETHOS Al-Powered Adaptive Radiotherapy (India's 1st)",
      "3D Conformal Radiation Therapy (3D-CRT)",
      "Intensity-Modulated Radiation Therapy (IMRT)",
      "Image-Guided Radiation Therapy (IGRT)",
      "Stereotactic Radiosurgery (SRS) & SBRT",
      "CyberKnife Robotic Radiosurgery",
      "Brachytherapy (Internal Radiation)",
    ],
    image: "/images/Comprehensive-Cancer/3.png",
  },
  {
    id: "04",
    title: "HEMATO-ONCOLOGY & BMT",
    description:
      "Specialized care for blood cancers including leukemia, lymphoma, myeloma, and other hematological disorders. Our dedicated BMT unit provides autologous and allogeneic bone marrow transplants with comprehensive pre- and post-transplant support.",
    servicetTitle: "Services Include:",
    services: [
      "Acute & Chronic Leukemia Treatment",
      "Lymphoma (Hodgkin's & Non-Hodgkin's)",
      "Multiple Myeloma Management",
      "Bone Marrow Transplant (BMT)",
      "Stem Cell Therapy",
      "CAR-T Cell Therapy (Upcoming)",
    ],
    support:
      "Dedicated BMT unit, infection control, transfusion services, genetic counseling",
    image: "/images/Comprehensive-Cancer/4.png",
  },
];

export default function ComprehensiveCancerCare() {
  const [activeDept, setActiveDept] = useState(departments[0]);

  return (
    <section className="bg-white py-12 px-4 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#e56e1b]">
            Comprehensive Cancer Care Designed Around You
          </h2>
          <p className="text-gray-600 mt-2">
            Integrated, Evidence-Based Treatment by Expert Oncology Teams
          </p>
        </div>

        {/* Main Component Container */}
        <div className="border-[1.5px] border-[#e56e1b]/40 rounded-[40px] overflow-hidden flex flex-col lg:flex-row min-h-162.5 shadow-sm bg-white">
          {/* LEFT SIDE: Active Content */}
          <div className="flex-1 relative p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            {/* Background Faded Image */}
            <div className="absolute inset-0 z-0 opacity-[0.09]">
              <Image
                src={activeDept.image}
                alt="bg"
                fill
                className="object-cover"
              />
            </div>

            <div key={activeDept.id} className="relative z-10">
              <h3 className="text-omega text-2xl font-bold tracking-tight">
                {activeDept.title}
              </h3>

              <p className="mt-6 font-normal leading-relaxed text-sm md:text-base max-w-xl">
                {activeDept.description}
              </p>

              <div className="mt-8">
                <h4 className="font-normal text-sm mb-3">
                  {activeDept.servicetTitle}
                </h4>
                <ul className="flex flex-col gap-y-2 gap-x-4">
                  {activeDept.services.map((service, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-1xl text-gray-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-sm text-gray-600">
                <span className="font-normal text-1xl">Support Services:</span>{" "}
                {activeDept.support}
              </p>

              <Button className="mt-10 bg-[#e56e1b] hover:bg-[#c95d14] text-white px-8 py-6 rounded-xl text-lg flex items-center gap-2 transition-all">
                Book Consultation
                <MoveUpRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE: Alternating Navigation List */}
          <div className="w-full lg:w-[45%] flex flex-col">
            {departments.map((dept, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeDept.id === dept.id;

              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(dept)}
                  className="relative flex-1 min-h-40 flex overflow-hidden group border-b border-white/20 last:border-0"
                >
                  {/* 1. Base Department Image */}
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />

                  {/* 2. Light Ray Overlay (one-ray or second-ray based on index) */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <Image
                      src={
                        isEven
                          ? "/images/Comprehensive-Cancer/one-ray.png"
                          : "/images/Comprehensive-Cancer/second-ray.png"
                      }
                      alt="light ray"
                      fill
                      className={`object-cover ${
                        isActive
                          ? "opacity-90"
                          : "opacity-60 group-hover:opacity-80"
                      } transition-opacity`}
                    />
                  </div>

                  {/* 4. Text Content: Alternating alignment */}
                  <div
                    className={`relative z-30 w-full px-8 flex items-center text-white ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={isEven ? "text-left" : "text-right"}>
                      <span className="block text-5xl md:text-6xl font-bold opacity-90 leading-none">
                        {dept.id}
                      </span>
                      <h4 className="text-lg md:text-xl font-bold tracking-wider mt-2 uppercase">
                        {dept.title}
                      </h4>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
