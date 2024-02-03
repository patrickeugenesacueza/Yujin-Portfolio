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
        <div className="font-[300] text-[1.2em] lg:text-[1.5em]  mt-3 mx-[2em] md:mx-[5em] lg:mx-[10em]">
          <p>
            Hey there! I'm Eugene, a passionate person ready to dive into the
            world of challenges with boundless energy. No limits, just pure
            enthusiasm to create amazing things together
          </p>
        </div>
      </div>
      {/* grid box */}
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10 px-10 sm:px-16 md:px-16 lg:px-20 xl:px-32">
        <div className="bg-red-900 py-[8em] sm:py-[8em] md:py-[10em] lg:py-[10em] xl:py-[10em]">
          01
        </div>
        <div className="bg-red-900 py-[8em] sm:py-20 md:py-24 lg:py-24 xl:py-24">
          01
        </div>
        <div className="bg-red-900 py-[8em] sm:py-20 md:py-24 lg:py-24 xl:py-24">
          01
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default HeroSection;
