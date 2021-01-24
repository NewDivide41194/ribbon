import React from "react";
import { violet } from "../assets/colors";

export const NCIS_Selector = (props) => {
  const { placeHolder, onClick, menuVisible } = props;
  return (
    // <select
    //   type="text"
    //   className="form-control selectpicker shadow"
    //   placeholder={placeHolder}
    //   style={{ borderRadius: 20, background: "#ffffff", border: "none" }}
    // >
    //   <option>1</option>
    //   <option>2</option>
    //   <option>3</option>
    //   <option>4</option>
    //   <option>5</option>
    // </select>
    <div>
      <input
        type="text"
        className="form-control shadow px-4 py-2"
        onClick={onClick}
        placeholder={placeHolder}
        style={{
          borderRadius: 20,
          border: menuVisible ? `2px solid ${violet}` : "none",
          // border:"red",
          background: "#ffffff",
          cursor: "pointer",
        }}
      />
      <span
        style={{
          float: "right",
          position: "relative",
          marginTop: "-35px",
          // fontSize: "16px",
          marginRight: "20px",
          width: "25px",
          height: "25px",
          background: "#999999",
          textAlign: "center",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        <i className="fa fa-chevron-down" onClick={onClick}></i>
      </span>
      {menuVisible ? <Options /> : null}
    </div>
  );
};

const Options = () => {
  return (
       <ul
        className="bg-light shadow mt-2 w-100"
        style={{
          borderRadius: 25,
          listStyleType: "none",
          // position: "absolute",
          // top: 0,
          // left: 0,
          margin: 0,
        }}
      >
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
     
  );
};
