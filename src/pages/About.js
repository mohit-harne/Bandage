import React from "react";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import about3 from "../images/about3.png";
import about4 from "../images/about4.png";
import about5 from "../images/about5.png";
import video1 from "../video/video1.mp4";
import fbblue from "../images/fbblue.png";
import instablue from "../images/instablue.png";
import tweetblue from "../images/tweetblue.png";
import hooli from "../images/hooli.png";
import lyft from "../images/lyft.png";
import boat from "../images/boat.png";
import stripe from "../images/stripe.png";
import aws from "../images/aws.png";
import reddit from "../images/reddit.png";
import Breadcrumbs from "../components/Breadcrumbs";
const About = () => {
  return (
    <div>
      <Breadcrumbs />
      <div className="lg:mt-0 md:mt-[-80px] mt-[20px] flex lg:flex-row md:flex-row flex-col items-center justify-center lg:gap-[250px] md:gap-[100px] gap-0 lg:scale-100 md:scale-75 scale-100">
        <div className="flex flex-col lg:gap-[40px] md:gap-[40px] gap-[20px]">
          <h1 className="text-[16px] text-[#252B42] font-bold">
            ABOUT COMPANY
          </h1>
          <h1 className="text-[58px] text-[#252B42] font-bold">ABOUT US</h1>
          <h1 className="text-[20px] text-[#737373] w-[330px]">
            We know how large objects will act, but things on a small scale
          </h1>
          <button className="text-[14px] text-white font-bold bg-[#23A6F0] px-[40px] py-[15px] w-[193px] rounded-md">
            Get Quote Now
          </button>
        </div>
        <img className="h-[612px] w-[632px] " src={about1} alt="M" />
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col lg:gap-[320px] md:gap-[40px] gap-[20px] items-center justify-center lg:mt-[60px] md:mt-[-50px] mt-[50px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="text-[14px] text-[#E74040]">Problems trying</h1>
          <h1 className="text-[24px] text-[#252B42] font-bold w-[370px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h1>
        </div>
        <h1 className="text-[14px] text-[#737373] lg:w-[520px] md:w-[350px] w-[370px]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </h1>
      </div>
      <div className="lg:h-[264px] md:h-[264px] h-[300px] grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 justify-center items-center lg:mt-[80px] md:mt-[0] mt-[50px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[58px] text-[#252B42] font-bold">15K</h1>
          <h1 className="text-[16px] text-[#737373] font-bold">
            Happy Customers
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[58px] text-[#252B42] font-bold">150K</h1>
          <h1 className="text-[16px] text-[#737373] font-bold">
            Monthly Visitors
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[58px] text-[#252B42] font-bold">15</h1>
          <h1 className="text-[16px] text-[#737373] font-bold">
            Countries Worldwide
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[58px] text-[#252B42] font-bold">100+</h1>
          <h1 className="text-[16px] text-[#737373] font-bold">Top Partners</h1>
        </div>
      </div>

      <div className="flex justify-center lg:mt-[80px] md:mt-[0px] mt-[20px] lg:scale-100 md:scale-75 scale-[80%]">
        <div className="overflow- rounded-2xl shadow-lg">
          <video
            className=" rounded-2xl "
            height={540}
            width={989}
            autoPlay
            loop
            muted
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="lg:mt-[100px] md:mt-[20px] mt-[20px] flex flex-col items-center justify-center gap-[10px]">
        <h1 className="text-[40px] text-[#252B42] font-bold">Meet Our Team</h1>
        <h1 className="text-[14px] text-[#737373] lg:w-[440px] md:w-[469px] w-[380px] text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </h1>
        <div className="lg:mt-[80px] md:mt-[50px] mt-[20px] flex lg:flex-row md:flex-row flex-col justify-center items-center lg:gap-[50px] md:gap-[0px] gap-[30px]">
          <div className="flex flex-col gap-[15px] justify-center items-center">
            <img className="w-[326px] h-[231px]" src={about2} alt="M" />
            <h1 className="text-[16px] text-[#252B42] font-bold">Username</h1>
            <h1 className="text-[14px] text-[#737373] font-bold">Profession</h1>
            <div className="flex justify-center items-center gap-[20px]">
              <img className="h-[24px] w-[24px]" src={fbblue} alt="M" />
              <img className="h-[24px] w-[24px]" src={instablue} alt="M" />
              <img className="h-[24px] w-[24px]" src={tweetblue} alt="M" />
            </div>
          </div>
          <div className="flex flex-col gap-[15px] justify-center items-center">
            <img className="w-[326px] h-[231px]" src={about3} alt="M" />
            <h1 className="text-[16px] text-[#252B42] font-bold">Username</h1>
            <h1 className="text-[14px] text-[#737373] font-bold">Profession</h1>
            <div className="flex justify-center items-center gap-[20px]">
              <img className="h-[24px] w-[24px]" src={fbblue} alt="M" />
              <img className="h-[24px] w-[24px]" src={instablue} alt="M" />
              <img className="h-[24px] w-[24px]" src={tweetblue} alt="M" />
            </div>
          </div>
          <div className="flex flex-col gap-[15px] justify-center items-center">
            <img className="w-[326px] h-[231px]" src={about4} alt="M" />
            <h1 className="text-[16px] text-[#252B42] font-bold">Username</h1>
            <h1 className="text-[14px] text-[#737373] font-bold">Profession</h1>
            <div className="flex justify-center items-center gap-[20px]">
              <img className="h-[24px] w-[24px]" src={fbblue} alt="M" />
              <img className="h-[24px] w-[24px]" src={instablue} alt="M" />
              <img className="h-[24px] w-[24px]" src={tweetblue} alt="M" />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px] lg:mt-[100px] md:mt-[50px] mt-[30px] ">
        <h1 className="text-[40px] text-[#252B42] font-bold text-center">
          Big Companies Are Here
        </h1>
        <h1 className="text-[14px] text-[#737373] w-[350px] text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </h1>
        <div className="lg:h-[126px] md:h-[126px] h-[1452px]  w-full flex lg:flex-row md:flex-row flex-col lg:gap-[50px] md:gap-[0px] gap-[180px] justify-center items-center lg:mt-[40px] md:mt-[-20px] mt-[10px]">
          <img
            className="h-[34px] w-[153px] lg:scale-100 md:scale-100 scale-[200%]"
            src={hooli}
            alt="M"
          />
          <img
            className="h-[59px] w-[146px] lg:scale-100 md:scale-100 scale-[280%]"
            src={lyft}
            alt="M"
          />
          <img
            className="h-[75px] w-[152px] lg:scale-100 md:scale-100 scale-[280%]"
            src={boat}
            alt="M"
          />
          <img
            className="h-[42px] w-[151px] lg:scale-100 md:scale-100 scale-[280%]"
            src={stripe}
            alt="M"
          />
          <img
            className="h-[62px] w-[151px] lg:scale-100 md:scale-100 scale-[280%]"
            src={aws}
            alt="M"
          />
          <img
            className="h-[72px] w-[151px] lg:scale-100 md:scale-100 scale-[280%]"
            src={reddit}
            alt="M"
          />
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col mt-[100px]">
        <div className="h-[640px] w-full flex flex-col justify-center items-center bg-[#2A7CC7] text-white gap-[30px] ">
          <h1 className="text-[16px] font-bold text-center">WORK WITH US</h1>
          <h1 className="text-[40px] font-bold text-center">
            Now Let’s grow Yours
          </h1>
          <h1 className="text-[14px] w-[400px] text-center">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </h1>
          <button className="rounded-lg text-[14px] font-bold border-2 border-[#FAFAFA] px-[40px] py-[15px] w-[130px] hover:opacity-85">
            Button
          </button>
        </div>
        <img
          className="h-[640px] w-[590px] hidden lg:block md:block"
          src={about5}
          alt="M"
        />
      </div>
    </div>
  );
};

export default About;
