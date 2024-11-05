import React from "react";
import Buttons from "./Buttons";
import GirlCartoon from "../../public/GirlCartoon.png";
import Heroimg1 from "../../public/Heroimg1.png";
import Heroimg2 from "../../public/Heroimg2.png";
import Heroimg3 from "../../public/Heroimg3.png";
import Heroimg4 from "../../public/Heroimg4.png";
import Heroimg5 from "../../public/Heroimg5.png";
import Heroimgcard from "../../public/Heroimgcard.png";
import Medicineicon from "../../public/MedicineIcon.png";
import Arrow from "../../public/arrow.png";
import hospital from "../../public/hospitalimg.png";

export default function HeroSection() {
  return (
    <section className="py-12 bg-[#F5F6F9]">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-1/2">
            <div className="relative">
              <div className="">
                <h1 className="text-5xl font-Fredoka font-semibold py-5 pe-16">
                  Find the good life by good health
                  {/* <img src={Medicineicon} alt="" /> */}
                </h1>
              </div>
              <p className="font-DM Sans text-gray-500">
                Dhameliya Kidney Hospital has born out of the need <br /> for a good centre which catered to patients with <br /> complicated kidney
                diseases in Surat
              </p>
              <div className="mt-8 ">
                <Buttons />
                <Buttons />
              </div>
              <div className="w-[296px] h-[291px] p-7 ps-0 pt-28">
                <img src={GirlCartoon} alt="" />
              </div>
              <img src={Arrow} className="absolute top-52 right-24" />
              <img src={hospital} className="absolute right-24 " />
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="w-1/2">
              <div className="flex">
                <div className="flex justify-center items-center w-[134px] h-[128px] rounded-xl bg-[#6285CA]">
                  <img src={Heroimg1} alt="" />
                </div>
                <div className></div>
                <div className="ms-3 flex justify-center items-center w-[134px] h-[128px] rounded-xl bg-[#ced3df]">
                  <img src={Heroimg2} alt="" />
                </div>
              </div>
              <div className="mt-3 pt-5 rounded-xl bg-[#6285CA] w-[281px] h-[287px] flex justify-center items-center">
                <img src={Heroimg3} alt="" />
              </div>
              <div className="w-[281px] h-[163px] rounded-xl bg-[#385182] mt-4 p-7">
                <img src={Heroimgcard} alt="" />
                <div className="border border-white mt-5 rounded-xl text-center">
                  <Buttons />
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex justify-center items-center flex-col w-[281px] h-[356px] rounded-xl bg-[#385182] mb-5 pb-7">
                <img src={Heroimg4} alt="" />
              </div>
              <div className="">
                <img src={Heroimg5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
