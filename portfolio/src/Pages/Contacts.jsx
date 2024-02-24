import React from "react";
import Footer from "../Components/Footer";
import Form from "../Components/Form";

export default function Contacts() {
  return (
    <>
      <section>
        <div className="w-full h-[100vh] bg-[#fff] flex py-[4em] px-[10em]">
          <div className="h-full w=1/2 text-justify px-[2em]">
            <h1 className="text-[3.5em] font-[Lato] font-extrabold">
              Get In Touch
            </h1>
            <h3 className="text-[1.5em]">
              Send a general message or details of a project you'd like me to be
              a part of and I'll get back to you as soon as possible.
            </h3>
            <Form />
          </div>
          <div className="h-full w-1/2 bg-blue-900">

          </div>
        </div>
        <Footer />
      </section>{" "}
    </>
  );
}
