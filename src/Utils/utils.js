import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { HiOutlineIdentification } from "react-icons/hi2";
export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "My Work",
    href: "#my-works",
    Icon: FiSearch,
  },
  {
    title: "About",
    href: "#about",
    Icon: HiOutlineIdentification,
  },
  {
    title: "Contact",
    href: "#contact",
    Icon: PiChatCircleBold,
  },
];
