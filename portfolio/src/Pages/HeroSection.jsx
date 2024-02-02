import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="w-full h-[80vh] bg-[#fff] pt-[5em]">
      <div className="text-center">
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
          className="text-[#333] font-[Lato] text-[1.8em] md:text-[calc(1em + 2.4vw)] lg:text-3em font-[900] leading-[1.2]"
          repeat={Infinity}
        />
      </div>
      {/* Card-box */}
      <div></div>
    </section>
  );
};

export default HeroSection;
