import React, { useState, useRef, useEffect } from "react";
import "./FormElement.css";

const FormElement = ({
  onItemAdd,
  changeValidAge,
  changeValidName,
  changeValidCllgName,
}) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredCllgName, setEnteredCllgName] = useState("");

  // const collegeNameRef = useRef();

  const handleChangeName = (event) => {
    setEnteredName(event.target.value);
  };
  useEffect(() => {
    if (enteredCllgName.trim().length === 0) {
      changeValidCllgName();
      return;
    }
  }, [enteredCllgName]);

  const handleChangeCllgName = (event) => {
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
    setEnteredCllgName("");
    onItemAdd({
      name: enteredName,
      age: enteredAge,
      collegeName: enteredCllgName,
    });
    // collegeNameRef.current.value = "";
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
          <input type="text" value={enteredCllgName} onChange={handleChangeCllgName} />
          {/* <input type="text" ref={collegeNameRef} /> */}
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default FormElement;
