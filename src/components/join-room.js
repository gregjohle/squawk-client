import React from "react";
import "./join-room.css";

export default function JoinRoom(props) {
  let { roomId, setRoomId } = props;

  function handleRoomId(event) {
    setRoomId(event.target.value);
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
      <button>
        <b>Join Room</b>
      </button>
    </div>
  );
}
