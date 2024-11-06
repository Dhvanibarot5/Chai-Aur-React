import React from "react";
import ContactUsFooter from "./ContactUsFooter";
import ContactUsimg from "../../public/ContactUsimg.png";
import Hands from "../../public/Hands.png";
import Star2 from "../../public/Star2.png";
import Buttons from "./Buttons";

export default function ContactUs() {
  return (
    <section className="py-24">
      <div className="container mx-auto flex">
        <div className="w-1/2">
          <div className="relative">
            <div className="bg-white shadow-md absolute rounded-lg p-3 top-16">
              <img src={Hands} className="" />
              <h2 className="font-bold mb-1 mt-2">25+</h2>
              <p>
                Partner <br /> Collaboration
              </p>
            </div>
            <img src={ContactUsimg} className="w-[522px] h-[538px]  ms-10" />
            <img src={Star2} className="absolute right-32 bottom-16" />
          </div>
        </div>
        <div className="w-1/2">
          <h1 className=" text-[#6285CA] font-medium">CONTACT US</h1>
          <h2 className="text-4xl my-3">
            True Healthcare For Your <br /> Family!
          </h2>
          <p className="text-gray-500">
            Dhameliya Kidney Hospital has born out of the need for a good <br /> center which catered to patients with complicated kidney diseases{" "}
            <br /> in Surat. It is a judicious blend of high end technology, world class <br /> expertise and outstanding personalized care.
          </p>
          <h3 className="mt-4 mb-3 font-medium">Our support service inclide:</h3>
          <div className="flex flex-wrap gap-4 ms-5 ">
            <div className="flex-1">
              <ul className="list-disc text-gray-500">
                <li>ESWL - Lithotripsy</li>
                <li>Cystolitholapaxy</li>
                <li>HOLEP</li>
              </ul>
            </div>
            <div className="flex-1">
              <ul className="list-disc text-gray-500">
                <li>Endoscopic Surgery</li>
                <li>Open Surgery</li>
                <li>RIRS</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 mt-4 mb-6">
            Contact us today to learn more about our support services and to <br /> find out how we can help you
          </p>
          <Buttons />
        </div>
        {/* <div className="border border-blue-500 p-2 m-2">
          <ContactUsFooter />
        </div> */}
      </div>
    </section>
  );
}
