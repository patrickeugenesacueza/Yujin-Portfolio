import React from "react";
import Footer from "../Components/Footer";
import Form from "../Components/Form";

export default function Contacts() {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row bg-[#fff] py-8 md:py-16 px-4 md:px-[8em]">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 text-center md:text-left px-4 md:px-0 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl xl:text-5xl 2xl:text-5xl font-extrabold mb-4">Get In Touch</h1>
            <h3 className="text-lg md:text-xl xl:text-2xl 2xl:text-2xl">
              Send a general message or details of a project you'd like me to be
              a part of and I'll get back to you as soon as possible.
            </h3>
            <Form />
          </div>
          <div className="hidden md:block lg:block xl:block 2xl:block h-full w-1/2 px-[5em] ">
            <h3 className="font-[500] text-[2em] mb-3">About Eugene</h3>
            <div className="mb-6">
              <p>
                I am an aspiring IT professional with a passion for success and
                a drive to excel. Leveraging my background in freelance software
                development and IT tech support, I am equipped with a diverse
                skill set to tackle challenges in the ever-evolving tech
                landscape. With a commitment to delivering top-notch solutions
                and providing exceptional support, I aim to carve a path of
                success in the IT industry
              </p>
            </div>
            <h2>Email: sacuezapatrickeugene@gmail.com</h2>
            <h2>Tel: (0976) 028 4911</h2>
            <div className="flex">
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
