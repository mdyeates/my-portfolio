import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";

/**
 * Represents the 404 Page Not Found component.
 * This component is displayed when a user tries to access a non-existent page.
 *
 * @component
 */

const PageNotFound = () => {
  return (
    <main className="error">
      {/* Display the page header */}
      <PageHeader title="404 Page Not Found" description="Uh oh!" />

      <div className="error-description">
        <div className="row">
          <div className="col">
            {/* Display a message indicating the page was not found */}
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Please double-check the URL or navigate to another section of the site.</p>

            {/* Provide a link back to the home page */}
            <Link to="/" className="home">
              <Button name="Return to Home" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
