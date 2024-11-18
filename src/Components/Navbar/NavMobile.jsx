import Hamburger from "hamburger-react";
import { useRef, useState } from "react";
import { routes } from "../../Utils/utils";
import { AnimatePresence, motion } from "framer-motion";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = -80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY + offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };
  const handleClick = (e, href) => {
    setOpen((prev) => !prev);
    handleLinkClick(e, href);
  };
  return (
    <div
      ref={ref}
      className="z-10 bg-light-black shadow-up hover:shadow-in rounded-xl lg:hidden"
    >
      <div className={`${isOpen && "text-blue-light"}`}>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 shadow-4xl right-0 top-[5.5rem] min-h-screen bg-light-black px-5 py-6"
          >
            <ul className="grid gap-7">
              {routes.map((route, idx) => {
                const { Icon } = route;

                return (
                  <motion.li
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="w-full p-[0.08rem] rounded-xl shadow-up hover:shadow-in text-light-grey hover:text-blue-light"
                  >
                    <a
                      onClick={(e) => handleClick(e, route?.href)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl active:text-blue-light active:font-bold hover:font-bold"
                      }
                      href={route.href}
                    >
                      <span className="flex gap-1 text-lg">{route.title}</span>
                      <Icon className="text-xl" />
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
