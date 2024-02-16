import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeroSection from "./Pages/HeroSection";
import Nav from "./Pages/Nav";

const App = () => {
  return (
    <div className="bg-slate-900">
      <Nav />
      <Routes>
        <Route exact path="/" element={<HeroSection />} />
      </Routes>
    </div>
  );
};

export default App;

