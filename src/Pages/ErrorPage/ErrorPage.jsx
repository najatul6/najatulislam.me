import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center min-h-screen shadow-up bg-light-black">
      <div className="box-wrapper">
        <div className="box box0">
          <div></div>
        </div>
        <div className="box box1">
          <div></div>
        </div>
        <div className="box box2">
          <div></div>
        </div>
        <div className="box box3">
          <div></div>
        </div>
        <div className="box box4">
          <div></div>
        </div>
        <div className="box box5">
          <div></div>
        </div>
        <div className="box box6">
          <div></div>
        </div>
        <div className="box box7">
          <div></div>
        </div>
        <div className="ground">
          <div></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-white text-7xl font-bold">404</h1>
        <p className="text-white text-2xl">Page not found</p>
        <Link to="/">
          <button className="shadow-up duration-300 w-full ease-in-out rounded-xl text-xs md:text-lg lg:text-2xl font-medium px-5 py-3 hover:shadow-in hover:text-blue-light active:shadow-in active:text-blue-light">
            <p className="flex justify-center items-center gap-2">
            <FaPersonWalkingArrowLoopLeft className="animate-pulse" />
            Back To Home
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
