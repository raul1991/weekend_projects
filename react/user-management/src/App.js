import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, updateUsers] = useState([]);
  const [isFormValid, setIsFormValid] = useState(true);

  const onUserAddedHandler = (newUser, errors) => {
    if (errors.length > 0) {
      setIsFormValid(false);
    } else {
      updateUsers((prevUsers) => {
        return [...prevUsers, newUser];
      });
    }
  };

  const onCloseHandler = (event) => {
    setIsFormValid(true);
  };

  return (
    <div>
      <AddUser onUserAdded={onUserAddedHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
