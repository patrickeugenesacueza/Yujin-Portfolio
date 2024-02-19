import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Logo from "../assets/Logo.svg";
import About from "./About";

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900">
        <ul className="text-center text-xl p-20">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link to="/About" element={<About/>}>About</Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link to="/Experience">Experience</Link>
          </li>
          {/* <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link to="/Techstack">Techstack</Link>
          </li> */}
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            <Link to="/Contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
        <div className="flex items-center flex-1">
          <img src={Logo}/>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
            <Link to="/About" element={<About/>}>About</Link>
              </li>
              <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                <Link to="/Projects">Projects</Link>
              </li>
              <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                <Link to="/Experience">Experience</Link>
              </li>
              {/* <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                <Link to="/Techstack">Techstack</Link>
              </li> */}
              <li className="relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                <Link to="/Contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
