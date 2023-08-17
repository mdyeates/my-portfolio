import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header container">
      <NavLink to="/">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
          <img className="logo" src={logo} alt="Michael Yeates' Logo" />
        </motion.div>
      </NavLink>
      <NavLinks />
    </header>
  );
};

export default Header;
