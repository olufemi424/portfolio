import React from "react";

export default function PageNotFound() {
  return (
    <div>
      <div style={wrapper} className="container">
        <div style={PageStyle}>
          <h4 style={h4}>404 Page not found!</h4>
        </div>
      </div>
    </div>
  );
}

const wrapper = {
  display: "relative",
  height: "71vh",
  width: "100vw"
};

const PageStyle = {
  // display: "absolute",
  // top: "100px"
};

const h4 = {
  display: "absolute",
  marginTop: "100px"
};
