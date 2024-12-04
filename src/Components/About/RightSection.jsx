import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import SubTitle from "../Shared/Header/SubTitle";
import { useState } from "react";
import { MdWifiTethering } from "react-icons/md";

const RightSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Download Resume
  const handleDownload = () => {
    setIsLoading(true); 
    const link = document.createElement("a");
    link.href = "/Najatul'sCv.pdf"; 
    link.download = "Md_Najatul_Islam_Resume.pdf"; 
    document.body.appendChild(link);

   
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
      setIsLoading(false); 
    }, 2000); 
  };
  return (
    <div className="w-full flex flex-col justify-center items-center h-full">
       <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="shadow-up w-full flex justify-center items-center py-2 mb-4 rounded-xl"
      >
        <SubTitle text1={"github"} text2={"Overview"} />
      </motion.div>
      <div className="w-full h-full grid grid-cols-2 gap-5">
      {/* Total Stars: */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="shadow-in tex-sm flex flex-col justify-center items-center font-Cormorant font-semibold md:text-xl px-2 md:px-5 py-5 rounded-xl w-full"
        >
          <div className="text-2xl"> 
            113<span className="text-blue-light">+</span>
          </div>
          <span> Total Stars</span> 
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="shadow-in tex-sm flex flex-col justify-center items-center font-Cormorant font-semibold md:text-xl px-2 md:px-5 py-5 rounded-xl w-full"
        >
          <div className="text-2xl"> 
            100<span className="text-blue-light">+</span>
          </div>
          <span>Repositories</span> 
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="shadow-in flex flex-col justify-center items-center tex-sm font-Cormorant font-semibold md:text-xl px-2 md:px-5 py-5 rounded-xl w-full"
        >
          <div className="text-2xl">
            {" "}
            130<span className="text-blue-light">+</span>
          </div>{" "}
          <span> Longest Streak</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="shadow-in flex flex-col justify-center items-center tex-sm font-Cormorant font-semibold md:text-xl px-2 md:px-5 py-5 rounded-xl w-full"
        >
          <div className="text-2xl">
            {" "}
            4000<span className="text-blue-light">+</span>
          </div>{" "}
          <span> Total Contributions</span>
        </motion.div>
        
      </div>
     {/* Download Button  */}
     <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center w-full mt-10"
      >
        <button
          onClick={handleDownload}
          className={`download-btn shadow-in rounded-xl flex justify-center items-center ${
            isLoading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isLoading}
        >
          <span className="button-bg"></span>
          {isLoading ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin"><MdWifiTethering /></span> 
              <p className="download-text">Downloading...</p>
            </div>
          ) : (
            <>
              <p className="download-text">
                Download <span className="text-blue-light">CV</span>
              </p>
              <p className="download-icon">
                <FaDownload className="animate-bounce text-blue-light" />
              </p>
            </>
          )}
        </button>
      </motion.div>
    </div>
  );
};

export default RightSection;


