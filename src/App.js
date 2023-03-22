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
      "My unique combination of technical proficiency, problem-solving skills, and background in fitness coaching allows me to approach projects with a user-centered perspective.",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
