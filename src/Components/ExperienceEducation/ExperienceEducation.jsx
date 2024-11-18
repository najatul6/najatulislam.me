import { education } from "../../Utils/education";
import { experience } from "../../Utils/experience";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

const ExperienceEducation = () => {
  return (
    <div className="">
      <div className="shadow-up py-5 rounded-xl px-2 md:px-2">
        <div className="flex flex-col justify-center items-center py-3">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-base md:text-lg font-semibold font-Cormorant py-2 rounded-tr-full rounded-bl-full  text-center shadow-up px-10 md:px-20"
          >
            Education
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 md:px-5 place-items-center">
          {education?.map((item, idx) => (
            <motion.div
              key={item?.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: idx * 0.2,
              }}
            >
              <EducationCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="shadow-up py-5 rounded-xl mt-10 px-2 md:px-2">
        <div className="flex flex-col justify-center items-center py-3">
          <h2 className="text-base md:text-lg font-semibold font-Cormorant py-2 rounded-tr-full rounded-bl-full  text-center shadow-up px-10 md:px-20">
            Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 md:px-5 place-items-center">
          {experience?.map((item, idx) => (
            <motion.div
              key={item?.id}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: idx * 0.2,
              }}
            >
              <ExperienceCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
