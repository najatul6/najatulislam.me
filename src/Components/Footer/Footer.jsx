// import logo from "../../assets/najatul6logo.svg";
import { socialMediaLinks } from "../../Utils/socialMediaLinks";
import SocialButton from "../Shared/SocialButton/SocialButton";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        {/* <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={logo}
          alt="Logo"
          width={220}
          className="mb-8"
        /> */}
        <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        href="/"
        className="md:text-3xl rounded-xl font-extrabold  text-light-grey cursor-pointer  transition-all mb-8 text-wrap"
      >Code.<span className="text-blue-light">Create.</span>Elevate.</motion.a>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
        {socialMediaLinks?.map((item, index) => {
          const { Icon, name, href } = item;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.2 }}
              key={href}
            >
              <SocialButton icon={<Icon />} text={name} link={href} />
            </motion.div>
          );
        })}
      </div>
      <p className="pb-2 text-center text-sm tracking-wide text-gray-400">
        &copy;Najatul Islam. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
