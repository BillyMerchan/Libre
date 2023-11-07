import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Button from "../Button/Button";
import LibreLogoWord from "../../img/new_logo.svg";
import "./Navbar.scss";

function NavBar() {
    return (
        <nav className="navbar" data-testid="navbar">
            <Link to="/" className="navbar-logo" data-testid="navbarLogo">
                <img src={LibreLogoWord} />
            </Link>
            {/* <li className="nav-item">
                <Link to="/Demo" className="nav-links">
                    Demo
                </Link>
            </li> */}
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
            <li className="nav-itemSignIn">
                <Link to="/SignIn" className="nav-links">
                    Login
                </Link>
            </li>
        </nav>
    )

}

export default NavBar;
