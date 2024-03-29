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
import TUPCare from "./Pages/Projects/TUPCare";
import FitBuddyProject from "./Pages/Projects/FitBuddyProject";
import TrackingSystem from "./Pages/Projects/TrackingSystem";
import PPABio from "./Pages/Projects/PPABio";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <Routes basename="/portfolio">
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Projects" element={<Project/>} />
        <Route exact path="/Experience" element={<Experience/>}/>
        <Route exact path="/Techstack" element={<Techstack/>}/>
        <Route exact path="/Contacts" element={<Contacts/>}/>
        <Route exact path="/Projects/ClrsProject" element={<ClrsProject/>}/>
        <Route exact path="/Projects/JprogProject" element={<JprogProject/>}/>
        <Route exact path="/Projects/TUPCare" element={<TUPCare/>}/>
        <Route exact path="/Projects/TrackingSystem" element={<TrackingSystem/>}/>
        <Route exact path="/Projects/PPABio" element={<PPABio/>}/>
      </Routes>
    </div>
  );
};

export default App;

