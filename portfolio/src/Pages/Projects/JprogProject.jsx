import React from "react";
import Footer from "../../Components/Footer";
import JProgFirstPicture from "../../assets/JE1.png";
import JProgSecondPicture from "../../assets/JE2.png";
import JProgThirdPicture from "../../assets/JE3.png";

export default function JprogProjects() {
  return (
    <section className="bg-white">
      <div className="w-full h-[auto] flex flex-col-reverse lg:flex-row bg-white">
        <div className="w-full lg:w-1/4 h-full px-[2em] bg-white items-center justify-center pt-[1em] md:pt-[10em] pb-[1em]">
          <button className="w-full py-[.2em] px-[1em] bg-[#10142c] text-[1.5em] font-[500] font-times text-[#f3f3f3]">
            VIEW APK
          </button>
          <div className="mx-auto mt-[2em] justify-center text-lg">
            <h1 className="text-justify font-[900] font-[Lato]">TechStack</h1>
            <ul className="list-disc text-justify ml-4 mt-1">
              <li>Java</li>
              <li>OOP</li>
              <li>Firebase</li>
              <li>NoSQL</li>
            </ul>
            <h1 className="text-justify font-[900] font-[Lato] mt-10">
              Timeframe
            </h1>
            <ul className="list-disc text-justify ml-4 mt-1">
              <li>June 2023</li>
              <span className="font-sm font-thin">
                In June 2023, it's all about brainstorming. We're diving deep
                into ideas, tossing around possibilities, and really getting
                those creative juices flowing.
              </span>
              <li>October 2023</li>
              <span className="font-sm font-thin">
                In October 2023, the application is ready to hit the stage!
                After months of hard work, late nights, and endless lines of
                code, we've brought our vision to life.
              </span>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-3/4 h-full bg-white pb-[4em] px-[2em]">
          <h1 className="text-[2.5em] font-[700] text-[Lato] mt-[2em]">
            JProg's e-Learning
          </h1>
          <p className="text-[1.5em] font-thin">
            Experience the power of jProg e-learning, where Java and Firebase
            technologies converge to redefine online education. Leveraging
            Java's robustness and Firebase's real-time database capabilities,
            this application delivers a seamless e-learning experience.
          </p>

          <div className="lg:flex xl:flex 2xl:flex md:w-full lg:w-full xl:w-full 2xl:w-3/4 h-full bg-[#F3F3F3] p-[1.5em] mt-[1em]">
            <div className="lg:w-1/3 xl:w-1/3 2xl:w-1/3 md:w-1/2 w-full mx-auto mb-4 lg:mb-0">
              <img
                src={JProgFirstPicture}
                className="h-1/2 md:h-1/2 lg:h-full xl:h-full 2xl:h-full w-full object-cover"
              />
            </div>
            <div className="lg:w-1/3 xl:w-1/3 2xl:w-1/3 md:w-1/2 w-full mx-auto mb-4 lg:mb-0">
              <img
                src={JProgSecondPicture}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="lg:w-1/3 xl:w-1/3 2xl:w-1/3 md:w-1/2 w-full mx-auto">
              <img
                src={JProgThirdPicture}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
