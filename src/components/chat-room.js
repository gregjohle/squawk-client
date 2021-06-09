import React from "react";
import "./chat-room.css";

export default function Chat(props) {
  return (
    <div className='chat'>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/261OCjeg9GI?controls=0&amp;start=60'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen></iframe>
    </div>
  );
}
