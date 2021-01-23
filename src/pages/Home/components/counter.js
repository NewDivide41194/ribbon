import React from "react";
import moment from "moment";
import "../../../counter.scss";

export const Counter = () => {
  const TodayDate = moment(Date.now()).format("dddd MMMM DD, YYYY");
  return (
    <div className="col-3 text-center" style={{position:"absolute",right:4,top:-34}}>
      <div style={{marginLeft:50,marginRight:50,borderBottom:"4px solid white",borderLeft:"4px solid white",borderRight:"4px solid white",position:"relative",top:74,height:250}}/>
      <div class="numbers">
        <div style={{ top: 10 }}>
          <span class="digit">$</span>
          <span class="digit">7</span>
          <span class="digit">2</span>
          <span class="digit">5</span>
          <span class="digit">9</span>
        </div>
      </div>
      <h4>Ribbons Collected</h4>
      {TodayDate}
    </div>
  );
};
