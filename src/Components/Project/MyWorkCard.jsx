import PropTypes from "prop-types";
import Button from "../Shared/Button/Button";
import { IoGitBranch } from "react-icons/io5";
import { VscLiveShare } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useRef } from "react";

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
    <div className="shadow-in p-2 md:p-3 rounded-xl">
      <motion.div
        // whileHover={{ scale: 1 }}
        className=" relative overflow-hidden  shadow-in h-[300px]"
        onMouseOver={handleHover}
        onMouseOut={handleHoverOut}
      >
        <img
          src={item?.image}
          alt={item?.name}
          ref={imageRef}
          className="w-full transition-all duration-1000"
        />
        <div className="absolute w-full bottom-0 flex bg-high-black flex-col justify-center items-center px-3 py-5  transition-opacity duration-500  shadow-in">
          <div className="flex gap-6 justify-start items-center duration-300">
            <Button
              text="Git Hub"
              link={`${item?.github_link}`}
              icon={<IoGitBranch />}
            />
            <Button
              text="Live Link"
              link={`${item?.liveLink}`}
              icon={<VscLiveShare />}
            />
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
