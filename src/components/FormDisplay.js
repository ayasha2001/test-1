import React from "react";
import DisplayItem from "./DisplayItem";

const FormDisplay = ({ itemArr }) => {
  return (
    <div>
      {itemArr.map((ele,i) => {
        return <DisplayItem name={ele.name} age={ele.age} college={ele.collegeName}key={i}/>;
      })}
    </div>
  );
};

export default FormDisplay;
