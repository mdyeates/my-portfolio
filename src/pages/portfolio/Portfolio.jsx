import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Components
import ProjectCard from "../../components/ProjectCard";
import PageHeader from "../../components/PageHeader";
// Data
import projectData from "./projectsData.json";

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const ProjectList = () =>
    projectData.map((project) => (
      <ProjectCard
        key={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <>
      <section className="portfolio container">
        <PageHeader title="Portfolio" description="View my work" />
        <div className="row">
          <ProjectList />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
