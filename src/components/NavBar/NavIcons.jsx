import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./NavIcons.css";
import { Link } from "react-router-dom";
export default function NavIcons({qty,favs}) {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">
          <FaUser />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaShoppingCart />
          <span>{qty}</span>
        </Link>
      </li>
      <li>
        <Link to="/favs">
          <FaHeart />
          <span>{favs}</span>
        </Link>
      </li>
    </ul>
  );
}
