import React from "react";
import instablue from "../images/instablue.png";
import tweetblue from "../images/tweetblue.png";
import fbblue from "../images/fbblue.png";
const Footer = () => {
  return (
    <div>
      <div className="h-[142px] flex justify-evenly px-[0px] lg:gap-[680px] md:gap-[500px] gap-[70px] bg-[#FAFAFA] items-center">
        <h1 className="text-[24px] text-[#252B42] font-bold drop-shadow-md">
          Bandage
        </h1>
        <div className="flex gap-[20px] mt-[8px]">
          <img
            className="inline-block h-[24px] w-[24px]"
            src={fbblue}
            alt="M"
          />
          <img
            className="inline-block h-[24px] w-[24px]"
            src={instablue}
            alt="M"
          />
          <img
            className="inline-block h-[24px] w-[24px]"
            src={tweetblue}
            alt="M"
          />
        </div>
      </div>
      <div className="lg:h-[272px] py-[50px] grid lg:grid-cols-5 grid-cols-2 justify-evenly lg:px-[210px]  md:pl-[50px] pl-[40px] lg:gap-0 gap-[40px]">
        <div className="flex flex-col gap-[15px]">
          <h1 className="text-[16px] text-[#252B42] font-bold">Company Info</h1>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">
              About Us
            </h1>{" "}
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            <h1 className="text-[14px] text-[#737373] font-bold">Carrier</h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">
              We are hiring
            </h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">Blog</h1>
          </a>
        </div>
        <div className="flex flex-col gap-[15px]">
          <h1 className="text-[16px] text-[#252B42] font-bold">Legal</h1>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">About Us</h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">Carrier</h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">
              We are hiring
            </h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">Blog</h1>
          </a>
        </div>
        <div className="flex flex-col gap-[15px]">
          <h1 className="text-[16px] text-[#252B42] font-bold">Features</h1>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">
              Business Marketing
            </h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">
              User Analytic
            </h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            <h1 className="text-[14px] text-[#737373] font-bold">Live Chat</h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">
              Unlimited Support
            </h1>
          </a>
        </div>
        <div className="flex flex-col gap-[15px]">
          <h1 className="text-[16px] text-[#252B42] font-bold">Resources</h1>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">
              IOS & Android
            </h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">
              Watch a Demo
            </h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            <h1 className="text-[14px] text-[#737373] font-bold">Customers</h1>
          </a>
          <a href="https://www.linkedin.com/in/mohit-h-8a48ab9b/">
            {" "}
            <h1 className="text-[14px] text-[#737373] font-bold">API</h1>
          </a>
        </div>
        <div className="flex flex-col gap-[15px] ">
          <h1 className="text-[16px] text-[#252B42] font-bold">Get In Touch</h1>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-3 bg-[#23A6F0] text-white font-semibold rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Subscribe
            </button>
          </div>
          <h1 className="text-[12px] text-[#737373] ">
            Lore imp sum dolor Amit
          </h1>
        </div>
      </div>
      <div className="h-[74px] flex items-center justify-evenly bg-[#FAFAFA]">
        <h1 className="text-[14px] text-[#737373] font-bold">
          Made With Love By Finland All Right Reserved{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
