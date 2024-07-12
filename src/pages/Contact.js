import React from "react";
import family from "../images/family.png";
import instagray from "../images/instagray.png";
import fbgray from "../images/fbgray.png";
import tweetgray from "../images/tweetgray.png";
import linkgray from "../images/linkgray.png";
import locationblue from "../images/locationblue.png";
import callblue from "../images/callblue.png";
import mailblue from "../images/mailblue.png";
import curvearrow from "../images/curvearrow.png";
import Breadcrumbs from "../components/Breadcrumbs";
const Contact = () => {
  return (
    <div>
      {" "}
      <Breadcrumbs />
      <div className="lg:mt-0 md:mt-[-80px] mt-[20px] flex lg:flex-row md:flex-row flex-col items-center justify-center lg:gap-[250px] md:gap-[100px] gap-0 lg:scale-100 md:scale-75 scale-100">
        <div className="flex flex-col lg:gap-[40px] md:gap-[40px] gap-[20px] items-center">
          <h1 className="text-[16px] text-[#252B42] font-bold">CONTACT US</h1>
          <h1 className="text-[58px] text-[#252B42] font-bold text-center">
            Get in touch today!
          </h1>
          <h1 className="text-[20px] text-[#737373] w-[330px] text-center">
            We know how large objects will act, but things on a small scale
          </h1>
          <div>
            <h1 className="text-[24px] text-[#252B42] font-bold text-center">
              Phone : +451 215 215{" "}
            </h1>
            <h1 className="text-[24px] text-[#252B42] font-bold text-center">
              Fax : +451 215 215
            </h1>
          </div>
          <div className="flex items-center justify-center gap-[30px]">
            <img className="h-[30px] w-[30px]" src={tweetgray} alt="M" />
            <img className="h-[30px] w-[30px]" src={fbgray} alt="M" />
            <img className="h-[30px] w-[30px]" src={instagray} alt="M" />
            <img className="h-[30px] w-[30px]" src={linkgray} alt="M" />
          </div>
        </div>
        <img className="h-[612px] w-[552px] " src={family} alt="M" />
      </div>
      <div className="lg:mt-[100px] md:mt-[20px] mt-[50px] flex flex-col justify-center items-center lg:gap-[100px] md:gap-[50px] gap-0">
        <div>
          <h1 className="text-[14px] text-[#252B42] font-bold text-center">
            VISIT OUR OFFICE
          </h1>
          <h1 className="text-[40px] text-[#252B42] font-bold text-center lg:w-[480px] md:w-[480px] w-[380px]">
            We help small businesses with big ideas
          </h1>
        </div>

        <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[30px] md:gap-[0] gap-0">
          <div className="h-[403px] w-[329px] justify-center items-center flex flex-col  gap-[30px]">
            <img className="h-[72px] w-[72px]" src={callblue} alt="M" />
            <h1 className="text-[14px] text-[#252B42] font-bold">
              georgia.young@example.com
            </h1>
            <h1 className="text-[14px] text-[#252B42] font-bold">
              georgia.young@ple.com
            </h1>
            <h1 className="text-[16px] text-[#252B42] font-bold">
              Get Support
            </h1>
            <button className="text-[14px] text-[#23A6F0] font-bold border-2 border-[#23A6F0] rounded-[50px] hover:bg-gray-200 p-[15px] w-[189px]">
              Submit Request
            </button>
          </div>
          <div className="h-[403px] w-[329px] justify-center items-center flex flex-col bg-[#252B42] gap-[30px]">
            <img className="h-[72px] w-[72px]" src={locationblue} alt="M" />
            <h1 className="text-[14px] text-white font-bold">
              georgia.young@example.com
            </h1>
            <h1 className="text-[14px] text-white font-bold">
              georgia.young@ple.com
            </h1>
            <h1 className="text-[16px] text-white font-bold">Get Support</h1>
            <button className="text-[14px] text-[#23A6F0] font-bold border-2 border-[#23A6F0] rounded-[50px] hover:bg-blue-700 p-[15px] w-[189px]">
              Submit Request
            </button>
          </div>
          <div className="h-[403px] w-[329px] justify-center items-center flex flex-col  gap-[30px]">
            <img className="h-[72px] w-[72px]" src={mailblue} alt="M" />
            <h1 className="text-[14px] text-[#252B42] font-bold">
              georgia.young@example.com
            </h1>
            <h1 className="text-[14px] text-[#252B42] font-bold">
              georgia.young@ple.com
            </h1>
            <h1 className="text-[16px] text-[#252B42] font-bold">
              Get Support
            </h1>
            <button className="text-[14px] text-[#23A6F0] font-bold border-2 border-[#23A6F0] rounded-[50px] hover:bg-gray-200 p-[15px] w-[189px]">
              Submit Request
            </button>
          </div>
        </div>
      </div>
      <div className="lg:mt-[70px] md:mt-[50px] mt-[20px] flex flex-col gap-[20px] justify-center items-center lg:mb-[50px] md:mb-[20px] mb-[20px]">
        <img className="h-[72px] w-[73px]" src={curvearrow} alt="M" />
        <h1 className="text-[16px] text-[#252B42] font-bold text-center">
          WE Can't WAIT TO MEET YOU
        </h1>
        <h1 className="text-[58px] text-[#252B42] font-bold text-center">
          Let’s Talk
        </h1>
        <button className="text-[14px] text-white font-bold bg-[#23A6F0] p-[15px] w-[186px] rounded-md">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default Contact;
