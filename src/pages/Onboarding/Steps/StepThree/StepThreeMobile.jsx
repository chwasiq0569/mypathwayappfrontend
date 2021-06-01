import React from "react";
import "./stepthreemobile.css";
import Dropdown from "./util/Dropdown";

const dropdownItemsFrequencyOfUse = [
  { id: 0, label: "1" },
  { id: 1, label: "2" },
  { id: 2, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
  { id: 6, label: "6" },
  { id: 7, label: "7" },
];

const list = ["Yes", "No"];

const createList = (list) => {
  return list.map((l) => {
    return { status: false, content: l };
  });
};

const StepThreeMobile = ({ setInnerMobileBtnClickStatus }) => {
  const [itemsList, setItemsList] = React.useState(createList(list));

  React.useEffect(() => {
    setInnerMobileBtnClickStatus(true);
    return () => setInnerMobileBtnClickStatus(false);
  }, []);

  const selectItem = (selectedItem) => {
    let updatedList = itemsList.map((item) =>
      item.content === selectedItem.content
        ? { ...selectedItem, status: true }
        : { ...item, status: false }
    );
    setItemsList(updatedList);
  };
  return (
    <div className="mobileViewContainer">
      <div className="row rowOne">
        <p className="checkboxHeading">
          Have you ever been incarcerated due to your addiction?
        </p>
        <div className="mobile__fieldsContainer">
          {itemsList.map((item) => (
            <div className="mobileColumn">
              <div
                onClick={() => selectItem(item)}
                className={
                  item.status
                    ? "mobile__answer__Item checkbox__selected__Item"
                    : "mobile__answer__Item"
                }
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row rowTwo">
        <p className="checkboxHeading block">
          Have you ever been incarcerated due to your addiction?
        </p>
        <Dropdown
          item={{ status: true }}
          data={dropdownItemsFrequencyOfUse}
          dropdownLabel={""}
        />
      </div>
      <div className="row rowThree">
        <p className="checkboxHeading">
          If yes, then how many times, and for how long?
        </p>
        <div className="mobile__fieldsContainer">
          <div className="avgTimeinputField mobileField">
            <label className="avgTimeLabel">Months</label>
            <input type="text" className="stepThreeInput" placeholder="00" />
          </div>
          <div className="avgTimeinputField mobileField">
            <label className="avgTimeLabel">Days</label>
            <input type="text" className="stepThreeInput" placeholder="00" />
          </div>
          <div className="avgTimeinputField mobileField">
            <label className="avgTimeLabel">Hours</label>
            <input type="text" className="stepThreeInput" placeholder="00:00" />
          </div>
        </div>
      </div>
    </div>
  );
};
// innerMobileBtnClickStatus
export default StepThreeMobile;
