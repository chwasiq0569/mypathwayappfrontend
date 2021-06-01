import { DatePicker } from "antd";
import "antd/dist/antd.css";
import "./antdesigndp.css";
import React from "react";

const AntDatePicker = () => {
  const [date, setDate] = React.useState(new Date());
  return (
    <DatePicker
      open={true}
      onChange={(data) => {
        setDate(data._d.toLocaleDateString());
      }}
    />
  );
};

export default AntDatePicker;
