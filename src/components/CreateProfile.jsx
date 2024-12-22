import React from "react";
import goalImg from "../assets/goal.png";
import MileStoneImg from "../assets/MileStone.png";

const CreateProfile = () => {
  return (
    <div>
      <div>
        <div>
          <img src={goalImg} className="" />
        </div>
        <div>
          <h4>our Goal</h4>
          <p>
            Our Goals is your life Inspire donors to commit to giving blood
            every three months. Maintain a consistent supply to support
            hospitals and emergency services. Organize events and campaigns to
            make blood donation accessible and inclusive. Educate communities on
            the importance of blood donation and its life-saving impact.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h4>our MileStone</h4>
          <p>
            Our Goals is your life Inspire donors to commit to giving blood
            every three months. Maintain a consistent supply to support
            hospitals and emergency services. Organize events and campaigns to
            make blood donation accessible and inclusive. Educate communities on
            the importance of blood donation and its life-saving impact.
          </p>
        </div>
        <div>
          <img src={MileStoneImg} className="" />
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
