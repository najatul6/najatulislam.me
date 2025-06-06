import PropTypes from "prop-types";
import { IoGitBranch } from "react-icons/io5";
import { VscLiveShare } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const MyWorkCard = ({ item }) => {
  const imageRef = useRef(null);
  const handleHover = () => {
    const height = imageRef.current.clientHeight;
    const translateY = height - 200 > 0 ? height - 210 : 0;
    imageRef.current.style.transform = `translateY(-${translateY}px)`;
  };

  const handleHoverOut = () => {
    imageRef.current.style.transform = "translateY(0)";
  };
  return (
    <div className="shadow-in p-2 md:p-3 rounded-xl w-full">
      <motion.div
        className=" relative overflow-hidden  shadow-in h-[300px]"
        onMouseOver={handleHover}
        onMouseOut={handleHoverOut}
      >
        <img
          src={item?.imageURL}
          alt={item?.title}
          ref={imageRef}
          className="w-full transition-all duration-1000"
        />
        <div className="absolute w-full bottom-0 flex bg-high-black flex-col justify-center items-center px-3 py-3  transition-opacity duration-500  shadow-in">
          <div className="flex gap-4 justify-start items-center duration-300 w-full">
            <Link to={item?.gitLink} target="_blank" className="w-full">
              <button className="shadow-in w-full  rounded-xl text-base md:text-lg font-medium px-2 md:px-4 py-2 transition-all duration-500 hover:shadow-up hover:text-blue-light active:shadow-in active:text-blue-light">
                <p className="flex justify-center items-center gap-2">
                  Git Hub{" "}
                  <span className="animate-bounce text-blue-light">
                    {" "}
                    <IoGitBranch />
                  </span>
                </p>
              </button>
            </Link>
            <Link to={item?.liveLink} target="_blank" className="w-full">
              <button className="shadow-in w-full  rounded-xl text-base md:text-lg font-medium px-2 md:px-4 py-2 transition-all duration-500 hover:shadow-up hover:text-blue-light active:shadow-in active:text-blue-light">
                <p className="flex justify-center items-center gap-2">
                  Live Link{" "}
                  <span className="animate-bounce text-blue-light">
                    {" "}
                    <VscLiveShare />
                  </span>
                </p>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

MyWorkCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MyWorkCard;
