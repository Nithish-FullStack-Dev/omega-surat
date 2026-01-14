"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import { departments } from "../constants/ComprehensiveConsts";

export default function ComprehensiveCancerCare() {
  const [activeDept, setActiveDept] = useState(departments[0]);

  return (
    <section className="bg-white py-12 px-4 md:py-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#e56e1b]">
            Comprehensive Cancer Care Designed Around You
          </h2>
          <p className="text-gray-600 mt-2">
            Integrated, Evidence-Based Treatment by Expert Oncology Teams
          </p>
        </div>
        <div className="hidden lg:flex border-[1.5px] border-[#e56e1b]/40 rounded-[40px] overflow-hidden flex-row h-[750px] shadow-sm bg-white transition-all duration-500 ease-in-out">
          <div className="flex-1 relative p-16 flex flex-col justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.09]">
              <Image
                src={activeDept.image}
                alt="bg"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-center overflow-y-auto scrollbar-hide">
              <div
                key={activeDept.id}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <h3 className="text-omega text-2xl font-bold tracking-tight">
                  {activeDept.title}
                </h3>

                <p className="mt-6 font-normal leading-relaxed text-base max-w-xl">
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
                  <span className="font-normal text-1xl">
                    Support Services:
                  </span>
                  {activeDept.support}
                </p>

                <Button className="mt-10 bg-[#e56e1b] hover:bg-[#c95d14] text-white px-8 py-6 rounded-xl text-lg flex items-center gap-2 transition-all">
                  Book Consultation
                  <MoveUpRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="w-[45%] flex flex-col h-full">
            {departments.map((dept, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeDept.id === dept.id;

              return (
                <button
                  key={dept.id}
                  onClick={() => setActiveDept(dept)}
                  className="relative flex-1 flex overflow-hidden group border-b border-white/20 last:border-0"
                >
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />

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

                  <div
                    className={`relative z-30 w-full px-8 flex items-center text-white ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={isEven ? "text-left" : "text-right"}>
                      <span className="block text-5xl font-bold opacity-90 leading-none">
                        {dept.id}
                      </span>
                      <h4 className="text-xl font-bold tracking-wider mt-2 uppercase">
                        {dept.title}
                      </h4>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden flex flex-col border-[1.5px] border-[#e56e1b]/40 rounded-[24px] overflow-hidden bg-white shadow-sm">
          {departments.map((dept, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeDept.id === dept.id;

            return (
              <div
                key={dept.id}
                className="flex flex-col border-b border-gray-100 last:border-0"
              >
                <button
                  onClick={() => setActiveDept(dept)}
                  className="relative w-full h-32 flex overflow-hidden group"
                >
                  <Image
                    src={dept.image}
                    alt={dept.title}
                    fill
                    className={`object-cover transition-transform duration-700 ${
                      isActive ? "scale-110" : "group-hover:scale-105"
                    }`}
                  />

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

                  <div
                    className={`relative z-30 w-full px-6 flex items-center text-white ${
                      isEven ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className={isEven ? "text-left" : "text-right"}>
                      <span className="block text-4xl font-bold opacity-90 leading-none">
                        {dept.id}
                      </span>
                      <h4 className="text-sm font-bold tracking-wider mt-1 uppercase">
                        {dept.title}
                      </h4>
                    </div>
                  </div>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 relative">
                      <div className="absolute inset-0 z-0 opacity-[0.09]">
                        <Image
                          src={dept.image}
                          alt="bg"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-omega text-xl font-bold tracking-tight">
                          {dept.title}
                        </h3>

                        <p className="mt-4 font-normal leading-relaxed text-sm text-gray-700">
                          {dept.description}
                        </p>

                        <div className="mt-6">
                          <h4 className="font-medium text-sm mb-3 text-black">
                            {dept.servicetTitle}
                          </h4>
                          <ul className="flex flex-col gap-y-2">
                            {dept.services.map((service, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e56e1b] shrink-0" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <p className="mt-6 text-sm text-gray-600">
                          <span className="font-medium text-black">
                            Support Services:
                          </span>
                          {dept.support}
                        </p>

                        <Button className="mt-8 w-full bg-[#e56e1b] hover:bg-[#c95d14] text-white px-6 py-5 rounded-xl text-base flex items-center justify-center gap-2 transition-all">
                          Book Consultation
                          <MoveUpRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
