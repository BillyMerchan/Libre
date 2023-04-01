import { click } from "@testing-library/user-event/dist/click";
import React, {useState} from "react";
import {Link} from "react-router-dom"
import { Button } from "./Button";
import LibreLogo from "./logo.svg"
import "./Navbar.css";



function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const [button, setButton] = useState(true);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Libre <img style={{width: 50, height:50}} src={LibreLogo} />
                    </Link>
                    <div className= "menu-icon" onClick={handleClick}>
                        <i className= {click ? 	"fa fa-minus-square" :"fa fa-book"  } />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/FAQ" className="nav-links" onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SignUp</Button>}
                </div>
            </nav>
        </>
    )

}

export default NavBar;