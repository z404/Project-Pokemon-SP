import "./firebase";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserContext } from "./userstore";

function Main() {
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <App />
    </UserContext.Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
