// ChatHeader.tsx
import React from "react";
import "./ChatHeader.css";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const sessionUser = localStorage.getItem("sessionUser");
  const userName = sessionUser ? JSON.parse(sessionUser).Name : "Guest";
  const navigate = useNavigate();

  return (
    <div className="topboxContainer">
      <div className="topbox">
        <div className="user-avatar">
          <div className="user-img">
            <img className="user" src="/img/pp.jpg" alt="profilepic" />
          </div>
          <span className="username">{userName}</span>
          <div className="downarrow">&darr;</div>
        </div>
        <div className="svg-container ">
          <img className="svg" src="img/audiocall.svg" alt="audiocall" />
          <img className="svg" src="img/videocall.svg" alt="videocall" />
          <img className="svg" src="img/minimize.svg" alt="mini" />
          <img
            className="svg"
            src="img/close.svg"
            alt="close"
            onClick={() => {
              localStorage.removeItem("sessionUser");
              localStorage.removeItem("isLoggedIn");
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
