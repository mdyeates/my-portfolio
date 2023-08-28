import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, image, color, id }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const variants = {
    hidden: { y: "10vw", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Link to={`/portfolio/${title.toLowerCase()}`} key={id} className="projectLink col-12 col-lg-6">
      <motion.div
        ref={ref}
        className=""
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div
          style={{ backgroundColor: color }}
          className="projectCard d-flex align-items-center justify-content-center p-5"
          onClick={() => {}}
        >
          <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
            <h3 className="projectTitle">{title}</h3>
            <span className="viewWork">View Work &#8594;</span>
          </div>
          <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
            <img src={image} alt="Laptop displaying the application" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
