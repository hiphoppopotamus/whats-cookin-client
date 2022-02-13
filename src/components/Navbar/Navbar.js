import { useState } from "react";
import MenuItems from "./MenuItems";
import "./Navbar.css"
import {Link} from "react-router-dom";

const Navbar = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <nav className="NavbarItems">
            <Link to="/" className="navbar-logo">What<br/>Cooking</Link>
            <div className="menu-icon" onClick={ handleClick }>
                <i className={isClicked ? "fas fa-times" : "fas fa-bars"}/>
            </div>
            <ul className={ isClicked ? "nav-menu active" : "nav-menu" }>
                { MenuItems.map((item, index) => (
                    <li key={index}>
                        <Link to={item.url} className={item.cName}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
     );
}

export default Navbar;