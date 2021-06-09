import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import "./create-room.css";

export default function CreateRoom(props) {
  let { currentUser, setRoomId, createRoomModal, setCreateRoomModal } = props;

  let roomId = uuidV4();

  function joinNewRoom() {
    setRoomId(roomId);
    setCreateRoomModal(!createRoomModal);
  }

  return (
    <div className='newRoom'>
      <h2>Create Room</h2>
      <p>Here is your Room ID, share it with your friends.</p>
      <h3>{roomId}</h3>
      <Link to={"/chat/:" + roomId}>
        <button onClick={() => joinNewRoom()}>
          <b>Join Room</b>
        </button>
      </Link>
    </div>
  );
}
