import React from "react";
import SwitchComponent from "../components/SwitchComponent";
import Breadcrumbs from "../components/Breadcrumbs";
import greentick from "../images/greentick.png";
import graytick from "../images/graytick.png";
import hooli from "../images/hooli.png";
import lyft from "../images/lyft.png";
import boat from "../images/boat.png";
import stripe from "../images/stripe.png";
import aws from "../images/aws.png";
import reddit from "../images/reddit.png";
import fbcolor from "../images/fbcolor.png";
import instacolor from "../images/instacolor.png";
import linkcolor from "../images/linkcolor.png";
import tweetcolor from "../images/tweetcolor.png";
const Pricing = () => {
  return (
    <div className="container mx-auto py-8">
      <Breadcrumbs />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[16px] text-[#737373] font-bold text-center">
          PRICING
        </h1>
        <h1 className="text-[58px] text-[#252B42] font-bold text-center">
          Simple Pricing
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center lg:mt-[100px] md:mt-[50px] mt-[20px] gap-[20px]">
        <h1 className="text-[40px] text-[#252B42] font-bold text-center">
          Pricing
        </h1>
        <h1 className="text-[14px] text-[#737373] lg:w-[440px] md:w-[380px] w-[350px] text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </h1>
        <br />
        <div className="flex items-center gap-[20px]">
          <h1 className="text-[16px] text-[#252B42] font-bold">Monthly</h1>
          <SwitchComponent />
          <h1 className="text-[16px] text-[#252B42] font-bold">Yearly</h1>
          <button className="text-[14px] text-[#23A6F0] font-bold bg-[#B2E3FF] p-[10px] w-[108px] rounded-[30px]">
            Save 25%
          </button>
        </div>
      </div>
      <div className="flex justify-center items-end lg:flex-row md:flex-row flex-col lg:mr-0 md:mr-0 mr-[50px] lg:gap-0 md:gap-0 gap-[20px] lg:mt-[100px] md:mt-[80px] mt-[50px] ">
        <div className="h-[664px] w-[329px]  border-2 border-[#23A6F0] rounded-lg flex flex-col justify-center items-center gap-[35px]">
          <h1 className="text-[24px] text-[#252B42] font-bold text-center">
            FREE
          </h1>
          <h1 className="text-[16px] text-[#737373] font-bold text-center w-[160px]">
            Organize across all apps by hand
          </h1>
          <div className="flex gap-[10px]">
            <h1 className="text-[40px] text-[#23A6F0] font-bold">0</h1>
            <div className="flex gap-[0px] flex-col">
              <h1 className="text-[24px] text-[#23A6F0] font-bold">$</h1>
              <h1 className="text-[14px] text-[#8EC2F2] font-bold">
                Per Month
              </h1>
            </div>
          </div>
          <div className="w-[240px] flex flex-col gap-[20px]">
            <h1 className="text-[14px] text-[#252B42] font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={greentick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Unlimited product updates
            </h1>
            <h1 className="text-[14px] text-[#252B42] font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={greentick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Unlimited product updates
            </h1>
            <h1 className="text-[14px] text-[#252B42] font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={greentick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Unlimited product updates
            </h1>
            <h1 className="text-[14px] text-[#252B42] font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={graytick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;1GB Cloud storage
            </h1>
            <h1 className="text-[14px] text-[#252B42] font-bold ">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block "
                  src={graytick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Email and community support
            </h1>
          </div>
          <button className="text-[14px] text-white font-bold bg-[#252B42] p-[15px] w-[246px] rounded-lg hover:bg-blue-300">
            Try for free
          </button>
        </div>
        <div className="h-[704px] w-[329px] bg-[#252B42] border-2 border-[#23A6F0] rounded-lg flex flex-col justify-center items-center gap-[35px]">
          <h1 className="text-[24px] text-white font-bold text-center">
            STANDARD
          </h1>
          <h1 className="text-[16px] text-white font-bold text-center w-[160px]">
            Organize across all apps by hand
          </h1>
          <div className="flex gap-[10px]">
            <h1 className="text-[40px] text-[#23A6F0] font-bold">9.99</h1>
            <div className="flex gap-[0px] flex-col">
              <h1 className="text-[24px] text-[#23A6F0] font-bold">$</h1>
              <h1 className="text-[14px] text-[#8EC2F2] font-bold">
                Per Month
              </h1>
            </div>
          </div>
          <div className="w-[240px] flex flex-col gap-[20px]">
            <h1 className="text-[14px] text-white font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={greentick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Unlimited product updates
            </h1>
            <h1 className="text-[14px] text-white font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={greentick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Unlimited product updates
            </h1>
            <h1 className="text-[14px] text-white font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={greentick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Unlimited product updates
            </h1>
            <h1 className="text-[14px] text-white font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={graytick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;1GB Cloud storage
            </h1>
            <h1 className="text-[14px] text-white font-bold ">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block "
                  src={graytick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Email and community support
            </h1>
          </div>
          <button className="text-[14px] text-white font-bold bg-[#23A6F0] p-[15px] w-[246px] rounded-lg hover:bg-blue-300">
            Try for free
          </button>
        </div>
        <div className="h-[664px] w-[329px]  border-2 border-[#23A6F0] rounded-lg flex flex-col justify-center items-center gap-[35px]">
          <h1 className="text-[24px] text-[#252B42] font-bold text-center">
            PREMIUM
          </h1>
          <h1 className="text-[16px] text-[#737373] font-bold text-center w-[160px]">
            Organize across all apps by hand
          </h1>
          <div className="flex gap-[10px]">
            <h1 className="text-[40px] text-[#23A6F0] font-bold">19.99</h1>
            <div className="flex gap-[0px] flex-col">
              <h1 className="text-[24px] text-[#23A6F0] font-bold">$</h1>
              <h1 className="text-[14px] text-[#8EC2F2] font-bold">
                Per Month
              </h1>
            </div>
          </div>
          <div className="w-[240px] flex flex-col gap-[20px]">
            <h1 className="text-[14px] text-[#252B42] font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={greentick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Unlimited product updates
            </h1>
            <h1 className="text-[14px] text-[#252B42] font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={greentick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Unlimited product updates
            </h1>
            <h1 className="text-[14px] text-[#252B42] font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={greentick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Unlimited product updates
            </h1>
            <h1 className="text-[14px] text-[#252B42] font-bold">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block"
                  src={graytick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;1GB Cloud storage
            </h1>
            <h1 className="text-[14px] text-[#252B42] font-bold ">
              <span>
                <img
                  className="h-[32px] w-[32px] inline-block "
                  src={graytick}
                  alt="M"
                />
              </span>{" "}
              &nbsp;Email and community support
            </h1>
          </div>
          <button className="text-[14px] text-white font-bold bg-[#23A6F0] p-[15px] w-[246px] rounded-lg hover:bg-blue-300">
            Try for free
          </button>
        </div>
      </div>
      <div className="lg:mt-[100px] md:mt-[80px] mt-[50px]">
        <h1 className="text-[20px] text-[#252B42] font-bold text-center">
          Trusted By Over 4000 Big Companies
        </h1>
        <div className="lg:h-[126px] md:h-[126px] h-[1452px]  w-full flex lg:flex-row md:flex-row flex-col lg:gap-[50px] md:gap-[0px] gap-[181px] justify-center items-center lg:mt-[40px] md:mt-[-20px] mt-[10px]">
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
      <div className="lg:mt-[100px] md:mt-[50px] mt-[50px] flex flex-col justify-center items-center gap-[50px] ">
        <h1 className="text-[40px] text-[#252B42] font-bold text-center">
          Pricing FAQs
        </h1>
        <h1 className="text-[20px] text-[#737373] text-center lg:w-[450px] md:w-[450px] w-[380px] font-semibold">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-[100px] md:gap-[30px] gap-[20px] lg:gap-x-[200px]">
          <div className="w-[345px]">
            <h1 className="text-[16px] text-[#252B42] font-bold">
              the quick fox jumps over the lazy dog
            </h1>
            <h1 className="text-[14px] text-[#737373] ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h1>
          </div>
          <div className="w-[345px]">
            <h1 className="text-[16px] text-[#252B42] font-bold">
              the quick fox jumps over the lazy dog
            </h1>
            <h1 className="text-[14px] text-[#737373] ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h1>
          </div>
          <div className="w-[345px]">
            <h1 className="text-[16px] text-[#252B42] font-bold">
              the quick fox jumps over the lazy dog
            </h1>
            <h1 className="text-[14px] text-[#737373] ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h1>
          </div>
          <div className="w-[345px]">
            <h1 className="text-[16px] text-[#252B42] font-bold">
              the quick fox jumps over the lazy dog
            </h1>
            <h1 className="text-[14px] text-[#737373] ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h1>
          </div>
          <div className="w-[345px]">
            <h1 className="text-[16px] text-[#252B42] font-bold">
              the quick fox jumps over the lazy dog
            </h1>
            <h1 className="text-[14px] text-[#737373] ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h1>
          </div>
          <div className="w-[345px]">
            <h1 className="text-[16px] text-[#252B42] font-bold">
              the quick fox jumps over the lazy dog
            </h1>
            <h1 className="text-[14px] text-[#737373] ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </h1>
          </div>
        </div>
      </div>
      <h1 className="lg:mt-[100px] md:mt-[100px] mt-[50px] text-[20px] text-[#737373] text-center">
        Haven’t got your answer? Contact our support
      </h1>
      <div className="lg:mt-[100px] md:mt-[80px] mt-[50px] mb-[50px] flex flex-col justify-between items-center gap-[30px]">
        <h1 className="text-[40px] text-[#252B42] font-bold text-center">
          Start your 14 days free trial
        </h1>
        <h1 className="text-[14px] text-[#737373] w-[360px] text-center">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </h1>
        <button className="text-[14px] text-white font-bold bg-[#23A6F0] p-[15px] w-[186px] rounded-md hover:bg-blue-300">
          Try it free now
        </button>

        <div className="flex gap-[35px] justify-center items-center">
          <img className="h-[30px] w-[30px]" src={tweetcolor} alt="M" />
          <img className="h-[30px] w-[30px]" src={fbcolor} alt="M" />
          <img className="h-[30px] w-[30px]" src={instacolor} alt="M" />
          <img className="h-[30px] w-[30px]" src={linkcolor} alt="M" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
