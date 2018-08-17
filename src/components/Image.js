import React from "react";
import { Link } from "react-router-dom";
import "./Image.css";
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions";

const Image = (props) => {
  const { id, url } = props.image;
  const handleClick = () => {
    props.setCurrentImage(id, props.data.images);
  };
  return (
    <li key={id} className="Image">
      <Link to={"/images/"+id} onClick={() => handleClick()}>
        <img src={url} className="img-responsive" alt=""/>
      </Link>

    </li>
  )
}



const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(Image);