import PageHeader from "../../components/PageHeader";

const Resume = ({ brand }) => {
  return (
    <section className="resume container">
      <PageHeader title="Resume" description="Uncover my expertise" />
      <p className="brand">{brand}</p>
    </section>
  );
};

export default Resume;
