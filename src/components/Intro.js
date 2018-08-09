import React from "react";
import Image from "./Image";
import "./Intro.css";
import store from "../store";

const Intro = () => {

  const images = store.getState().images;
  return (
    <div className="container">
      <h1>Select Desire Image for Comment</h1>
      <ul className="Intro clearfix">
        {images.map(img => <Image image={img} key={img.id} />)}
      </ul>
    </div>
  );
};

export default Intro;