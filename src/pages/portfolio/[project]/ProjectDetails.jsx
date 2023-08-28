import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
// Components
import PageHeader from "../../../components/PageHeader";
import PageNotFound from "../../404/PageNotFound";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
// Data
import projects from "../../../_data/projects.json";

const ProjectDetails = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { projectTitle } = useParams();

  const project = projects.find((project) => project.title.toLowerCase() === projectTitle);

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <main className="portfolio">
      <PageHeader title={project.title} description={project.description} />

      <div className="container ">
        <div className="row">
          <div className="col-12 col-xl-6">
            <Image src={project.image2} alt={project.name} className="projectImage" opacity="0.5" />
          </div>
          <div className="col-12 col-xl-6 projectDetails">
            <div className="tech">
              {project.technologies.map((technology, i) => (
                <motion.span
                  key={i}
                  className="technology"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.5, ease: "easeInOut" }}
                >
                  {technology + " "}
                </motion.span>
              ))}
            </div>

            <div className="projectBody">
              {project.body.split("\n").map((paragraph, i) => (
                <motion.p
                  className="paragraph"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.8, ease: "easeInOut" }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              style={{ display: "flex", gap: "10px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.body.split("\n").length * 0.8 }}
            >
              <a href={project.github}>
                <Button name="GitHub" />
              </a>
              <a href={project.deployed}>
                <Button name="Live" />
              </a>
            </motion.div>

            <motion.div
              style={{ display: "flex", gap: "10px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.body.split("\n").length * 0.8 + 0.5 }}
            >
              <Link to="/portfolio">
                <Button name="Back to Portfolio" color="var(--hl2-color)" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
