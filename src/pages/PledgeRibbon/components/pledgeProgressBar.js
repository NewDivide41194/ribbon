import React from "react";
import { violet } from "../../../assets/colors";

export const PledgeProgress = () => {
  const circleStyle = {
    width: 40,
    height: 40,
    background: violet,
    borderRadius: "50%",
    lineHeight: 2,
    textAlign: "center",
    fontSize: 19,
    color: "#ffffff",
  };
  return (
    <div>
      <div
        className="col-6"
        style={{
          height: 5,
          background: violet,
          opacity: 0.2,
          position: "absolute",
          top: 90,
          zIndex: -1,
        }}
      ></div>

      <div className="row m-0 justify-content-between">
        <div className="col-4" style={circleStyle}>
          1
        </div>
        <div className="col-4" style={circleStyle}>
          2
        </div>
        <div className="col-4" style={circleStyle}>
          3
        </div>
      </div>
    </div>
  );
};
