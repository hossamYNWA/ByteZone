import "./header.css";
import HeaderLogo from "./HeaderLogo";
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <HeaderLogo />
        <div className="bottom"></div>
      </div>
    </header>
  );
}
