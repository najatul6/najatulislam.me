import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="sticky top-0 z-10 w-full  shadow-up lg:shadow-none bg-light-black">
        <Navbar />
      </div>

      <div className="min-h-screen py-5 px-2 lg:px-5">
        <Outlet />
      </div>
      <div className="mt-10 shadow-main-up pt-10 ">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
