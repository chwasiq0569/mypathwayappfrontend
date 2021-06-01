import React, { useState } from "react";
import "./stepthree.css";
import StepThreeMobile from "./StepThreeMobile";
import Dropdown from "./util/Dropdown";
import PrevNextBtns from "./util/PrevNextBtns";
import { useMediaQuery } from "react-responsive";
import moment from "moment";

const list = [
  "Alcohol",
  "Cocaine",
  "Heroin",
  "Prescription Opioids",
  "Prescription Stimulants",
  "MDMA",
  "Methamphetamine",
  "Hallucinogens",
  "Other",
];

const createList = (list) => {
  return list.map((l) => {
    return { status: false, content: l };
  });
};

const StepThree = ({
  innerMobileBtnClickStatus,
  setInnerMobileBtnClickStatus,
  handleBack,
  setActiveStep,
}) => {
  const [itemsList, setItemsList] = React.useState(createList(list));
  const [timeValue, setTimeValue] = React.useState("");
  const [error, setError] = React.useState(false);

  const isNotDesktop = useMediaQuery({ query: "(max-width: 750px)" });
  const [stepThreeMobileBtnStatus, setStepThreeMobileBtnStatus] =
    React.useState(false);
  const selectItem = (selectedItem) => {
    let updatedList = itemsList.map((item) => {
      if (item.content === selectedItem.content) {
        return selectedItem.status === true
          ? { ...selectedItem, status: false }
          : { ...selectedItem, status: true };
      } else {
        return { ...item, status: item.status };
      }
    });
    setItemsList(updatedList);
  };
  console.log(itemsList);

  const dropdownItemsConstencyOfUse = [
    { id: 0, label: "Weekly" },
    { id: 1, label: "Monthly" },
    { id: 2, label: "Yearly" },
  ];

  const dropdownItemsFrequencyOfUse = [
    { id: 0, label: "1" },
    { id: 1, label: "2" },
    { id: 2, label: "3" },
    { id: 4, label: "4" },
    { id: 5, label: "5" },
  ];

  function validateHhMm(inputField) {
    var isValid = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
      inputField.value
    );
    if (isValid) {
      console.log("Valid Time");
    } else {
      console.log("Invalid Time");
    }
    // return isValid;
  }

  let timeout = null;

  const validateTime = (e) => {
    setTimeValue(e.target.value);

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (
        !moment(e.target.value, "HH:mm:ss", true).isValid() &&
        e.target.value.length > 2
      ) {
        setError(true);
      } else {
        setError(false);
      }
    }, 2000);
  };

  return (
    <div className="lowerSection">
      {isNotDesktop ? (
        <h3 className="bolderFont">
          We want to keep track of how much time you earn back!
        </h3>
      ) : (
        <h3 className="bolderFont">What was your drug(s) of choice!</h3>
      )}
      {stepThreeMobileBtnStatus ? (
        <StepThreeMobile
          setInnerMobileBtnClickStatus={setInnerMobileBtnClickStatus}
        />
      ) : (
        <div className="stepThreeGridContainer">
          {itemsList.map((item) => (
            <div key={item.content} className="row row1">
              <div className="colContainer">
                <div className="col col1">
                  <div className="checkboxes__Wrapper">
                    <div
                      onClick={() => selectItem(item)}
                      className={
                        item.status
                          ? "answer__Item selected__Item"
                          : "answer__Item unSelectedItem"
                      }
                    >
                      {item.content}
                    </div>
                  </div>
                </div>
                <div className="col col2">
                  <Dropdown
                    item={item}
                    data={dropdownItemsConstencyOfUse}
                    dropdownLabel="Consitency of Use"
                  />
                </div>
                <div className="col col3">
                  <Dropdown
                    item={item}
                    data={dropdownItemsFrequencyOfUse}
                    dropdownLabel="Frequency of Use"
                  />
                </div>
                <div className="col col4">
                  <div
                    className={
                      item.status
                        ? error
                          ? "avgTimeinputFieldError avgTimeinputField"
                          : "avgTimeinputField"
                        : "avgTimeinputField unSelectedItem unClickable"
                    }
                  >
                    {error ? (
                      <label className="errorLabel">
                        Enter Time in HH:MM:SS format
                      </label>
                    ) : (
                      <label className="avgTimeLabel">Avg Time Spent</label>
                    )}
                    <input
                      onChange={validateTime}
                      value={timeValue}
                      type="text"
                      className="stepThreeInput"
                      placeholder="HH:MM:SS"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {stepThreeMobileBtnStatus ? (
        <></>
      ) : (
        <div className="BtnsForMobile">
          <PrevNextBtns
            handleBack={handleBack}
            setActiveStep={setActiveStep}
            setStepThreeMobileBtnStatus={setStepThreeMobileBtnStatus}
          />
        </div>
      )}
    </div>
  );
};

export default StepThree;
