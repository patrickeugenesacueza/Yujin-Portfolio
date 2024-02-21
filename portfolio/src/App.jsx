import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./Pages/HeroSection";
import Nav from "./Pages/Nav";
import About from "./Pages/About";
import Project from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contacts from "./Pages/Contacts";
import Techstack from "./Pages/Techstack";
import ClrsProject from "./Pages/Projects/ClrsProject";
import JprogProject from "./Pages/Projects/JprogProject";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Projects" element={<Project/>} />
        <Route exact path="/Experience" element={<Experience/>}/>
        <Route exact path="/Techstack" element={<Techstack/>}/>
        <Route exact path="/Contacts" element={<Contacts/>}/>
        <Route exact path="/Projects/ClrsProject" element={<ClrsProject/>}/>
        <Route exact path="/Projects/JprogProject" element={<JprogProject/>}/>
      </Routes>
    </div>
  );
};

export default App;

