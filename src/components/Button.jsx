import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

/**
 * Represents a button component with hover and tap animations.
 * Displays a name and an arrow icon.
 *
 * @component
 * @param {string} name - The text to display on the button.
 * @param {string} color - The background color of the button.
 */

const Button = ({ name, color }) => {
  return (
    <motion.button
      className="btn"
      // Apply scale animation on hover
      whileHover={{ scale: 1.05 }}
      // Apply scale animation on tap
      whileTap={{ scale: 0.99 }}
      style={{ backgroundColor: color }}
    >
      {/* Display the button name */}
      <p>{name}</p>
      <div>
        {/* Display the arrow icon */}
        <FiArrowUpRight className="arrow-icon" />
      </div>
    </motion.button>
  );
};

export default Button;
