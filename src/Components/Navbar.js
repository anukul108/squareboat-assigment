import "./Navbar.css";
import Logo from "../asset/ndtvlogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div class = "main">
            <div class = "img">
                <img src = {Logo}/>
            </div>
            <div className="input-container">
                <input type="text" placeholder="search"/>
            </div>
            <ul>
                <li><Link  to="/">Home</Link></li>
                <li><Link to="/general">General</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/health">Health</Link></li>
                <li><Link to="/science">Science</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/technology">Technology</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;