import React from "react";
import clock from "../images/clock.png";
import graph from "../images/graph.png";
import btnrightarrow from "../images/btnrightarrow.png";
import b1 from "../images/b1.png";
import Breadcrumbs from "../components/Breadcrumbs";
const Blog = () => {
  return (
    <div className="container mx-auto py-4">
      <Breadcrumbs />
      <h1 className="text-4xl text-center font-bold">Our Blog</h1>
      <div className=" grid lg:grid-cols-2 md:grid-cols-2 md:gap-x-[150px] lg:gap-x-[0px] lg:ml-[180px] md:ml-[-100px] gap-0 lg:gap-y-[80px] md:gap-y-[80px] gap-y-[60px] justify-center items-center lg:scale-100 md:scale-75 scale-75 lg:mt-[100px] md:mt-[-200px] mt-[-450px] lg:mb-[100px] md:mb-[-200px] mb-[-500px] ">
        <div className="w-[470px] h-[606px] overflow-hidden shadow-md shadow-gray-400 flex flex-col gap-[10px] rounded-md hover:scale-105 transition-all">
          <img className="w-[470px] h-[606px] rounded-md" src={b1} alt="M" />
          <div className="px-[35px] py-[25px] flex flex-col gap-[10px]">
            <h1 className="text[12px] text-[#737373]">
              <span className="text-[#8EC2F2]">Google</span>&nbsp;
              &nbsp;Trending&nbsp; &nbsp;New
            </h1>
            <h1 className="text-[20px] text-[#252B42] w-[190px] font-semibold">
              Koudetat à la Maison #1 (L'intégrale)
            </h1>
            <h1 className="text-[14px] text-[#737373] font-semibold w-[260px]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </h1>
          </div>
          <div className="px-[35px] flex justify-between">
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={clock}
                  alt="M"
                />
              </span>
              &nbsp;22 April 2021
            </h1>
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={graph}
                  alt="M"
                />
              </span>
              &nbsp;10 comments
            </h1>
          </div>
          <div className="px-[38px]">
            <button className="text-[14px] text-[#737373] font-bold">
              Learn More&nbsp;{" "}
              <span>
                <img
                  className="h-[16px] w-[9px] inline-block"
                  src={btnrightarrow}
                  alt="M"
                />
              </span>
            </button>
          </div>
        </div>
        <div className="w-[470px] h-[606px] overflow-hidden shadow-md shadow-gray-400 flex flex-col gap-[10px] rounded-md hover:scale-105 transition-all">
          <img className="w-[470px] h-[606px] rounded-md" src={b1} alt="M" />
          <div className="px-[35px] py-[25px] flex flex-col gap-[10px]">
            <h1 className="text[12px] text-[#737373]">
              <span className="text-[#8EC2F2]">Google</span>&nbsp;
              &nbsp;Trending&nbsp; &nbsp;New
            </h1>
            <h1 className="text-[20px] text-[#252B42] w-[190px] font-semibold">
              Koudetat à la Maison #1 (L'intégrale)
            </h1>
            <h1 className="text-[14px] text-[#737373] font-semibold w-[260px]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </h1>
          </div>
          <div className="px-[35px] flex justify-between">
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={clock}
                  alt="M"
                />
              </span>
              &nbsp;22 April 2021
            </h1>
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={graph}
                  alt="M"
                />
              </span>
              &nbsp;10 comments
            </h1>
          </div>
          <div className="px-[38px]">
            <button className="text-[14px] text-[#737373] font-bold">
              Learn More&nbsp;{" "}
              <span>
                <img
                  className="h-[16px] w-[9px] inline-block"
                  src={btnrightarrow}
                  alt="M"
                />
              </span>
            </button>
          </div>
        </div>
        <div className="w-[470px] h-[606px] overflow-hidden shadow-md shadow-gray-400 flex flex-col gap-[10px] rounded-md hover:scale-105 transition-all">
          <img className="w-[470px] h-[606px] rounded-md" src={b1} alt="M" />
          <div className="px-[35px] py-[25px] flex flex-col gap-[10px]">
            <h1 className="text[12px] text-[#737373]">
              <span className="text-[#8EC2F2]">Google</span>&nbsp;
              &nbsp;Trending&nbsp; &nbsp;New
            </h1>
            <h1 className="text-[20px] text-[#252B42] w-[190px] font-semibold">
              Koudetat à la Maison #1 (L'intégrale)
            </h1>
            <h1 className="text-[14px] text-[#737373] font-semibold w-[260px]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </h1>
          </div>
          <div className="px-[35px] flex justify-between">
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={clock}
                  alt="M"
                />
              </span>
              &nbsp;22 April 2021
            </h1>
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={graph}
                  alt="M"
                />
              </span>
              &nbsp;10 comments
            </h1>
          </div>
          <div className="px-[38px]">
            <button className="text-[14px] text-[#737373] font-bold">
              Learn More&nbsp;{" "}
              <span>
                <img
                  className="h-[16px] w-[9px] inline-block"
                  src={btnrightarrow}
                  alt="M"
                />
              </span>
            </button>
          </div>
        </div>
        <div className="w-[470px] h-[606px] overflow-hidden shadow-md shadow-gray-400 flex flex-col gap-[10px] rounded-md hover:scale-105 transition-all">
          <img className="w-[470px] h-[606px] rounded-md" src={b1} alt="M" />
          <div className="px-[35px] py-[25px] flex flex-col gap-[10px]">
            <h1 className="text[12px] text-[#737373]">
              <span className="text-[#8EC2F2]">Google</span>&nbsp;
              &nbsp;Trending&nbsp; &nbsp;New
            </h1>
            <h1 className="text-[20px] text-[#252B42] w-[190px] font-semibold">
              Koudetat à la Maison #1 (L'intégrale)
            </h1>
            <h1 className="text-[14px] text-[#737373] font-semibold w-[260px]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </h1>
          </div>
          <div className="px-[35px] flex justify-between">
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={clock}
                  alt="M"
                />
              </span>
              &nbsp;22 April 2021
            </h1>
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={graph}
                  alt="M"
                />
              </span>
              &nbsp;10 comments
            </h1>
          </div>
          <div className="px-[38px]">
            <button className="text-[14px] text-[#737373] font-bold">
              Learn More&nbsp;{" "}
              <span>
                <img
                  className="h-[16px] w-[9px] inline-block"
                  src={btnrightarrow}
                  alt="M"
                />
              </span>
            </button>
          </div>
        </div>
        <div className="w-[470px] h-[606px] overflow-hidden shadow-md shadow-gray-400 flex flex-col gap-[10px] rounded-md hover:scale-105 transition-all">
          <img className="w-[470px] h-[606px] rounded-md" src={b1} alt="M" />
          <div className="px-[35px] py-[25px] flex flex-col gap-[10px]">
            <h1 className="text[12px] text-[#737373]">
              <span className="text-[#8EC2F2]">Google</span>&nbsp;
              &nbsp;Trending&nbsp; &nbsp;New
            </h1>
            <h1 className="text-[20px] text-[#252B42] w-[190px] font-semibold">
              Koudetat à la Maison #1 (L'intégrale)
            </h1>
            <h1 className="text-[14px] text-[#737373] font-semibold w-[260px]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </h1>
          </div>
          <div className="px-[35px] flex justify-between">
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={clock}
                  alt="M"
                />
              </span>
              &nbsp;22 April 2021
            </h1>
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={graph}
                  alt="M"
                />
              </span>
              &nbsp;10 comments
            </h1>
          </div>
          <div className="px-[38px]">
            <button className="text-[14px] text-[#737373] font-bold">
              Learn More&nbsp;{" "}
              <span>
                <img
                  className="h-[16px] w-[9px] inline-block"
                  src={btnrightarrow}
                  alt="M"
                />
              </span>
            </button>
          </div>
        </div>
        <div className="w-[470px] h-[606px] overflow-hidden shadow-md shadow-gray-400 flex flex-col gap-[10px] rounded-md hover:scale-105 transition-all">
          <img className="w-[470px] h-[606px] rounded-md" src={b1} alt="M" />
          <div className="px-[35px] py-[25px] flex flex-col gap-[10px]">
            <h1 className="text[12px] text-[#737373]">
              <span className="text-[#8EC2F2]">Google</span>&nbsp;
              &nbsp;Trending&nbsp; &nbsp;New
            </h1>
            <h1 className="text-[20px] text-[#252B42] w-[190px] font-semibold">
              Koudetat à la Maison #1 (L'intégrale)
            </h1>
            <h1 className="text-[14px] text-[#737373] font-semibold w-[260px]">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </h1>
          </div>
          <div className="px-[35px] flex justify-between">
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={clock}
                  alt="M"
                />
              </span>
              &nbsp;22 April 2021
            </h1>
            <h1 className="text-[12px] text-[#737373] font-semibold">
              <span>
                <img
                  className="h-[16px] w-[16px] inline-block mb-[4px]"
                  src={graph}
                  alt="M"
                />
              </span>
              &nbsp;10 comments
            </h1>
          </div>
          <div className="px-[38px]">
            <button className="text-[14px] text-[#737373] font-bold">
              Learn More&nbsp;{" "}
              <span>
                <img
                  className="h-[16px] w-[9px] inline-block"
                  src={btnrightarrow}
                  alt="M"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
