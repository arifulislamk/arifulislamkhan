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
  return (
    <div
      id="target-section1"
      className="mt-20 border border-[#5453a2] shadow-xl rounded-2xl px-5 py-10 lg:py-20"
    >
      <h1 className=" text-2xl font-roboto lg:text-5xl font-bold text-center  ">
        My Skills
      </h1>
      <div className=" space-y-2">
        <h3 className=" text-center text-4xl mt-20">
          Competitive Programming Experience
        </h3>
        <br />
        <p className="px-14 pb-10">
          As part of my Bachelor of Science in Computer Science and Engineering
          (B.Sc CSE), I have completed 6 semesters, during which I gained
          proficiency in various fundamental courses, such as Introduction to C,
          Data Structures, Algorithms, and Object-Oriented Programming (OOP).
          Throughout these courses, I solved numerous problems, sharpening my
          skills in computational thinking and algorithm optimization. <br />{" "}
          <br />I also participated in several competitive programming contests
          organized by my university’s CSE department. I achieved notable
          rankings, securing 3rd position on Day 1 and 10th position on the
          final Day 5 of a multi-day programming contest. These competitions
          have further honed my problem-solving abilities, enabling me to work
          efficiently under pressure and think critically in dynamic
          environments.
        </p>
        <div className=" py-7 px-14 flex justify-center gap-20">
          <a
            href="https://www.hackerrank.com/profile/ariful18374"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src="https://i.ibb.co.com/6PY3t6y/h.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">HackerRank Profile</h2>
                <p>
                  Here you can see Competetive Programming Profile of Ariful
                  Islam Khan
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary font-semibold">
                    See more
                  </button>
                </div>
              </div>
            </div>
          </a>
          <a
          href="https://codeforces.com/profile/ariful18374"
          target="_blank"
          rel="noopener noreferrer"
        >
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img src="https://i.ibb.co.com/ySw3qzg/c.png" alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">CodeForce Profile</h2>
                <p>
                  Here you can see Competetive Programming Profile of Ariful
                  Islam Khan
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary font-semibold">
                    See more
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className=" mt-14">
        <h3 className=" text-center text-4xl mt-20">Web Development skills</h3>

        <div className=" mt-10 mb-10 grid grid-cols-2 lg:flex justify-between gap-2 ">
          <div className="p-2 rounded-3xl flex flex-col items-center justify-center   btn-base-300 shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={html} alt="html" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-black mt-2  text-center">
              Html
            </h2>
          </div>

          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={css} alt="css" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-black mt-2 text-center">
              css
            </h2>
          </div>

          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img
                src={tailwind}
                alt="tailwind"
                className="rounded-xl md:w-14 "
              />
            </figure>
            <h2 className="card-title text-black mt-2 text-center">
              tailwind
            </h2>
          </div>
          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={js} alt="js" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-black mt-2 text-center">
              Vanilla JavaScript
            </h2>
          </div>

          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={react} alt="react" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-black mt-2 text-center">
              react
            </h2>
          </div>
          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={nodejs} alt="nodejs" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-black mt-2 text-center">
              nodejs
            </h2>
          </div>
          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img
                src={express}
                alt="express"
                className="rounded-xl md:w-14 "
              />
            </figure>
            <h2 className="card-title text-black mt-2 text-center">
              express
            </h2>
          </div>

          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img
                src={mongoDB}
                alt="mongoDB"
                className="rounded-xl md:w-14 "
              />
            </figure>
            <h2 className="card-title text-black mt-2 text-center">
              mongoDB
            </h2>
          </div>
          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={nextjs} alt="nextjs" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-black mt-2 text-center">
              nextjs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myskils;
