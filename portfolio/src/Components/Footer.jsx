import React from "react";
import { Link } from "react-router-dom";

import YujinFormal from "../assets/YujinFormal.jpg";
import TestimonialClarise from "../assets/testimonialClarise.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaDetails from "../data/SocialMedia.json";
import NavDetails from "../data/NavDetails.json";

// import About from "../Pages/About";
// import Contact from "../Pages/Contact";
// import Experience from "../Pages/Experience";
// import Portfolio from "../Pages/Portfolio";

export default function Footer() {
  return (
    <>
      <div className="w-full h-[80vh] md:h-[50vh] bg-[#282424] md:flex lg:flex xl:flex 2xl:flex mt-[2em] p-[2em] text-[#fff]">
        <div className="h-1/2 md:h-full lg:h-full xl:h-full 2xl:h-full w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <div className="flex">
            <div className="w-[22h] h-full mr-3">
              <img src={YujinFormal} className="w-[20vh] h-[20vh]" alt="Yujin Formal" />
            </div>
            <div className="w-[78vh] h-full">
              <p className="text-sm md:text-lg font-light text-[1.2rem]">
                I am an aspiring IT professional with a passion for success and
                a drive to excel. Leveraging my background in freelance software
                development and IT tech support, I am equipped with a diverse
                skill set to tackle challenges in the ever-evolving tech
                landscape. With a commitment to delivering top-notch solutions
                and providing exceptional support, I aim to carve a path of
                success in the IT industry
              </p>
            </div>
          </div>
          <div className="my-6">
            <h1>Aspiring Successful IT </h1>
            <div className="flex items-center cursor-pointer">
              <p className="font-bold text-[1em]">
                AVAILABLE APRIL 2024. HIRE NOW
              </p>
              <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
            </div>
          </div>
        </div>
        <div className="h-[40vh] md:h-full lg:h-full xl:h-full 2xl:h-full w-full md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4 text-left md:text-right md:px-[2em]">
          {SocialMediaDetails.map((item, index) => (
            <div key={index}>
              <Link
                to={
                  item.media === "Facebook"
                    ? "https://www.facebook.com/patrickeugene.sacueza"
                    : item.media === "GitHub"
                    ? "https://github.com/patrickeugenesacueza"
                    : "https://www.linkedin.com/in/patrick-eugene-sacueza-18633826a/"
                }
              >
                <div className="flex justify-start md:justify-end">
                  <FontAwesomeIcon
                    icon={
                      item.media === "Facebook"
                        ? faSquareFacebook
                        : item.media === "GitHub"
                        ? faSquareGithub
                        : faLinkedinIn
                    }
                    alt={`image ${index}`}
                    className="h-[3vh] w-[3vh] mr-[1em] mt-1 "
                  />
                  <h4 className="uppercase text-xl font-bold ">{item.media}</h4>
                </div>
              </Link>
              <p className="text-md leading-7 my-3 font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="h-full w-1/4 hidden md:block text-left md:text-left md:px-[2em]">
          {NavDetails.map((item, index) => (
            <div key={index}>
              {/* Use Link component instead of h1 */}
              <Link to={`/pages/${item.nav.toLowerCase()}`}>
                <h1 className="cursor-pointer text-xl font-bold">{item.nav}</h1>
              </Link>
              <p className="text-md leading-7 my-3 font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
