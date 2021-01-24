import React, { useState } from "react";
import { PledgeCard } from "../components/pledgeCard";
import { PledgeForm } from "../components/pledgeForm";
import { PledgeProgress } from "../components/pledgeProgressBar";

export const PledgeContainer = () => {
  const [menuVisible,setMenuVisible]=useState(false)
  const _handleSelect=()=>{
    setMenuVisible(!menuVisible)
  }
  const _handleRibbonClick=(state)=>{
    setMenuVisible(state)
  }
  console.log(menuVisible);
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-4">
          <PledgeCard />
        </div>

        <div className="col-8 py-4">
          <PledgeProgress />
          <PledgeForm _handleSelect={_handleSelect} menuVisible={menuVisible} _handleRibbonClick={_handleRibbonClick}/>
        </div>
      </div>
    </div>
  );
};
