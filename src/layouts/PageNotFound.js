import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <div style={wrapper} className="container">
        <h2 style={h2}>404 Page not found!</h2>
        <h5 style={h5}>
          Click to go back to <Link to="/">home</Link>
        </h5>
      </div>
    </div>
  );
}

const wrapper = {
  display: "relative",
  height: "83.5vh",
  width: "100vw",
};

const h2 = {
  marginTop: "100px",
  color: "red",
  fontSize: "4rem",
};

const h5 = {
  fontSize: "2rem",
  color: "blue",
};
