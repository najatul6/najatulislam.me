import { motion } from "framer-motion";
import PropTypes from "prop-types";
const Header = ({ text1, text2 }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col justify-center items-center text-3xl md:text-4xl
      font-bold uppercase py-10"
    >
      <p className="title-item">
        {text1} <span className="text-blue-light">{text2}</span>
      </p>
      <p className="title-item">
        {text1} <span className="text-blue-light">{text2}</span>
      </p>
    </motion.div>
  );
};

Header.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default Header;
