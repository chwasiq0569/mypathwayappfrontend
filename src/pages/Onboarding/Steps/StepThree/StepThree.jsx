import React, { useState } from "react";
import "./stepthree.css";
import Dropdown from "./util/Dropdown";
import TimeInputField from "./util/TimeInputField";

const StepThree = ({ itemsList, setItemsList }) => {
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

  return (
    <div className="lowerSection">
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
                <TimeInputField item={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepThree;
