import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "James Yi",
    location: "Los Angeles, CA",
    tagline: "Full Stack Software Engineer",
    email: "jamesyi803@gmail.com",
    availability: "Open for work",
    brand:
      "I am a former personal trainer now pursuing a career in software engineering. Through my coaching experience, I have gained essential skills such as patience, persistence, adaptability, and communication to bring to the tech industry. My interest in technology and dedication to constant improvement motivates me to explore the intersection of health and software and to contribute to innovative solutions in this space.",
    skills: "JavaScript, Python, HTML, CSS, React, FastAPI, Django, Postgres, Docker, Gitlab CI/CD, Git",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
