import "./login.css";
import NavBar from "../NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
export default function Register() {
  // const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const nameRef = useRef();
  const mailRef = useRef();
  const passwordRef = useRef();
  const userRef = useRef();
  const submitHandler = (e) => {
    console.log(e.target);
    e.preventDefault();
    const name = nameRef.current.value;
    const mail = mailRef.current.value;
    const username = userRef.current.value;
    const password = passwordRef.current.value;
    const userData = { name, mail, username, password };
    localStorage.setItem(username, JSON.stringify(userData));
    navigate("/");
  };
  return (
    <>
      <NavBar />
      <form action="POST">
        <input
          ref={nameRef}
          className="log_input"
          type="text"
          id="name"
          placeholder="Full Name"
          name="name"
        />
        <input
          ref={mailRef}
          className="log_input"
          type="email"
          id="mail"
          placeholder="Email address"
          name="mail"
        />
        <input
          ref={userRef}
          className="log_input"
          type="text"
          id="username"
          placeholder="Username"
          name="username"
        />
        <input
          ref={passwordRef}
          className="log_input"
          type="password"
          id="password"
          placeholder="Password"
          name="password"
        />
        <button onClick={submitHandler} type="submit">
          Register
        </button>
        <div className="backup">
          <span>
            {" "}
            if you already have an account, <Link to="/login">Log in</Link>
          </span>
        </div>
      </form>
    </>
  );
}
