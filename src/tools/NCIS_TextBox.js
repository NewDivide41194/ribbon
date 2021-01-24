import React from "react";

export const NCIS_TextBox = (props) => {
  const { placeHolder, handleTextChange } = props;
  return (
    <input
      type="text"
      className="form-control shadow px-4 py-2"
      placeholder={placeHolder}
      style={{ borderRadius: 20, background: "#ffffff",border:'none'}}
    />
  );
};
