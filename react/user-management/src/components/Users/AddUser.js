import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    let userInputs = { username: username, age: age };
    props.onUserAdded(userInputs, isFormValid(userInputs));
    setUsername("");
    setAge("");
  };

  const isFormValid = (userInputs) => {
    return (
      userInputs.age > 0 &&
      userInputs.age.toString().trim().length > 0 &&
      username.trim().length > 0
    );
  };

  const usernameListener = (event) => {
    setUsername(event.target.value);
  };

  const ageListener = (event) => {
    setAge(event.target.value);
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
    </Card>
  );
};

export default AddUser;
