import React from "react";
import Logo from "../../public/Logo.png";
import Buttons from "./Buttons";
export default function Header() {
  return (
    <section>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center h-10 p-5 sticky top-0 left-0 right-0 mt-5">
          <img src={Logo} alt="logo" />
          <ul className="flex">
            <li className="p-4">Home</li>
            <li className="p-4">About</li>
            <li className="p-4">
              Medical Services <i class="fa-solid fa-angle-down"></i>
            </li>
            <li className="p-4">Career</li>
            <li className="p-4">News</li>
            <li className="p-4">Contact Us</li>
          </ul>
          <div className="icon">
            <i class="fa-regular fa-circle-user text-2xl pe-5"></i>
            <Buttons />
          </div>
        </nav>
      </div>
    </section>
  );
}
