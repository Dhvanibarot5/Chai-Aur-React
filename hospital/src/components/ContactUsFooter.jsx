import React from "react";
import Star3 from "../../public/Star3.png";

export default function ContactUsFooter() {
  return (
    <div className="container mx-auto">
      <div>
        <div className="bg-[#385182] border border-blue-800 p-3 rounded-xl">
          <div className="bg-white flex p-3 rounded-xl">
            <p className="px-3">Home Care</p>
            <img src={Star3} className="px-5" />
            <p className="px-3">Adult Day Care</p>
            <img src={Star3} className="px-5" />
            <p className="px-3">Assisted Living</p>
            <img src={Star3} className="px-5" />
            <p className="px-3">Nursing Care</p>
            <img src={Star3} className="px-5" />
            <p className="px-3">Adult Day Care</p>
            <img src={Star3} className="px-5" />
            <p className="px-3">Home Care</p>
          </div>
        </div>
      </div>
    </div>
  );
}
