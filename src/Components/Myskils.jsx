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
      <div>
        <h3 className=" text-center text-4xl mt-20">Competetive Programming</h3>
        <br />

        <div className=" flex justify-center gap-20 my-7">
          <div className="card card-compact bg-base-100 w-60 shadow-xl">
            <figure>
              <img src="https://i.ibb.co.com/6PY3t6y/h.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">HackerRank Profile</h2>
              <p>
                Here you can see Competetive Programming Profile of Ariful Islam
                Khan
              </p>
              <div className="card-actions justify-end">
                <Link
                  rel="stylesheet"
                  to={"https://www.hackerrank.com/profile/ariful18374"}
                >
                  <button className="btn btn-primary font-semibold text-xl">
                    Go
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-60 shadow-xl">
            <figure>
              <img src="https://i.ibb.co.com/ySw3qzg/c.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">CodeForce Profile</h2>
              <p>
                Here you can see Competetive Programming Profile of Ariful Islam
                Khan
              </p>
              <div className="card-actions justify-end">
                <Link
                  rel="stylesheet"
                  to={"https://codeforces.com/profile/ariful18374"}
                >
                  <button className="btn btn-primary font-semibold text-xl">
                    Go
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className=" text-center text-4xl mt-20">Web Development skills</h3>

        <div className=" mt-10 mb-10 grid grid-cols-2 lg:flex justify-between gap-2 ">
          <div className="p-2 rounded-3xl flex flex-col items-center justify-center   btn-base-300 shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={html} alt="html" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title mt-2 text-accent-content text-center">
              Html
            </h2>
          </div>

          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={css} alt="css" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-accent-content mt-2 text-center">
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
            <h2 className="card-title text-accent-content mt-2 text-center">
              tailwind
            </h2>
          </div>
          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={js} alt="js" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-accent-content mt-2 text-center">
              Vanilla JavaScript
            </h2>
          </div>

          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={react} alt="react" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-accent-content mt-2 text-center">
              react
            </h2>
          </div>
          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={nodejs} alt="nodejs" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-accent-content mt-2 text-center">
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
            <h2 className="card-title text-accent-content mt-2 text-center">
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
            <h2 className="card-title text-accent-content mt-2 text-center">
              mongoDB
            </h2>
          </div>
          <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
            <figure className="">
              <img src={nextjs} alt="nextjs" className="rounded-xl md:w-14 " />
            </figure>
            <h2 className="card-title text-accent-content mt-2 text-center">
              nextjs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myskils;
