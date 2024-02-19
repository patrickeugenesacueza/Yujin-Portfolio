import React from "react";

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import Footer from "../Components/Footer.jsx";

export default function Projects() {
  return (
    <>
      <section className="w-full h-auto bg-[#fff]">
        <div className="py-[2em]">
          <h2 className="text-center text-[2.5em] font-[900] text-[#333] font-[lato]">
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
              <div className="h-full w-2/3 md:w-full mr-[2em]">
                <img src={ClrsDekstopSize} className="h-full w-full" />
              </div>
              <div className="h-full w-1/3 ">
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
                  <h1 className="text-[2rem] text-[#861f9e]">
                    jProg e-Learning
                  </h1>
                </div>
                <span className="text-[1.5rem] text-[#333] font-light">
                  I developed the jProg e-Learning platform using Android Studio
                  and Java, incorporating Firebase as the database backend.
                </span>
              </div>
            </div>
            <div className="hidden md:hidden lg:flex xl:flex 2xl:flex md:w-3/4 lg:w-3/4 xl:w-3/4 2xl:w-3/4 h-full bg-[#F3F3F3] p-[1.5em]">
              <div className="h-full w-1/3 mx-[.5em] ">
                <img src={JProgFirstPicture} className="h-full w-full" />
              </div>
              <div className="h-full w-1/3  mx-[.5em] ">
                <img src={JProgSecondPicture} className="h-full w-full" />
              </div>
              <div className="h-full w-1/3 mx-[.5em]  ">
                <img src={JProgThirdPicture} className="h-full w-full" />
              </div>
            </div>
          </div>

          {/* 3rd featured work */}
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
                  <h1 className="text-[2rem] text-[#861f9e]">TUPCare</h1>
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
              <div className="h-full w-2/3 md:w-full  mr-[2em]">
                <img src={ClrsDekstopSize} className="h-full w-full" />
              </div>
              <div className="h-full w-1/3 ">
                <img src={ClrsMobileSize} className="h-full w-full" />
              </div>
            </div>
          </div>

          {/* 4th project */}
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
                  <h1 className="text-[2rem] text-[#861f9e]">TUPCare</h1>
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
              <div className="h-full w-2/3 md:w-full mr-[2em]">
                <img src={ClrsDekstopSize} className="h-full w-full" />
              </div>
              <div className="h-full w-1/3 ">
                <img src={ClrsMobileSize} className="h-full w-full" />
              </div>
            </div>
          </div>

          {/* 5th project */}
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
                  <h1 className="text-[2rem] text-[#861f9e]">PPABio</h1>
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
              <div className="h-full w-2/3 md:w-full mr-[2em]">
                <img src={ClrsDekstopSize} className="h-full w-full" />
              </div>
              <div className="h-full w-1/3 ">
                <img src={ClrsMobileSize} className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
