import React, { useState } from "react";
import FormElement from "./FormElement";
import FormDisplay from "./FormDisplay";
import ErrorModal from "../modal/ErrorModal";

const Container = () => {
  const [arr, setArr] = useState([]);
  const [isValidAge, setIsValidAge] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [isValidCllgName, setIsValidCllgName] = useState(true);

  let errorMsg="";

  const onItemAdd = (item) => {
    setArr((prevState) => {
      return [item, ...prevState];
    });
  };

  const changeValidAge = () => {
    setIsValidAge(!isValidAge);
  };

  const changeValidName = () => {
    setIsValidName(!isValidName);
  };
  
  const changeValidCllgName = () => {
    setIsValidCllgName(!isValidCllgName);
  };

  const onCloseModal = () =>{
    setIsValidAge(true)
    setIsValidName(true)
    setIsValidCllgName(true)
  }

  if(!isValidAge){
    errorMsg="you have entered an invalid age"}
  else if(!isValidName){
    errorMsg="Please enter the name correctly"
  }

  return (
    <div>
    {
        (!isValidAge || !isValidName) && <ErrorModal errorMsg={errorMsg} onCloseModal={onCloseModal}/>
    }
      <FormElement
        onItemAdd={onItemAdd}
        changeValidAge={changeValidAge}
        changeValidName={changeValidName}
        changeValidCllgName={changeValidCllgName}
      />
      <FormDisplay itemArr={arr} />
    </div>
  );
};

export default Container;
