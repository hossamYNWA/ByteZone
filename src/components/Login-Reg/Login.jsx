import NavBar from "../NavBar/NavBar";
import "./login.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [userExist, setUserExist] = useState(true);
  const navigate = useNavigate();
  const passwordRef = useRef();
  const userRef = useRef();
  const loginHandler = (e) => {
    e.preventDefault();
    const username = userRef.current.value;
    const password = passwordRef.current.value;
    if (!localStorage.getItem(username)) {
      setUserExist(false);
    } else {
      const userData = JSON.parse(localStorage.getItem(username));
      if (userData.password === password) {
        localStorage.setItem("loggedIn", true);
        navigate("/");
      } else {
        setUserExist(false);
      }
    }
  };
  return (
    <>
      <NavBar />
      <form>
        <input
          ref={userRef}
          className="log_input"
          type="text"
          id="username"
          placeholder="username"
          name="username"
        />
        <input
          ref={passwordRef}
          className="log_input"
          type="password"
          placeholder="password"
          id="password"
          name="password"
        />
        <button onClick={loginHandler} type="submit">
          Login
        </button>
        {!userExist && (
          <p className="errortext">you entered wrong username or password</p>
        )}
      </form>
    </>
  );
}
