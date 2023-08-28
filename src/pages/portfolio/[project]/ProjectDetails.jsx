import { useParams, Link } from "react-router-dom";
// Components
import PageHeader from "../../../components/PageHeader";
import PageNotFound from "../../404/PageNotFound";
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
          <button className="btn">Github</button>
        </a>
        <a href={project.deployed}>
          <button className="btn">Live</button>
        </a>
        <Link to="/portfolio">
          <button className="btn">Back to Portfolio</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
