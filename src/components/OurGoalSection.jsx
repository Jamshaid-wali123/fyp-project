import goalImg from "../assets/goal.png";
import MileStoneImg from "../assets/MileStone.png";
import classNames from "classnames";

const OurGoalSection = () => {
  return (
    <div className="my-5">
      <div className={classNames('flex justify-between items-center')}>
        <div className="">
          <img src={goalImg} className={classNames('w-[85%] object-cover')}  alt="img"/>
        </div>
        <div className="w-[50%]">
          <h4 className="font-semibold text-3xl">Our Goal</h4>
          <p className="mt-5">
            Our Goals is your life Inspire donors to commit to giving blood
            every three months. Maintain a consistent supply to support
            hospitals and emergency services. Organize events and campaigns to
            make blood donation accessible and inclusive. Educate communities on
            the importance of blood donation and its life-saving impact.
          </p>
        </div>
      </div>

      <div className={classNames('flex justify-between items-center')}>
      <div className="w-[50%] ps-12">
          <h4 className="font-semibold text-3xl">Our Milestone</h4>
          <p className="mt-5">
            Our Goals is your life Inspire donors to commit to giving blood
            every three months. Maintain a consistent supply to support
            hospitals and emergency services. Organize events and campaigns to
            make blood donation accessible and inclusive. Educate communities on
            the importance of blood donation and its life-saving impact.
          </p>
        </div>
        <div className="">
          <img src={MileStoneImg} className={classNames('w-[85%] object-cover')}  alt="img"/>
        </div>
      </div>
    </div>
  );
};

export default OurGoalSection;
