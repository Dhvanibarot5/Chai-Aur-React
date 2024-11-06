import React from "react";
import ServiceArrow from "../../public/ServiceArrow.png";
import Cardimg1 from "../../public/Cardimg1.png";

export default function ServiceCard() {
  return (
    <div className="w-1/3 p-3">
      <div className="w-[382x] h-[422px] border border-gray-400 rounded-xl bg-[#dee1e7] p-6">
        <div className="flex justify-between pb-5">
          <h1 className="font-medium text-2xl">Kidney Stone</h1>
          <img src={ServiceArrow} alt="" />
        </div>
        <div className="border border-gray-300 mb-5"></div>
        <p className="text-[#888888]">
          We are providing the cerdiology services <br /> for our patient that very much. We are <br /> providing the cerdiology services for our
          <br /> patient that very much.
        </p>
        <img src={Cardimg1} className="pt-4" />
      </div>
    </div>
  );
}
