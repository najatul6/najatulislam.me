import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Button = ({ text, icon, link, iconFirst }) => {
  return (
    <Link to={link} target="_blank">
      <button className="shadow-in w-full  rounded-xl text-xs md:text-lg lg:text-2xl font-medium px-2 md:px-4 py-2 transition-all duration-500 hover:shadow-up hover:text-blue-light active:shadow-in active:text-blue-light">
        <p className="flex justify-center items-center gap-2">
          {iconFirst} {text} <span className="animate-bounce"> {icon}</span>
        </p>
      </button>
    </Link>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
  link: PropTypes.string,
  iconFirst: PropTypes.element,
};

export default Button;
