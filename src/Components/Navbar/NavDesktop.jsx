import { routes } from "../../Utils/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NavDesktop = () => {
  const [activeRoute, setActiveRoute] = useState("/");

  // Function to update active route based on scroll
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
    // Listen for scroll events to update the active link
    window.addEventListener("scroll", updateActiveRouteOnScroll);
    updateActiveRouteOnScroll(); // Initial call to set the active link

    return () => {
      window.removeEventListener("scroll", updateActiveRouteOnScroll);
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setActiveRoute(href); // Set the active route on click
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
  };

  return (
    <div>
      <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
        {routes.map((route, index) => {
          const { Icon, href, title } = route;
          return (
            <motion.li
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2 + index / 10,
              }}
            >
              <a
                onClick={(e) => handleLinkClick(e, href)}
                href={href}
                className={`flex items-center gap-1 text-base font-medium cursor-pointer transition-all 
                  ${activeRoute === href
                    ? "text-blue-light font-bold" // Active state
                    : "text-light-grey hover:text-blue-light focus:text-blue-light"}`}
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
