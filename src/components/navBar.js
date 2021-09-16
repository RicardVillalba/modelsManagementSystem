import { motion } from "framer-motion";
import "./styles/navBar.css";
import { Link } from "react-router-dom";

const transition = {
  duration: 2,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const NavBar = () => {
  return (
    <motion.div
      className="navContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={transition}
    >
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
    </motion.div>
  );
};

export default NavBar;
