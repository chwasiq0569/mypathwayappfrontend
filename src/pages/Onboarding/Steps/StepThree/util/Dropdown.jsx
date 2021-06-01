import React, { useState, useEffect } from "react";
import "./dropdown.css";
import ArrowDownIcon from "../../../../../assets/icons/arrowdown.png";

const Dropdown = ({ data, dropdownLabel, item }) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    toggleDropdown();
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div className="dropdown">
      <div
        className={
          item.status
            ? "dropdown-header selected__Item"
            : "dropdown-header unSelectedItem unClickable"
        }
        onClick={toggleDropdown}
      >
        {selectedItem ? (
          <div>
            {/* {dropdownLabel ? (
              <p className="upperHead">{dropdownLabel}</p>
            ) : (
              <></>
            )} */}
            <p className="upperHead">{dropdownLabel}</p>
            <p className={dropdownLabel ? "lowerHead" : ""}>
              {items.find((item) => item.id == selectedItem).label}
            </p>
          </div>
        ) : (
          <div>
            <p className="upperHead">{dropdownLabel}</p>
            <p className={dropdownLabel ? "lowerHead" : ""}>{data[0].label}</p>
          </div>
        )}
        <img
          className={`icon ${isOpen && "open"}`}
          src={ArrowDownIcon}
          alt="arrow_down"
        />
        {/* <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i> */}
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item) => (
          <div
            className="dropdown-item"
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            <span
              className={`dropdown-item-dot ${
                item.id == selectedItem && "selected"
              }`}
            >
              •{" "}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dropdown;
