import React from "react";
import moment from "moment";

const TimeInputField = ({ item }) => {
  const [timeValue, setTimeValue] = React.useState("");
  const [error, setError] = React.useState(false);

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
        <label className="errorLabel">Enter Time in HH:MM:SS format</label>
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
  );
};

export default TimeInputField;
