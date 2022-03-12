import { useContext, useState } from "react";
import { UserContext } from "../userstore";

function Login() {
  const [username, setUsername] = useState("");
  const { setUsername: updateUsername } = useContext(UserContext);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            updateUsername(username.trim());
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
