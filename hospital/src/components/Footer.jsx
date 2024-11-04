import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto border border-purple-700">
        Footer
        <div className="flex">
          <div className="w-7/12 border border-orange-500 flex">
            <div className="w-1/2 border border-green-500 m-2">img1</div>
            <div className="w-1/2 border border-green-500 m-2">img1</div>
          </div>
          <div className="w-5/12 border border-orange-500 flex justify-between">
            <div className=" border border-green-500 m-2">img2</div>
            <div className=" border border-green-500 m-2">img2</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
