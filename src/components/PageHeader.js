const PageHeader = ({ title, description }) => (
  <>
    <p className="pageDescription">{description}</p>
    <h3 className="pageTitle">{title}</h3>
  </>
);

export default PageHeader;
