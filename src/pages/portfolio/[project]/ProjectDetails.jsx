import { useParams, Link } from "react-router-dom";
// Components
import PageHeader from "../../../components/PageHeader";
import PageNotFound from "../../404/PageNotFound";
import Button from "../../../components/Button";
// Data
import projectData from "../projectsData.json";

const ProjectDetails = () => {
  const { projectTitle } = useParams();

  const project = projectData.find((project) => project.title.toLowerCase() === projectTitle);

  if (!project) {
    return <PageNotFound />;
  }

  return (
    <div className="portfolio">
      <PageHeader title={project.title} description={project.description} />

      <div className="container">
        {project.technologies.map((technology, i) => (
          <span key={i} className="technology">
            {technology + " "}
          </span>
        ))}

        <p className="projectBody">{project.body}</p>

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
  );
};

export default ProjectDetails;
