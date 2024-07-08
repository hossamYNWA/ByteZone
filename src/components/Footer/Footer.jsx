import logo from "../assets/images/logo.png";
import {Link} from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import "./footer.css";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div>
                    <h5>customer support</h5>
                    <ul>
                        <li>
                            <Link href="#">FAQ</Link>
                        </li>
                        <li>
                            <Link href="#">call center</Link>
                        </li>
                        <li>
                            <Link href="#">order tracking</Link>
                        </li>
                        <li>
                            <Link href="#">returns</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>our locations</h5>
                    <ul>
                        <li>
                            <Link href="#">Cairo</Link>
                        </li>
                        <li>
                            <Link href="#">Dubai</Link>
                        </li>
                        <li>
                            <Link href="#">London</Link>
                        </li>
                        <li>
                            <Link href="#">Tanta</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h5>useful linkes</h5>
                    <ul>
                        <li>
                            <Link href="#">About us</Link>
                        </li>
                        <li>
                            <Link href="#">sell kit</Link>
                        </li>
                        <li>
                            <Link href="#">careers</Link>
                        </li>
                        <li>
                            <Link href="#">enquires</Link>
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <h5>follow us</h5>
                    <ul>
                        <li>
                            <Link className="fb" href="#">
                                <FaFacebookSquare />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="x">
                                <FaSquareXTwitter />
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="wb">
                                <IoLogoWhatsapp />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyrts">
                <p>
                    COPYRIGHTES<sup>&copy;</sup> 2024 all rightes reserved by
                    hossam mousa
                </p>
            </div>
        </footer>
    );
};

export default Footer;
