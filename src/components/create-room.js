import React from "react";
import { v4 as uuidV4 } from "uuid";

export default function CreateRoom(props) {
  let roomId = () => uuidV4();

  return (
    <div className='newRoom'>
      <h2>Create Room</h2>
      <p>
        Your new room ID is below. Please share this ID with other Squawk users
        so they can join you.
      </p>
      <h3>{roomId}</h3>
      <button>
        <b>Join Room</b>
      </button>
    </div>
  );
}
