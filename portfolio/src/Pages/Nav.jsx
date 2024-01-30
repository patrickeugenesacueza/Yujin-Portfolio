import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from the routing library

const Nav = () => {
  const content = (
    <>
      <div className="">
        <ul>
          <li>
            <Link to="Home">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to="Service">Service</Link>
          </li>
          <li>
            <Link to="Projects">Projects</Link>
          </li>
          <li>
            <Link to="Contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <li>
                <Link to="Home">Home</Link>
              </li>
              <li>
                <Link to="About">About</Link>
              </li>
              <li>
                <Link to="Service">Service</Link>
              </li>
              <li>
                <Link to="Projects">Projects</Link>
              </li>
              <li>
                <Link to="Contacts">Contacts</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
