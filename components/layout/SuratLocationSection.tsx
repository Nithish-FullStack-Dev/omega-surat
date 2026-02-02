"use client";

import Image from "next/image";
import RequestForm from "../helpers/RequestForm";

const features = [
  {
    title: "Halcyon D - Advanced Radiotherapy System\n & Digital PET-CT",
  },
  {
    title: "Expert Full-Time Medical\n Team",
  },
  {
    title:
      "Comprehensive Cancer Care – Medical,\n Surgical & Radiation Oncology",
  },
  {
    title: "24/7 Emergency & Critical\n Care",
  },
  {
    title:
      "Multispecialty Excellence – Cardiology,\n Neurology, Ortho, Gastro & more",
  },
  {
    title:
      "Patient-First Approach – Personalized\n treatment, emotional support, financial\n counseling",
  },
];

export default function SuratLocationSection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-52"
        style={{
          backgroundImage: "url('/images/advance-health-care.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute -top-1 right-0 -left-0.5 z-30 opacity-90">
        {/* <Image
          alt="layer_1"
          src="/images/health-care/Layer_2.png"
          height={158}
          width={158}
          style={{ transform: "rotate(180deg)" }}
        /> */}
      </div>
      <div className="mx-auto md:mx-20 px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Left Column - Text + Form */}
          <div
            className="space-y-10"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal text-gray-900 leading-tight">
                Surat's Trusted Partner in
                <p className="text-[#e56e1b] font-bold"> Advanced Healthcare</p>
              </h1>
            </div>

            {/* Request Call Back Form Card */}
            <div className="bg-white rounded-3xl shadow-sm p-8 lg:p-10">
              <div className="flex-center-col mb-[20px]">
                <h4 className="font-bold text-[#e56e1b]">
                  Request a Call Back Today
                </h4>
                <p className="mt-2 text-gray-600 text-sm font-normal">
                  Fill in your details and our team will get in touch with you
                  shortly.
                </p>
              </div>
              <RequestForm />
            </div>
          </div>

          {/* Right Column - Why Trust Section */}
          <div
            className="space-y-8 text-justify"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <p className="mt-6 text-black font-normal text-base font-sans leading-relaxed ">
              Located in the vibrant heart of Surat, Athwa Gate – Gujarat's
              Diamond and Textile Capital, Omega Hospitals has emerged as South
              Gujarat's premier destination for world-class cancer treatment and
              comprehensive multispecialty care.
            </p>
            <p className="mt-4 text-black font-normal text-base font-sans leading-relaxed">
              Our commitment? To bring the same level of expertise and
              technology found in global cancer centers, right here to your
              doorstep.
            </p>
            <h2 className="md:text-2xl text-[16px] md:text-start text-center font-bold text-omega">
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
                    flex-center-col
                  "
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
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
                  <p className="text-omega font-normal text-[14px] text-center leading-snug">
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
