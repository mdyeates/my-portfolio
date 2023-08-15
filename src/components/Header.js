import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="header container">
      <img className="logo" src={logo} alt="Michael Yeates' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
