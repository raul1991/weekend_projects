import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

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
    // reset the form
    setEnteredValue("");
    setIsFormValid(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} 
        ${!isFormValid && styles.invalid}`}
      >
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
