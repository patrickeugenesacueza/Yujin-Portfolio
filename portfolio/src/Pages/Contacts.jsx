import React from "react";
import Footer from "../Components/Footer";
import Form from "../Components/Form";

export default function Contacts() {
  return (
    <>
      <section>
        <div className="w-full h-[100vh] bg-[#fff] flex py-[4em] px-[10em]">
          <div className="h-full w=1/2 text-justify px-[2em] mr-[5em]">
            <h1 className="text-[3.5em] font-[Lato] font-extrabold">
              Get In Touch
            </h1>
            <h3 className="text-[1.5em]">
              Send a general message or details of a project you'd like me to be
              a part of and I'll get back to you as soon as possible.
            </h3>
            <Form />
          </div>
          <div className="h-full w-1/2 ">
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
            <h2>Tel: 09760284911</h2>
            <div className="flex">
            </div>
          </div>
        </div>
        <Footer />
      </section>{" "}
    </>
  );
}
