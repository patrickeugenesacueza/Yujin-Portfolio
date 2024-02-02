import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="w-full h-[80vh] bg-[#fff] pt-[5em]">
      <div className="text-center block">
        <TypeAnimation
          sequence={[
            "Front-end Developer",
            1000,
            "Mobile Application Developer",
            1000,
            "Desktop Support Engineer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-[#333] font-[Lato] text-[1.2em] md:text-[3em] lg:text-3em font-[900] leading-[1.2]"
          repeat={Infinity}
        />
        <div className="">
            <p>Hey there! I'm Eugene, a passionate person ready to dive into the world of challenges with boundless energy. No limits, just pure enthusiasm to create amazing things together</p>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default HeroSection;
