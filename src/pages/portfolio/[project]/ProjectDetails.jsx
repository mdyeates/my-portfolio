import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
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
                <span key={i} className="technology">
                  {technology + " "}
                </span>
              ))}
            </div>

            <div className="projectBody">
              {project.body.split("\n").map((paragraph, i) => (
                <p className="paragraph" key={i}>
                  {paragraph}
                </p>
              ))}
            </div>

            <a href={project.github}>
              <Button name="GitHub" />
            </a>
            <a href={project.deployed}>
              <Button name="Live" />
            </a>
            <Link to="/portfolio">
              <Button name="Back to Portfolio" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
