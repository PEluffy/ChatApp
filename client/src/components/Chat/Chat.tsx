// ChatPage.tsx
import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "../ChatPageClone/ChatHeader/ChatHeader";
import MessageList from "../ChatPageClone/MessageList/MessageList";
import MessageInput from "../ChatPageClone/MessageInput/MessageInput";
import "./Chat.css";

enum MessageType {
  ZERO,
  ONE,
}

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState([
    {
      sender: "user",
      time: "3:30pm",
      message: "k gariraxas oi ?",
    },
    {
      sender: "user1",
      time: "3:31pm",
      message: "Kati xaina ta?",
    },
    {
      sender: "user1",
      time: "3:32pm",
      message: "Kaam k chafdsfas huh kaam xaina teroo ?",
    },
    {
      sender: "user1",
      time: "3:33pm",
      message: "Bhok lagyo ta?",
    },
    {
      sender: "user1",
      time: "3:34pm",
      message: "Thik chau?",
    },
    {
      sender: "user1",
      time: "3:35pm",
      message: "K vayo?",
    },
    {
      sender: "user1",
      time: "3:36pm",
      message: "Kaati bho bolako?",
    },
    {
      sender: "user1",
      time: "3:37pm",
      message: "K gardai chau?",
    },
    {
      sender: "user1",
      time: "3:38pm",
      message: "Aaja k bho?",
    },
    {
      sender: "user1",
      time: "3:39pm",
      message: "Jaane ta kta?",
    },
    {
      sender: "user1",
      time: "3:40pm",
      message: "Jaane ta kta?",
    },
    {
      sender: "user1",
      time: "3:41pm",
      message: "Jaane ta kta?",
    },
  ]);

  const scrollableDivRef = useRef<HTMLDivElement>(null);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (message) {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();

      const ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12;

      minutes = minutes < 10 ? parseInt("0" + minutes) : minutes;

      const timeString = `${hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }${ampm}`;

      // setChat((prev) => [
      //   ...prev,
      //   {
      //     time: timeString,
      //     type: "outgoing",
      //     message,
      //   },
      // ]);
      //websocket connection when user enter a message
      const socket = new WebSocket("wss://localhost:7247/ws");
      socket.onopen = () => {
        console.log("WebSocket connection opened.");
        const sessionUser = localStorage.getItem("sessionUser");
        const sender = sessionUser ? JSON.parse(sessionUser).Name : "Guest";
        const Message = {
          time: timeString,
          sender: sender,
          messageType: MessageType.ONE,
        };
        console.log(Message);
        socket.send(JSON.stringify(Message));
      };

      setMessage("");
    }
  };

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div className="chatContainer">
      <div className="box">
        <ChatHeader />
        <MessageList chat={chat} />
        <MessageInput
          message={message}
          onMessageChange={handleMessageChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Chat;
