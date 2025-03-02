import { FaDownload } from "react-icons/fa6";
import SubTitle from "../Shared/Header/SubTitle";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdWifiTethering } from "react-icons/md";
const LeftSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Download Resume
  const handleDownload = () => {
    setIsLoading(true); 
    const link = document.createElement("a");
    link.href = "/Najatul'sResume.pdf"; 
    link.download = "Najatul_Islam_Resume.pdf"; 
    document.body.appendChild(link);

   
    setTimeout(() => {
      link.click();
      document.body.removeChild(link);
      setIsLoading(false); 
    }, 2000); 
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="shadow-up flex justify-center items-center py-2 rounded-xl"
      >
        <SubTitle text1={"personal"} text2={"Infos"} />
      </motion.div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-5 justify-center md:items-center text-sm lg:text-lg mt-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <p>
            First Name :{" "}
            <span className="text-white font-Cormorant font-semibold">
              Md Najatul Islam
            </span>
          </p>

          <p>
            Age :{" "}
            <span className="text-white font-Cormorant font-semibold">
              24 Years
            </span>
          </p>
          <p>
            Nationality :
            <span className="text-white font-Cormorant font-semibold">
              Bangladeshi
            </span>
          </p>
          <p>
            Address :{" "}
            <span className="text-white font-Cormorant font-semibold">
              Rangpur, Bangladesh
            </span>
          </p>

          <p>
            Profession :{" "}
            <span className="text-white font-Cormorant font-semibold">
              Web Developer
            </span>
          </p>

          <p>
            Remote :{" "}
            <span className="text-blue-light font-Cormorant font-semibold ">
              Available
            </span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <p>
            Phone :{" "}
            <a
              href="tel:+8801773827414"
              className="text-white font-Cormorant font-semibold"
            >
              +8801773827414
            </a>
          </p>
          <p>
            Skype :{" "}
            <a
              href="skype:live:.cid.67fec4a08d44ea99?chat"
              className="text-white font-Cormorant font-semibold"
            >
              live:.cid.67fec4a08d44ea99
            </a>
          </p>
          <p>
            Github :{" "}
            <a
              href="https://github.com/najatul6"
              target="_blank"
              className="text-white font-Cormorant font-semibold"
            >
              najatul6
            </a>
          </p>
          <p>
            E-mail :{" "}
            <a
              href="mailto:mdnajatulislam.develop@gmail.com"
              className="text-white font-Cormorant font-semibold text-wrap"
            >
              mdnajatulislam.develop@gmail.com
            </a>
          </p>
          <p>
            Language :{" "}
            <span className="text-white font-Cormorant font-semibold">
              English, Bangla
            </span>
          </p>
          <p>
            Hobbies :{" "}
            <span className="text-white font-Cormorant font-semibold">
              Reading, Coding, Traveling
            </span>
          </p>
        </motion.div>
      </div>

      {/* Download Button  */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
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
                Download <span className="text-blue-light">Resume</span>
              </p>
              <p className="download-icon">
                <FaDownload className="animate-bounce text-blue-light" />
              </p>
            </>
          )}
        </button>
      </motion.div>
    </>
  );
};

export default LeftSection;
