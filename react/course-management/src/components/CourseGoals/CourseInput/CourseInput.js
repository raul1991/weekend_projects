import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length > 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      // add red border for the label and input field
      setIsFormValid(false);
      return;
    }
    setIsFormValid(true);
    props.onAddGoal(enteredValue);
    setEnteredValue('');
    setIsFormValid(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isFormValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={enteredValue}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
