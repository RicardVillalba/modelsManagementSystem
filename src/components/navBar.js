import "./styles/navBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="allNavContent">
        <div className="navBarLogoSection">
          <Link to="/" className="navBarLogo">
            logo
          </Link>
        </div>
        <div className="navBarSections">
          <Link to="/about" className="navBarLinks">
            about
          </Link>
          <Link to="/women" className="navBarLinks">
            women
          </Link>
          <Link to="/men" className="navBarLinks">
            men
          </Link>
          <Link to="/becomeamodel" className="navBarLinks">
            become a model
          </Link>
          <Link to="/contact" className="navBarLinks">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
