import js from "../assets/icons/js.png";
import mongoDB from "../assets/icons/mongo.png";
import nodejs from "../assets/icons/nodejs.png";
import react from "../assets/icons/react.png";
import nextjs from "../assets/icons/rsz_1nextjs.png";
import tailwind from "../assets/icons/rsz_tailwind.png";
import express from "../assets/icons/rsz_express.png";
import css from "../assets/icons/rsz_css.png";
import html from "../assets/icons/rsz_1html.png";
import { Link } from "react-router-dom";

const Myskils = () => {
  const skillCard =
    "p-2 rounded-3xl flex flex-col items-center justify-center shadow-xl lg:w-28 bg-base-200 text-base-content border border-yellow-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(250,204,21,0.35),0_0_25px_rgba(249,115,22,0.15)]";
  const fireButton =
    "btn border-none text-white font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 transition-all duration-200 hover:scale-105 hover:-rotate-1 hover:animate-pulse hover:shadow-[0_0_8px_#facc15,0_0_18px_#f97316,0_0_30px_#ef4444,0_0_45px_#dc2626] active:scale-95";
  return (
    <div
      id="target-section1"
      className="
      mt-20
      border
      border-yellow-500/70
      shadow-[0_0_10px_rgba(250,204,21,0.22),0_0_22px_rgba(245,158,11,0.14)]
      rounded-2xl
      px-5
      py-10
      lg:py-10
      bg-gradient-to-r
      from-base-100
      via-warning/25
      to-warning/10
      text-base-content
      "
    >
      <div className="space-y-2">
        <h3 className="text-center text-2xl lg:text-4xl md:mt-2">
          Competitive Programming Experience
        </h3>
        <br />
        <p className="lg:px-14 text-center md:text-left lg:pb-10">
          As part of my Bachelor of Science in Computer Science and Engineering
          (B.Sc CSE), I have completed 6 semesters, during which I gained
          proficiency in various fundamental courses, such as Introduction to C,
          Data Structures, Algorithms, and Object-Oriented Programming (OOP).
          Throughout these courses, I solved numerous problems, sharpening my
          skills in computational thinking and algorithm optimization.
          <br />
          <br />I also participated in several competitive programming contests
          organized by my university’s CSE department. I achieved notable
          rankings, securing 3rd position on Day 1 and 10th position on the
          final Day 5 of a multi-day programming contest. These competitions
          have further honed my problem-solving abilities, enabling me to work
          efficiently under pressure and think critically in dynamic
          environments.
        </p>

        <div className="py-7 lg:px-14 flex flex-col lg:flex-row justify-center gap-5 lg:gap-20">
          <a
            href="https://www.hackerrank.com/profile/ariful18374"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="
              card
              card-compact
              bg-base-100
              text-base-content
              border
              border-yellow-500/30
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_0_15px_rgba(250,204,21,0.30),0_0_25px_rgba(249,115,22,0.18)]
              "
            >
              <figure>
                <img
                  src="https://i.ibb.co.com/6PY3t6y/h.png"
                  alt="HackerRank"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">HackerRank Profile</h2>

                <p>
                  Here you can see Competetive Programming Profile of Ariful
                  Islam Khan
                </p>

                <div className="card-actions justify-end">
                  <button className={fireButton}>See more</button>
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://codeforces.com/profile/ariful18374"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="
              card
              card-compact
              bg-base-100
              text-base-content
              border
              border-yellow-500/30
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_0_15px_rgba(250,204,21,0.30),0_0_25px_rgba(249,115,22,0.18)]
              "
            >
              <figure>
                <img src="https://i.ibb.co.com/ySw3qzg/c.png" alt="CodeForce" />
              </figure>

              <div className="card-body">
                <h2 className="card-title">CodeForce Profile</h2>

                <p>
                  Here you can see Competetive Programming Profile of Ariful
                  Islam Khan
                </p>

                <div className="card-actions justify-end">
                  <button className={fireButton}>See more</button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="text-center text-2xl lg:text-4xl md:mt-20">
          Web Development Skills
        </h3>

        <div className="mt-10 mb-10 grid grid-cols-2 lg:flex justify-between gap-2">
          <div className={skillCard}>
            <figure>
              <img src={html} alt="html" className="rounded-xl md:w-14" />
            </figure>

            <h2 className="card-title mt-2 text-center">Html</h2>
          </div>

          <div className={skillCard}>
            <figure>
              <img src={css} alt="css" className="rounded-xl md:w-14" />
            </figure>

            <h2 className="card-title mt-2 text-center">css</h2>
          </div>

          <div className={skillCard}>
            <figure>
              <img
                src={tailwind}
                alt="tailwind"
                className="rounded-xl md:w-14"
              />
            </figure>

            <h2 className="card-title mt-2 text-center">tailwind</h2>
          </div>

          <div className={skillCard}>
            <figure>
              <img src={js} alt="js" className="rounded-xl md:w-14" />
            </figure>

            <h2 className="card-title mt-2 text-center">Vanilla JavaScript</h2>
          </div>

          <div className={skillCard}>
            <figure>
              <img src={react} alt="react" className="rounded-xl md:w-14" />
            </figure>

            <h2 className="card-title mt-2 text-center">react</h2>
          </div>

          <div className={skillCard}>
            <figure>
              <img src={nodejs} alt="nodejs" className="rounded-xl md:w-14" />
            </figure>

            <h2 className="card-title mt-2 text-center">nodejs</h2>
          </div>

          <div className={skillCard}>
            <figure>
              <img src={express} alt="express" className="rounded-xl md:w-14" />
            </figure>

            <h2 className="card-title mt-2 text-center">express</h2>
          </div>

          <div className={skillCard}>
            <figure>
              <img src={mongoDB} alt="mongoDB" className="rounded-xl md:w-14" />
            </figure>

            <h2 className="card-title mt-2 text-center">mongoDB</h2>
          </div>

          <div className={skillCard}>
            <figure>
              <img src={nextjs} alt="nextjs" className="rounded-xl md:w-14" />
            </figure>

            <h2 className="card-title mt-2 text-center">nextjs</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myskils;
