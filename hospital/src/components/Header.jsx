import React from "react";
import Logo from "../../public/Logo.png";

export default function Header() {
  return (
    <section>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center h-10 border p-5 sticky top-0 left-0 right-0">
          <img src={Logo} alt="logo" />
          <ul className="flex">
            <li className="p-4">Home</li>
            <li className="p-4">About</li>
            <li className="p-4">Contact Us</li>
            <li className="p-4">More Info</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
