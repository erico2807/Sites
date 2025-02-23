import { Link } from "react-router-dom";


function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/"> Movie App </Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="navLink"> Home  </Link>
            <Link to="/favorites" className="navLink"> Favorites  </Link>

        </div>
    </nav>
}

export default NavBar