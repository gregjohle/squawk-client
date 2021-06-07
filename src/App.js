import "./App.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    {
      id: "ae8ef4f6-c795-11eb-b8bc-0242ac130003",
      name: "Greg",
      email: "greg@email.com",
      password: "Password123",
    },
  ]);
  const [currentUser, serCurrentUser] = useState({});

  return <div className='App'></div>;
}

export default App;
