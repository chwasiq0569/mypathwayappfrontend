import React from "react";
const InitialStepLower = () => {
  const list = ["Active Recovery", "Recovery Ally"];

  const createList = (list) => {
    return list.map((l) => {
      return { status: false, content: l };
    });
  };

  const [itemsList, setItemsList] = React.useState(createList(list));

  const selectItem = (selectedItem) => {
    let updatedList = itemsList.map((item) =>
      item.content === selectedItem.content
        ? { ...selectedItem, status: true }
        : { ...item, status: false }
    );
    setItemsList(updatedList);
  };

  console.log(itemsList);

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
      {/* <div className="btnsContainerWrapper">
        <div className="actionBtns">
          <div className="nextBtn">
            <span>Next</span>
            <svg
              width="14"
              height="10"
              viewBox="0 0 14 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.92192 0.947368C4.64757 0.684211 4.20447 0.684211 3.93012 0.947368L0.207585 4.51803C-0.0693741 4.78369 -0.0693741 5.2163 0.207585 5.48196L3.93002 9.05262C4.06766 9.18453 4.24742 9.25 4.42593 9.25C4.60441 9.25 4.78421 9.18457 4.92181 9.05264C5.19877 8.78698 5.19879 8.35435 4.92183 8.08869L2.41008 5.67934H12.9326C13.3169 5.67934 13.6362 5.37935 13.6362 4.99999C13.6362 4.62059 13.3169 4.32065 12.9326 4.32065H2.41009L4.92192 1.9113C5.19888 1.64564 5.19888 1.21303 4.92192 0.947368Z"
                fill="#ffffff"
              />
            </svg>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default InitialStepLower;
