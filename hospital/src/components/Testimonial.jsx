import React from "react";
import testiMan from "../../public/testiMan.jfif";
import testiMan2 from "../../public/testiMan2.jfif";
import invertedComa1 from "../../public/invertedComa1.png";
import invertedComa2 from "../../public/invertedComa2.png";
import testiWoman from "../../public/testiWoman.jfif";
import yellowdot1 from "../../public/yellowdot.png";
import yellowdot2 from "../../public/yellowdot2.png";
import pinkdot from "../../public/pinkdot.png";
import purpledot from "../../public/purpledot.png";
import reddot from "../../public/reddot.png";
import bluedot from "../../public/bluedot.png";

export default function Testimonial() {
  return (
    <section className="py-24 bg-[#F5F6F9]">
      <div className="container mx-auto">
        <div className="text-center relative">
          <h1 className="text-[#6285CA] font-medium">Testimonial</h1>
          <h2 className="text-4xl mt-2 mb-8 ">What Our Patient Says</h2>
          <div className="flex justify-center items-center">
            <img src={testiMan} className="rounded-full mt-4 w-[115px] h-[115px]" />
          </div>
          <h2 className="text-2xl mt-5 mb-1">Raymond Galario</h2>
          <p className="text-gray-400">Sydney, Australia</p>
          <div className="text-yellow-400 mt-4 text-2xl">
            <i class="fa-solid fa-star pe-2"></i>
            <i class="fa-solid fa-star pe-2"></i>
            <i class="fa-solid fa-star pe-2"></i>
            <i class="fa-solid fa-star pe-2"></i>
            <i class="fa-solid fa-star pe-2"></i>
          </div>
          <img src={invertedComa1} className="absolute left-80 bottom-20" />
          <p className="mt-6 font-medium">
            Now you can make an appointment with your doctor anywhere and <br /> anytime via online booking easier. Now you can make an appointment
            with <br /> your doctor anywhere and anytime via online booking easier.
          </p>
          <img src={invertedComa2} className="absolute right-80 bottom-0" />

          <img src={testiWoman} className="rounded-full w-[80px] h-[80px] absolute top-32 left-20" />
          <img src={testiMan2} className="rounded-full w-[70px] h-[70px] absolute top-24 right-44" />
          <img src={yellowdot1} className="absolute -top-2 left-44" />
          <img src={yellowdot2} className="absolute -bottom-6 right-44" />
          <img src={pinkdot} className="absolute left-48 bottom-2" />
          <img src={purpledot} className="absolute top-56 right-96" />
          <img src={reddot} className="absolute top-40 left-80" />
          <img src={bluedot} className="absolute -top-4 right-80" />
        </div>
      </div>
    </section>
  );
}
