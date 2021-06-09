import React from "react";
import { Link } from "react-router-dom";
import "./join-room.css";

export default function JoinRoom(props) {
  let { roomId, setRoomId, currentUser, joinRoomModal, setJoinRoomModal } =
    props;

  function handleRoomId(event) {
    setRoomId(event.target.value);
  }

  function handleJoinRoom() {
    if (roomId.length > 0) {
      setJoinRoomModal(!joinRoomModal);
    } else if (roomId.length === 0) {
      alert("Please enter a room ID");
    }
  }

  let destination = () => {
    if (roomId === "") {
      return "/";
    }
    return "/chat/:" + roomId;
  };

  return (
    <div className='joinRoom'>
      <h2>Join Room</h2>
      <p>Place the room code into the box below.</p>
      <input
        type='text'
        value={roomId}
        placeholder='Enter Room Code'
        onChange={(e) => handleRoomId(e)}
        required
      />
      <Link to={destination}>
        <button onClick={() => handleJoinRoom()}>
          <b>Join Room</b>
        </button>
      </Link>
    </div>
  );
}
