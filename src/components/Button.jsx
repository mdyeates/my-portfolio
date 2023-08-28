import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({ name }) => {
  return (
    <motion.button className="btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
      <p>{name}</p>
      <div>
        <FiArrowUpRight whileHover={{ scale: 4 }} className="arrow-icon" />
      </div>
    </motion.button>
  );
};

export default Button;
