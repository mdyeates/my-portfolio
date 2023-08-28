import { motion } from "framer-motion";

const PageHeader = ({ title, description }) => (
  <>
    <motion.p
      className="pageDescription"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {description}
    </motion.p>
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
