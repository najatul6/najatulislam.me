import LeftSection from "../../Components/About/LeftSection";
import RightSection from "../../Components/About/RightSection";
import ExperienceEducation from "../../Components/ExperienceEducation/ExperienceEducation";
import MySkills from "../../Components/MySkills/MySkills";
import Header from "../../Components/Shared/Header/Header";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="">
      <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">
        <Header text1={"About"} text2={"Me"} />
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-5  w-full ">
        {/* About Me Content */}
        <div className="shadow-in p-5 rounded-xl w-full lg:w-3/4 ">
          <LeftSection />
        </div>
        <div className="shadow-in p-5 rounded-xl w-full lg:w-2/4 flex justify-center">
          <RightSection />
        </div>
      </div>
      {/* Skills Content */}
      <div className="mt-10 shadow-in p-5 rounded-xl">
        <MySkills />
      </div>

      {/* EXPERIENCE & EDUCATION */}
      <div className="mt-10 shadow-in p-5 rounded-xl">
        <div className="flex justify-center items-center shadow-up rounded-xl py-5 my-5">
          <motion.h2
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl md:text-3xl font-bold uppercase font-Cormorant w-full text-center  rounded-xl"
          >
            <span className="text-blue-light">Experience </span> &
            <span className="text-blue-light"> Education</span>
          </motion.h2>
        </div>
        <ExperienceEducation />
      </div>
    </div>
  );
};

export default About;
