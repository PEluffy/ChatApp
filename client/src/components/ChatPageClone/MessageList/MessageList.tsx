import React, { useRef, useEffect } from "react";
import "./MessageList.css";

interface Message {
  time: string;
  sender: string;
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
  //fix needed here chatMessage.sender is same as localStoreage user that it is outgoing message else it is incomming msg
  return (
    <div className="scrollable-div" ref={scrollableDivRef}>
      <div className="past-mesages">
        <div className="user-pastmessage-box">
          {chat.map((chatMessage, index) => (
            <div key={index} className="message">
              <div className={`message-bubble ${chatMessage.sender}`}>
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
