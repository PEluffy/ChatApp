import "./ChatPage.css";
export const ChatPage = () => {
  return (
    <>
      <div className="chatContainer">
        <div className="box">
          <div>
            <div className="topbox">
              <div className="user-avatar">
                <div className="user-img">
                  <img src="/img/pp.jpg" alt="profilepic"></img>
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
        </div>
      </div>
    </>
  );
};
