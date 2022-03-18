import { useContext } from "react";
import { UserContext } from "../userstore";

function Content() {
  const { username } = useContext(UserContext);
  return <>This is the username: {username}</>;
}

export default Content;
