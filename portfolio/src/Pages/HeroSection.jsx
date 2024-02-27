import React from "react";
import { TypeAnimation } from "react-type-animation";
// import testimonial json
import data from "../data/TestimonialFeedback.json";

// import image
import FrontEndLogo from "../assets/frontEndSVG.svg";
import MobileLogo from "../assets/mobileDevSVG.svg";
import TechSuppLogo from "../assets/techSupportSVG.svg";
import ClrsDekstopSize from "../assets/clrsDekstopSize.png";
import ClrsMobileSize from "../assets/clrsMobileSize.png";
import ClrsIcon from "../assets/clrsIcon.png";
import JProgLogo from "../assets/jProgLogo.png";
import JProgFirstPicture from "../assets/JE1.png";
import JProgSecondPicture from "../assets/JE2.png";
import JProgThirdPicture from "../assets/JE3.png";
import TestimonialClarise from "../assets/testimonialClarise.jpg";
import TestimonialCocoy from "../assets/testimonialCocoy.jpg";

import TUPCareDekstopSize from "../assets/TUPCareDesktopSize.png";
import TUPCareMobileSize from "../assets/TUPCareMobileSize.png";
import TUPCareLogo from "../assets/TUPCareLogo.png";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Footer from "../Components/Footer.jsx";

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
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10 px-4 sm:px-10 md:px-10 lg:px-[10em] xl:px-[10em]">
        {/* 1st container */}
        <div className="bg-[#F3F3F3] py-8 sm:py-10 md:py-10 lg:py-10 xl:py-8 flex items-center justify-center text-center">
          <div className="flex flex-col items-center sm:text-left lg:text-center xl:text-center 2xl:text-center">
            <img
              src={FrontEndLogo}
              height={80}
              width={190}
              className="mx-auto"
            />
            <div className="mt-5 px-4 sm:px-0 md:px-4">
              <h1 className="font-[700] mb-1">Front-end Development</h1>
              <p className="text-left">
                Responsive websites built for an optimal user experience that
                achieves your business goals.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd container */}
        <div className="bg-[#F3F3F3] py-8 sm:py-10 md:py-10 lg:py-10 xl:py-8 flex items-center justify-center text-center">
          <div className="flex flex-col items-center sm:text-left lg:text-center xl:text-center 2xl:text-center">
            <img src={MobileLogo} height={80} width={190} className="mx-auto" />
            <div className="mt-5 px-4 sm:px-0 md:px-4">
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
        <div className="bg-[#F3F3F3] py-8 sm:py-10 md:py-10 lg:py-10 xl:py-8 flex items-center justify-center text-center">
          <div className="flex flex-col items-center sm:text-left lg:text-center xl:text-center 2xl:text-center">
            <img
              src={TechSuppLogo}
              height={80}
              width={190}
              className="mx-auto"
            />
            <div className="mt-5 px-4 sm:px-0 md:px-4">
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

        {/* 1st featured work */}
        <div className="h-[60vh] py-[1em] px-[1em] flex mx-[2em] md:mx-[4em] lg:mx-[5em] 2xl:mx-[5em]">
          <div className="w-full md:w-full lg:w-1/4 xl:w-1/4 2xl:w-1/4 h-full mr-[1.5em]">
            <div className="w-full bg-[#F3F3F3] h-1/3 items-center">
              <img src={ClrsIcon} className="w-1/2 h-full mx-auto" />
            </div>
            <div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="mr-2 text-[#861f9e]"
                />
                <h1 className="text-[2rem] text-[#861f9e]">
                  Clarise's Portfolio
                </h1>
              </div>
              <span className="text-[1.5rem] text-[#333] font-light">
                I spearheaded the development of Clarise's portfolio utilizing
                React JS, Tailwind CSS, and EmailJS, alongside various other
                React packages
              </span>
            </div>
          </div>
          <div className="hidden md:hidden lg:flex xl:flex 2xl:flex md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 h-full bg-[#F3F3F3] p-[1.5em]">
            <div className="h-full w-2/3 md:w-full bg-red-700 mr-[2em]">
              <img src={ClrsDekstopSize} className="h-full w-full" />
            </div>
            <div className="h-full w-1/3 bg-red-200">
              <img src={ClrsMobileSize} className="h-full w-full" />
            </div>
          </div>
        </div>

        {/* 2nd featured work */}
        <div className="h-[60vh] py-[1em] px-[1em] flex mx-[2em] md:mx-[4em] lg:mx-[5em] 2xl:mx-[5em]">
          <div className="w-full md:w-full lg:w-1/4 xl:w-1/4 2xl:w-1/4 h-full mr-[1.5em]">
            <div className="w-full bg-[#fcbc7e] h-1/3 items-center">
              <img src={JProgLogo} className="w-1/2 h-full mx-auto" />
            </div>
            <div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="mr-2 text-[#861f9e]"
                />
                <h1 className="text-[2rem] text-[#861f9e]">jProg e-Learning</h1>
              </div>
              <span className="text-[1.5rem] text-[#333] font-light">
                I developed the jProg e-Learning platform using Android Studio
                and Java, incorporating Firebase as the database backend.
              </span>
            </div>
          </div>
          <div className="hidden md:hidden lg:flex xl:flex 2xl:flex md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 h-full bg-[#F3F3F3] p-[1.5em]">
            <div className="h-full w-1/3 mx-[.5em] bg-red-200">
              <img src={JProgFirstPicture} className="h-full w-full" />
            </div>
            <div className="h-full w-1/3  mx-[.5em] bg-red-200">
              <img src={JProgSecondPicture} className="h-full w-full" />
            </div>
            <div className="h-full w-1/3 mx-[.5em]  bg-red-200">
              <img src={JProgThirdPicture} className="h-full w-full" />
            </div>
          </div>
        </div>

        {/* 3rd featured work */}
        <div className="h-[60vh] py-[1em] px-[1em] flex mx-[2em] md:mx-[4em] lg:mx-[5em] 2xl:mx-[5em]">
          <div className="w-full md:w-full lg:w-1/4 xl:w-1/4 2xl:w-1/4 h-full mr-[1.5em]">
            <div className="w-full bg-[#F3F3F3] h-1/3 items-center">
              <img src={TUPCareLogo} className="w-1/2 h-full mx-auto" />
            </div>
            <div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="mr-2 text-[#bd3f3f]"
                />
                <h1 className="text-[2rem] text-[#bd3f3f]">TUPCare</h1>
              </div>
              <span className="text-[1.5rem] text-[#333] font-light">
                Our capstone thesis, TUPCare, entails the development of a
                monitoring web application designed to oversee temperature
                scanners, face mask dispensers, and alcohol dispensers within
                TUP-Manila
              </span>
            </div>
          </div>
          <div className="hidden md:hidden lg:flex xl:flex 2xl:flex md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 h-full bg-[#F3F3F3] p-[1.5em]">
            <div className="h-full w-2/3 md:w-full bg-red-700 mr-[2em]">
              <img src={TUPCareDekstopSize} className="h-full w-full" />
            </div>
            <div className="h-full w-1/3 bg-red-200">
              <img src={TUPCareMobileSize} className="h-full w-full" />
            </div>
          </div>
        </div>

        <hr className=" mt-[8em] mx-[2em] md:mx-[4em] lg:mx-[5em] 2xl:mx-[5em]" />
        <div className="mt-[2em]">
          <h2 className="text-center text-[2.5em] font-[900] text-[#333]">
            Testimonials
          </h2>

          <div className="text-center py-10">
            <div className="flex flex-wrap justify-center gap-8 ">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="max-w-sm p-8 rounded-xl bg-[#F3F3F3]"
                >
                  <img
                    src={
                      item.name === "Clarise Ann Duque"
                        ? TestimonialClarise
                        : item.name === "Cocoy Avila"
                        ? TestimonialCocoy
                        : TestimonialClarise
                    }
                    alt={`image ${index}`}
                    className="h-20 mx-auto bg-red-600 rounded-full "
                  />
                  <h4 className="uppercase text-xl font-bold mt-2">
                    {item.name}
                  </h4>
                  <p className="text-md leading-7 my-3 font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default HeroSection;
