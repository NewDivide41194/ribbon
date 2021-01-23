import React from "react";
import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";

export const PledgeForm = () => {
  // const
  return (
    <div>
      <form>
        <div>
          <strong>Step 1:</strong>
        </div>
        <label style={{ fontWeight: "bold", fontSize: 25 }}>
          Choose Your Ribbon and Create Your Message
        </label>
        <PledgeRibbons />
        <div className="form-group row m-0 justify-content-center">
          <div className="col-6">
            <NCIS_TextBox placeHolder={"Add Recipient Name"} />
          </div>
          <div className="col-6">
            <NCIS_TextBox placeHolder={"Add Sender Name"} />
          </div>
          <div className="col-12 py-2">
            <NCIS_Selector placeHolder={"Select Message"} />
          </div>
          <NCIS_Button text={"Review"} />
        </div>
      </form>
    </div>
  );
};

const PledgeRibbons = () => {
  return (
    <div className="row">
      {RibbonImages.Ribbons.map((v, k) => (
        <div className="col-3">
          <img src={v.imgaeUrl} alt="ribbons" style={{ width: 30 }} />
          {v.name}
        </div>
      ))}
    </div>
  );
};
