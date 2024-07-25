import React, { useRef, useEffect } from "react";
import "./MessageList.css";

interface Message {
  time: string;
  type: string;
  message: string;
}

interface MessageListProps {
  chat: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ chat }) => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <div className="scrollable-div" ref={scrollableDivRef}>
      <div className="past-mesages">
        <div className="user-pastmessage-box">
          {chat.map((chatMessage, index) => (
            <div key={index} className="message">
              <div className={`message-bubble ${chatMessage.type}`}>
                {chatMessage.message}
                <div className="chat-time">{chatMessage.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessageList;
