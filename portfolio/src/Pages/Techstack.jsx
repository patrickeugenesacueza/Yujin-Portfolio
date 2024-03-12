import React, { useState } from "react";
import Footer from "../Components/Footer";
import TS from "../data/Techstack.json";
import reactjsLogo from "../assets/reactjs.svg";
import cssLogo from "../assets/css.svg";
import firebaseLogo from "../assets/firebase.svg";
import javaLogo from "../assets/java.svg";
import jqueryLogo from "../assets/jquery.svg";
import jsLogo from "../assets/js.svg";
import mysqlLogo from "../assets/mysql.svg";
import noSQLLogo from "../assets/noSQL.svg";
import phpLogo from "../assets/php.svg";
import tailwindLogo from "../assets/tailwind.svg";3
import html5logo from "../assets/html5.svg";
import bootstraplogo from "../assets/bootstrap.svg";
import materialUILogo from "../assets/materialUI.svg";
import shadcn from "../assets/shadcn.svg";
import ajax from "../assets/ajax.svg";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Components/ui/select";

const logoMap = {
  ReactJS: reactjsLogo,
  CSS3: cssLogo,
  HTML5: html5logo,
  Firebase: firebaseLogo,
  Bootstrap: bootstraplogo,
  MaterialUI: materialUILogo,
  Shadcn: shadcn,
  Java: javaLogo,
  jQuery: jqueryLogo,
  Javascript: jsLogo,
  mySQL: mysqlLogo,
  noSQL: noSQLLogo,
  PHP: phpLogo,
  TailwindCSS: tailwindLogo,
  AJAX:ajax
};

export default function Techstack() {
  const [selectedField, setSelectedField] = useState(null);

  const handleFieldChange = (value) => {
    setSelectedField(value);
  };

  return (
    <>
      <section className="w-full h-auto bg-[#fff] overflow-y-auto">
        <div className="h-screen">
          <div className="text-center mt-5 font-[Lato] font-bold text-[1em] md:text-[2em] lg:text-[2em]">
            TECHSTACK
          </div>
          <div className="flex justify-center items-center mt-[2em]">
            <span className="font-[Lato] text-[1em] md:text-[2em] lg:text-[1.5em] mr-3">Select Field: </span>
            <Select className="" onValueChange={handleFieldChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(TS).map((field) => (
                  <SelectItem key={field} value={field}>
                    {field}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedField && (
            <div className="mt-5 flex flex-wrap justify-center">
              {/* Render SVG logos dynamically */}
              {TS[selectedField].map((tech, index) => (
                <div key={index} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 m-2">
                  <img src={logoMap[tech]} alt={`${tech} Logo`} className="w-full h-full" />
                </div>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </section>
    </>
  );
}
