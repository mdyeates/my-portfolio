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
      <main className="landing container" style={styles.landing}>
        <Draw />
        <Hero name={name} />
      </main>
      <About />
    </>
  );
};

export default Landing;
