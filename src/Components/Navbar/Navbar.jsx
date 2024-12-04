import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
// import logo from "../../assets/najatul6logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-5 items-center px-5 py-5 w-full">
      <a
        href="/"
        className="md:text-2xl rounded-xl font-extrabold text-light-grey cursor-pointer  transition-all text-wrap"
      >
        {/* <img src={logo} alt="logo" width={220} /> */}
        Code.<span className="text-blue-light">Create.</span>Elevate.
      </a>
      <div className="z-10 rounded-xl">
        <NavDesktop />
        <NavMobile />
      </div>
    </nav>
  );
};

export default Navbar;
