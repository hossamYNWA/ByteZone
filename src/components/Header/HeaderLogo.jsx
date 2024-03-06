import "./headerlogo.css";
import laptop from "../assets/images/laptop.png";
export default function HeaderLogo() {
  return (
    <div className="slogan">
      <p>unleash your potential with cutting-edge laptops!</p>
      <img src={laptop} alt="ByteZone logo" />
    </div>
  );
}
