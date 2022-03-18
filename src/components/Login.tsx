import {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useContext,
  useState,
} from "react";
import { UserContext } from "../userstore";
import {
  getFirestore,
  DocumentReference,
  DocumentData,
  doc,
  DocumentSnapshot,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { snpValues } from "./objects";

type Gender = "male" | "female";

// 3 length num string
const threeLengthString: (num: number) => string = (num: number) => {
  let str = String(num);
  while (str.length < 3) {
    str = "0" + str;
  }
  return str;
};

function Login() {
  const [username, setUsername] = useState("");
  const [userGender, setUserGender] = useState<Gender>();
  const [displayGenderForm, setDisplayGenderForm] = useState<boolean>(false);
  const { setUsername: updateUsername } = useContext(UserContext);
  const db = getFirestore();
  const userExists = async (username: string) => {
    console.log(username);
    const docRef: DocumentReference<DocumentData> = doc(db, "users", username);
    const docSnap: DocumentSnapshot<DocumentData> = await getDoc(docRef);
    return docSnap.exists();
  };
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (e) => {
      e.preventDefault();
      // if user exists
      const userExistsVal = await userExists(username.trim());
      if (userExistsVal) {
        // update username
        updateUsername(username.trim());
      } else {
        if (!displayGenderForm) {
          setDisplayGenderForm(true);
        } else {
          console.log("This came here?");
          const docRef: DocumentReference<DocumentData> = doc(
            db,
            "users",
            username
          );
          await setDoc(docRef, {
            username,
            gender: userGender,
            snp: {
              ...snpValues,
            },
          });
          updateUsername(username);
        }
      }
    },
    [username, displayGenderForm, userGender, db]
  );
  const handleGenderChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    async (e) => {
      const value = e.target.value;
      if (value === "male" || value === "female") setUserGender(value);
      else console.error("GEnder broke.");
    },
    []
  );
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {displayGenderForm ? (
          <>
            <div>
              <label htmlFor="male-radio">
                <input
                  id="male-radio"
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleGenderChange}
                />
                <span>Male</span>
              </label>
              <label htmlFor="female-radio">
                <input
                  id="female-radio"
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleGenderChange}
                />
                <span>Female</span>
              </label>
            </div>
          </>
        ) : null}
        <button type="submit" onClick={handleSubmit}>
          {displayGenderForm ? `Create User` : `Login`}
        </button>
      </form>
    </div>
  );
}

export default Login;
