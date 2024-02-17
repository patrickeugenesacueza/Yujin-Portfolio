import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./Pages/HeroSection";
import Nav from "./Pages/Nav";
import About from "./Pages/About";
import Project from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contacts from "./Pages/Contacts";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Projects" element={<Project/>} />
        <Route exact path="/Experience" element={<Experience/>}/>
        <Route exact path="/Contacts" element={<Contacts/>}/>

      </Routes>
    </div>
  );
};

export default App;

