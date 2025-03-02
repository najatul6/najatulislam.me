import Hamburger from "hamburger-react";
import { useRef, useState, useEffect } from "react";
import { routes } from "../../Utils/utils";
import { AnimatePresence, motion } from "framer-motion";

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeRoute, setActiveRoute] = useState("/"); // Track active route
  const ref = useRef(null);

  // Handle scrolling to the section and closing menu
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setOpen(false); // Close menu after click

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const offset = -80; // Adjust for navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY + offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }

    setActiveRoute(href); // Update active route
  };

  // Update active route based on scroll position
  const updateActiveRouteOnScroll = () => {
    let active = "/";
    const scrollPosition = window.scrollY + 100; // Offset to trigger active link

    routes.forEach((route) => {
      if (route.href !== "/") {
        const section = document.querySelector(route.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            active = route.href;
          }
        }
      }
    });

    setActiveRoute(active);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", updateActiveRouteOnScroll);
    updateActiveRouteOnScroll(); // Initial update

    return () => {
      window.removeEventListener("scroll", updateActiveRouteOnScroll);
    };
  }, []);

  return (
    <div ref={ref} className="z-10 bg-light-black shadow-up hover:shadow-in rounded-xl lg:hidden">
      <div className={`${isOpen && "text-blue-light"}`}>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className={`w-full p-[0.08rem] rounded-xl shadow-in hover:shadow-up ${
                      activeRoute === route.href
                        ? "text-blue-light font-bold shadow-up" // Highlight active link
                        : "text-light-grey"
                    }`}
                  >
                    <a
                      onClick={(e) => handleLinkClick(e, route?.href)}
                      className="flex items-center justify-between w-full p-5 rounded-xl hover:font-bold"
                      href={route.href}
                    >
                      <span className="flex gap-1 text-base">{route.title}</span>
                      <Icon className="text-base" />
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
