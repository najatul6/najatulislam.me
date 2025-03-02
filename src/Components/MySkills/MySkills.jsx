import SubTitle from "../Shared/Header/SubTitle";
import { motion } from "framer-motion";
const MySkills = () => {
  return (
    <div>
      <div className="shadow-up flex justify-center items-center py-2 rounded-xl">
        <SubTitle text1={"My"} text2={"Skills"} />
      </div>

      <div className="mt-5 w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl uppercase font-bold ml-2">Html</h2>
          <div className="w-full h-[1.8rem] rounded-xl shadow-up">
            <div className="w-full h-full shadow-in rounded-xl">
            <motion.div
            initial={{width:0,opacity:0}}
            animate={{width:'89%',opacity:1}}
            transition={{duration:0.5, delay:0.2}} className="h-full rounded-full w-[89%] before::w-0 shadow-in bg-custom-gradient flex justify-center items-center font-bold text-white">
              89%
            </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl uppercase font-bold ml-2">CSS</h2>
          <div className="w-full h-[1.8rem] rounded-xl shadow-up">
          <div className="w-full h-full shadow-in rounded-xl">
            <motion.div
            initial={{width:0,opacity:0}}
            animate={{width:'80%',opacity:1}}
            transition={{duration:0.5, delay:0.2}}
            className="h-full rounded-xl w-[80%] shadow-in bg-custom-gradient flex justify-center items-center font-bold text-white">80%</motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl uppercase font-bold ml-2">tailwind css</h2>
          <div className="w-full h-[1.8rem] rounded-xl shadow-up">
          <div className="w-full h-full shadow-in rounded-xl">
            <motion.div
            initial={{width:0,opacity:0}}
            animate={{width:'83%',opacity:1}}
            transition={{duration:0.9, delay:0.2}} className="h-full rounded-xl w-[83%] shadow-in bg-custom-gradient flex justify-center items-center font-bold text-white">83%</motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl uppercase font-bold ml-2">javascript</h2>
          <div className="w-full h-[1.8rem] rounded-xl shadow-up">
          <div className="w-full h-full shadow-in rounded-xl">
            <motion.div
            initial={{width:0,opacity:0}}
            animate={{width:'79%',opacity:1}}
            transition={{duration:0.5, delay:0.2}} className="h-full rounded-xl w-[79%] shadow-in bg-custom-gradient flex justify-center items-center font-bold text-white">
              79%
            </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl uppercase font-bold ml-2">react js</h2>
          <div className="w-full h-[1.8rem] rounded-xl shadow-up">
          <div className="w-full h-full shadow-in rounded-xl">
            <motion.div
            initial={{width:0,opacity:0}}
            animate={{width:'80%',opacity:1}}
            transition={{duration:0.5, delay:0.2}} className="h-full rounded-xl w-[80%] shadow-in bg-custom-gradient flex justify-center items-center font-bold text-white">
              80%
            </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl uppercase font-bold ml-2">node js</h2>
          <div className="w-full h-[1.8rem] rounded-xl shadow-up">
          <div className="w-full h-full shadow-in rounded-xl">
            <motion.div
            initial={{width:0,opacity:0}}
            animate={{width:'55%',opacity:1}}
            transition={{duration:0.5, delay:0.2}} className="h-full rounded-xl w-[55%] shadow-in bg-custom-gradient flex justify-center items-center font-bold text-white">
              55%
            </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-xl uppercase font-bold ml-2">express js</h2>
          <div className="w-full h-[1.8rem] rounded-xl shadow-up">
            <motion.div
            initial={{width:0,opacity:0}}
            animate={{width:'60%',opacity:1}}
            transition={{duration:0.5, delay:0.2}} className="h-full rounded-xl w-[60%] shadow-in bg-custom-gradient flex justify-center items-center font-bold text-white">
              60%
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl uppercase font-bold ml-2">mongodb</h2>
          <div className="w-full h-[1.8rem] rounded-xl shadow-up">
          <div className="w-full h-full shadow-in rounded-xl">
            <motion.div
            initial={{width:0,opacity:0}}
            animate={{width:'55%',opacity:1}}
            transition={{duration:0.5, delay:0.2}} className="h-full rounded-xl w-[55%] shadow-in bg-custom-gradient flex justify-center items-center font-bold text-white">
              55%
            </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
