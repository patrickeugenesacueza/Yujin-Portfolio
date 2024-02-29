import React from "react";

export default function Form() {
  return (
    <>
      <div className="bg-[#F3F3F3] h-[70vh] w-full py-[2em] px-[1em] mt-10">
        <form>
          <div className="border-b-2 border-[#bdbbbb] w-auto inline-block">
            <h1 className="font-medium text-lg">About You</h1>
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
            <textarea className="w-full h-[20vh] mb-5 border-[1.5px] border-black" placeholder=" Message" />
            <button className="py-2 px-4 bg-blue-900">SUBMIT</button>
          </div>
        </form>
      </div>
    </>
  );
}
