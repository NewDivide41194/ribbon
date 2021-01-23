import React from "react";
import Jar from "../../../assets/images/Jar.png";
import Ribbon from "../../../assets/images/Ribbon.png";
import RibbonBottle from "../../../assets/images/RibbonBottle.png";
import ButtonRibbon from "../../../assets/images/buttonRibbon.png";

import Background from "../../../assets/images/Background.png";
import { Counter } from "./counter";
import { paleViolet } from "../../../assets/colors";
import { NCIS_Button } from "../../../tools/NCIS_Button";
export const Home = () => {
  return (
    <div
      className="row m-0 justify-content-between"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <div className="col-5 p-0">
        <img src={Ribbon} width="500px" />
      </div>
      <div className="col-7">
        <div className="row">
          <div className="w-50">
            <img src={Jar} width="500px" />
          </div>
          <div className="w-50 text-center">
            <Counter />
          </div>
        </div>
      </div> */}
      <HomeTitle />
      <div className="col-11 p-0 img-fluid">
        <img src={RibbonBottle} className="img-fluid" />
      </div>
        <Counter />
      <div className="row">
        <Highlights />

        <Sponsors />
      </div>
    </div>
  );
};

const HomeTitle = () => {
  return (
    <div
      style={{ position: "absolute", paddingTop: "100px", paddingLeft: "15%" }}
      className="text-light w-50"
    >
      <span style={{ fontSize: 30, fontWeight: "bolder" }}>NCIS</span>
      <div style={{ fontSize: 45, fontWeight: "bold", color: paleViolet }}>
        Virtual Ribbon
      </div>
      <div style={{ fontSize: 45, fontWeight: "bold" }}>Challenge 2021</div>
      <div className="w-50 py-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>
      <NCIS_Button text={"Pledge a Ribbon"} icon={ButtonRibbon} />
    </div>
  );
};

const Highlights = () => {
  return (
    <div
      style={{ paddingTop: "80px", paddingLeft: "50px" }}
      className="text-light w-50"
    >
      <div style={{ fontSize: 25, fontWeight: "bold" }}>Highlights</div>
      <div className="w-50 py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </div>
    </div>
  );
};

const Sponsors = () => {
  return (
    <div
      style={{ paddingTop: "80px", paddingLeft: "50px" }}
      className="row col-lg-6"
    >
      <div style={{ fontSize: 25, fontWeight: "bold" }}>Sponsors</div>
      {new Array(8).fill(null).map((v) => (
        <div className="w-25 py-3">
          <div
            className="bg-light"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};
