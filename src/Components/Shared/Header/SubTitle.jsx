import PropTypes from "prop-types";
import { motion } from "framer-motion";

const SubTitle = ({ text1, text2 }) => {
  return (
    <>
      <motion.h2
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-xl md:text-3xl font-semibold uppercase font-Cormorant py-2"
      >
        {text1}
        <span className="text-blue-light"> {text2}</span>
      </motion.h2>
    </>
  );
};

SubTitle.propTypes = {
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
};

export default SubTitle;
