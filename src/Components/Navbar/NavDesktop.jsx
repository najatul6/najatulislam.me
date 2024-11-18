import { routes } from "../../Utils/utils";
import { motion } from "framer-motion";
const NavDesktop = () => {
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
  return (
    <div>
      <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
        {routes.map((route,index) => {
          const { Icon, href, title } = route;
          return (
            <motion.li
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2 + index / 10,}}  key={index}>
              <a
                onClick={(e) => handleLinkClick(e, route?.href)}
                href={href}
                className="flex items-center gap-1 text-light-grey hover:text-blue-light transition-all text-xl cursor-pointer active:text-blue-light focus:text-blue-light font-medium active:font-bold"
              >
                <Icon />
                {title}
              </a>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavDesktop;
