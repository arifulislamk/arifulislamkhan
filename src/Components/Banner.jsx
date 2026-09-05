import { useTypewriter } from "react-simple-typewriter";
import cv from "../assets/Ariful CV For Job.pdf";
import resume from "../assets/Ariful-resume.pdf";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Software Engineer || Competitive Programmer",
    ],
    loop: 0,
  });

  return (
    <div
      className="
      border
      border-yellow-500/70
      shadow-[0_0_10px_rgba(250,204,21,0.22),0_0_22px_rgba(245,158,11,0.14)]
      rounded-2xl
      lg:p-5
      reletive
      bg-gradient-to-r
      from-base-100
      via-warning/25
      to-warning/10
      text-base-content
      flex
      "
    >
      <div className="hero-content flex-col lg:flex-row lg:gap-14">
        <img
          src="https://i.ibb.co.com/NNCjKyg/IMG-20240113-143845-1.png"
          className="lg:max-w-sm w-1/2 h-full object-cover rounded-xl md:shadow-xl"
        />

        <div>
          <h1 className="text-3xl lg:text-5xl mb-2 text-center font-roboto lg:text-left font-bold">
            Md Ariful Islam
          </h1>

          <h2 className="text-center lg:text-left lg:text-2xl font-algeria font-bold text-warning md:w-[730px] h-10">
            {text}
          </h2>

          <p className="pb-6 pt-2 text-center md:text-left  md:pt-6 lg:text-xl">
            <span>
              Hey, it`s me, Md Ariful Islam. I am a Software Engineer and
              competitive programmer. I can create websites using React, MongoDB,
              Express, Node.js, Firebase, HTML, CSS, and Tailwind CSS. Currently,
              I am learning about C programming language, data structures,
              algorithms, and OOP in my university courses.
            </span>

            <br />
            <br />

            <span>
              I am very passionate about coding. Whenever I encounter a random
              error in any big project, I remind myself that there must be a
              solution. Whether I solve it today or tomorrow, I feel at ease
              because I know that as a programmer, encountering problems is part
              of the job. Errors are bound to happen again, so I don`t take them
              too seriously. I am always ready for new challenges.
            </span>
          </p>

          <p className="text-center gap-1 md:gap-0 justify-center items-center flex flex-col lg:flex-row lg:text-left">
            <a
              href={cv}
              download="Ariful CV"
              target="_blank"
              className="
              btn
              w-1/2
              lg:mr-5
              border-none
              text-white
              font-bold
              bg-gradient-to-r
              from-yellow-400
              via-orange-500
              to-red-600
              transition-all
              duration-200
              hover:scale-105
              hover:shadow-[0_0_8px_#facc15,0_0_18px_#f97316,0_0_28px_#ef4444]
              active:scale-95
              "
            >
              Download CV
            </a>

            <a
              href={resume}
              download="Ariful RESUME"
              target="_blank"
              className="
              btn
              w-1/2
              border-none
              text-white
              font-bold
              bg-gradient-to-r
              from-yellow-400
              via-orange-500
              to-red-600
              transition-all
              duration-200
              hover:scale-105
              hover:shadow-[0_0_8px_#facc15,0_0_18px_#f97316,0_0_28px_#ef4444]
              active:scale-95
              "
            >
              Download Resume
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;