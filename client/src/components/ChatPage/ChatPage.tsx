import {
  ReactElement,
  ReactHTMLElement,
  useEffect,
  useRef,
  useState,
} from "react";
import "./ChatPage.css";
export const ChatPage = () => {
  const [message, setMessage] = useState<null | string>(null);
  const [chat, setChat] = useState([
    {
      message: "k gariraxas oi ?",
    },
    {
      message: "Kati xaina ta?",
    },
    {
      message: "Kaam k chafdsfas huh kaam xaina teroo ?",
    },
    {
      message: "Bhok lagyo ta?",
    },
    {
      message: "Thik chau?",
    },
    {
      message: "K vayo?",
    },
    {
      message: "Kaati bho bolako?",
    },
    {
      message: "K gardai chau?",
    },
    {
      message: "Aaja k bho?",
    },
    {
      message: "Jaane ta kta?",
    },
    {
      message: "Jaane ta kta?",
    },
    {
      message: "Jaane ta kta?",
    },
    {
      message: "Jaane ta kta?",
    },
  ]);

  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  const handleSubmit = () => {
    if (message) {
      setChat((prev) => [
        ...prev,
        {
          message: message,
        },
      ]);
      setMessage(null);
    }
  };
  useEffect(() => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollTop =
        scrollableDivRef.current.scrollHeight;
    }
  }, [chat]);

  return (
    <>
      <div className="chatContainer">
        <div className="box">
          <div className="topboxContainer">
            <div className="topbox">
              <div className="user-avatar">
                <div className="user-img">
                  <img
                    className="user"
                    src="/img/pp.jpg"
                    alt="profilepic"
                  ></img>
                </div>
                <span className="username">UserName</span>
                <div className="downarrow">&darr;</div>
              </div>
              <div className="svg-container ">
                <img
                  className="svg"
                  src="img/audiocall.svg"
                  alt="audiocall"
                ></img>
                <img
                  className="svg"
                  src="img/videocall.svg"
                  alt="videocall"
                ></img>
                <img className="svg" src="img/minimize.svg" alt="mini"></img>
                <img className="svg" src="img/close.svg" alt="close"></img>
              </div>
            </div>
          </div>
          <div className="scrollable-div" ref={scrollableDivRef}>
            <div className="past-mesages">
              <div className="user-pastmessage-box">
                {chat.map((chatMessage, index) => (
                  <div key={index} className="message">
                    <div className="message-bubble">{chatMessage.message}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bottomboxContainer">
            <div className="bottombox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                />
              </svg>
              <div className="messageboxContainer">
                <div className="messagebox">
                  <input
                    type="text"
                    className="input-box"
                    value={message || ""}
                    onChange={handleMessageChange}
                  ></input>
                </div>
              </div>
              {message ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 enter-svg"
                  onClick={handleSubmit}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              ) : (
                <svg ////if message is null show like-svg else show enter-svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 like-svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
