import React from "react";
import Navbar from "./Navbar";
import "./hero.css";

const Hero = () => {
  return (
    <div className="page--hero">
      <Navbar />
      <div className="hero__area">
        <div className="choose__pizza">
          <h3>Choose Your Pizza</h3>
          <button>Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
