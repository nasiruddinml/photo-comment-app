import React from "react";
import { Link} from "react-router-dom";

import store from "../store";

import "./Image.css";
import {setCurrentImage} from "../actions";

const Image = ({ image }) => {
  const { id, url } = image;
  return (
    <li key={id} className="Image">
      <Link to={"/images/"+id} onClick={(e) => handleClick(e, id)}>
        <img src={url} className="img-responsive" alt=""/>
      </Link>

    </li>
  )
}

const handleClick = (e, id) => {store.dispatch(setCurrentImage(id, store.getState().images))};

export default Image;