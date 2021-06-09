import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { v4 as uuidV4 } from "uuid";
import Main from "./components/main";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard";

function App() {
  const [users, setUsers] = useState([
    {
      id: "ae8ef4f6-c795-11eb-b8bc-0242ac130003",
      name: "Test User",
      email: "test@email.com",
      password: "Password123",
    },
  ]);
  const [currentUser, setCurrentUser] = useState({});
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [createRoomModal, setCreateRoomModal] = useState(false);
  const [joinRoomModal, setJoinRoomModal] = useState(false);
  const [roomId, setRoomId] = useState("");

  function handleLogout() {
    setIsLoggedIn(false);
    setCurrentUser({});
    setLoginEmail("");
    setLoginPassword("");
    return <Redirect to='/' />;
  }

  function findUser(email) {
    console.log("email: " + email);
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        let user = users[i];

        return user;
      }
      return console.log("No user found");
    }
  }

  function demoLogin() {
    setCurrentUser(users[0]);
    setIsLoggedIn(true);
    return <Redirect to='/dashboard' />;
  }

  function handleLogin() {
    let user = findUser(loginEmail);
    console.log("user: " + user);
    if (user.password === undefined) {
      console.log("user email not defined");
    } else if (user.password === loginPassword) {
      setCurrentUser(user);
      console.log("logged in");
    } else if (user.password !== loginPassword) {
      return alert("Invalid Password");
    }
  }

  function addNewUser(name, email, password) {
    let oldUsersArr = users;
    let newUser = {
      id: uuidV4(),
      name: name,
      email: email,
      password: password,
    };

    let newUserArr = oldUsersArr.push(newUser);
    console.log(newUser);
    setUsers(newUserArr);
  }

  let homeContent = () => {
    if (isLoggedIn === true) {
      return (
        <Dashboard
          currentUser={currentUser}
          createRoomModal={createRoomModal}
          setCreateRoomModal={setCreateRoomModal}
          joinRoomModal={joinRoomModal}
          setJoinRoomModal={setJoinRoomModal}
          roomId={roomId}
          setRoomId={setRoomId}
        />
      );
    }
    return (
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
        addNewUser={addNewUser}
        registerName={registerName}
        setRegisterName={setRegisterName}
        registerEmail={registerEmail}
        setRegisterEmail={setRegisterEmail}
        registerPassword={registerPassword}
        setRegisterPassword={setRegisterPassword}
        registerConfirmPassword={registerConfirmPassword}
        setRegisterConfirmPassword={setRegisterConfirmPassword}
      />
    );
  };

  return (
    <div className='App'>
      <Header handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
      <main>
        <Switch>
          <Route path='/chat'></Route>
          <Route exact path='/'>
            {homeContent}
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
