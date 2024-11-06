import React from "react";
import aboutTitle from "../../public/aboutcompany.png";
import aboutimg from "../../public/aboutimg.png";
import groupimg from "../../public/Groupimg.png";
import grouptitle from "../../public/Grouptitle.png";
import Buttons from "./Buttons";
import pills from "../../public/pills.png";
import star from "../../public/Star.png";

export default function AboutHospital() {
  return (
    <section className="py-24">
      <div className="container mx-auto flex">
        <div className="w-1/2">
          <div className="relative">
            <div className="">
              <img src={aboutTitle} className="ms-52" />
              {/* <p className="ms-52 absolute top-0 text-3xl text-black">OUR COMPANY</p> */}
              <img src={aboutimg} className="w-[680px] h-[520px] " />
            </div>
            <div className="bg-white absolute p-5 top-0 w-[164px] h-[125px] rounded-xl shadow-lg">
              <img src={grouptitle} className="" />
              <img src={groupimg} className="p-2 mt-1" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="relative">
            <h1 className="text-sm text-[#6285CA] font-medium">ABOUT HOSPITAL</h1>
            <p className="text-3xl mt-2 text-[#032342] font-medium">
              Super Speciality Hospital <br /> Of South Gujarat.
            </p>
            <p className="mt-3 text-[#888888]">
              Dhameliya Kidney Hospital has born out of the need for a good <br /> center which catered to patients with complicated kidney diseases{" "}
              <br /> in Surat. It is a judicious blend of high end technology, world class <br /> expertise and outstanding personalized care. With
              time it has <br /> become best kidney hospital in SURAT. Hospital with all facilities <br /> under one roof provides for greater
              efficiency in meeting the overall <br /> needs of a patient.
            </p>
            <p className="mt-5 text-[#888888]">
              patients with complicated kidney diseases in Surat. It is a judicious <br /> blend of high end technology
            </p>
            <div className="mt-5">
              <Buttons />
            </div>
            <img src={pills} className="absolute -top-16 right-0" />
            <img src={star} className="absolute left-64 bottom-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
