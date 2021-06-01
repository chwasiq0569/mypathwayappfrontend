import React from "react";
import DoneIcon from "../../../../assets/icons/doneicon.png";
import "./finishstep.css";

const FinishStep = () => {
  return (
    <div className="lowerSection">
      <div className="finishMessageBox">
        <img src={DoneIcon} alt="Done_Icon" />
        <h1 className="greetHeading bolderFont">Thank You! Joseph</h1>
        <h3 className="greetingSecText bolderFont">You are all Done!</h3>
        {/* <h3>You are all Done!</h3> */}
        <p className="greetingPara">
          You are successfully completed with all onboarding steps. Now we’ll
          prepare dashboard accordingly
        </p>
        <button className="letStartBtn">Ok, Let’s Start</button>
      </div>
    </div>
  );
};

export default FinishStep;
