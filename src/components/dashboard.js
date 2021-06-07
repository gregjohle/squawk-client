import React from "react";

export default function Dashboard(props) {
  let { currentUser } = props;

  return (
    <div className='dashboard'>
      <div className='greeting'>
        <h2>Welcome, {currentUser.name}</h2>
        <p>
          If you wish to create a chat room, click on the "Create" button. If
          you widh to join an existing room with a code, click on the "Join"
          button below
        </p>
      </div>
      
    </div>
  );
}
