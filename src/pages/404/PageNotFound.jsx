import { Link } from "react-router-dom";
// Components
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";

const PageNotFound = () => {
  return (
    <main className="error">
      <PageHeader title="404 Page Not Found" description="Uh oh!" />
      <div className="error-description">
        <div className="row">
          <div className="col">
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Please double-check the URL or navigate to another section of the site.</p>
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
