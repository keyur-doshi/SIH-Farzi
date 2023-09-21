import React from "react";
import './navbar.css';
const Navbar = () => {
    return (
        <nav className="menu">
            <ul className="ops">
                <li><a href="#">Home</a></li>
                <li><a href="#">Know Your AQI</a></li>
                <li><a href="#">Know Your WQI</a></li>
                <li><a href="#">Edu</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}
export default Navbar;