import Contact from "../Components/Shared/Contact";
import Education from "../Components/Shared/Education";
import Myskils from "../Components/Shared/Myskils";
import Projects from "../Components/Shared/Projects";

const Home = () => {
  return (
    <div>
      <Myskils />
      <Projects />
      <Contact />
      <Education />
    </div>
  );
};

export default Home;
