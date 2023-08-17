import AboutMe from "../../components/AboutMe";

const About = ({ name, location, brand, email, availability }) => {
  return (
    <>
      <section className="about">
        <AboutMe name={name} location={location} brand={brand} email={email} availability={availability} />
      </section>
    </>
  );
};

export default About;
