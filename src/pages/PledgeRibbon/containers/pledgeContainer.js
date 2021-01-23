import React from "react";
import { PledgeCard } from "../components/pledgeCard";
import { PledgeForm } from "../components/pledgeForm";
import { PledgeProgress } from "../components/pledgeProgressBar";

export const PledgeContainer = () => {
  return (
    <div className="container">
      <div className="row">
      <PledgeCard />

          <div className="col-8">
            <PledgeProgress />  
            <PledgeForm />
          </div>
        

      </div>
    </div>
  );
};
