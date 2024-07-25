// ChatPage.tsx
import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "../ChatPageClone/ChatHeader/ChatHeader";
import MessageList from "../ChatPageClone/MessageList/MessageList";
import MessageInput from "../ChatPageClone/MessageInput/MessageInput";
import "./Chat.css";

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [chat, setChat] = useState([
    {
      time: "3:30pm",
      type: "outgoing",
      message: "k gariraxas oi ?",
    },
    {
      time: "3:31pm",
      type: "incoming",
      message: "Kati xaina ta?",
    },
    {
      time: "3:32pm",
      type: "outgoing",
      message: "Kaam k chafdsfas huh kaam xaina teroo ?",
    },
    {
      time: "3:33pm",
      type: "incoming",
      message: "Bhok lagyo ta?",
    },
    {
      time: "3:34pm",
      type: "outgoing",
      message: "Thik chau?",
    },
    {
      time: "3:35pm",
      type: "incoming",
      message: "K vayo?",
    },
    {
      time: "3:36pm",
      type: "outgoing",
      message: "Kaati bho bolako?",
    },
    {
      time: "3:37pm",
      type: "incoming",
      message: "K gardai chau?",
    },
    {
      time: "3:38pm",
      type: "outgoing",
      message: "Aaja k bho?",
    },
    {
      time: "3:39pm",
      type: "incoming",
      message: "Jaane ta kta?",
    },
    {
      time: "3:40pm",
      type: "outgoing",
      message: "Jaane ta kta?",
    },
    {
      time: "3:41pm",
      type: "incoming",
      message: "Jaane ta kta?",
    },
    {
      time: "3:42pm",
      type: "outgoing",
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

      setChat((prev) => [
        ...prev,
        {
          time: timeString,
          type: "outgoing",
          message,
        },
      ]);
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
