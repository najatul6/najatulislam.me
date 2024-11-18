import { motion } from "framer-motion";

const RightSection = () => {
  return (
    <div className="w-full">
      <div className="w-full h-full grid grid-cols-2 gap-5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="shadow-up tex-sm flex flex-col justify-center items-start font-semibold md:text-xl px-2 md:px-5 py-5 rounded-xl w-full"
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
          className="shadow-up flex flex-col justify-center items-start tex-sm font-semibold md:text-xl px-2 md:px-5 py-5 rounded-xl w-full"
        >
         <div> 2<span className="text-blue-light">+</span></div> <span> YEARS OF </span>
          EXPERIENCE
        </motion.div>

        <motion.div
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
        </motion.div>
      </div>
    </div>
  );
};

export default RightSection;
