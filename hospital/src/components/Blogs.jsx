import React from "react";
import Boneimg1 from "../../public/Boneimg.png";
import Boneimg2 from "../../public/Boneimg2.png";
import BlogsGirl from "../../public/BlogsGirl.png";
import Buttons from "./Buttons";
import Blogimg1 from "../../public/Blogimg1.png";

export default function Blogs() {
  return (
    <section className="bg-[#F5F6F9]">
      <div className="container mx-auto mt-2">
        <div className="bg-white text-center py-7 mb-5">
          <h2 className="text-[#6285CA]">Our Blogs</h2>
          <h1 className="text-3xl font-semibold">Latest News</h1>
        </div>
        <div className="flex ">
          <div className="w-3/5 flex p-5 my-7 bg-white rounded-3xl">
            <div className="w-1/2 ">
              <img src={Boneimg1} alt="" />
            </div>
            <div className="w-1/2 mx-5">
              <h2 className="text-2xl font-medium pt-5">What To Do When You Break A Bone?</h2>
              <p className="py-3">
                Breaking a bone is a serious and scary situation that can happen to anyone in a number of different ways. The most common way a bone.
              </p>
              <p> Bone breaks are categorized into different types of fractures... Read More</p>
              <div className="flex pt-5">
                <img src={BlogsGirl} className="me-4" />
                <h2 className="font-medium">
                  James Williams <p className="text-gray-400 text-sm">October 22,2022</p>
                </h2>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex">
            <div className="py-5 px-5 my-7 ms-9 bg-white rounded-3xl">
              <img src={Boneimg2} className="" />
              <h2 className="text-2xl my-3 ">
                What To Do When You Break <br /> A Bone?
              </h2>
              <p className="">The most common way a bone... Read More</p>
              <div className="flex pt-5">
                <img src={BlogsGirl} className="me-4" />
                <h2 className="font-medium">
                  James Williams <p className="text-gray-400 text-sm">October 22,2022</p>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className=" w-1/3 flex me-7 bg-white p-5 rounded-3xl">
            <div className="w-1/2">
              <img src={Blogimg1} alt="" />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl mb-4">
                What To Do When You <br /> Break...
              </h2>
              <button>Read More</button>
            </div>
          </div>
          <div className=" w-1/3 flex me-7 bg-white p-5 rounded-3xl">
            <div className="w-1/2">
              <img src={Blogimg1} alt="" />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl mb-4">
                What To Do When You <br /> Break...
              </h2>
              <button>Read More</button>
            </div>
          </div>
          <div className=" w-1/3 flex me-7 bg-white p-5 rounded-3xl">
            <div className="w-1/2">
              <img src={Blogimg1} alt="" />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl mb-4">
                What To Do When You <br /> Break...
              </h2>
              <button>Read More</button>
            </div>
          </div>
          {/* <div className=" w-1/3 border border-yellow-500">cardSec2</div>
          <div className=" w-1/3 border border-yellow-500">cardSec2</div> */}
        </div>
        <div className="text-center my-12">
          <Buttons />
        </div>
      </div>
    </section>
  );
}
