import React from "react";
import { connect } from "react-redux";
import { addImage } from "../actions/CanvasActions";

const Image = ({ source, dispatchAddImage }) => {
  return (
    <img
      src={source}
      onClick={() => dispatchAddImage(source)}
      className="img-rounded"
      alt=""
    />
  );
};

export default connect(
  null,
  { dispatchAddImage: addImage }
)(Image);
