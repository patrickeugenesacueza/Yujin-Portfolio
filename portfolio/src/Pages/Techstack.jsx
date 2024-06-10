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
import tailwindLogo from "../assets/tailwind.svg";
import html5logo from "../assets/html5.svg";
import bootstraplogo from "../assets/bootstrap.svg";
import materialUILogo from "../assets/materialUI.svg";
import shadcn from "../assets/shadcn.svg";
import ajax from "../assets/ajax.svg";
import cLogo from "../assets/c.svg";
import pythonLogo from "../assets/python.svg";
import githubLogo from "../assets/github.svg";
import androidStudioLogo from "../assets/androidstudio.svg";
import visualStudioCodeLogo from "../assets/vscode.svg";
import { motion } from "framer-motion";

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
  AJAX: ajax,
  C: cLogo,
  Python: pythonLogo,
  githubDesktop: githubLogo,
  AndroidStudio: androidStudioLogo,
  VSCode: visualStudioCodeLogo,
};

export default function Techstack() {
  const [selectedField, setSelectedField] = useState(null);

  const handleFieldChange = (value) => {
    setSelectedField(value);
  };

  return (
    <>
      <section className="w-full h-auto bg-[#fff] overflow-y-auto relative">
        <div className="h-[100vh] flex flex-col items-center justify-center mx-auto">
          <div className="text-center mt-5 font-[Lato] font-bold text-[1em] md:text-[2em] lg:text-[2em] absolute top-0 left-0 right-0">
            TECHSTACK
          </div>
          <div className="flex justify-center items-center mt-[2em] absolute top-[60px] left-0 right-0">
            <span className="font-[Lato] text-[1em] md:text-[2em] lg:text-[1.5em] mr-3">
              Select Field:{" "}
            </span>
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
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 justify-center items-center">
              {/* Render SVG logos dynamically */}
              {TS[selectedField].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`w-full h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 bg-[#F3F3F3] p-2 md:p-10 lg:p-10 xl:p-10 2xl:p-10 ${
                    selectedField === "Technical Support"
                      ? "col-span-1 w-full"
                      : ""
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.3 }}
                >
                  {selectedField === "Technical Support" ? (
                    <div className="text-center">{tech}</div>
                  ) : (
                    <img
                      src={logoMap[tech]}
                      alt={`${tech} Logo`}
                      className="w-full h-full"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </section>
    </>
  );
}
