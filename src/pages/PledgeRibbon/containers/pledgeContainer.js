import React from "react";
import { PledgeCard } from "../components/pledgeCard";
import { PledgeForm } from "../components/pledgeForm";
import { PledgeProgress } from "../components/pledgeProgressBar";

export const PledgeContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <PledgeCard />
        </div>

        <div className="col-8 py-4">
          <PledgeProgress />
          <PledgeForm />
        </div>
      </div>
    </div>
  );
};
