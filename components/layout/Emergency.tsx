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
      <div className="bg-[#e56e1b] w-full p-10">
        <div className="flex-between gap-6 max-w-[80%] mx-auto">
          <h2 className="text-[32px] font-semibold text-white basis-[20%]">
            Schedule your Appointment
          </h2>
          <div className="flex-center gap-4">
            <button className="py-2 px-3 rounded-xl bg-[#299FB0] text-white text-[16px]">
              Get In Touch
            </button>
            <div>
              <Image
                src="/images/playstore.jpg"
                alt="playstore"
                width={140}
                height={46}
              />
            </div>
            <div>
              <Image
                src="/images/appstore.jpg"
                alt="appstore"
                width={140}
                height={46}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;
