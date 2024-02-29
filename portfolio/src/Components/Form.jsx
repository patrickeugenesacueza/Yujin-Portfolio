import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  return (
    <>
      <div className="bg-[#F3F3F3] h-auto w-full py-[2em] px-[1em] mt-10">
        <form className="text-justify">
          <div className="border-b-2 border-[#bdbbbb] w-auto inline-block">
            <h1 className="font-medium text-lg text-center">About You</h1>
          </div>
          <div className="mt-5">
            <label className="font-[300] text-[1.2em]">Name*</label>
            <input
              className="w-full h-[5vh] mb-5 border-[1.5px] border-black"
              placeholder=" eg, Patrick Eugene Sacueza"
            />
            <label className="font-[300] text-[1.2em]">Email*</label>
            <input
              className="w-full h-[5vh] mb-5 border-[1.5px] border-black"
              placeholder=" sample@email.com"
            />
            <textarea
              className="w-full h-[30vh] mb-5 border-[1.5px] border-black"
              placeholder=" Message"
            />
            <button className="py-2 px-4 bg-slate-900 text-[1em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[2em] mt-5">
              {" "}
              <div className="flex items-center">
                <h1 className="text-[1em] md:text-[1em] lg:text-[1em] xl:text-[1em] 2xl:text-[1em] text-white">Send</h1>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="ml-2 text-white"
                />
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
