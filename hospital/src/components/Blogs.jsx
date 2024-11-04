import React from "react";

export default function Blogs() {
  return (
    <section>
      <div className="container mx-auto border border-red-500 mt-2">
        Blogs
        <div className="flex">
          <div className="w-3/5 border border-yellow-500">cardSec1</div>
          <div className="w-2/5 border border-yellow-500">cardSec1</div>
        </div>
        <div className="flex">
          <div className=" w-1/3 border border-yellow-500">cardSec2</div>
          <div className=" w-1/3 border border-yellow-500">cardSec2</div>
          <div className=" w-1/3 border border-yellow-500">cardSec2</div>
        </div>
        <button>button</button>
      </div>
    </section>
  );
}
