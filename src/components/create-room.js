import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import "./create-room.css";

export default function CreateRoom(props) {
  let { setRoomId, createRoomModal, setCreateRoomModal } = props;

  let roomId = uuidV4();

  function joinNewRoom() {
    setRoomId(roomId);
    setCreateRoomModal(!createRoomModal);
  }

  function handleCopyRoomID() {
    navigator.clipboard.writeText(roomId);
    alert("Room ID Copied to Clipboard");
  }

  return (
    <div className='newRoom'>
      <h2>Create Room</h2>
      <p>Here is your Room ID, share it with your friends.</p>
      <h3 onClick={() => handleCopyRoomID()}>{roomId}</h3>
      <Link to={"/chat/:" + roomId}>
        <button onClick={() => joinNewRoom()}>
          <b>Join Room</b>
        </button>
      </Link>
    </div>
  );
}
