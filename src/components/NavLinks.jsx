import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import openMenu from "../images/open.svg";
import closeMenu from "../images/close.svg";
import { motion } from "framer-motion";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [islightMode, setLightMode] = useState(false);

  /*
  --bg-color: #131a22;
  --bg2-color: #232f3e19;
  --hl-color: #48a3c6;
  --hl2-color: #e47911;
  --text-color: #f3f3f3;
  --secondary-text-color: #999999;
  --grey: #9f9f9f76;
  --spacing: 50px;
  --sm-spacing: 30px;
    */

  const toggleMode = () => {
    setLightMode(!islightMode);
  };

  useEffect(() => {
    const colors = !islightMode
      ? {
          "--bg-color": "#131a22",
          "--bg2-color": "#232f3e19",
          "--hl-color": "#48a3c6",
          "--hl2-color": "#e47911",
          "--text-color": "#f3f3f3",
          "--secondary-text-color": "#999999",
          "--grey": "#9f9f9f76",
        }
      : {
          "--bg-color": "#101010",
          "--bg2-color": "#121212",
          "--hl-color": "#48a3c6",
          "--hl2-color": "#e47911",
          "--text-color": "#f3f3f3",
          "--secondary-text-color": "#9f9f9f",
          "--grey": "#9f9f9f76",
        };

    for (const property in colors) {
      const value = colors[property];
      document.documentElement.style.setProperty(property, value);
    }
  }, [islightMode]);

  return (
    <>
      <button className="dropdown-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <img className="closeMenu" src={closeMenu} alt="Close" />
        ) : (
          <img className="openMenu" src={openMenu} alt="Open" />
        )}
      </button>
      <nav className={`links ${isMenuOpen ? "open" : "closed"}`}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.5, type: "spring" }}
        >
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.5, type: "spring" }}
        >
          <NavLink to="/portfolio" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
        >
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.5, type: "spring" }}
        >
          <button className="toggleMode" onClick={toggleMode}>
            {islightMode ? <CiLight className="toggleIcon" /> : <MdDarkMode className="toggleIcon" />}
          </button>
        </motion.div>
      </nav>
    </>
  );
};

export default NavLinks;
