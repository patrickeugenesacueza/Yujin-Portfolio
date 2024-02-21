import React from "react";
import Footer from "../../Components/Footer";
import ClrsDekstopSize from "../../assets/clrsDekstopSize.png";
import ClrsMobileSize from "../../assets/clrsMobileSize.png";

export default function TUPCare() {
  return (
    <section className="bg-white">
      <div className="w-full h-[auto] flex flex-col-reverse lg:flex-row bg-white">
        <div className="w-full lg:w-1/4 h-full px-[2em] bg-white items-center justify-center pt-[1em] md:pt-[10em] pb-[1em]">
          <button className="w-full py-[.2em] px-[1em] bg-[#10142c] text-[1.5em] font-[500] font-times text-[#f3f3f3]">
            VIEW WEBSITE
          </button>
          <div className="mx-auto mt-[2em] justify-center text-lg">
            <h1 className="text-justify font-[900] font-[Lato]">TechStack</h1>
            <ul className="list-disc text-justify ml-4 mt-1">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Bootstrap</li>
              <li>Javascript</li>
              <li>PHP</li>
              <li>RestAPI</li>
            </ul>

            <h1 className="text-justify font-[900] font-[Lato] mt-10">
              Timeframe
            </h1>
            <ul className="list-disc text-justify ml-4 mt-1">
              <li>June 2022</li>
              <span className="font-sm font-thin">
                In June 2022, we shifted gears to focus on materializing our
                vision by crafting both the hardware and software prototypes.
              </span>
              <li>January 2023</li>
              <span className="font-sm font-thin">
                In January 2023, after months of dedicated effort and relentless
                refinement, our prototype stands complete.
              </span>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-3/4 h-full bg-white pb-[4em] px-[2em]">
          <h1 className="text-[2.5em] font-[700] text-[Lato] mt-[2em]">
            TUPCare
          </h1>
          <p className="text-[1.5em] font-thin">
            TUPCare is your all-in-one solution for comprehensive hardware
            monitoring, seamlessly integrating face mask and alcohol dispensers
            alongside a student temperature scanner. Experience peace of mind
            with our innovative website, ensuring a safe and healthy environment
            for all.
          </p>

          <div className="lg:flex xl:flex 2xl:flex md:w-full lg:w-full xl:w-full 2xl:w-3/4 h-full bg-[#F3F3F3] p-[1.5em] mt-[1em]">
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
