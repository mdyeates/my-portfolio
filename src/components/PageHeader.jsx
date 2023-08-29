import { motion } from "framer-motion";

/**
 * Represents a page header with title and description.
 *
 * @component
 * @param {string} title - The title of the page.
 * @param {string} description - The description of the page.
 */

const PageHeader = ({ title, description }) => (
  <>
    {/* Page description */}
    <motion.p
      className="pageDescription"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {description}
    </motion.p>
    {/* Page title */}
    <motion.h3
      className="pageTitle"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {title}
    </motion.h3>
  </>
);

export default PageHeader;
