import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Components
import PageHeader from "../../components/PageHeader";
import ProjectList from "../../components/ProjectList";

const Portfolio = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <main className="portfolio container">
        <PageHeader title="Portfolio" description="View my work" />
        <div className="row">
          <ProjectList />
        </div>
      </main>
    </>
  );
};

export default Portfolio;
