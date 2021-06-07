import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

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

  return (
    <div className='App'>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
