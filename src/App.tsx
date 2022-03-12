import { useContext, useState } from "react";
import Content from "./components/Content";
import Login from "./components/Login";
import { UserContext } from "./userstore";

function App() {
  const { username } = useContext(UserContext);
  return <>{username === "" ? <Login /> : <Content />}</>;
}

export default App;
