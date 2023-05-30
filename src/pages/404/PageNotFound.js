import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="error">
      <PageHeader title="404 Page Not Found" description="Uh oh!" />
      <div className="error-description">
        <div className="row">
          <div className="col">
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>Please double-check the URL or navigate to another section of the site.</p>
            <Link to="/" className="home">
              <button className="btn">Return to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
