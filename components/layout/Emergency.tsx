import Image from "next/image";

const Emergency = () => {
  return (
    <section>
      <div className="relative w-full h-100 sm:h-125">
        <Image
          src="/images/ambalance.jpg"
          alt="Ambulance"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="bg-[#e56e1b] w-full py-10 px-4">
        <div
          className="
    max-w-7xl mx-auto
    flex flex-col gap-6
    md:flex-row md:items-center md:justify-between
  "
        >
          {/* Heading */}
          <h2
            className="
      text-white font-semibold
      text-2xl sm:text-3xl
      md:max-w-md
    "
          >
            Schedule your Appointment
          </h2>

          {/* Actions */}
          <div
            className="
      flex flex-col gap-4
      sm:flex-row sm:items-center
    "
          >
            <button
              className="
        px-5 py-2.5 rounded-xl
        bg-[#299FB0] text-white
        text-base font-medium
        hover:opacity-90 transition
      "
            >
              Get In Touch
            </button>

            <Image
              src="/images/playstore.jpg"
              alt="Play Store"
              width={140}
              height={46}
              className="cursor-pointer"
            />

            <Image
              src="/images/appstore.jpg"
              alt="App Store"
              width={140}
              height={46}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
