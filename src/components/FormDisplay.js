import React from "react";
import DisplayItem from "./DisplayItem";

const FormDisplay = ({ itemArr }) => {
  return (
    <div>
      {itemArr.map((ele,i) => {
        return <DisplayItem name={ele.name} age={ele.age} key={i}/>;
      })}
    </div>
  );
};

export default FormDisplay;
