const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/mdyeates">
        <i className="fa-brands fa-github"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/mdyeates/">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/michael.yeates/">
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/mdyeates">
        <i className="fa-brands fa-twitter"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
