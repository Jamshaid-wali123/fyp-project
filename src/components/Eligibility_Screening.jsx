import React from "react";
import EligibilityImg from "../assets/Eligibility.png";

const Eligibility_Screening = () => {
  return (
    <div>
      <h1>Eligibility Screening</h1>
      <div>
        <img src={EligibilityImg} className="" />
      </div>
      <div>
      <h2>Eligibility Criteria</h2>
      <ul>
        <li>Check Age</li>
        <li>Weight</li>
        <li>Health Condition</li>
        <li>Recent History</li>
      </ul>
      </div>
      <div>
      <button>Check Criteria</button>
      </div>
    </div>
  );
};

export default Eligibility_Screening;
