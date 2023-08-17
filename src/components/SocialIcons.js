import { motion } from "framer-motion";

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
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Michael Yeates' GitHub Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/mdyeates/">
        <motion.i
          initial={{ y1: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Michael Yeates' LinkedIn Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/michael.yeates/">
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
          className="fa-brands fa-instagram"
          aria-hidden="true"
          title="Michael Yeates' Instagram Profile"
        ></motion.i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/mdyeates">
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Michael Yeates' Twitter Profile"
        ></motion.i>
      </a>
    </div>
  );
};

export default SocialIcons;
