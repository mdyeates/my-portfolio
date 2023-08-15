import projectData from "./projectsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";
import Footer from "../../components/Footer";

const Portfolio = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
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
      <Footer />
    </>
  );
};

export default Portfolio;
