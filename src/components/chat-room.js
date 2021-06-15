import React, { useEffect } from "react";
import "./chat-room.css";
import io from "socket.io-client";
import { Link } from "react-router-dom";

export default function Chat(props) {
  const {
    roomId,
    handleHangup,
    userVideo,
    partnerVideo,
    peerRef,
    socketRef,
    otherUser,
    userStream,
  } = props;

  // this gives a warning because of the empty dependency array. I want this to process once when the coponent mounts.
  // this dependency array must remain empty.
  useEffect(() => {
    // get's the permission to use the camera and microphone
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((stream) => {
        // assigns user media to user refs
        userVideo.current.srcObject = stream;
        userStream.current = stream;
        // communicates user has joined room to the server, sending room ID
        socketRef.current = io(process.env.REACT_APP_URL).connect("/");
        socketRef.current.emit("join room", roomId);
        // Sends request to server to find other users, if present.
        socketRef.current.on("other user", (userID) => {
          callUser(userID);
          otherUser.current = userID;
        });
        // assigns user data to refs
        socketRef.current.on("user joined", (userID) => {
          otherUser.current = userID;
        });
        // triggers offer to connect peer to peer
        socketRef.current.on("offer", handleRecieveCall);
        // answers call from other user
        socketRef.current.on("answer", handleAnswer);
        // handles ICE negotiation to establish Peer to Peer communication.
        socketRef.current.on("ice-candidate", handleNewICECandidate);
      });
  }, []);

  // creates a peer and assigns user media to be sent
  function callUser(userID) {
    peerRef.current = createPeer(userID);
    userStream.current.getTracks().forEach((track) => {
      peerRef.current.addTrack(track, userStream.current);
    });
  }

  // creates a peer and finds a route, either STUN or TURN
  function createPeer(userID) {
    const peer = new RTCPeerConnection({
      iceServers: [
        { urls: "stun:stun.stunprotocol.org" },
        { url: "stun:stun01.sipphone.com" },
        { url: "stun:stun.ekiga.net" },
        { url: "stun:stun.fwdnet.net" },
        { url: "stun:stun.ideasip.com" },
        { url: "stun:stun.iptel.org" },
        { url: "stun:stun.rixtelecom.se" },
        { url: "stun:stun.schlund.de" },
        { url: "stun:stun.l.google.com:19302" },
        { url: "stun:stun1.l.google.com:19302" },
        { url: "stun:stun2.l.google.com:19302" },
        { url: "stun:stun3.l.google.com:19302" },
        { url: "stun:stun4.l.google.com:19302" },
        { url: "stun:stunserver.org" },
        { url: "stun:stun.softjoys.com" },
        { url: "stun:stun.voiparound.com" },
        { url: "stun:stun.voipbuster.com" },
        { url: "stun:stun.voipstunt.com" },
        { url: "stun:stun.voxgratia.org" },
        { url: "stun:stun.xten.com" },
        {
          urls: "turn:numb.viagenie.ca",
          credential: "muazkh",
          username: "webrts@live.com",
        },
        {
          url: "turn:192.158.29.39:3478?transport=udp",
          credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
          username: "28224511:1379330808",
        },
        {
          url: "turn:192.158.29.39:3478?transport=tcp",
          credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
          username: "28224511:1379330808",
        },
      ],
    });

    peer.onicecandidate = handleICECandidateEvent;
    peer.ontrack = handleTrackEvent;
    peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

    return peer;
  }

  // if negotiation of route is needed, creates offer and sends media stream
  function handleNegotiationNeededEvent(userID) {
    peerRef.current
      .createOffer()
      .then((offer) => {
        return peerRef.current.setLocalDescription(offer);
      })
      .then(() => {
        const payload = {
          target: userID,
          caller: socketRef.current.id,
          sdp: peerRef.current.localDescription,
        };
        socketRef.current.emit("offer", payload);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // answers call and associates incoming media with peer
  // sets remote description for peer
  function handleRecieveCall(incoming) {
    peerRef.current = createPeer();
    const desc = new RTCSessionDescription(incoming.sdp);
    peerRef.current
      .setRemoteDescription(desc)
      .then(() => {
        userStream.current
          .getTracks()
          .forEach((track) =>
            peerRef.current.addTrack(track, userStream.current)
          );
      })
      .then(() => {
        return peerRef.current.createAnswer();
      })
      .then((answer) => {
        return peerRef.current.setLocalDescription(answer);
      })
      .then(() => {
        const payload = {
          target: incoming.caller,
          caller: socketRef.current.id,
          sdp: peerRef.current.localDescription,
        };
        socketRef.current.emit("answer", payload);
      });
  }

  // if answering call, sets remote description for peer
  function handleAnswer(message) {
    const desc = new RTCSessionDescription(message.sdp);
    peerRef.current.setRemoteDescription(desc).catch((e) => {
      console.log(e);
    });
  }

  // sends ICE candidate to peer
  function handleICECandidateEvent(e) {
    if (e.candidate) {
      const payload = {
        target: otherUser.current,
        candidate: e.candidate,
      };
      socketRef.current.emit("ice-candidate", payload);
    }
  }

  // receives ICE candidate
  function handleNewICECandidate(incoming) {
    const candidate = new RTCIceCandidate(incoming);

    peerRef.current.addIceCandidate(candidate).catch((e) => {
      console.log(e);
    });
  }

  // sets incoming media stream to peer for viewing
  function handleTrackEvent(e) {
    partnerVideo.current.srcObject = e.streams[0];
  }

  // userVideo starts muted to prevent an echo
  return (
    <div className='chat'>
      <video autoPlay playsInline muted ref={userVideo} className='userVideo' />
      <video autoPlay playsInline ref={partnerVideo} className='partnerVideo' />
      <div className='chatButtons'>
        <Link to='/'>
          <button onClick={() => handleHangup()}>
            <b>End Call</b>
          </button>
        </Link>
      </div>
    </div>
  );
}
