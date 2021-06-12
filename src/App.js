import "./App.css";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { v4 as uuidV4 } from "uuid";
import Main from "./components/main";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Chat from "./components/chat-room";

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
  }

  function demoLogin() {
    let loginInfo = {
      email: "test@email.com",
      password: "Password123",
    };
    fetch(process.env.REACT_APP_LOGIN_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) => {
        let currentUserObj = {
          email: responseJson.email,
          name: responseJson.name,
          id: responseJson.id,
        };
        setCurrentUser(currentUserObj);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleLogin() {
    let loginInfo = {
      email: loginEmail,
      password: loginPassword,
    };
    fetch(process.env.REACT_APP_LOGIN_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .then((responseJson) => {
        let currentUserObj = {
          email: responseJson.email,
          name: responseJson.name,
          id: responseJson.id,
        };
        setCurrentUser(currentUserObj);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        alert(err);
      });

    // console.log(users);
    // let loginUser = users.filter(
    //   (user) => user.email === loginEmail.toLowerCase()
    // );
    // if (loginUser.length === 0) {
    //   console.log("No user");
    // } else if (loginUser[0].password === loginPassword) {
    //   setCurrentUser(loginUser[0]);
    //   setIsLoggedIn(true);
    // }
    // setCurrentUser(loginUser);

    // setIsLoggedIn(true);

    // let user = findUser(loginEmail);
    // console.log("user: " + user);
    // if (user.password === undefined) {
    //   console.log("user email not defined");
    // } else if (user.password === loginPassword) {
    //   setCurrentUser(user);
    //   console.log("logged in");
    // } else if (user.password !== loginPassword) {
    //   return alert("Invalid Password");
    // }
  }

  function addNewUser(name, email, password) {
    let newUserObject = {
      name: name,
      email: email.toLowerCase(),
      password: password,
    };
    fetch(process.env.REACT_APP_REGISTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserObject),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.message);
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        alert(error);
      });

    // let newUser = {
    //   id: uuidV4(),
    //   name: name,
    //   email: email.toLowerCase(),
    //   password: password,
    // };
    // console.log(newUser);
    // setUsers(users.concat(newUser));
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
          <Route path={"/chat/:" + roomId}>
            <Chat />
          </Route>
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
