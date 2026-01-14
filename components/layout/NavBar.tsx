"use client";

import { useState, useEffect } from "react";
import {
  Ambulance,
  PhoneCall,
  ShoppingCart,
  Search,
  User,
  Menu,
  X,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  cancerTypes,
  centreOfExcellence,
  ourServices,
} from "../constants/NavContent";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <section className="sticky left-0 right-0 top-0 bg-white z-50 shadow-md">
        {/* Top Bar */}
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b px-4 py-3">
          {/* Logo */}
          <div className="flex items-center lg:flex-row flex-col gap-2 lg:gap-0 shrink-0">
            <Image
              src="/images/logo.webp"
              alt="logo image"
              width={140}
              height={60}
              className="h-auto w-auto max-w-35"
            />
            <a
              href="#"
              className="block lg:hidden rounded-3xl border border-[#e56e1b] px-4 py-1 text-sm text-[#e56e1b] whitespace-nowrap"
            >
              Request a Callback
            </a>
          </div>

          {/* Center Select */}
          <div className="hidden lg:flex flex-1 justify-center">
            <select className="border border-gray-300 p-2 rounded-sm text-sm">
              <option>Please Select a Center</option>
              <option value="omega-hospitals-gachibowli">
                Omega Hospitals Gachibowli
              </option>
              <option value="omega-hospitals-vizag">
                Omega Hospitals Vizag
              </option>
              <option value="omega-hospitals-guntur">
                Omega Hospitals Guntur
              </option>
              <option value="omega-hospitals-bhimavaram">
                Omega Hospitals Bhimavaram
              </option>
              <option value="omega-hospitals-jabalpur">
                Omega Hospitals Jabalpur
              </option>
              <option value="omega-hospitals-kurnool">
                Omega Hospitals Kurnool
              </option>
              <option value="omega-hospitals-surat">
                Omega Hospitals Surat
              </option>
              <option value="omega-hospitals-banjarahills">
                Omega Hospitals Banjarahills
              </option>
              <option value="omega-hospitals-karimnagar">
                Omega Hospitals Karimnagar
              </option>
              <option value="omega-hospitals-dehradun">
                Omega Hospitals Dehradun
              </option>
              <option value="omega-hospitals-tirupati">
                Omega Hospitals Tirupati
              </option>
            </select>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap items-center justify-end gap-4 shrink-0">
            {/* Callback */}
            <a
              href="#"
              className=" hidden lg:block rounded-3xl border border-[#e56e1b] px-4 py-1 text-sm text-[#e56e1b] whitespace-nowrap"
            >
              Request a Callback
            </a>

            {/* Phone Blocks */}
            <div className="hidden lg:flex text-[12px] text-white">
              <div className="bg-[#289eb0] px-3 py-1 rounded-l-lg">
                <p>For Appointments</p>
                <div className="flex items-center gap-1">
                  <PhoneCall size={14} />
                  040 25552555
                </div>
              </div>

              <div className="bg-[#e6701c] px-3 py-1 rounded-r-lg">
                <p>Emergency</p>
                <div className="flex items-center gap-1">
                  <Ambulance size={14} />
                  98490 22121
                </div>
              </div>
            </div>

            <div className="lg:hidden ml-auto flex flex-col items-end gap-4 w-full max-w-xs">
              {/* Icons Row */}
              <div className="flex w-full items-center justify-between px-2">
                <button className="bg-transparent">
                  <ShoppingCart className="w-6 h-6 hover:text-[#e56e1b] transition-colors" />
                </button>

                <button className="bg-transparent">
                  <Wallet className="w-6 h-6 hover:text-[#e56e1b] transition-colors" />
                </button>

                <a href="#">
                  <User className="w-6 h-6 hover:text-[#e56e1b] transition-colors" />
                </a>

                <button
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  aria-label="Toggle menu"
                  className="bg-transparent"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6 transition-transform duration-200" />
                  ) : (
                    <Menu className="w-6 h-6 transition-transform duration-200" />
                  )}
                </button>
              </div>

              <div className="flex lg:hidden flex-1 justify-center">
                <select className="border border-gray-300 p-2 rounded-sm text-sm">
                  <option>Please Select a Center</option>
                  <option value="omega-hospitals-gachibowli">
                    Omega Hospitals Gachibowli
                  </option>
                  <option value="omega-hospitals-vizag">
                    Omega Hospitals Vizag
                  </option>
                  <option value="omega-hospitals-guntur">
                    Omega Hospitals Guntur
                  </option>
                  <option value="omega-hospitals-bhimavaram">
                    Omega Hospitals Bhimavaram
                  </option>
                  <option value="omega-hospitals-jabalpur">
                    Omega Hospitals Jabalpur
                  </option>
                  <option value="omega-hospitals-kurnool">
                    Omega Hospitals Kurnool
                  </option>
                  <option value="omega-hospitals-surat">
                    Omega Hospitals Surat
                  </option>
                  <option value="omega-hospitals-banjarahills">
                    Omega Hospitals Banjarahills
                  </option>
                  <option value="omega-hospitals-karimnagar">
                    Omega Hospitals Karimnagar
                  </option>
                  <option value="omega-hospitals-dehradun">
                    Omega Hospitals Dehradun
                  </option>
                  <option value="omega-hospitals-tirupati">
                    Omega Hospitals Tirupati
                  </option>
                </select>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Navigation Menu */}
        <div className="hidden lg:flex items-center justify-between h-[4rem] md:h-[3rem]">
          <nav className="flex lg:grow">
            <div
              className="flex flex-wrap items-center justify-between max-w-screen-xl px-4"
              id="mobile-menu-2"
            >
              <div>
                <ul className="pl-0 flex flex-col mt-4 mb-0 font-medium lg:flex-row lg:space-x-3.5 lg:mt-0 list-none omega-typography-display-xs-regular">
                  <li className="relative group">
                    <a
                      href="#"
                      className="flex items-center gap-1 leading-[30px] text-[12px] font-medium text-black"
                    >
                      Centre of Excellence
                      <svg
                        className="w-3 h-3 text-gray-500 transition-transform group-hover:rotate-180"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                      </svg>
                    </a>

                    {/* Mega Dropdown */}
                    <div className="absolute left-0 top-full z-50 hidden w-screen bg-white shadow-lg group-hover:block">
                      <div className="mx-auto max-w-screen-xl px-6 py-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3 text-sm">
                          {[
                            "Surgical Oncology",
                            "Medical Oncology",
                            "Radiation Oncology",
                            "Hemato-Oncology and BMT",
                            "Cardiology",
                            "Cardiothoracic Surgery",
                            "Critical Care",
                            "Dental Services",
                            "Dermatology",
                            "ENT",
                            "Emergency Medicine",
                            "Gastroenterology",
                            "General Medicine",
                            "General Surgery including Laparoscopy",
                            "Gynaecology",
                            "Nephrology including Dialysis",
                            "Neurology",
                            "Neurosurgery",
                            "Nuclear Medicine",
                            "Orthopaedics",
                            "Psychiatry",
                            "Pulmonology",
                            "Urology",
                            "Vascular Surgery",
                            "Breast Clinic",
                            "Lipedema Clinic",
                            "Spine Clinic",
                            "Covid Center",
                            "Plastic Surgery",
                            "Surgical Gastroenterology",
                            "Obesity Clinic",
                          ].map((item) => (
                            <a
                              key={item}
                              href="#"
                              className="block border-b p-2 border-orange-400/60 hover:text-white hover:bg-[#e56e1b] transition-all duration-300"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="relative group">
                    <a
                      href="#"
                      className="flex items-center gap-1 leading-[30px] text-[12px] font-medium text-black"
                    >
                      Our Services
                      <svg
                        className="w-3 h-3 text-gray-500 transition-transform group-hover:rotate-180"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                      </svg>
                    </a>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full z-50 hidden bg-white shadow-lg group-hover:block">
                      <div className="px-4 py-4 min-w-[260px]">
                        <ul className="flex flex-col gap-2 text-sm">
                          {ourServices.map((service) => (
                            <li key={service}>
                              <a
                                href="#"
                                className="block border-b border-orange-400/60 p-2 hover:bg-[#e56e1b] hover:text-white transition-all duration-300"
                              >
                                {service}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="relative">
                    <a
                      className="leading-[30px] font-medium text-[12px] text-black no-underline font-omega-typography-text-sm-regular-font-family"
                      href="#"
                    >
                      Knowledge Centre
                    </a>
                  </li>

                  <li className="relative">
                    <a
                      className="leading-[30px] font-medium text-[12px] text-black no-underline font-omega-typography-text-sm-regular-font-family"
                      href="#"
                    >
                      Cancer Journey
                    </a>
                  </li>

                  <li className="relative md:hidden 2xl:block lg:block">
                    <a
                      className="leading-[30px] font-medium text-[12px] text-black no-underline font-omega-typography-text-sm-regular-font-family"
                      href="#"
                    >
                      Blogs
                    </a>
                  </li>

                  <li className="relative group">
                    <a
                      href="#"
                      className="flex items-center gap-1 leading-[30px] text-[12px] font-medium text-black"
                    >
                      Cancer
                      <svg
                        className="w-3 h-3 text-gray-500 transition-transform group-hover:rotate-180"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                      </svg>
                    </a>

                    {/* Mega Dropdown */}
                    <div className="absolute left-0 top-full z-50 hidden w-screen bg-white shadow-lg group-hover:block">
                      <div className="mx-auto max-w-screen-xl ">
                        <div
                          className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-x-8
        gap-y-3
        text-sm
        max-h-[60vh]
        overflow-y-auto
      "
                        >
                          {cancerTypes.map((type) => (
                            <a
                              key={type}
                              href="#"
                              className="block border-b border-orange-400/60
                                p-2
                                hover:bg-[#e56e1b]
                                hover:text-white
                                transition-all
                                duration-300
                              "
                            >
                              {type}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="relative md:hidden 2xl:block lg:block">
                    <a
                      className="leading-[30px] font-medium text-[12px] text-black no-underline font-omega-typography-text-sm-regular-font-family"
                      href="#"
                    >
                      AboutUs
                    </a>
                  </li>

                  <li className="relative md:hidden 2xl:block lg:block">
                    <a
                      className="leading-[30px] font-medium text-[12px] text-black no-underline font-omega-typography-text-sm-regular-font-family"
                      href="#"
                    >
                      FAQs
                    </a>
                  </li>

                  <li className="relative md:hidden 2xl:block lg:block">
                    <a
                      className="leading-[30px] font-medium text-[12px] text-black no-underline font-omega-typography-text-sm-regular-font-family"
                      href="#"
                    >
                      News and Media
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="flex items-center space-x-3 justify-end ml-auto">
            <button className="relative bg-transparent border-transparent">
              <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-[#e56e1b] transition-colors" />
            </button>

            <button className="relative bg-transparent border-transparent">
              <Search className="w-6 h-6 cursor-pointer hover:text-[#e56e1b] transition-colors" />
            </button>

            <a href="#">
              <div className="flex items-center cursor-pointer">
                <User className="w-6 h-6 cursor-pointer hover:text-[#e56e1b] transition-colors" />
              </div>
            </a>

            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="bg-transparent"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 transition-transform duration-200" />
                ) : (
                  <Menu className="w-6 h-6 transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`
    absolute left-0 right-0 top-full
    z-40 bg-white lg:hidden
    transition-all duration-300 ease-out
    max-h-[calc(100vh-120px)]
    overflow-y-auto
    ${
      mobileMenuOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }
  `}
        >
          <div className="px-4 py-6 space-y-4 border-t shadow-md">
            <Accordion type="multiple" className="space-y-3">
              {/* Centre of Excellence */}
              <AccordionItem value="coe">
                <AccordionTrigger className="rounded-xl bg-gray-50 px-4 py-4 text-left">
                  Centre of Excellence
                </AccordionTrigger>
                <AccordionContent>
                  {centreOfExcellence.map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm border-b hover:bg-[#e56e1b] hover:text-white"
                    >
                      {item}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Our Services */}
              <AccordionItem value="services">
                <AccordionTrigger className="rounded-xl bg-gray-50 px-4 py-4 text-left">
                  Our Services
                </AccordionTrigger>
                <AccordionContent>
                  {ourServices.map((service) => (
                    <Link
                      key={service}
                      href="#"
                      className="block px-4 py-2 text-sm border-b hover:bg-[#e56e1b] hover:text-white"
                    >
                      {service}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Static Links */}
              {[
                "Knowledge Centre",
                "Cancer Journey",
                "Blogs",
                "About Us",
                "FAQs",
                "News and Media",
              ].map((label) => (
                <Link
                  key={label}
                  href="#"
                  className="block rounded-xl bg-gray-50 px-4 py-4"
                >
                  {label}
                </Link>
              ))}

              {/* Cancer */}
              <AccordionItem value="cancer">
                <AccordionTrigger className="rounded-xl bg-gray-50 px-4 py-4 text-left">
                  Cancer
                </AccordionTrigger>
                <AccordionContent>
                  {cancerTypes.map((type) => (
                    <Link
                      key={type}
                      href="#"
                      className="block px-4 py-2 text-sm border-b hover:bg-[#e56e1b] hover:text-white"
                    >
                      {type}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
