"use client";

import Image from "next/image";

const AppointmentSection = () => {
  return (
    <section className="relative w-full bg-[#FFF9F5] py-12 px-4 md:px-8 overflow-hidden font-sans">
      {/* Decorative Frame Asset (Top Left) */}
      <div className="absolute top-0 left-0 w-32 h-32 z-0">
        <Image
          src="/images/frame.png"
          alt="Decorative Frame"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Form & How to Reach */}
          <div className="flex flex-col gap-6">
            {/* Appointment Form Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-[#E86C1F] font-bold text-xl md:text-2xl mb-2">
                  Request a Call Back Today
                </h3>
                <p className="text-gray-600 text-sm">
                  Fill in your details and out team will get in touch with you
                  shortly.
                </p>
              </div>

              <form className="space-y-4">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#E86C1F] bg-white placeholder-gray-300"
                  />
                  <input
                    type="text"
                    placeholder="Contact"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#E86C1F] bg-white placeholder-gray-300"
                  />
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email ID"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#E86C1F] bg-white placeholder-gray-300"
                  />
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#E86C1F] bg-white text-gray-500 appearance-none">
                      <option>Select Departments</option>
                      <option>Oncology</option>
                      <option>Cardiology</option>
                      <option>Neurology</option>
                    </select>
                    {/* Custom Arrow for Select */}
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#E86C1F] bg-white placeholder-gray-300 text-gray-500"
                  />
                  <input
                    type="text"
                    placeholder="Time"
                    onFocus={(e) => (e.target.type = "time")}
                    onBlur={(e) => (e.target.type = "text")}
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#E86C1F] bg-white placeholder-gray-300 text-gray-500"
                  />
                </div>

                {/* Text Area */}
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#E86C1F] bg-white placeholder-gray-300 resize-none"
                ></textarea>

                {/* Button */}
                <button
                  type="button"
                  className="w-full bg-[#E86C1F] hover:bg-[#d65b12] text-white font-semibold py-3 rounded-md transition-colors duration-300 mt-2"
                >
                  Make Appointment
                </button>
              </form>
            </div>

            {/* How to Reach Section */}
            <div className="bg-[#FAEde6] bg-opacity-60 p-6 rounded-xl border border-[#f3dcd2]">
              <h4 className="font-normal text-gray-800 mb-3">How to Reach:</h4>
              <ul className="space-y-2 text-[16px] text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-black">•</span>
                  From Surat Railway Station: 8 km (20 min)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-black">•</span>
                  From Surat Airport: 12 km (25 min)
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Metro: Nearest station - [Station Name]
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-black">•</span>
                  Parking: Ample parking available
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Image & Contact Info */}
          <div className="flex flex-col h-full">
            {/* Main Image */}
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] mb-8">
              {/* Note: Path based on your assets folder structure */}
              <Image
                src="/images/doctor-consultation.png"
                alt="Doctor Consultation"
                fill
                className="object-cover rounded-sm shadow-sm"
              />
            </div>

            {/* Contact Information Grid */}
            <div className="bg-white p-5 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-700">
              {/* Column 1: Phones */}
              <div className="space-y-4">
                <div>
                  <h5 className="text-[#E86C1F] font-medium mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86C1F] mr-2"></span>
                    Appointments:
                  </h5>
                  <p className="pl-4">0261-226-5552 | 02040-255-52555</p>
                </div>
                <div>
                  <h5 className="text-[#E86C1F] font-medium mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86C1F] mr-2"></span>
                    Emergency (24/7):
                  </h5>
                  <p className="pl-4">98490-22121</p>
                </div>
                <div>
                  <h5 className="text-[#E86C1F] font-medium mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86C1F] mr-2"></span>
                    General Inquiries:
                  </h5>
                  <p className="pl-4">0261-226-5552</p>
                </div>
              </div>

              {/* Column 2: Hours & Email */}
              <div className="flex flex-col justify-between">
                <div>
                  <h5 className="text-[#E86C1F] font-medium mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86C1F] mr-2"></span>
                    OPD Hours:
                  </h5>
                  <ul className="pl-4 space-y-1">
                    <li>• Monday - Saturday: 9:00 AM - 6:00 PM</li>
                    <li>• Sunday: 9:00 AM - 1:00 PM</li>
                    <li>• Emergency: 24/7</li>
                  </ul>
                </div>

                <div className="mt-4 md:mt-0">
                  <h5 className="text-[#E86C1F] font-medium inline-block mr-1 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E86C1F] mr-2"></span>
                    Email:
                  </h5>
                  <span className="text-[#E86C1F]">info@omegahospital.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
