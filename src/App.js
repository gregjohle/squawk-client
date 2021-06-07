import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { uuid as uuidV4 } from "uuid";
import Main from "./components/main";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([
    {
      id: "ae8ef4f6-c795-11eb-b8bc-0242ac130003",
      name: "Greg",
      email: "greg@email.com",
      password: "Password123",
    },
    {
      id: "aa411cca-c7be-11eb-b8bc-0242ac130003",
      name: "Steve",
      email: "steve@email.com",
      password: "123Password",
    },
  ]);
  const [currentUser, setCurrentUser] = useState({});
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");

  function findUser(email) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        console.log(users[i]);
        return users[i];
      }
      return console.log("No user found");
    }
  }

  function demoLogin() {
    setCurrentUser(users[0]);
    console.log(currentUser);
  }

  function handleLogin(email, password) {
    let user = findUser(email);
    console.log("user: " + user);
    if (user.password === undefined) {
      console.log("user email not defined");
    } else if (user.password === password) {
      setCurrentUser(user);
      console.log("logged in");
    } else if (user.password !== password) {
      return alert("Invalid Password");
    }
  }

  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route path='/dashboard'></Route>
          <Route path='/chat'></Route>
          <Route path='/'>
            <Main
              handleLogin={handleLogin}
              loginModal={loginModal}
              setLoginModal={setLoginModal}
              registerModal={registerModal}
              setRegisterModal={setRegisterModal}
              loginEmail={loginEmail}
              setLoginEmail={setLoginEmail}
              loginPassword={loginPassword}
              setLoginPassword={setLoginPassword}
              demoLogin={demoLogin}
            />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
