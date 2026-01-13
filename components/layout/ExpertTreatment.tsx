"use client";

import Image from "next/image";

const ExpertTreatment = () => {
  const treatments = [
    {
      title: "HEAD & NECK CANCER",
      desc: "Cardiology, Cardiothoracic Surgery, Interventional Cardiology",
      img: "/images/expert-treatment/Section Image.png", // Heart Image
    },
    {
      title: "BREAST CANCER",
      desc: "Neurology, Neurosurgery, Interventional Neurology",
      img: "/images/expert-treatment/Section Image-1.png", // Brain Image
    },
    {
      title: "LUNG & CHEST CANCERS",
      desc: "Sports Medicine, Joint Replacement, Spine Surgery",
      img: "/images/expert-treatment/Section Image-2.png", // Knee Image
    },
    {
      title: "GASTROINTESTINAL CANCERS",
      desc: "Medical Oncology, Radiation Oncology, Surgical Oncology",
      img: "/images/expert-treatment/Section Image-3.png", // Intestine Image
    },
    {
      title: "LIVER,PANCREAS & BILIARY CANCERS",
      desc: "Cardiology, Cardiothoracic Surgery, Interventional Cardiology",
      img: "/images/expert-treatment/Section Image-4.png", // Lungs Image
    },
    {
      title: "GYNECOLOGICAL CANCERS",
      desc: "Neurology, Neurosurgery, Interventional Neurology",
      img: "/images/expert-treatment/Section Image-5.png", // Kidney Image
    },
    {
      title: "UROLOGICAL CANCERS",
      desc: "Sports Medicine, Joint Replacement, Spine Surgery",
      img: "/images/expert-treatment/Section Image-6.png", // Woman Doctor Image
    },
    {
      title: "BLOOD CANCERS",
      desc: "Medical Oncology, Radiation Oncology, Surgical Oncology",
      img: "/images/expert-treatment/Section Image-7.png", // Child Image
    },
    {
      title: "BONE & SOFT TISSUE CANCERS",
      desc: "Cardiology, Cardiothoracic Surgery, Interventional Cardiology",
      img: "/images/expert-treatment/Section Image-8.png", // Anesthesia Image
    },
    {
      title: "BRAIN & SPINAL TUMORS",
      desc: "Neurology, Neurosurgery, Interventional Neurology",
      img: "/images/expert-treatment/Section Image-9.png", // Surgery Team Image
    },
    {
      title: "SKIN CANCERS",
      desc: "Sports Medicine, Joint Replacement, Spine Surgery",
      img: "/images/expert-treatment/Section Image-10.png", // Desk/Stethoscope Image
    },
    {
      title: "PEDIATRIC CANCERS",
      desc: "Medical Oncology, Radiation Oncology, Surgical Oncology",
      img: "/images/expert-treatment/Section Image-11.png", // Face Surgery Image
    },
    {
      title: "RARE & OTHER CANCERS",
      desc: "Cardiology, Cardiothoracic Surgery, Interventional Cardiology",
      img: "/images/expert-treatment/Section Image-12.png", // Virus/Cells Image
    },
  ];

  return (
    <section className="relative max-w-[90%] mx-auto w-full py-16 px-4 bg-white overflow-hidden font-sans">
      {/* Background Wave Frame - Adjusted to sit at the top */}
      <div className="absolute -top-2 left-0 w-full h-64 z-20 ">
        {/* If using Next.js Image */}
        <Image
          src="/images/expert-treatment/Frame.png"
          alt="Background Wave"
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F37021] mb-3">
            Expert Treatment For Every Type Of Cancer
          </h2>
          <p className="text-gray-700 text-sm md:text-base font-medium">
            Expert Care Across 25+ Medical Specialties,
            <br className="hidden md:block" /> All Under One Roof
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white">
          {treatments.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl duration-300 border border-gray-300 flex flex-col items-center pb-6 overflow-hidden p-2"
            >
              {/* Image Container with Relative positioning for the arrow */}
              <div className="relative w-full aspect-[4/2.5] mb-4 z-30">
                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-xl"
                />

                {/* Floating Action Button (Arrow) */}
                <div className="absolute -top-2 -right-2 bg-white p-2 rounded-bl-full rounded-tl-full rounded-br-full">
                  <div className="bg-[#F37021] rounded-full p-2 w-8 h-8 flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="white"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="px-4 text-center">
                <h3 className="text-[#F37021] font-bold text-sm uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-[10px] text-gray-800 leading-tight mx-auto max-w-[90%]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTreatment;
