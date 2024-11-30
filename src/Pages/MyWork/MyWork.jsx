import Header from "../../Components/Shared/Header/Header";
import { projectItem } from "../../Utils/projectItem";
import MyWorkCard from "../../Components/Project/MyWorkCard";
import { motion } from "framer-motion";

const MyWork = () => {
  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Header text1={"My"} text2={"Projects"} />
      </motion.div>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 shadow-in py-4 px-4 rounded-xl">
        {projectItem?.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: idx * 0.1,
              duration: 0.2,
            }}
            key={item?.id}
          >
            <MyWorkCard item={item} />
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default MyWork;
