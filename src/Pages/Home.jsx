import Banner from "../Components/Banner";
import Certification from "../Components/Certification";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Myskils from "../Components/Myskils";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Myskils />
      <Projects />
      <Education />
      <Certification />
      <Contact />
    </div>
  );
};

export default Home;
