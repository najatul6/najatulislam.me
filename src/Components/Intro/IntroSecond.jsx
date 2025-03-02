import { FaLongArrowAltRight } from "react-icons/fa";
import SocialIcons from "../SocialIcons/SocialIcons";
import { motion } from "framer-motion";

const IntroSecond = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElement = document.querySelector("#contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <div className="h-full px-4 py-5 lg:py-0 flex flex-col md:flex-row items-center ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col gap-2"
        >
          <h4 className="text-md lg:text-xl font-semibold text-white">Hey There ,</h4>
          <h1 className="text-2xl md:text-4xl text-white font-Montserrat mt-2 font-bold">
            I&apos;m <span className="text-2xl md:text-4xl font-extrabold text-white font-Nunito"> Najatul </span>
          </h1>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white font-Nunito">Islam</h1>
          <h4 className="text-blue-light mt-4 lg:text-2xl font-bold font-Cormorant">Web Developer</h4>
          <p className="lg:w-[70%] xs:w-full text-white text-sm mt-4 xl:text-xl">
            Experienced full-stack developer with 2+ years of expertise in JavaScript, ReactJS, NextJS, and Graphic Design experience.
          </p>
          <div className="flex flex-col justify-start items-start gap-5 mt-6">
            <a href="#contact" onClick={handleScrollToContact}>
              <button className="shadow-in duration-300 w-full ease-in-out rounded-xl text-xs md:text-lg lg:text-2xl font-medium px-5 py-3 hover:shadow-up hover:text-blue-light active:shadow-in active:text-blue-light">
                <p className="flex justify-center items-center gap-2">Get In Touch <FaLongArrowAltRight /></p>
              </button>
            </a>
            <div className="py-5">
              <SocialIcons />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center shadow-in overflow-hidden rounded-full w-full"
        >
          <img className="lg:h-full md:h-[450px] sm:h-[480px] imageShadow " src="/najatul6.png" alt="profile Image" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full hidden lg:flex sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg"
        >
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">100</h2>
              <h2 className="text-blue-light text-xl md:text-2xl lg:text-4xl font-extrabold">+</h2>
            </div>
            <h4 className="xs:text-sm font-Cormorant text-lg xs:text-center">Repositories</h4>
          </div>
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">130</h2>
              <h2 className="text-blue-light text-xl md:text-2xl lg:text-4xl font-extrabold">+</h2>
            </div>
            <h4 className="xs:text-sm font-Cormorant sm:text-lg xl:text-xl xs:text-center">Longest Streak</h4>
          </div>
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold">4000</h2>
              <h2 className="text-blue-light text-xl md:text-2xl lg:text-4xl font-extrabold">+</h2>
            </div>
            <h4 className="xs:text-sm font-Cormorant sm:text-lg xl:text-xl xs:text-center">Contribution</h4>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IntroSecond;