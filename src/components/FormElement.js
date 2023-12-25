import React, { useState, useRef } from "react";
import "./FormElement.css";

const FormElement = ({ onItemAdd, changeValidAge, changeValidName }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const collegeNameRef = useRef();

  const handleChangeName = (event) => {
    setEnteredName(event.target.value);
  };

  const handleChangeAge = (event) => {
    setEnteredAge(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0) {
      changeValidName();
      return;
    }
    if (enteredAge.trim().length === 0 || enteredAge < 1) {
      changeValidAge();
      return;
    }

    setEnteredAge("");
    setEnteredName("");
    onItemAdd({
      name: enteredName,
      age: enteredAge,
      collegeName: collegeNameRef.current.value,
    });
    collegeNameRef.current.value = "";
  };

  return (
    <div className="form-container" onSubmit={handleFormSubmit}>
      <form>
        <div className="label-input-container">
          <label>Enter Name</label>
          <input type="text" value={enteredName} onChange={handleChangeName} />
        </div>
        <div className="label-input-container">
          <label>Enter Age </label>
          <input type="number" value={enteredAge} onChange={handleChangeAge} />
        </div>
        <div className="label-input-container">
          <label>Enter College Name</label>
          <input type="text" ref={collegeNameRef} />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default FormElement;
