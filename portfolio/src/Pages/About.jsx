import React from "react";
//import images
import PatrickImage from "../assets/YujinFormal.jpg";
//import footer
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section>
        <div className="w-full sm:h-[110vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[50vh] bg-[#fff]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-4/12 h-4/12 md:w-2/12 md:h-2/12 mx-auto pt-[2em] pb-[]"
          >
            <img src={PatrickImage} alt="Patrick" className="rounded-full" />
          </motion.div>
          <div className="w-full h-full mb-10">
            <h1 className="text-center mt-5 font-[Lato] font-bold text-[1em] md:text-[2em] lg:text-[2em]">
              SHORT BIOGRAPHY
            </h1>
            <div className="text-justify w-full lg:w-1/2 h-full mx-auto px-[1em]">
              <h3 className="text-justify mt-5 font-[Lato] font-[200] text-[1em] md:text-[1.5em] lg:text-[1.5em] text-[#333]">
                Born in 2000. Raised in Pasay City, Philippines. Been hard
                at work since 2019
              </h3>
              <p className="text-justify mt-5 font-[Lato] text-[1em] md:text-[1.2em] lg:text-[1.2em] text-[#333]">
                My name is Patrick Eugene B. Sacueza, and I'm on a path towards
                success in the field of IT. Presently, I serve as an IT Desktop
                Support Engineer (FIDCO),providing technical assistance and support to users across
                diverse industries.
              </p>
              <p className="text-justify mt-5 font-[Lato] text-[1em] md:text-[1.2em] lg:text-[1.2em] text-[#333]">
                With experience as an IT Desktop Support Engineer & Intern
                Programmer
              </p>
              <p className="text-justify mt-5 font-[Lato] text-[1em] md:text-[1.2em] lg:text-[1.2em] text-[#333]">
                I enjoy a cup of coffee while coding and troubleshooting.
                Playing chess, video games and studying new technologies is my
                hobby.
              </p>
              <p className="text-justify mt-5 font-[Lato] font-bold text-[1em] md:text-[1.2em] lg:text-[1.2em] text-[#333]">
                Always practice.
              </p>
              <p className="text-justify mt-1 font-[Lato] font-bold text-[1em] md:text-[1.2em] lg:text-[1.2em] text-[#333]">
                Working with computer is my passion.
              </p>
              <Link to="/Techstack" onClick={() => window.scrollTo(0, 0)}>
                <div className="flex items-center my-5 underline cursor-pointer">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="mr-2 text-[#333]"
                  />
                  <h1 className="text-[2rem] text-[#333]">View TechStack</h1>
                </div>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
