import React from "react";
import Form from "./Form";
import vector from "../../public/Vector.png";
import vector2 from "../../public/Vector2.png";

export default function Help() {
  return (
    <section className="py-24 bg-[#F5F6F9]">
      <div className="container mx-auto relative">
        <div className="flex">
          <div className="m-2 w-1/2">
            <h2 className="text-[#6285CA] mb-3">Help</h2>
            <h1 className="text-4xl font-semibold mb-5">
              A Dialysis Patient’s Life Is <br /> Hard. Laugh Harder.
            </h1>
            <h3 className="font-medium ">Our support services inclide:</h3>
            <p className="text-[#888888] my-3">
              Today the hospital is recognised as a world-renowned institution, <br /> not only providing outstanding care and treatment, our goal is
              to <br />
              deliver quality care in a respectful & compassionate manner. We <br /> strive to be the first and best choice for healthcare.
            </p>
            <ul className="text-[#888888] list-disc ms-5">
              <li>A family history of stone disease</li>
              <li>Stones caused by an infection in your urinary system</li>
              <li>A genetic condition which makes you prone to forming stones</li>
              <li>A cyst or a condition called calyceal diverticulum</li>
              <li>Swelling in one of your ureters, called ureterocele</li>
            </ul>
          </div>
          <div className="m-2 w-1/2">
            <Form />
          </div>
        </div>
        <img src={vector} className="absolute -top-16 left-96" />
        <img src={vector2} className="absolute bottom-12 left-[510px]" />
      </div>
    </section>
  );
}
