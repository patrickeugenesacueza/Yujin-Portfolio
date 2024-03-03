import React from "react";
import Footer from "../../Components/Footer";
import Biometrics from "../../assets/Biometrics.png";
// import BiometricsCDN from "https://www.dropbox.com/scl/fi/6v008rabile58uywcfh97/Biometrics.png?rlkey=s1r7ljkj7bnyygp42od5885hk&dl=0";

export default function PPABio() {
  return (
    <>
      <section className="bg-white">
        <div className="w-full h-[auto] flex flex-col-reverse lg:flex-row bg-white">
          <div className="w-full lg:w-1/4 h-full px-[2em] bg-white items-center justify-center pt-[1em] md:pt-[10em] pb-[1em]">
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
                <li>July 2023</li>
                <span className="font-sm font-thin">
                  As of July 2023, the interview with the Management Specialist
                  II aimed to understand the sole purpose of the PPABio system,
                  which is to streamline biometric data management within the
                  PPA framework, ensuring accuracy, security, and efficiency in
                  handling personnel information.
                </span>
                <li>August 2023</li>
                <span className="font-sm font-thin">
                  As of August 2023, the PPABio system has been successfully
                  deployed, albeit with some initial bugs that required
                  attention. However, the development team promptly addressed
                  these issues, ensuring that the system is now functioning
                  smoothly. Ongoing maintenance efforts are in place to uphold
                  system integrity and address any future issues that may arise,
                  ensuring continuous optimal performance.
                </span>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-3/4 h-full bg-white pb-[4em] px-[2em]">
            <h1 className="text-[2.5em] font-[700] text-[Lato] mt-[2em]">
              PPABio
            </h1>
            <p className="text-[1rem] md:text-[1.3rem] lg:text-[1.3rem] xl:text-[1.3rem] 2xl:text-[1.3rem] font-thin">
              As one of the developers of the PPABio system for the PPA Admin,
              our primary focus is on enhancing user experience through
              intuitive interfaces and robust functionalities, ensuring seamless
              management of biometric data for administrative purposes within
              the PPA.
            </p>
            <div className="lg:flex xl:flex 2xl:flex md:w-full lg:w-full xl:w-full 2xl:w-full h-[auto] bg-[#F3F3F3] p-[1.5em] mt-[1em]">
              <div className="h-full w-full md:w-full">
                <img
                  src={Biometrics}
                  className="h-full w-full object-cover"
                  alt="Desktop Size"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
