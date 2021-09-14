import "./styles/navBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navContainer">
      <p className="logo">mams</p>
      <Link to="/models" className="modelsList">
        models
      </Link>
    </div>
  );
};

export default NavBar;
