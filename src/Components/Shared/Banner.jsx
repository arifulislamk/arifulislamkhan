import { Tooltip } from "react-tooltip";
import cv from "../../../src/assets/Blue Simple Professional CV Resume (5).pdf";
const Banner = () => {
  return (
    <div className=" reletive bg-black-900  flex ">
      <div className="hero-content flex-col lg:flex-row gap-14">
        <img
          src="https://i.ibb.co/jgW3mxs/Picsart-24-05-06-19-42-45-708.png"
          className="max-w-sm rounded-lg shadow-2xl shadow-2xl bg-blue-200 "
        />
        <div>
          <h1 className="text-5xl font-bold">Md. Ariful Islam</h1>
          <p>
            Web Devoloper || Building Website || Passionate Software Engineering
          </p>
          <p className="py-6">
            Hey, It`s me Md Ariful Islam. I am junior front-end web developer. I
            can make website with react, mongoDB, express, node js ,firebase,
            html, css and tailwind css. Currently, I am learning about C
            programing language, data staractue,data algorithm, Oop, in my
            university course.
          </p>
          <a
            href={cv}
            download="Ariful CV"
            target="_blank"
            className="btn btn-info mr-5"
          >
            Donwnload CV
          </a>
          <button className="btn btn-info">Contact me</button>
        </div>
      </div>
      <div className=" top-0 absulate  top-0 left-0 ">
        <label
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Hello, I am theme Changer"
          data-tooltip-place="top"
          className="lg:ml-8 swap swap-rotate"
        >
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="light" />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
          <Tooltip id="my-tooltip" />
        </label>
      </div>
    </div>
  );
};

export default Banner;
