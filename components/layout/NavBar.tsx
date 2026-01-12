import { Ambulance, PhoneCall } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  return (
    <section className="fixed left-0 right-0 top-0 bg-white">
      <nav className="flex justify-between border-b ">
        <div className="basis-[20%] flex-center">
          <Image
            src="/images/logo.webp"
            alt="logo image"
            width={150}
            height={150}
          />
        </div>
        <div className="basis-[40%] pl-64 flex-center">
          <select
            name=""
            id=""
            className="border border-gray-300 p-2 rounded-sm"
          >
            <option>Please Select a Center</option>
            <option value="omega-hospitals-gachibowli">
              Omega Hospitals Gachibowli
            </option>
            <option value="omega-hospitals-vizag">Omega Hospitals Vizag</option>
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
            <option value="omega-hospitals-surat">Omega Hospitals Surat</option>
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
        <div className="basis-[40%] flex items-center justify-end gap-5 px-5">
          <div className="border-[#e56e1b] border py-1 px-4 rounded-3xl">
            <a href="" className="text-[#e56e1b] text-sm">
              Request a Callback
            </a>
          </div>
          <div className="flex-center py-2">
            <div className="bg-[#289eb0] py-1 px-3 rounded-tl-lg rounded-bl-lg text-white text-[12px]">
              <p>For Appointments</p>
              <div className="flex gap-1">
                <PhoneCall width={15} height={15} /> 040 25552555
              </div>
            </div>
            <div className="bg-[#e6701c] py-1 px-3 rounded-tr-lg rounded-br-lg text-white text-[12px]">
              <p>Emergency</p>
              <div className="flex gap-1">
                <Ambulance width={15} height={15} />
                98490 22121
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
