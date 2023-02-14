export default function Navbar() {
    return <nav className="nav">
        <a href= "/" className="Libre Title"> Libre </a>
        <ul>
            <li className="active">
                <a href="/FAQ">FAQ</a>
            </li>
            <li>
                <a href="/signin">Sign In</a>
            </li>

        </ul>
    </nav>

}