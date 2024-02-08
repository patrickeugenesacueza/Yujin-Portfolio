import React from "react";
import { TypeAnimation } from "react-type-animation";

// import image
import FrontEndLogo from "../assets/frontEndSVG.svg";
import MobileLogo from "../assets/mobileDevSVG.svg";
import TechSuppLogo from "../assets/techSupportSVG.svg";
import ClrsDekstopSize from "../assets/clrsDekstopSize.png";
import ClrsMobileSize from "../assets/clrsMobileSize.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <section className="w-full h-auto bg-[#fff] pt-[5em]">
      <div className="text-center block">
        <TypeAnimation
          sequence={[
            "Front-end Developer",
            1000,
            "Mobile Application Developer",
            1000,
            "Tech Support",
            1000,
            "Capstone Programmer  ",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-[#333] font-[Lato] text-[1.2em] md:text-[3em] lg:text-3em font-[900] leading-[1.2]"
          repeat={Infinity}
        />
        <div className="font-[300] text-[1.2em] lg:text-[1.5em]  mt-3 mx-[2em] md:mx-[5em] lg:mx-[10em]">
          <p>
            Hey there! I'm Eugene, a passionate person ready to dive into the
            world of challenges with boundless energy. No limits, just pure
            enthusiasm to create amazing things together
          </p>
        </div>
      </div>
      {/* grid box */}
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10 px-10 sm:px-10 md:px-10 lg:px-[10em] xl:px-[10em]">
        {/* 1st container */}
        <div className="bg-[#F3F3F3] py-[2em] sm:py-[8em] md:py-[10em] lg:py-[10em] xl:py-[2em] flex items-center justify-center text-center">
          <div className="flex text-left md:block md:text-center lg:block lg:text-center xl:block xl:text-center 2xl:block 2xl:text-center">
            <img
              src={FrontEndLogo}
              height={80}
              width={190}
              className="mx-auto"
            />
            <div className="mt-5 px-[2em]">
              <h1 className="font-[700] mb-1">Front-end Development</h1>
              <p className="text-left">
                Responsive websites built for an optimal user experience that
                achieves your business goals.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd container */}
        <div className="bg-[#F3F3F3] py-[2em] sm:py-[8em] md:py-[10em] lg:py-[10em] xl:py-[2em] flex items-center justify-center text-center">
          <div className="flex text-left md:block md:text-center lg:block lg:text-center xl:block xl:text-center 2xl:block 2xl:text-center">
            <img src={MobileLogo} height={80} width={190} className="mx-auto" />
            <div className="mt-5 px-[2em]">
              <h1 className="font-[700] mb-1">
                Mobile Application Development
              </h1>
              <p className="text-left">
                Focusing on mobile application development, particularly in
                Android studio
              </p>
            </div>
          </div>
        </div>

        {/* 3rd container */}
        <div className="bg-[#F3F3F3] py-[2em] sm:py-[8em] md:py-[10em] lg:py-[10em] xl:py-[2em] flex items-center justify-center text-center">
          <div className="flex text-left md:block md:text-center lg:block lg:text-center xl:block xl:text-center 2xl:block 2xl:text-center">
            <img
              src={TechSuppLogo}
              height={80}
              width={190}
              className="mx-auto"
            />
            <div className="mt-5 px-[2em]">
              <h1 className="font-[700] mb-1">IT Tech Support</h1>
              <p className="text-left">
                Efficient tech support services designed to enhance your digital
                experience and seamlessly resolve any technical challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className=" mt-[8em] mx-[2em] md:mx-[4em] lg:mx-[5em] 2xl:mx-[5em]" />
      <div className="mt-[2em]">
        <h2 className="text-center text-[2.5em] font-[900] text-[#333]">
          Featured Work
        </h2>
        <div className="h-[60vh] py-[1em] px-[1em] flex mx-[2em] md:mx-[4em] lg:mx-[5em] 2xl:mx-[5em]">
          <div className="w-1/4 h-full mr-[1.5em]">
            <div className="w-full bg-[#F3F3F3] h-1/3"></div>
            <div>
            <div className="flex items-center">
              {/* Updated to use the imported icon */}
              <FontAwesomeIcon icon={faChevronRight} className="mr-2 text-[#861f9e]" />
              <h1 className="text-[2rem] text-[#861f9e]">
                Clarise's Portfolio
              </h1>
            </div>
              <span className="text-[1.5rem] text-[#333] font-serif">
                I spearheaded the development of Clarise's portfolio utilizing
                React JS, Tailwind CSS, and EmailJS, alongside various other
                React packages
              </span>
            </div>
          </div>
          <div className="w-3/4 h-full bg-[#F3F3F3] flex p-[1.5em]">
            <div className="h-full w-2/3 bg-red-700 mr-[2em]">
              <img src={ClrsDekstopSize} className="h-full w-full"/>
            </div>
            <div className="h-full w-1/3 bg-red-200">
              <img src={ClrsMobileSize} className="h-full w-full"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
