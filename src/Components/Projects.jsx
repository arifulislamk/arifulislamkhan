import { useEffect, useState } from "react";

const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("https://arifulislamkhan-server.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <div
      id="target-section4"
      className="
      border
      border-yellow-500/70
      shadow-[0_0_10px_rgba(250,204,21,0.22),0_0_22px_rgba(245,158,11,0.14)]
      rounded-2xl
      py-6
      px-3
      lg:px-4
      mt-20
      bg-gradient-to-r
      from-base-100
      via-warning/25
      to-warning/10
      text-base-content
      "
    >
      <h2 className="text-center font-roboto text-3xl lg:text-5xl font-bold">
        My Projects
      </h2>

      <div className="flex flex-col lg:flex-row mt-8 lg:mt-14 gap-4 lg:justify-between">
        {project.map((project, inx) => (
          <div
            key={inx}
            className="
            card
            bg-base-100
            text-base-content
            border
            border-yellow-500/40
            lg:w-1/3
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_0_15px_rgba(250,204,21,0.30),0_0_25px_rgba(249,115,22,0.18)]
            "
          >
            <figure>
              <img
                src={project?.image}
                alt="paceful"
                className="lg:h-64"
              />
            </figure>

            <div className=" card-body">
              <h2 className=" text-center card-title">{project?.siteName}</h2>

              <p>{project.description}</p>

              <p>
                <span className="font-medium">Tecnology</span> :
                {project?.tecnology}
              </p>

              <p>
                <span className="font-medium">Fetures</span> :
                {project?.Features}
              </p>

              <div className="card-actions">
                <button
                  className="
                  btn
                  border-none
                  text-white
                  font-semibold
                  bg-gradient-to-r
                  from-yellow-400
                  via-orange-500
                  to-red-600
                  transition-all
                  duration-200
                  hover:scale-105
                  hover:-rotate-1
                  hover:animate-pulse
                  hover:shadow-[0_0_8px_#facc15,0_0_18px_#f97316,0_0_30px_#ef4444,0_0_45px_#dc2626]
                  active:scale-95
                  "
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project?.gitServer}
                  >
                    Github Server
                  </a>
                </button>

                <button
                  className="
                  btn
                  border-none
                  text-white
                  font-semibold
                  bg-gradient-to-r
                  from-yellow-400
                  via-orange-500
                  to-red-600
                  transition-all
                  duration-200
                  hover:scale-105
                  hover:-rotate-1
                  hover:animate-pulse
                  hover:shadow-[0_0_8px_#facc15,0_0_18px_#f97316,0_0_30px_#ef4444,0_0_45px_#dc2626]
                  active:scale-95
                  "
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project?.gitClient}
                  >
                    Github Client
                  </a>
                </button>

                <button
                  className="
                  btn
                  border-none
                  text-white
                  font-semibold
                  bg-gradient-to-r
                  from-yellow-400
                  via-orange-500
                  to-red-600
                  transition-all
                  duration-200
                  hover:scale-105
                  hover:-rotate-1
                  hover:animate-pulse
                  hover:shadow-[0_0_8px_#facc15,0_0_18px_#f97316,0_0_30px_#ef4444,0_0_45px_#dc2626]
                  active:scale-95
                  "
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project?.liveLink}
                  >
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