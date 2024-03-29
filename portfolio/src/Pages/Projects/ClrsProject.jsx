import React from "react";
import Footer from "../../Components/Footer";
import ClrsDekstopSize from "../../assets/clrsDekstopSize.png";
import ClrsMobileSize from "../../assets/clrsMobileSize.png";
import { Link } from "react-router-dom";

export default function ClrsProject() {
  return (
    <section className="bg-white">
      <div className="w-full h-[auto] flex flex-col-reverse lg:flex-row bg-white">
        <div className="w-full lg:w-1/4 h-full px-[2em] bg-white items-center justify-center pt-[1em] md:pt-[10em] pb-[1em]">
          <Link to="https://clrsduque.vercel.app/" target="_blank" rel="noopener noreferrer">
            <button className="w-full py-[.2em] px-[1em] bg-[#10142c] text-[1.5em] font-[500] font-times text-[#f3f3f3]">
              VIEW WEBSITE
            </button>
          </Link>
          <div className="mx-auto mt-[2em] justify-center text-lg">
            <h1 className="text-justify font-[900] font-[Lato]">TechStack</h1>
            <ul className="list-disc text-justify ml-4 mt-1">
              <li>ReactJS</li>
              <li>TailwindCSS</li>
              <li>EmailJS</li>
              <li>FramerMotion</li>
            </ul>
            <h1 className="text-justify font-[900] font-[Lato] mt-10">
              Timeframe
            </h1>
            <ul className="list-disc text-justify ml-4 mt-1">
              <li>December 2023</li>
              <span className="font-sm font-thin">
                In December 2023, our focus shifted to finding inspiration and
                brainstorming with Ma'am Clarise. Despite the limited timeframe
                of just one month, we were determined to make the most of it.
              </span>
              <li>January 2024</li>
              <span className="font-sm font-thin">
                In January 2024, our efforts were solely dedicated to adding the
                finishing touches. Every detail mattered as we meticulously
                refined Ma'am Clarise's portfolio to perfection.
              </span>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-3/4 h-full bg-white pb-[4em] px-[2em]">
          <h1 className="text-[2.5em] font-[700] text-[Lato] mt-[2em]">
            Clarise's Portfolio
          </h1>
          <p className="text-[1rem] md:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.3rem] 2xl:text-[1.3rem] font-thin">
            I had the honor of crafting Ma'am Clarise's Portfolio, an
            exhilarating journey that allowed me to showcase her work
            effectively. Developing Ma'am Clarise's Portfolio was an exciting
            endeavor, offering me the opportunity to bring her vision to life in
            a digital space. It was a rewarding experience to be entrusted with
            the creation of Ma'am Clarise's Portfolio, a project that challenged
            and inspired me as a developer
          </p>

          <div className="lg:flex xl:flex 2xl:flex md:w-full lg:w-full xl:w-full 2xl:w-full h-full bg-[#F3F3F3] p-[1.5em] mt-[1em]">
            <div className="h-full w-full md:w-full bg-red-700 mr-[2em]">
              <img
                src={ClrsDekstopSize}
                className="h-full w-full"
                alt="Desktop Size"
              />
            </div>
            <div className="hidden md:hidden lg:block xl:block 2xl:block h-full w-1/3 bg-red-200">
              <img
                src={ClrsMobileSize}
                className="h-full w-full"
                alt="Mobile Size"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
