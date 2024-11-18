// import Intro from "../../Components/Intro/Intro"
import { Helmet } from "react-helmet";
import IntroSecond from "../../Components/Intro/IntroSecond";
import About from "../About/About";
import Contact from "../Contact/Contact";
import MyWork from "../MyWork/MyWork";
// import Projects from "../Projects/Projects";

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
      <MyWork/>
     </div>
      {/* <div id="my-works">
        <Projects />
      </div> */}
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
