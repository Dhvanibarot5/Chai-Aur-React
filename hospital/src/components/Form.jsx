import React from "react";
import Buttons from "./Buttons";

export default function Form() {
  return (
    <div>
      <form action="" className="bg-white rounded-3xl py-3">
        <div className="p-5">
          <h1 className="text-3xl font-medium">How Can We Help</h1>
          <p className="text-[#888888] my-4">
            Please feel welcome to contact our friendly reception staff with any <br /> general or medical enquiry. Our doctors will receive or return
            any urgent calls.
          </p>
          <div className="flex justify-between mb-5">
            <input type="text" placeholder="Name" className="bg-[#F5F6F9] py-3 px-9 rounded-xl me-3" />
            <input type="text" placeholder="Email" className="bg-[#F5F6F9] py-3 px-9 rounded-xl" />
          </div>
          <div className="flex justify-between">
            <input type="text" placeholder="Phone Number" className="bg-[#F5F6F9] py-3 px-9 rounded-xl" />
            <input type="text" placeholder="Subject" className="bg-[#F5F6F9] py-3 px-9 rounded-xl" />
          </div>
          <textarea name="message" id="" placeholder="Message" rows={5} cols={69} className="bg-[#F5F6F9] rounded-xl py-4 px-9 my-5"></textarea>
          <Buttons />
        </div>
      </form>
    </div>
  );
}
