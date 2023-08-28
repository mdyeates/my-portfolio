import { useParams } from "react-router-dom";
// Components
import PageHeader from "../../components/PageHeader";
// Data
import projectData from "./projectsData.json";

const ProjectDetails = () => {
  const { projectTitle } = useParams();

  const project = projectData.find((project) => project.title.toLowerCase() === projectTitle);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container">
      <PageHeader title={project.title} />
      <p className="technology">{project.technologies}</p>

      <p>{project.description}</p>

      <img src={`${project.image}`} alt="" />
      <button className="btn">Github</button>
      <button className="btn">Live</button>
    </div>
  );
};

export default ProjectDetails;
