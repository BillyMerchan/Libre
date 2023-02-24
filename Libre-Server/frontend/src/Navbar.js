import {Link} from "react-router-dom"

export default function Navbar() {
    const path = window.location.pathname
    return <nav className="nav">
        <Link to= "/" className="Libre Title"> Libre </Link>
        <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/faq">FAQ</CustomLink>
        <CustomLink to="/signin">Sign In</CustomLink>
        </ul>
    </nav>
}

function CustomLink( {to, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className = {path === to ? "active" : ""}>
        <Link to={to}>{children}</Link>
        </li>
    )
}