import React from "react";
import "./Background.css";
import heroImage1 from "../assets/hero-image.webp";
import heroImage2 from "../assets/hero-image-2.jpg";
import heroImage3 from "../assets/hero-image-3.jpg";

const Background = ({ heroCount }) => {
  if (heroCount === 0) {
    return (
      <img src={heroImage1} className="background" alt="Hero Background" />
    );
  }

  if (heroCount === 1) {
    return (
      <img src={heroImage2} className="background" alt="Hero Background 2" />
    );
  }

  if (heroCount === 2) {
    return (
      <img src={heroImage3} className="background" alt="Hero Background 3" />
    );
  }

  // Default return if no conditions match
  return null;
};

export default Background;
