import MenuItems from "./MenuItems";
import "./Navbar.css"
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">What Cooking</Link>
            <div className="nav-menu">
                { MenuItems.map((item, index) => (
                    <Link key={index} to={item.url} className={item.cName}>
                        <Button>{item.title}</Button>
                    </Link>
                ))}
            </div>
        </nav>
     );
}

export default Navbar;