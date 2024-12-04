import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const RightSection = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
      <div className="w-full h-full flex gap-5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="shadow-in tex-sm flex flex-col justify-center items-start font-semibold md:text-xl px-2 md:px-5 py-5 rounded-xl w-full"
        >
          <div>
            2<span className="text-blue-light">+</span>
          </div>
          <span> YEARS OF </span> EXPERIENCE
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="shadow-in flex flex-col justify-center items-start tex-sm font-semibold md:text-xl px-2 md:px-5 py-5 rounded-xl w-full"
        >
          <div>
            {" "}
            2<span className="text-blue-light">+</span>
          </div>{" "}
          <span> YEARS OF </span>
          EXPERIENCE
        </motion.div>
        
      </div>
      {/* Download Button  */}
      <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center w-full col-span-2 mt-10"
        >
          <button className="download-btn shadow-in rounded-xl">
            <span className="button-bg"></span>
            <p className="download-text">
              Download <span className="text-blue-light capitalize">Resume</span>
            </p>
            <p className="download-icon">
              <FaDownload className="animate-bounce text-blue-light" />
            </p>
          </button>
        </motion.div>
    </div>
  );
};

export default RightSection;

{
  /* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="shadow-up flex flex-col justify-center items-start tex-sm font-semibold md:text-xl px-2 md:px-5 py-5 rounded-xl w-full"
        >
          <div>2<span className="text-blue-light">+</span> </div> <span> YEARS OF </span>
          EXPERIENCE
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          className="shadow-up flex flex-col justify-center items-start tex-sm font-semibold md:text-xl px-2 md:px-5 py-5 rounded-xl w-full"
        >
          <div>2<span className="text-blue-light">+</span></div> <span> YEARS OF </span>
          EXPERIENCE
        </motion.div> */
}
