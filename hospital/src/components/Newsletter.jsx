import React from "react";
import Star4 from "../../public/Star4.png";
import Buttons from "./Buttons";

export default function Newsletter() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="text-center text-white bg-[#385182] py-12 relative rounded-2xl">
          <h1 className="text-5xl">Newsletter</h1>
          <p className="pt-7 text-xl">Get Smarter About No-Code</p>
          <p className="pt-4 text-gray-400">
            The best No-Code tips & tricks, for webflow & Framer developers from <br /> experts to beginner. Join our 3k community by subscribing
          </p>
          <input type="email" placeholder="Enter your email" className="p-3 rounded-lg pe-16 mt-6 me-2" />
          <Buttons />
          <img src={Star4} className="absolute bottom-40 left-96" />
          <img src={Star4} className="absolute bottom-32 right-96" />
        </div>
      </div>
    </section>
  );
}
