import aboutMeImg from "../images/aboutme.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
// import resume from "../pages/about/michael-yeates-resume.pdf";

const AboutMe = ({ name, email, location, availability, brand }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    setDownloading(false);
  }, [downloading]);

  // const handleDownload = () => {
  //   setDownloading(true);
  //   const link = document.createElement("a");
  //   link.href = resume;
  //   link.download = "Michael-Yeates-Resume.pdf";
  //   link.onload = () => {
  //     link.remove();
  //     setDownloading(false);
  //   };
  //   document.body.appendChild(link);
  //   link.click();
  // };

  return (
    <>
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <img src={aboutMeImg} alt={name} />
          </motion.div>
          <motion.div
            className="personalInfo col-12 col-lg-6"
            ref={ref}
            initial={{ x: "10vw", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="contentContainer">
              <h4>Nice to meet you!</h4>
              <h5>I'm a Software Engineer at Amazon.</h5>
              <div className="contentDescription">
                <p>
                  Embarking on my coding and web development journey in 2022 ignited a spark within me. Since then, I've
                  watched my passion for crafting digital experiences flourish. Starting with a front-end web
                  development bootcamp and collecting certifications, I've unlocked doors to endless creative coding
                  possibilities.{" "}
                </p>
                <br />
                <p>
                  Today, I'm deep in an exciting chapter as a degree apprentice software engineer at Amazon. Immersed in
                  the world of Alexa, I get to flex my skills in real-world scenarios while chasing a Digital and
                  Technology Solutions degree from the University of Roehampton.
                </p>
                <br />
                <p>
                  But life isn't just about work—it's about embracing the full spectrum. When I'm not in the coding
                  zone, you'll find me pedaling through exhilarating cycling routes or racing with the wind on a run.
                  And on those quieter occasions, I'm a cinema explorer, seeking films that provoke thought and kindle
                  the flames of inspiration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
