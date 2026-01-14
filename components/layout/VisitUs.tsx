const VisitUs = () => {
  return (
    <section className="w-full bg-white py-12">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-[#E56E1B]">
          Visit Us at Omega Hospitals, Surat
        </h2>
        <p className="mt-2 text-[16px] font-normal text-black">
          <i>Conveniently Located in New City Light, Althan</i>
        </p>
      </div>

      {/* Map Section */}
      <div className="mt-8 w-full">
        <div className="relative w-full h-105 sm:h-120">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.620473361863!2d78.36719528459466!3d17.43663459272786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ac38a7bc29%3A0xffc164d23af0f2b9!2sOmega%20Multi-speciality%20Hospitals%20Gachibowli!5e0!3m2!1sen!2sin!4v1768292956882!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
