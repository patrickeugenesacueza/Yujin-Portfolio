import React from "react";
import TestimonialClarise from "../assets/testimonialClarise.jpg";

import NavDetails from "../data/NavDetails.json";
import SocialMediaDetails from "../data/SocialMedia.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook, faSquareGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="w-full h-[80vh] md:h-[60vh] bg-[#282424] md:flex lg:flex xl:flex 2xl:flex mt-[2em] p-[2em] text-[#fff]">
        <div className="  h-1/2 md:h-full lg:h-full xl:h-full 2xl:h-full w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2">
          <div className="flex">
            <div className="w-[22h] h-full mr-3">
              <img src={TestimonialClarise} className="w-[20vh] h-[20vh]" />
            </div>
            <div className="w-[78vh] h-full">
              <p className="text-left font-light text-[1.2rem]">
                I am a Front-end Developer with 12 years commercial experience,
                author of CSS3 Foundations, and graduate of Internet Technology.
                I create successful websites that are fast, easy to use, and
                built with best practices.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h1>Aspiring Successful IT </h1>
            <div className="flex items-center cursor-pointer">
              <p className="font-bold text-[1em]">
                AVAILABLE APRIL 2024. HIRE NOW
              </p>
              <FontAwesomeIcon icon={faChevronRight} className="ml-2 " />
            </div>
          </div>
        </div>
        <div className=" bg-red-800  h-1/2 md:h-full lg:h-full xl:h-full 2xl:h-full w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4">
          {SocialMediaDetails.map((item, index) => (
            <div>
              <FontAwesomeIcon
                icon={
                  item.media === "Facebook"
                    ? faSquareFacebook
                    : item.media === "GitHub"
                    ? faSquareGithub
                    : faLinkedinIn
                }
                alt={`image ${index}`}
                className="h-[5vh] w-[5vh]"
              />
              <h4 className="uppercase text-xl font-bold mt-2">{item.media}</h4>
              <p className="text-md leading-7 my-3 font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className=" bg-red-200 h-full w-1/4 hidden md:block"></div>
      </div>
    </>
  );
}
