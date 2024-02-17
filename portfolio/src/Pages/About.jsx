import React from "react";

//import images
import PatrickImage from "../assets/YujinFormal.jpg";

export default function About() {
  return (
    <>
      <section>
        <div className="w-full h-[100vh] bg-[#fff]">
          <div className="w-2/12 h-2/12 mx-auto pt-[2em]">
            <img src={PatrickImage} className="rounded-full" />
          </div>
          <div className="w-full h-full">
            <h1 className="text-center mt-5 font-[Lato] font-bold text-[2em]">
              SHORT BIOGRAPHY
            </h1>
            <div className="text-justify w-1/2 h-full mx-auto">
              <h3 className="text-justify mt-5 font-[Lato] font-[200] text-[1.5em]">
                Born in 2000. Raised in a small town in Philippines. Been hard
                at work since 2019
              </h3>
              <p className="text-justify mt-5 font-[Lato] text-[1.2em]">
                I'm Patrick Eugene B. Sacueza, an aspiring successful IT currently working as IT Desktop Support Engineer (FIDCO),
                creating & designing interactive webdesign interactive experiences for brands for 10 years.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
