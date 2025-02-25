import "../back/style.scss"
import "../back/script.js"
import { Link } from "react-router-dom";

const NavbarMenu = () => {

    return <div className="Menu">
        <Link to="/Profile" style={{ textDecoration: "none" }}> 🤷‍♂️ </Link>

    </div>
};

export default NavbarMenu;