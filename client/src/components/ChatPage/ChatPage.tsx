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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
