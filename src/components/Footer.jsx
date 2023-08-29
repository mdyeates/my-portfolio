import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const [gitHubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/mdyeates/my-portfolio")
      .then((res) => res.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  const buttonVariants = {
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 1,
    },
  };

  return (
    <footer>
      <SocialIcons />

      <a className="footer-link" href="https://github.com/mdyeates/my-portfolio">
        <span>
          <AiOutlineStar /> {gitHubInfo.stars} <BiGitRepoForked />
          {gitHubInfo.forks} - Give this project a star!
        </span>
        <p>
          <span>▷</span> Designed and built by Michael Yeates &copy; {currentYear}
        </p>
        <p>All views and work are my own</p>
      </a>
      <motion.a
        href="https://www.buymeacoffee.com/mdyeates"
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        transition={{ ease: "easeInOut" }}
      >
        <motion.img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png"
          alt="Buy Me A Coffee"
          style={{
            height: "40px",
            scale: 1,
            width: "auto",
            marginTop: "10px",
          }}
          variants={buttonVariants}
          transition={{ ease: "easeInOut" }}
        />
      </motion.a>
    </footer>
  );
};

export default Footer;
