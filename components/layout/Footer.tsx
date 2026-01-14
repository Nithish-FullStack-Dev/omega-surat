import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white grow">
      <section className="pt-[50px] max-w-10xl mx-auto px-5 sm:px-6 bg-[#fff]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div>
              <img
                src="/images/logo.webp"
                alt="Leadership"
                loading="lazy"
                width="195"
                height="81"
                decoding="async"
                className=""
              />
            </div>
            <div>
              <ul className="flex gap-6 mt-6">
                <li>
                  <a
                    href="https://www.youtube.com/@dr.mohanavamsy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    <Youtube size={36} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/omega.hospitals/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition-colors"
                  >
                    <Instagram size={36} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/OmegaHospitalsOfficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Facebook size={36} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/omega-hospitals-hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <Linkedin size={36} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-4">
                <a
                  href="mailto:info@omegahospitals.com"
                  className="text-[#299fb0] hover:opacity-80 transition-opacity"
                >
                  <Mail size={36} />
                </a>
                <p className="info-section text-base font-normal leading-loose text-[#000] m-0">
                  Mail: info@omegahospitals.com
                </p>
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="flex items-center gap-4">
                <a
                  href="tel:08773501609"
                  className="text-[#299fb0] hover:opacity-80 transition-opacity"
                >
                  <Phone size={36} />
                </a>
                <p className="info-section text-base font-normal leading-loose text-[#000] m-0">
                  Phone: 08773501609
                </p>
              </div>
            </div>
            <div className="mt-[10px]">
              <div className="flex gap-4 items-start">
                <span className="flex-shrink-0 self-center w-[45px] h-[45px] bg-[#e9f4f5] rounded-full flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-[#299fb0]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </span>
                <div>
                  <span className="text-base font-normal block">
                    Gachibowli
                  </span>
                  <p className="text-base font-normal leading-6 mt-1 m-0">
                    CHR Lane, Rd Number 1, Seven Hills Colony,
                    <br />
                    Gachibowli, Hyderabad, Telangana 500032
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <div>
                  <a
                    className="no-decoration block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.omegahospitals.consumerapp"
                  >
                    <img
                      alt="playstore"
                      loading="lazy"
                      width="180"
                      height="59"
                      decoding="async"
                      className="w-full sm:w-auto"
                      src="/images/playstore.jpg"
                    />
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    className="no-decoration block"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://apps.apple.com/in/app/omega-hospitals/id6474674502"
                  >
                    <img
                      alt="appstore"
                      loading="lazy"
                      width="180"
                      height="59"
                      decoding="async"
                      className="w-full sm:w-auto"
                      src="/images/appstore.jpg"
                    />
                  </a>
                </div>
              </div>
              <div>
                <img
                  alt="nabh"
                  loading="lazy"
                  width="140"
                  height="140"
                  decoding="async"
                  className="w-full sm:w-auto"
                  src="/images/appointment-image.png"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                  Oncology Services
                </h2>
                <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/surgical-oncology"
                    >
                      Surgical Oncology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/orthopaedics"
                    >
                      Orthopaedic Oncology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/radiation-oncology"
                    >
                      Radiation Oncology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/neurology"
                    >
                      Neuro Oncology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/nuclear-medicine"
                    >
                      Nuclear Medicine &amp; PET-CT
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/technology/pet-mri"
                    >
                      PET MRI
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/technology/cyberknife-vsi"
                    >
                      Robotic Radio Surgery
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/medical-oncology"
                    >
                      Medical Oncology
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                  Specialties
                </h2>
                <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/emergency-medicine"
                    >
                      Emergency &amp; Trauma
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/cardiology"
                    >
                      Cardiology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-gachibowli/centers-of-excellence/cardiothoracic-surgery"
                    >
                      Cardio Thoracic
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/neurology"
                    >
                      Neurology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/neurosurgery"
                    >
                      Neuro Surgery
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/orthopaedics"
                    >
                      Orthopaedics &amp; Joint Replacements
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/nephrology"
                    >
                      Nephrology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/urology"
                    >
                      Urology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/gastroenterology"
                    >
                      Gastro
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/pulmonology"
                    >
                      Pulmonology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/critical-care"
                    >
                      Critical Care Medicine
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/dentistry"
                    >
                      Dentistry
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/dentistry"
                    >
                      ENT
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/dermatology"
                    >
                      Dermatology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/breast-clinic"
                    >
                      Breast Clinic
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/lipedema-clinic"
                    >
                      Lipedema Clinic
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/spine-clinic"
                    >
                      Spine Clinic
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/plastic-surgery"
                    >
                      Plastic Surgery
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/surgicial-gastroenterology"
                    >
                      Surgical Gastroenterology
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/omega-hospitals-tirupati/centers-of-excellence/obesity-clinic"
                    >
                      Obesity Clinic
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div>
                  <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                    Quick Links
                  </h2>
                  <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/technology/pet-ct"
                      >
                        Technology
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/facilities"
                      >
                        Facilities
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="https://www.omegahospitals.com/blog"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/news-and-media"
                      >
                        News and media
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/cafeteria"
                      >
                        Cafeteria
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/info/biomedical-waste"
                      >
                        Biomedical Waste
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/terms"
                      >
                        Terms &amp; conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/privacy"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/cancellation"
                      >
                        Cancellation Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/insurance"
                      >
                        Insurance
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/Corporate-Empanelment"
                      >
                        Corporate Empanelment
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/in-patients"
                      >
                        In-Patients
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/Out-Patients"
                      >
                        Out Patients
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/our-patients"
                      >
                        Our Patients
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/hospital-rooms"
                      >
                        Hospital Rooms
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/patient-rooms"
                      >
                        Patient Rooms
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/courses"
                      >
                        Courses
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/knowledgecenter"
                      >
                        Knowledge Center
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/departments"
                      >
                        Departments
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/faqs"
                      >
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/gallery"
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                        target="_parent"
                        href="/patients-testimonials"
                      >
                        Patient Testimonials
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h2 className="text-[1.25rem] mb-3 font-[600] mt-3 font-omega-typography-text-sm-regular-font-family">
                  Cancer
                </h2>
                <ul className="list-none mb-0 pl-0 mt-0 font-omega-typography-text-sm-regular-font-family">
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/breast-cancer"
                    >
                      Breast Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/brain-cancer"
                    >
                      Brain Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/cervix-cancer"
                    >
                      Cervix Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/ovarian-cancer"
                    >
                      Ovarian Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/anal-cancer"
                    >
                      Anal Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/liver-cancer"
                    >
                      Liver Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/colon-cancer"
                    >
                      Colon Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/endometrial-cancer"
                    >
                      Endometrial Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/carcinoma-pancreas-cancer"
                    >
                      Pancreatic Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/stomach-cancer"
                    >
                      Stomach Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/skin-cancer"
                    >
                      Skin Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/prostate-cancer"
                    >
                      Prostate Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/thyroid-cancer"
                    >
                      Thyroid Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/testicular-cancer"
                    >
                      Testicular Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="https://www.omegahospitals.com/lungs-cancer"
                    >
                      Lung Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/brain-tumour"
                    >
                      Brain Tumour
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/oesophageal-cancer"
                    >
                      Oesophageal Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/oral-cancer"
                    >
                      Oral Cancer
                    </a>
                  </li>
                  <li>
                    <a
                      className="fotter_links text-base font-medium text-gray-600 leading-6 no-underline hover:text-[#299fb0] transition-colors"
                      target="_parent"
                      href="/pancreatic-cancer"
                    >
                      Pancreatic Cancer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="text-[14px] text-center bg-[#000] text-[#fff] py-2 xs:pb-14 mt-3 font-omega-typography-text-sm-regular-font-family">
          © Copyright 2025 -{" "}
          <a className="text-[#fff] no-underline" href="/">
            Omega Hospitals - A Morgan Stanley Enterprise. All Rights Reserved.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
