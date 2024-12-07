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
    imageRef.current.style.transform = `translateY(-${height - 200}px)`;
  };

  const handleHoverOut = () => {
    imageRef.current.style.transform = "translateY(0)";
  };
  return (
    <div className="shadow-in p-2 md:p-3 rounded-xl">
      <motion.div
        // whileHover={{ scale: 1 }}
        className="group relative overflow-hidden  shadow-in h-[300px]"
        onMouseOver={handleHover}
        onMouseOut={handleHoverOut}
      >
        <img
          src={item?.image}
          alt={item?.name}
          ref={imageRef}
          className=" w-full  transition-transform duration-300 group-hover:scale-110 "
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

{
  /* <div className="shadow-in p-2 md:p-3 rounded-xl">
           <motion.div
           whileHover={{scale:1}}
            className="group relative overflow-hidden rounded-xl shadow-in"
          >
            <img
              src={item?.image}
              alt={item?.name}
              className="h-[400px] lg:h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-3 py-5 opacity-0 backdrop-blur-3xl transition-opacity duration-500 group-hover:opacity-100 bg-[#00113b] bg-opacity-80">
              <h3 className="uppercase mb-2 text-xl font-bold text-white">
                {item?.name}
              </h3>
              <hr  className="w-full py-1"/>
              <h4 className="mb-2 text-center">{item?.description}</h4>
              {/* <div className="lg:mb-12">
                <h3 className="text-lg font-semibold text-white underline">
                  Features :
                </h3>
                {item?.features?.map((listItem, index) => (
                    <ul key={index} className="pl-5 list-square">
                        <li>{listItem}</li>
                    </ul>
                ))}
              </div> */
}
//       <div className="flex gap-6 justify-start items-center ">
//         <Button
//           text="Git Hub"
//           link={`${item?.github_link}`}
//           icon={<IoGitBranch />}
//         />
//         <Button
//           text="Live Link"
//           link={`${item?.liveLink}`}
//           icon={<VscLiveShare />}
//         />
//       </div>
//     </div>
//   </motion.div>
//  </div> */}
