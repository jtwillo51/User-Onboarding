import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import UserCard from "./components/UserCard";
import axios from "axios";
import "./App.css";

function App() {
  const [userState, setUserState] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then(response => {
        console.log(response);
        setUserState(response.data.data);
      })
      .catch(err => console.log(err));
  }, []);
  
  const addUserHandler = newUser => {
    setUserState([...userState, newUser]);
  };
  return (
    <div className="App">
      <Form addUser={addUserHandler} />
      {userState.map(user => (
        <UserCard user={user} />
      ))}
    </div>
  );
}

export default App;
