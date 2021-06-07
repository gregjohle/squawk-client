import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Modal from "react-modal";
import { uuid as uuidV4 } from "uuid";
import Main from "./components/main";

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
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
