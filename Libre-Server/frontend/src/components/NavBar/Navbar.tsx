import { click } from "@testing-library/user-event/dist/click";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import Button from "../Button/Button";
import LibreLogoWord from "../../img/LibreLogoWordWhite.svg";
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

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo"onClick={closeMobileMenu}>
                        <img style={{width: 230, height:230}} src={LibreLogoWord}  />
                    </Link>
                    <div className= "menu-icon" onClick={handleClick}>
                        <i className= {click ?     "fa fa-minus-square" :"fa fa-book"  } />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/Demo" className="nav-links" onClick={closeMobileMenu}>
                                Demo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Map" className="nav-links" onClick={closeMobileMenu}>
                                Map
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/FAQ" className="nav-links" onClick={closeMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signIn" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign In
                            </Link>
                        </li>
                    </ul>
                 {button && <Button buttonStyle='btn--outline'>Sign In</Button>}
                </div>
            </nav>
        </>
    )

}

export default NavBar;