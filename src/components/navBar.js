import "./styles/navBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navContainer">
      <Link to="/" className="modelsList">
        logo
      </Link>
      <Link to="/models" className="modelsList">
        models
      </Link>
    </div>
  );
};

export default NavBar;
