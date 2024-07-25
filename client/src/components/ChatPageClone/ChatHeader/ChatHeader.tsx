// ChatHeader.tsx
import React from "react";
import "./ChatHeader.css";

const ChatHeader = () => (
  <div className="topboxContainer">
    <div className="topbox">
      <div className="user-avatar">
        <div className="user-img">
          <img className="user" src="/img/pp.jpg" alt="profilepic" />
        </div>
        <span className="username">UserName</span>
        <div className="downarrow">&darr;</div>
      </div>
      <div className="svg-container ">
        <img className="svg" src="img/audiocall.svg" alt="audiocall" />
        <img className="svg" src="img/videocall.svg" alt="videocall" />
        <img className="svg" src="img/minimize.svg" alt="mini" />
        <img className="svg" src="img/close.svg" alt="close" />
      </div>
    </div>
  </div>
);

export default ChatHeader;
