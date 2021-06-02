import React, { useState } from "react";
import "./stepTwo.css";
import Dropdown from "../StepThree/util/Dropdown";
import AntDatePicker from "./utils/AntDatePicker";
import moment from "moment";

const list = ["Alcohol"];

const createList = (list) => {
  return list.map((l) => {
    return { status: true, content: l };
  });
};

const StepTwo = () => {
  const [itemsList, setItemsList] = React.useState(createList(list));
  const [timeValue, setTimeValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const dropdownItemsConstencyOfUse = [
    { id: 0, label: "AM" },
    { id: 1, label: "PM" },
  ];

  function addColon(e) {
    console.log(e.target.value);
    if (e.target.value.length <= 5) {
      setTimeValue(e.target.value);
      if (
        !moment(e.target.value, "HH:mm", true).isValid() &&
        e.target.value.length > 2
      ) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }

  return (
    <div className="lowerSection">
      <h3 className="bolderFont"> What was your last date of use?</h3>
      <AntDatePicker />
      <div className="stepTwoContentContainer">
        <div className="lastTimeUsedInfo">
          <label className="lastTimeUsedInfoLabel">
            <span>Last time Used</span>{" "}
            <span className="errorField">
              {error ? "Enter Time in HH:MM format" : null}
            </span>
          </label>
          <div
            className={
              error
                ? "lastTimeUsedInfoInput lastTimeUsedInfoInputError"
                : "lastTimeUsedInfoInput"
            }
          >
            <input
              type="text"
              onChange={addColon}
              placeholder="00:00"
              value={timeValue}
            />
            <div className="innerDropdownContainer">
              {itemsList.map((item) => (
                <Dropdown
                  item={item}
                  data={dropdownItemsConstencyOfUse}
                  dropdownLabel=""
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
