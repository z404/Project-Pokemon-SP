import { ReactNode, useContext } from "react";
import { UserContext } from "../userstore";
import Requester from "./Requester";

// promise that resolves after 3 seconds
const promise: () => Promise<string> = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Hello"), 3000);
  });
};

const SuccessComponent: (response: string) => ReactNode = (
  response: string
) => {
  return <div>{response}</div>;
};

function Content() {
  const { username } = useContext(UserContext);
  return (
    <>
      This is the username: {username}
      <Requester request={promise} successComponent={SuccessComponent} />
    </>
  );
}

export default Content;
