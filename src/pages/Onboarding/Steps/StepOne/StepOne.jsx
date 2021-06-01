import React from "react";
// import Arrow from "../../../assets/icons/arrow-right-5.svg";

const list = [
  "Currently attending treatment",
  "LADC",
  "Certified Peer Recovery Specialist",
  "Recovery Coach/Treatment Tech",
  "Spiritual Guide",
  "Sponsor",
  "Long Term Recovery",
];

const createList = (list) => {
  return list.map((l) => {
    return { status: false, content: l };
  });
};

const StepOne = () => {
  const [itemsList, setItemsList] = React.useState(createList(list));

  const selectItem = (selectedItem) => {
    let updatedList = itemsList.map((item) =>
      item.content === selectedItem.content
        ? { ...selectedItem, status: true }
        : { ...item, status: false }
    );
    setItemsList(updatedList);
  };

  return (
    <div className="lowerSection">
      <h3 className="bolderFont">Please choose from options below</h3>
      <div className="checkboxes__Wrapper">
        {itemsList.map((item) => (
          <div
            key={item.content}
            onClick={() => selectItem(item)}
            className={
              item.status ? "answer__Item selected__Item" : "answer__Item"
            }
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepOne;
