import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState([]);

  const addUserHandler = (event) => {
    event.preventDefault();
    let userInputs = {
      id: new Date().getMilliseconds(),
      username: username,
      age: age,
    };
    props.onUserAdded(userInputs, anyErrors(userInputs));
  };

  const clearForm = () => {
    setUsername("");
    setAge("");
  };

  const anyErrors = (userInputs) => {
    let errors = [];
    if (userInputs.age.toString().trim().length === 0) {
      errors.push("Age is incorrect");
    }
    if (userInputs.username.toString().trim().length === 0) {
      errors.push("Username is not valid");
    }
    setErrors(errors);
    errors.length == 0 && clearForm();
    return errors;
  };

  const usernameListener = (event) => {
    setUsername(event.target.value);
  };

  const ageListener = (event) => {
    setAge(event.target.value);
  };

  const onCloseHandler = (event) => {
    setErrors([]);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameListener}
        />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={age} onChange={ageListener} />
        <Button type="submit">Add User</Button>
      </form>
      <Modal
        hide={errors.length === 0}
        title={"Form can't be submitted"}
        message={errors.join("\n")}
        onClick={onCloseHandler}
      />
    </Card>
  );
};

export default AddUser;
