import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import { connect } from "react-redux";
import * as actions from "../actions";

class ImageUpload extends Component {
  state = {
    imageName: "",
    isUploading: false,
    progress: 0,
    imageURL: ""
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ imageName: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ imageURL: url });
        this.props.imageUpload(this.state.imageURL);
        this.props.history.push('/images');
      }
      );
  };

  render() {
    return (
      <div>
        <form>
          <label>Image:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.imageURL && <img src={this.state.imageURL} />}
          <FileUploader
            accept="image/*"
            name="Image"
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(ImageUpload);
