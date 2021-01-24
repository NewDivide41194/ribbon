import React, { useEffect, useRef, useState } from "react";
import { NCIS_Selector } from "../../../tools/NCIS_Selector";
import { NCIS_TextBox } from "../../../tools/NCIS_TextBox";
import { NCIS_Button } from "../../../tools/NCIS_Button";
import RibbonImages from "../../../assets/RibbonImages.json";
import { violet } from "../../../assets/colors";

export const PledgeForm = (props) => {
  const { _handleSelect, menuVisible,_handleRibbonClick } = props;
  return (
    <div className="py-5">
      <form>
        <div>
          <strong>Step 1:</strong>
        </div>
        <label style={{ fontWeight: "bold", fontSize: 25 }}>
          Choose Your Ribbon and Create Your Message
        </label>
        <PledgeRibbons _handleSelect={_handleSelect} _handleRibbonClick={_handleRibbonClick} menuVisible={menuVisible}/>
        <div className="form-group row m-0 justify-content-center py-4">
          <div className="col-6">
            <NCIS_TextBox placeHolder={"Add Recipient Name"} />
          </div>
          <div className="col-6">
            <NCIS_TextBox placeHolder={"Add Sender Name"} />
          </div>
          <div className="col-12 py-4">
            <NCIS_Selector
              placeHolder={"Select Message"}
              onClick={_handleSelect}
              menuVisible={menuVisible}
            />
          </div>
          {menuVisible||<NCIS_Button text={"Review"} />}
        </div>
      </form>
    </div>
  );
};

const PledgeRibbons = (props) => {
  const {_handleRibbonClick,menuVisible}=props
  const [selected, setSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const PopupDiv = (e) => document.getElementById(e.target.id + "popup");
  const RibbonDiv = (e) => document.getElementById(e.target.id);
  const prevRibbonDiv = (e) => document.getElementById(e);

  const prevSelectedRef = useRef();

  const _handleClick = (e) => {
    prevSelectedRef.current = selectedId;
    const prevSelectedId = prevSelectedRef.current;

    setSelected(true);
    setSelectedId(e.target.id);

    RibbonDiv(e).style.background = violet;
    RibbonDiv(e).style.color = "#ffffff";
    if (selectedId != null) {
      prevRibbonDiv(prevSelectedId).style.background = "none";
      prevRibbonDiv(prevSelectedId).style.color = "#000000";   
      _handleRibbonClick(false)   

    }
    PopupDiv(e).style.visibility = "hidden";
    _handleRibbonClick(true)
  };

  const _handleHover = (e) => {
    console.log(e.target.id);
    if (selected === false) {
      RibbonDiv(e).style.background = "#999999";
      if (PopupDiv(e)) {
        PopupDiv(e).style.visibility = "visible";
      } else {
        return;
      }
    }
  };
  const _handleLeave = (e) => {
    if (selected === false) {
      RibbonDiv(e).style.background = "none";
      RibbonDiv(e).style.color = "#000000";

      if (PopupDiv(e)) {
        PopupDiv(e).style.visibility = "hidden";
      } else {
        return;
      }
    }
  };
  return (
    <div className="d-flex fled-row flex-wrap">
      {RibbonImages.Ribbons.map((v, k) => (
        <div className="w-25  py-1" style={{ cursor: "pointer" }}>
          <div
            id={k}
            style={{ borderRadius: "50px" }}
            onClick={(e) => _handleClick(e)}
            onMouseOver={(e) => _handleHover(e, v.name)}
            onMouseLeave={(e) => _handleLeave(e, v.name)}
          >
            <img src={v.imgaeUrl} alt="ribbons" style={{ width: 30 }} id={k} />
            {v.name}
          </div>
          <div
            className="bg-light shadow"
            id={k + "popup"}
            style={{ position: "absolute", width: 250, visibility: "hidden" }}
            onMouseLeave={(e) => _handleLeave(e)}
            onMouseOver={(e) => _handleHover(e)}
          >
            Hello
          </div>
        </div>
      ))}
    </div>
  );
};
