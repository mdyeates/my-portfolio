import AboutMe from "../../components/AboutMe";
import PageHeader from "../../components/PageHeader";

const About = ({ name, location, brand, email, availability, skills }) => {
  return (
    <section className="about">
      <PageHeader title="About Me" />
      <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} skills={skills} />
    </section>
  );
};

export default About;
