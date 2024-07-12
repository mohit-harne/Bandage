import React, { useEffect, useState } from "react";
import shopimg1 from "../images/shopimg1.jpg";
import shopimg2 from "../images/shopimg2.jpg";
import shopimg3 from "../images/shopimg3.jpg";
import leftarrow from "../images/leftarrow.png";
import rightarrow from "../images/rightarrow.png";

const images = [
  {
    src: shopimg2,
    text: (
      <div className="grid gap-[35px] lg:ml-[220px] md:ml-[100px] ml-[30px] lg:scale-100 md:scale-90 scale-75">
        <h1 className="text-[16px] font-bold">SUMMER 2020</h1>
        <h1 className="text-[58px] font-bold">NEW COLLECTION</h1>
        <h1 className="text-[20px] font-normal w-[340px]">
          We know how large objects will act, but things on a small scale.
        </h1>
        <button className="bg-[#2DC071] px-[40px] py-[15px] text-[24px] font-bold w-[221px]">
          SHOP NOW
        </button>
      </div>
    ),
  },
  {
    src: shopimg3,
    text: (
      <div className="grid gap-[35px] lg:ml-[220px] md:ml-[100px] ml-[30px] lg:scale-100 md:scale-90 scale-75">
        <h1 className="text-[16px] font-bold">AUTUMN 2020</h1>
        <h1 className="text-[58px] font-bold">FALL FASHION</h1>
        <h1 className="text-[20px] font-normal w-[340px]">
          Discover the latest trends for the season.
        </h1>
        <button className="bg-[#FF8C00] px-[40px] py-[15px] text-[24px] font-bold w-[321px]">
          VIEW COLLECTION
        </button>
      </div>
    ),
  },
  {
    src: shopimg1,
    text: (
      <div className="grid gap-[35px] lg:ml-[220px] md:ml-[100px] ml-[30px] lg:scale-100 md:scale-90 scale-75">
        <h1 className="text-[16px] font-bold">WINTER 2020</h1>
        <h1 className="text-[58px] font-bold">HOLIDAY SEASON</h1>
        <h1 className="text-[20px] font-normal w-[340px]">
          Celebrate with our festive collection.
        </h1>
        <button className="bg-[#BF0A30] px-[40px] py-[15px] text-[24px] font-bold w-[321px]">
          EXPLORE NOW
        </button>
      </div>
    ),
  },
];

const Slider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lg:h-[716px] md:h-[716px] h-[753px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-30 bg-black flex items-center lg:justify-start md:justify-start justify-center">
            <h1 className="text-white ">{image.text}</h1>
          </div>
        </div>
      ))}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2   "
      >
        <img
          src={leftarrow}
          alt="Previous"
          className="lg:scale-100 md:scale-90 scale-[60%] h-[44px] w-[24px]"
        />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2  "
      >
        <img
          src={rightarrow}
          alt="Next"
          className="lg:scale-100 md:scale-90 scale-[60%] h-[44px] w-[24px]"
        />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-[2px] lg:scale-100 md:scale-100 scale-75">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-[62px] h-[10px]  ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider1;
