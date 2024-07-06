import Banner from "../Components/Shared/Banner";
import Contact from "../Components/Shared/Contact";
import Education from "../Components/Shared/Education";
import Myskils from "../Components/Shared/Myskils";import Navbar from "../Components/Shared/Navbar";
import Projects from "../Components/Shared/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Myskils />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
