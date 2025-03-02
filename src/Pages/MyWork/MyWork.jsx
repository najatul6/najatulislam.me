import Header from "../../Components/Shared/Header/Header";
import { projectItem } from "../../Utils/projectItem";
import MyWorkCard from "../../Components/Project/MyWorkCard";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const MyWork = () => {
  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Header text1={"My"} text2={"Projects"} />
      </motion.div>
      <section className="shadow-in py-4 md:px-5 rounded-xl">
        <Marquee pauseOnHover={true} pauseOnClick={true} speed={120}>
          <div className="flex justify-center items-center gap-6">
            {projectItem?.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: idx * 0.1,
                  duration: 0.2,
                }}
                key={item?.id}
                className="w-[300px] md:w-[400px] lg:w-[500px]"
              >
                <MyWorkCard item={item} />
              </motion.div>
            ))}
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default MyWork;
