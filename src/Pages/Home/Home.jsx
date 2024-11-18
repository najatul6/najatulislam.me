// import Intro from "../../Components/Intro/Intro"
import IntroSecond from "../../Components/Intro/IntroSecond";
import About from "../About/About";
import Contact from "../Contact/Contact";
import MyWork from "../MyWork/MyWork";
// import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div className="min-h-screen ">
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
