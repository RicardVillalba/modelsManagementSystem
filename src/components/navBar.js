import "./styles/navBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="navLinks">
        <Link to="/" className="navBarLinks">
          logo
        </Link>
        <Link to="/models" className="navBarLinks">
          models
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
