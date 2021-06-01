import React, { Fragment, useState, useEffect } from "react";
import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";

function InlineDatePicker({ setSelectedDOB }) {
  const [selectedDate, handleDateChange] = useState("DD/MM/YYYY");
  useEffect(() => {
    if (selectedDate !== "DD/MM/YYYY" || selectedDate !== "DD/MM/YYYY") {
      setSelectedDOB(selectedDate.toLocaleDateString());
    }
  }, [selectedDate]);
  return (
    <Fragment>
      <DatePicker
        style={{
          opacity: "0",
          position: "absolute",
          width: "350px",
          left: "0",
          top: "-125%",
        }}
        variant="inline"
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </Fragment>
  );
}

export default InlineDatePicker;
