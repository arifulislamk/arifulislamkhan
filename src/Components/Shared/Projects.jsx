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
    <div
      id="target-section4"
      className=" border border-orange-300 shadow-2xl rounded-2xl py-6 px-3 lg:px-4 mt-20"
    >
      <h2 className=" text-center text-3xl lg:text-5xl font-bold">
        My Projects
      </h2>
      <div className="  flex flex-col lg:flex-row mt-8 lg:mt-14 gap-4 lg:justify-between ">
        {project.map((project, inx) => (
          <div
            key={inx}
            className="card bg-base-100 border-2 border-red-300  lg:w-1/3 shadow-xl"
          >
            <figure>
              <img src={project.image} alt="paceful" className=" lg:h-64" />
            </figure>
            <div className="card-body">
              {/* <p> Project Start : {project.startDate}</p>
              <p> Project End : {project.endDate}</p> */}
              <h2 className="card-title">{project.siteName}</h2>
              <p>{project.description}</p>
              <p>
                <span className=" font-medium">Tecnology</span> :
                {project.tecnology}
              </p>
              <p>
                <span className=" font-medium">Fetures</span> :
                {project.Features}
              </p>
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
