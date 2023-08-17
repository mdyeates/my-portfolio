import { useState, useEffect } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiGitRepoForked } from "react-icons/bi";
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

  return (
    <footer>
      <span>
        <AiOutlineStar /> {gitHubInfo.stars} <BiGitRepoForked /> {gitHubInfo.forks}
      </span>
      <p>
        <span>▷</span> Designed and built by Michael Yeates &copy; {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
