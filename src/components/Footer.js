const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <p>🚀 Designed & built by Michael Yeates &copy; {currentYear} </p>
    </footer>
  );
};

export default Footer;
