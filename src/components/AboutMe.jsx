import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import aboutMeImg from "../images/aboutme.jpeg";

/**
 * Represents the About Me section.
 * Displays information about the user.
 *
 * @component
 * @param {string} name - The name of the user.
 */

const AboutMe = ({ name }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  // Variants for staggered animations
  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for paragraph animations
  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Display the personal image */}
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              {/* Display greeting and job title with animation */}
              <motion.h4 variants={paragraphVariants}>Nice to meet you! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a Software Engineer at Amazon.</motion.h5>

              {/* Display content description with animation */}
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                {/* Paragraphs with animation */}
                <motion.p variants={paragraphVariants}>
                  Today, I find myself knee-deep in an exhilarating chapter of my journey as a degree apprentice at the
                  tech titan, <span style={{ color: "var(--hl-color)" }}> Amazon</span>. My playground? The captivating
                  universe of <span style={{ color: "var(--hl-color)" }}> Alexa</span>.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Here, I don my <span style={{ color: "var(--hl-color)" }}> problem-solving </span>
                  cape and dive headfirst into real-world challenges, all while relentlessly pursuing a{" "}
                  <span style={{ color: "var(--hl-color)" }}> Digital and Technology Solutions</span> degree from the
                  University of Roehampton. So here I am, juggling bits of binary and real-life conundrums, all while
                  crafting my own success story.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Life is a kaleidoscope of experiences, far beyond the confines of work. When code isn't my focus, I'm
                  conquering cycling routes, feeling the wind on spirited runs, and fueling my love for Formula One.
                  Amid serene moments, I transform into a film aficionado, seeking films that kindle inspiration and
                  provoke thought.
                </motion.p>
              </motion.div>

              {/* Button to view the portfolio */}
              <NavLink to="/portfolio">
                <Button name="View Portfolio" />
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
