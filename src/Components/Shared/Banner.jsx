import { useTypewriter } from "react-simple-typewriter";
import cv from "../../../src/assets/Ariful CV For Job.pdf";
const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Web Devoloper || Building Website || Passionate Software Engineering",
    ],
    loop: 0,
  });

  return (
    <div className=" border border-orange-300 shadow-2xl rounded-2xl lg:p-5 reletive bg-black-900  flex ">
      <div className="hero-content flex-col lg:flex-row lg:gap-14">
        <img
          src="https://i.ibb.co/BVBfgP1/rsz-3rsz-pic-1-1-1.png"
          className="lg:max-w-sm w-1/2 h-full rounded-xl md:shadow-2xl md:bg-blue-200 "
        />
        <div>
          <h1 className=" text-3xl lg:text-5xl mb-2 text-center lg:text-left font-bold">
            Md. Ariful Islam
          </h1>
          <h2 className=" text-center lg:text-left lg:text-2xl font-bold text-blue-400">{text}</h2>
          <p className="pb-6 pt-3 lg:pt-10 lg:text-xl">
            <span className="">
              Hey, it's me, Md Ariful Islam. I am a front-end web developer. I
              can create websites using React, MongoDB, Express, Node.js,
              Firebase, HTML, CSS, and Tailwind CSS. Currently, I am learning
              about C programming language, data structures, algorithms, and OOP
              in my university courses.
            </span>
            <br />
            <br />
            <span className="">
              I am very passionate about coding. Whenever I encounter a random
              error in any big project, I remind myself that there must be a
              solution. Whether I solve it today or tomorrow, I feel at ease
              because I know that as a programmer, encountering problems is part
              of the job. Errors are bound to happen again, so I don't take them
              too seriously. I am always ready for new challenges.
            </span>
          </p>
          <p className=" text-center lg:text-left">
            <a
              href={cv}
              download="Ariful CV"
              target="_blank"
              className="btn btn-info mr-5 "
            >
              Donwnload CV
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
