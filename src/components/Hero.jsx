import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import landingImage from "../images/suit.png";
import SocialIcons from "./SocialIcons";

const Hero = ({ name }) => {
  const styles = {
    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "80%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "var(--text-color)",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };
  return (
    <>
      <div className="textContainer" style={styles.textContainer}>
        <motion.h1
          className="name"
          style={styles.name}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0, duration: 0.5, type: "spring" }}
        >
          {name}
        </motion.h1>

        <motion.div
          className="description"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          <Typewriter
            className="description"
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.changeDelay(50).typeString("Software Engineer").start();
            }}
          />
        </motion.div>
      </div>
      <div className="image-container">
        <motion.img
          className="landingImage"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          style={styles.landingImage}
          src={landingImage}
          alt="Michael Yeates"
        />
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <SocialIcons />
      </motion.div>
    </>
  );
};

export default Hero;
