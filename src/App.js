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
  ]);
  const [currentUser, setCurrentUser] = useState({});
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  function findUser(email) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        console.log(users[i]);
        return users[i];
      }
      return new Error("No user found");
    }
  }

  function handleLogin(email, password) {
    let user = findUser(email);

    if (user.password === password) {
      setCurrentUser(user);
      console.log("logged in");
    } else if (user.password !== password) {
      return new Error("Invalid Password");
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
            />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
