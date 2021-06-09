import React from "react";
import { v4 as uuidV4 } from "uuid";
import "./create-room.css";

export default function CreateRoom(props) {
  let roomId = uuidV4();

  return (
    <div className='newRoom'>
      <h2>Create Room</h2>
      <p>Here is your Room ID, share it with your friends.</p>
      <h3>{roomId}</h3>
      <button>
        <b>Join Room</b>
      </button>
    </div>
  );
}
