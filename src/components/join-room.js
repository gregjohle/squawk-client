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
    setJoinRoomModal(!joinRoomModal);
  }

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
      <Link to={"/chat/:" + roomId}>
        <button onClick={() => handleJoinRoom()}>
          <b>Join Room</b>
        </button>
      </Link>
    </div>
  );
}
