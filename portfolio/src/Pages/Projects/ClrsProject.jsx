import React from "react";
import Footer from "../../Components/Footer";

export default function ClrsProject() {
  return (
    <section className="">
      <div className="w-full h-[100vh] flex">
        <div className="w-1/4 h-full bg-red-700"></div>
        <div className="w-3/4 h-full bg-violet-800"></div>
      </div>
      <Footer />
    </section>
  );
}
