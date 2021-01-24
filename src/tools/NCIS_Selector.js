import React from "react";
import { orange, violet } from "../assets/colors";
import Messages from "../assets/Messages.json";

export const NCIS_Selector = (props) => {
  const { placeHolder, onClick, menuVisible,_handleSelectOption} = props;
  return (
    <div onClick={onClick}>
      <input
        type="text"
        className="form-control shadow px-4 py-2"
        placeholder={placeHolder}
        disabled
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
      {menuVisible ? <Options messages={Messages.messages} _handleSelectOption={_handleSelectOption} /> : null}
    </div>
  );
};

const Options = (props) => {
  const { messages, _handleSelectOption} = props;
  const messageText = messages.map((v, k) => v.message)[0];

  return (
    <ul
      className="bg-light shadow mt-2 w-100 py-4"
      style={{
        borderRadius: 25,
        listStyleType: "none",
        // position: "absolute",
        height: 150,
        overflowY: "scroll",
        // top: 0,
        // left: 0,
        margin: 0,
      }}
    >
      {messages.map((v, k1) => (
        <React.Fragment>
          <li style={{ color: orange, fontWeight: "bold" }}>{v.title}</li>
          <br />
          {messageText.map((v, k2) => (
            <p id={k2} onClick={() => _handleSelectOption(v.text)}>
              {v.text}
            </p>
          ))}
        </React.Fragment>
      ))}
    </ul>
  );
};
