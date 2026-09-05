import Banner from "../Components/Banner";
import Certification from "../Components/Certification";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Myskils from "../Components/Myskils";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Reveal from "../Components/Reveal";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Reveal direction="left">
        <Banner />
      </Reveal>
      <Reveal direction="right">
        <Myskils />
      </Reveal>
      <Reveal direction="left">
        <Projects />
      </Reveal>
      <Reveal direction="right">
        <Education />
      </Reveal>
      <Reveal direction="left">
        <Certification />
      </Reveal>
      <Reveal direction="right">
        <Contact />
      </Reveal>
    </div>
  );
};

export default Home;
