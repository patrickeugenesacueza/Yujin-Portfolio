import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./Pages/HeroSection";
import Nav from "./Pages/Nav";
import About from "./Pages/About";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
        <Route exact path="/About" element={<About/>} />

      </Routes>
    </div>
  );
};

export default App;

