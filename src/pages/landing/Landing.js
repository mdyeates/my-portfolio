import Hero from "../../components/Hero";
import Draw from "../../components/Draw";
import About from "../../components/AboutMe";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <>
      <section className="landing container" style={styles.landing}>
        <Draw />
        <Hero name={name} />
      </section>
      <About />
    </>
  );
};

export default Landing;
