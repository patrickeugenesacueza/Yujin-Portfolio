import React from "react";
import timelineElements from "../data/TimesheetExperience.json";
// import { ReactComponent as InternIcon } from "../assets/mobileDevSVG.svg";
// import { ReactComponent as WorkIcon } from "../assets/techSupportSVG.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Footer from "../Components/Footer";

export default function Experience() {
  let WorkIconStyles = { background: "#5f2568" };
  return (
    <>
      <div className="py-[3rem] b z-0 bg-[#b37eb5] w-full h-auto px-[2em] md:px-[10.5rem]">
        <h1 className="text-justify md:text-center lg:text-center 2xl:text-center mb-5 text-2xl font-poppins font-bold text-[30px] text-[#fff] tracking-[.5em]">
          EXPERIENCE
        </h1>
        <VerticalTimeline>
          {timelineElements.map((element, index) => {
            // let isWorkIcon = element.icon === "work";
            // let isInternIcon = element.icon === "intern";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
            return (
              <VerticalTimelineElement
                key={element.key || index}
                date={element.date}
                dateClassName="date"
                // iconStyle={isWorkIcon ? WorkIconStyles : WorkIconStyles}
                // icon={isWorkIcon ? <WorkIcon /> : <InternIcon />}
              >
                <h3 className="pt-[0.25em] font-bold">{element.title} </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p className="pt-[1.5em] pb-[2em]">{element.description}</p>
                {showButton && <a href="/">{element.buttonText}</a>}
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
      <Footer/>
    </>
  );
}
