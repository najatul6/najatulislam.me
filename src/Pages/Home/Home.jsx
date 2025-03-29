import { Helmet } from "react-helmet-async";
import IntroSecond from "../../Components/Intro/IntroSecond";
import About from "../About/About";
import Contact from "../Contact/Contact";
import MyWork from "../MyWork/MyWork";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Najatul Islam - Official Website</title>
        <meta
          name="description"
          content="Welcome to the official website of Najatul Islam. Explore my portfolio, projects, and blogs."
        />
      </Helmet>
      {/* <Intro/> */}
      <div id="#home">
        <IntroSecond />
      </div>
      <div id="my-works">
        <MyWork />
        <Link to={"/projects"} className="flex justify-center items-center w-full">
        <button className="shadow-in duration-300  ease-in-out rounded-xl text-xs md:text-lg lg:text-2xl font-medium px-5 py-3 hover:shadow-up hover:text-blue-light active:shadow-in active:text-blue-light">
          <p className="flex justify-center items-center gap-2">Show All projects <FaLongArrowAltRight /></p>
        </button>
        </Link>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
