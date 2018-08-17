import React from "react";
import Image from "./Image";
import "./Intro.css";
import {auth} from "../firebase"
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import * as actions from "../actions";

const Intro = (props) => {

  const images = props.data.images;
  const user = auth.currentUser;
  const signOut = e => {
    e.preventDefault();
    auth.signOut().then(() => {
      // Sign-out successful.
      props.history.push('/login');

    }).catch(error => {
      // An error happened.
      console.log(error);
    });
  }
  return (
    <div className="container">
      {user ? (<div className="user-detail">
        <div className="upload-image">
          <Link to="/upload">
           Upload a image
          </Link>
        </div>
        <span className="user-email">{user.email}</span> <button className="btn btn-default" onClick={() => signOut()}>SignOUt</button>
      </div>) : ''}
      {images ? (
        <div>
          <h1>Select Desire Image for Comment</h1>
          <ul className="Intro clearfix">
            {images.map(img => <Image image={img} key={img.id} />)}
          </ul>
        </div>
        ) : ''}
    </div>
  );
};


const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(Intro);