import React from "react";

import "./App.css";
import { ChatPage } from "./components/ChatPage/ChatPage";
import { LoginPage } from "./components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;