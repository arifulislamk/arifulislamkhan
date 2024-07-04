import purelife from "../../assets/images/1719987583606.png";
import foodhut from "../../assets/images/1716490540172.png";
import paceful from "../../assets/images/1716490060042.png";
import { useEffect, useState } from "react";
const Projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("https://arifulislamkhan-server.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);
  console.log("data", project);
  return (
    <div className=" border-4 border-orange-300 shadow-xl rounded-2xl py-20 px-10 mt-20">
      <h2 className=" text-center text-5xl font-bold">My Projects</h2>
      <div className=" mt-10 flex mt-20 gap-4 justify-between ">
        {project.map((project, inx) => (
          <div
            key={inx}
            className="card bg-base-100 border-2 border-red-300  w-1/3 shadow-xl"
          >
            <figure>
              <img src={project.image} alt="paceful" className=" lg:h-64" />
            </figure>
            <div className="card-body">
              <p> Project Start : {project.startDate}</p>
              <p> Project End : {project.endDate}</p>
              <h2 className="card-title">{project.siteName}</h2>
              <p>{project.description}</p>
              <div className="card-actions">
                <button className="btn  btn-info">
                  <a target="_blank" href={project.gitServer}>
                    Github Server
                  </a>
                </button>
                <button className="btn  btn-info">
                  <a target="_blank" href={project.gitClient}>
                    Github Client
                  </a>
                </button>
                <button className="btn  btn-info">
                  <a target="_blank" href={project.liveLink}>
                    Live Site
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
