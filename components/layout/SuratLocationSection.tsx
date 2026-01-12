"use client";

import { Hospital } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const features = [
  {
    title: "Halcyon D - Advanced Radiotherapy System & Digital PET-CT",
  },
  {
    title: "Expert Full-Time Medical Team",
  },
  {
    title: "Comprehensive Cancer Care – Medical, Surgical & Radiation Oncology",
  },
  {
    title: "24/7 Emergency & Critical Care",
  },
  {
    title:
      "Multispecialty Excellence – Cardiology, Neurology, Ortho, Gastro & more",
  },
  {
    title:
      "Patient-First Approach – Personalized treatment, emotional support, financial counseling",
  },
];

export default function SuratLocationSection() {
  return (
    <section className="bg-linear-to-br from-[#E56E1B05] to-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Left Column - Text + Form */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Surat's Trusted Partner in
                <span className="text-[#e56e1b]"> Advanced Healthcare</span>
              </h1>
            </div>

            {/* Request Call Back Form Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Request a Call Back Today
              </h2>
              <p className="mt-2 text-gray-600 text-sm lg:text-base">
                Fill in your details and our team will get in touch with you
                shortly.
              </p>

              <form className="mt-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input placeholder="Name" className="h-12 text-base" />
                  <Input placeholder="Contact" className="h-12 text-base" />
                  <Input placeholder="Email ID" className="h-12 text-base" />
                  <Select>
                    <SelectTrigger className="h-12 text-base">
                      <SelectValue placeholder="Select Departments" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oncology">Oncology</SelectItem>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      {/* Add more departments as needed */}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Address"
                    className="h-12 text-base md:col-span-2"
                  />
                  <Input
                    placeholder="Time"
                    className="h-12 text-base md:col-span-2"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="md:col-span-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#e56e1b] hover:bg-[#d55e0b] text-white font-semibold text-base rounded-xl transition-all"
                >
                  Make Appointment
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Why Trust Section */}
          <div className="space-y-8">
            <p className="mt-6 text-gray-700 text-base lg:text-lg leading-relaxed">
              Located in the vibrant heart of Surat, Athwa Gate – Gujarat's
              Diamond and Textile Capital, Omega Hospitals has emerged as South
              Gujarat's premier destination for world-class cancer treatment and
              comprehensive multispecialty care.
            </p>
            <p className="mt-4 text-gray-700 text-base lg:text-lg leading-relaxed">
              Our commitment? To bring the same level of expertise and
              technology found in global cancer centers, right here to your
              doorstep.
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Patients Trust Omega Surat:
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="
        relative
        rounded-2xl
        bg-[#E56E1B08]
        p-6
        pl-14
      "
                >
                  {/* Icon pinned top-left */}
                  <div className="absolute left-0 top-4">
                    <Image
                      src="/images/location-section/icon-park-solid_medical-mark.png"
                      alt="icon"
                      width={25}
                      height={25}
                    />
                  </div>

                  {/* Text */}
                  <p className="text-gray-800 font-medium text-base leading-snug">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
