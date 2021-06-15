import "./App.css";
import React, { useState, useRef } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Chat from "./components/chat-room";

function App() {
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
  // these are state references for the incoming and outgoing data for the video chat
  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef();
  const socketRef = useRef();
  const otherUser = useRef();
  const userStream = useRef();

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
    fetch(process.env.REACT_APP_URL + "/api/users/login", {
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
    fetch(process.env.REACT_APP_URL + "/api/users/login", {
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

  function addNewUser(name, email, password) {
    let newUserObject = {
      name: name,
      email: email.toLowerCase(),
      password: password,
    };
    fetch(process.env.REACT_APP_URL + "/api/users/register", {
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
  }

  function handleHangup() {
    if (userStream.current) {
      userStream.current.getTracks()[0].stop();
      userStream.current.getTracks()[1].stop();
    }
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
      <Header
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        handleHangup={handleHangup}
      />
      <main>
        <Switch>
          <Route path={"/chat/:" + roomId}>
            <Chat
              roomId={roomId}
              handleHangup={handleHangup}
              userVideo={userVideo}
              partnerVideo={partnerVideo}
              peerRef={peerRef}
              socketRef={socketRef}
              otherUser={otherUser}
              userStream={userStream}
            />
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
