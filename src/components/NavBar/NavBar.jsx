import logo from "../assets/images/logo-nav.png";
import { Link } from "react-router-dom";
import NavIcons from "./NavIcons";
import {memo} from "react";
import "./navbar.css";
const NavBar = ({ loggedIn, qty, favs }) => {
  const navList = loggedIn ? (
    <NavIcons qty={qty} favs={favs} />
  ) : (
    <ul className="nav-links">
      <li>
        <Link to="/login">Log in</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <div className="logo-container">
            <img src={logo} alt="ByteZone logo" />
          </div>
        </Link>
        {navList}
      </div>
    </nav>
  );
};

export default memo(NavBar);
