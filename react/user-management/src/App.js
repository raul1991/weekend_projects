import React, { useState } from "react";
import Modal from "./components/UI/Modal";
import AddUser from "./components/Users/AddUser";

function App() {
  const [users, updateUsers] = useState([]);
  const [isFormValid, setIsFormValid] = useState(true);

  const onUserAddedHandler = (newUser, isFormValid) => {
    if (!isFormValid) {
      setIsFormValid(false);
    } else {
      updateUsers((prevUsers) => {
        let newUsers = [...prevUsers, newUser];
        console.log(newUsers);
        return newUsers;
      });
    }
  };

  const onCloseHandler = (event) => {
    setIsFormValid(true);
  };

  return (
    <div>
      <AddUser onUserAdded={onUserAddedHandler} />
      <Modal
        hide={isFormValid}
        title={"Form can't be submitted"}
        onClick={onCloseHandler}
      >
        <p>The inputs provided aren't correct. Please fix them</p>
      </Modal>
    </div>
  );
}

export default App;
