import React from "react";


export default function Footer() {
  return (
    <footer className="bg-[#032342] ">
      <div className="container mx-auto  text-white">
        <div className="flex">
          <div className="w-7/12 flex p-12">
            <div className="w-1/2 m-2">
              <h1 className="text-3xl">
                Dhameliya Kidney <br /> Hospital
              </h1>
              <p className="my-4 text-sm">
                Dhameliya Kidney Hospital has born out of the need for a good center which catered to patients with complicated kidney diseases in
                Surat. It is a judicious blend of high end technology.
              </p>
              <i class="fa-brands fa-facebook pe-5"></i>
              <i class="fa-brands fa-instagram pe-5"></i>
              <i class="fa-brands fa-linkedin pe-5"></i>
            </div>
            <div className="w-1/2 m-2">
              <h2 className="font-bold">Get in Touch</h2>
              <div className="border border-gray-400 w-[50px]"></div>
              <p className="text-sm pt-5">
                If you have any questions or need help, <br /> feel free to contact with our team.
              </p>
              <div className="flex py-4">
                <i class="fa-solid fa-phone pe-3"></i>
                <p className="text-sm">+91 261 2490001</p>
              </div>
              <div className="flex pb-4">
                <i class="fa-solid fa-location-dot pe-3 pt-2"></i>
                <p className="text-sm">402, Aayush Doctor House, Lal Darwaja, Station Road, SURAT 395002 - GUJ INDIA</p>
              </div>
              <p className="text-sm">
                Get Direction <i class="fa-solid fa-arrow-right-long ms-2"></i>
              </p>
              <p className="text-sm">
                Other Branches <i class="fa-solid fa-arrow-right-long ms-2"></i>
              </p>
            </div>
          </div>
          <div className="w-5/12 flex justify-between p-12">
            <div className="m-2">
              <h2 className=" font-medium">Medical Services</h2>
              <div className="border border-gray-400 w-[50px]"></div>
              <div className="flex text-sm mt-6">
                <i class="fa-solid fa-asterisk me-2 text-sm"></i>
                <p>Kidney Stone</p>
              </div>
              <div className="flex text-sm mt-3 ">
                <i class="fa-solid fa-asterisk  me-2 text-sm"></i>
                <p>Prostate</p>
              </div>
              <div className="flex text-sm mt-3">
                <i class="fa-solid fa-asterisk  me-2 text-sm"></i>
                <p>Kidney Stone</p>
              </div>
              <div className="flex text-sm mt-3">
                <i class="fa-solid fa-asterisk  me-2 text-sm"></i>
                <p>Uro Oncology</p>
              </div>
              <div className="flex text-sm mt-3">
                <i class="fa-solid fa-asterisk  me-2 text-sm"></i>
                <p>Paediatric Urology</p>
              </div>
              <div className="flex text-sm mt-3">
                <i class="fa-solid fa-asterisk  me-2  text-sm"></i>
                <p>Female Urology</p>
              </div>
            </div>
            <div className="m-2">
              <h2 className=" font-medium">Quick Links</h2>
              <div className="border border-gray-400 w-[50px]"></div>
              <div className="flex text-sm mt-6">
                <i class="fa-solid fa-asterisk me-2 text-sm"></i>
                <p>Home</p>
              </div>
              <div className="flex text-sm mt-3 ">
                <i class="fa-solid fa-asterisk  me-2 text-sm"></i>
                <p>About Us</p>
              </div>
              <div className="flex text-sm mt-3">
                <i class="fa-solid fa-asterisk  me-2 text-sm"></i>
                <p>Medical Services</p>
              </div>
              <div className="flex text-sm mt-3">
                <i class="fa-solid fa-asterisk  me-2 text-sm"></i>
                <p>Testimonials</p>
              </div>
              <div className="flex text-sm mt-3">
                <i class="fa-solid fa-asterisk  me-2 text-sm"></i>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-gray-400 mb-6"></div>
        <p className="text-center text-sm pb-7">Non Copyrighted © 2022 Design and upload by Dhameliya Kidney Hospital</p>
      </div>
    </footer>
  );
}
