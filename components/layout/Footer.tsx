import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  PhoneCall,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-start">
          {/* Logo and Contact Section */}
          <div className="lg:col-span-1 pr-6 border-r border-orange-500">
            <div className="mb-6">
              <img
                src="/images/logo.webp"
                alt="Omega Hospitals"
                className="mb-6 w-48 h-auto"
              />
              <p className="text-gray-600 text-sm leading-relaxed">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            </div>

            <div className="space-y-5 mt-8">
              <h3 className="text-orange-500 text-lg font-semibold">
                Find Us Here
              </h3>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700 text-sm">
                  Mail: info@omegahospital.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700 text-sm">Phone: 9849022121</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Gachibowli CHR Lane, Rd Number 1,
                  <br />
                  Seven Hills Colony, Gachibowli,
                  <br />
                  Hyderabad, Telangana 500032
                </p>
              </div>
            </div>
          </div>

          {/* Oncology Services */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="flex gap-12">
              <div>
                <h3 className="text-orange-500 text-lg font-semibold mb-4">
                  Oncology Services
                </h3>
                <ul className="space-y-2">
                  {[
                    "Surgical Oncology",
                    "Orthopaedic Oncology",
                    "Radiation Oncology",
                    "Neuro Oncology",
                    "Nuclear Medicine & PET-CT",
                    "PET MRI",
                    "Robotic Radio Surgery",
                    "Medical Oncology",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-700 text-sm hover:text-orange-500 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-orange-500 text-lg font-semibold mb-4">
                  Specialties
                </h3>
                <ul className="space-y-2">
                  {[
                    "Emergency & Trauma",
                    "Cardiology",
                    "Cardio Thoracic",
                    "Neurology",
                    "Neuro Surgery",
                    "Orthopaedics & Joint Replacements",
                    "Nephrology",
                    "Urology",
                    "Gastro",
                    "Pulmonology",
                    "Critical Care Medicine",
                    "Dentistry",
                    "ENT",
                    "Dermatology",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-700 text-sm hover:text-orange-500 transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center gap-4">
                <img
                  src="/images/appointment-image.png"
                  alt="NABH Accredited"
                  className="w-20 h-20 object-contain"
                />
                <div className="space-y-2">
                  <img
                    src="/images/playstore.jpg"
                    alt="Download from Google Play"
                    className="w-36 object-contain"
                  />
                  <img
                    src="/images/appstore.jpg"
                    alt="Available on the App Store"
                    className="w-36 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-orange-500 text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Technology",
                "Facilities",
                "Blogs",
                "News and media",
                "Cafeteria",
                "Biomedical Waste",
                "Terms & conditions",
                "Privacy Policy",
                "Cancellation Policy",
                "Insurance",
                "Corporate Empanelment",
                "In-Patients",
                "Out Patients",
                "Our Patients",
                "Hospital Rooms",
                "Patient Rooms",
                "Courses",
                "Knowledge Center",
                "Departments",
                "FAQs",
                "Gallery",
                "Patient Testimonials",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 text-sm hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cancer Types */}
          <div>
            <h3 className="text-orange-500 text-lg font-semibold mb-4">
              Cancer
            </h3>
            <ul className="space-y-2">
              {[
                "Breast Cancer",
                "Brain Cancer",
                "Cervix Cancer",
                "Ovarian Cancer",
                "Anal Cancer",
                "Liver Cancer",
                "Colon Cancer",
                "Endometrial Cancer",
                "Stomach Cancer",
                "Skin Cancer",
                "Prostate Cancer",
                "Thyroid Cancer",
                "Testicular Cancer",
                "Lung Cancer",
                "Brain Tumour",
                "Oesophageal Cancer",
                "Oral Cancer",
                "Pancreatic Cancer",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 text-sm hover:text-orange-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Top Social / Emergency Bar */}
      <div className="bg-[#2fa1b3]">
        <div
          className="
      max-w-7xl mx-auto
      px-4 sm:px-6
      py-4
      flex flex-col gap-4
      sm:flex-row sm:items-center sm:justify-between
    "
        >
          {/* Social Media */}
          <div
            className="
        flex flex-col gap-3 text-white
        sm:flex-row sm:items-center sm:gap-4
      "
          >
            <span className="font-semibold text-base sm:text-lg">
              Social Media :
            </span>

            <div className="flex items-center gap-3">
              <a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#2fa1b3] hover:opacity-80 transition">
                <Facebook size={16} />
              </a>
              <a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#2fa1b3] hover:opacity-80 transition">
                <Instagram size={16} />
              </a>
              <a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#2fa1b3] hover:opacity-80 transition">
                <Linkedin size={16} />
              </a>
              <a className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#2fa1b3] hover:opacity-80 transition">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Emergency */}
          <div
            className="
        flex items-center gap-3 sm:gap-4
        text-white
      "
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            <div className="leading-tight">
              <p className="text-xs sm:text-sm font-semibold uppercase">
                Daily 24h Emergency
              </p>
              <p className="text-base sm:text-lg font-bold tracking-wide">
                9849022121
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-3 text-center">
          <p className="text-gray-300 text-sm">
            © Copyright 2025 - Omega Hospitals - A Morgan Stanley Enterprise.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
