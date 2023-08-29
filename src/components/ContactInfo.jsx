import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

/**
 * Represents the contact information section.
 * Displays the user's contact details.
 *
 * @component
 * @param {string} name - The name of the user.
 * @param {string} email - The email address of the user.
 * @param {string} location - The location of the user.
 */

const ContactInfo = ({ name, email, location }) => {
  // Using react-intersection-observer to determine if the component is in view
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <motion.div
      className="contactInfo"
      ref={ref}
      // Initial animation values
      initial={{ y: "10vw", opacity: 0 }}
      // Animate when in view
      animate={inView ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <h4 className="contentTitle">Contact Information</h4>
      <p className="infoDescription">Let's connect and build something awesome together! </p>
      <ul className="listInfo">
        {/* Display Name */}
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              {/* Icon for Name */}
              <i className="icon fa-solid fa-user"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Name</h6>
              <span className="infoValue">{name}</span>
            </div>
          </div>
        </li>
        {/* Display Location */}
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              {/* Icon for Location */}
              <i className="icon fa-solid fa-location-pin "></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Location</h6>
              <span className="infoValue">{location}</span>
            </div>
          </div>
        </li>
        {/* Display Email */}
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              {/* Icon for Email */}
              <i className="icon fa-solid fa-envelope "></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Email</h6>
              {/* Link to email */}
              <span className="infoValue">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default ContactInfo;
