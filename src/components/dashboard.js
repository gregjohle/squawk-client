import React from "react";
import Modal from "react-modal";
import CreateRoom from "./create-room";
import JoinRoom from "./join-room";
import "./modal.css";
import "./dashboard.css";

export default function Dashboard(props) {
  let {
    currentUser,
    createRoomModal,
    setCreateRoomModal,
    joinRoomModal,
    setJoinRoomModal,
    roomId,
    setRoomId,
  } = props;

  function handleCreateRoomModal() {
    setCreateRoomModal(!createRoomModal);
  }

  function handleJoinModal() {
    setJoinRoomModal(!joinRoomModal);
  }

  return (
    <div className='dashboard'>
      <div className='greeting'>
        <h2>Welcome, {currentUser.name}</h2>
        <p>
          If you wish to create a chat room, click on the "Create" button. If
          you wish to join an existing room with a code, click on the "Join"
          button below
        </p>
      </div>
      <div className='options'>
        <button onClick={() => handleCreateRoomModal()}>
          <b>Create</b>
        </button>
        <button onClick={() => handleJoinModal()}>
          <b>Join</b>
        </button>
      </div>
      <Modal
        isOpen={createRoomModal}
        onRequestClose={handleCreateRoomModal}
        className='dashboardModal'
        overlayClassName='dashboardOverlay'>
        <CreateRoom
          currentUser={currentUser}
          createRoomModal={createRoomModal}
          setCreateRoomModal={setCreateRoomModal}
          setRoomId={setRoomId}
        />
      </Modal>
      <Modal
        isOpen={joinRoomModal}
        onRequestClose={handleJoinModal}
        className='dashboardModal'
        overlayClassName='dashboardOverlay'>
        <JoinRoom
          roomId={roomId}
          currentUser={currentUser}
          setRoomId={setRoomId}
          joinRoomModal={joinRoomModal}
          setJoinRoomModal={setJoinRoomModal}
        />
      </Modal>
    </div>
  );
}
