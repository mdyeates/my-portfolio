import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import ProjectList from "../../components/ProjectList";
import Footer from "../../components/Footer";

/**
 * Represents the Portfolio page component.
 * Displays a list of projects and allows users to view the creator's work.
 *
 * @component
 */

const Portfolio = () => {
  // Get the current location using React Router's useLocation hook
  const location = useLocation();

  // Scroll to the top of the page when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* Main Portfolio Page */}
      <main className="portfolio container">
        {/* Display the page header */}
        <PageHeader title="Portfolio" description="View my work" />

        <div className="row">
          {/* Display the list of projects */}
          <ProjectList />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
