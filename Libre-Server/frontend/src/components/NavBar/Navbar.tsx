import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Button from "../Button/Button";
import LibreLogoWord from "../../img/LibreLogoWordWhite.svg";
import "./Navbar.css";



function NavBar() {
    const [button] = useState(true);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <img src={LibreLogoWord} />
            </Link>
            <li className="nav-item">
                <Link to="/Demo" className="nav-links">
                    Demo
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/Map" className="nav-links">
                    Map
                </Link>
            </li>
            <li className="nav-itemFAQ">
                <Link to="/FAQ" className="nav-links">
                    FAQ
                </Link>
            </li>
            {button && <Button buttonStyle='btn--signin'>Sign In</Button>}
        </nav>
    )

}

export default NavBar;