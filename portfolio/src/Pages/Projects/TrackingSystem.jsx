import React from "react";
import Footer from "../../Components/Footer";
import ClrsDekstopSize from "../../assets/TUPCareDesktopSize.png";
import ClrsMobileSize from "../../assets/TUPCareMobileSize.png";
import PortPoliceDesktopSize2 from "../../assets/DesktopSizePPD2.png";

export default function TrackingSystem() {
  return (
    <>
      <section className="bg-white">
        <div className="w-full h-[auto] flex flex-col-reverse lg:flex-row bg-white">
          <div className="w-full lg:w-1/4 h-full px-[2em] bg-white items-center justify-center pt-[1em] md:pt-[10em] pb-[1em]">
            {/* <button className="w-full py-[.2em] px-[1em] bg-[#10142c] text-[1.5em] font-[500] font-times text-[#f3f3f3]">
              VIEW SOURCE CODE
            </button> */}
            <div className="mx-auto mt-[2em] justify-center text-lg">
              <h1 className="text-justify font-[900] font-[Lato]">TechStack</h1>
              <ul className="list-disc text-justify ml-4 mt-1">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>AJAX</li>                
                <li>PHP</li>
                <li>mySQL</li>
              </ul>

              <h1 className="text-justify font-[900] font-[Lato] mt-10">
                Timeframe
              </h1>
              <ul className="list-disc text-justify ml-4 mt-1">
                <li>June 2023</li>
                <span className="font-sm font-thin">
                  As of June 2023, our focus is on developing the user interface
                  for the Case Tracking System, followed by presenting potential
                  features to the officers for their input and feedback.
                </span>
                <li>July 2023</li>
                <span className="font-sm font-thin">
                  As of July 2023, the system development phase has concluded,
                  and we have transitioned into the debugging phase, where we
                  meticulously identify and resolve any technical issues or
                  errors to ensure the system's smooth operation and
                  reliability.
                </span>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-3/4 h-full bg-white pb-[4em] px-[2em]">
            <h1 className="text-[2.5em] font-[700] text-[Lato] mt-[2em]">
              Case Tracking System
            </h1>
            <p className="text-[1.5em] font-thin">
              As one of the developer of the Case Tracking System for the Port
              Police Division, my role involves designing intuitive user
              interfaces and implementing robust backend functionalities to
              streamline case management processes.
            </p>
            <div className="lg:flex xl:flex 2xl:flex md:w-full lg:w-full xl:w-full 2xl:w-full h-[auto] bg-[#F3F3F3] p-[1.5em] mt-[1em]">
              <div className="h-full w-full md:w-full">
                <img
                  src={PortPoliceDesktopSize2}
                  className="h-full w-full object-cover"
                  alt="Desktop Size"
                />
              </div>
              {/* <div className="hidden md:hidden lg:block xl:block 2xl:block h-full w-1/3 bg-red-200">
                <img
                  src={ClrsMobileSize}
                  className="h-full w-full object-cover"
                  alt="Mobile Size"
                />
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
