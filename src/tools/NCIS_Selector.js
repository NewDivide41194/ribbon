import React from "react";

export const NCIS_Selector = (props) => {
  const { placeHolder, handleTextChange } = props;
  return (
    <select
      type="text"
      className="form-control shadow"
      placeholder={placeHolder}
      style={{ borderRadius: 20, background: "#ffffff", border: "none" }}
    >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  );
};
