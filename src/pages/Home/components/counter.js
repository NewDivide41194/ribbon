import React from 'react'
import moment from "moment";

export const Counter = () => {
    const TodayDate = moment(Date.now()).format("dddd MMMM DD, YYYY");
    return (
      <div className="text-center">
        <h4>Ribbons Collected</h4>
        {TodayDate}
      </div>
    );
  };
  