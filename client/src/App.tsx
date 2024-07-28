import React from "react";

import "./App.css";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { LoginRoutes } from "./components/Routes/LoginRoutes";

function App() {
  return (
    <div className="App">
      <LoginRoutes />
    </div>
  );
}

export default App;
