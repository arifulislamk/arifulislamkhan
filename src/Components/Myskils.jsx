import js from "../assets/icons/js.png";
import mongoDB from "../assets/icons/mongo.png";
import nodejs from "../assets/icons/nodejs.png";
import react from "../assets/icons/react.png";
import nextjs from "../assets/icons/rsz_1nextjs.png";
import tailwind from "../assets/icons/rsz_tailwind.png";
import express from "../assets/icons/rsz_express.png";
import css from "../assets/icons/rsz_css.png";
import html from "../assets/icons/rsz_1html.png";
const Myskils = () => {
  return (
    <div
      id="target-section1"
      className="mt-20 border border-[#5453a2] shadow-xl rounded-2xl px-5 py-10 lg:py-20"
    >
      <h1 className=" text-2xl font-roboto lg:text-5xl font-bold text-center  ">
        My Skills
      </h1>
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
            <img src={tailwind} alt="tailwind" className="rounded-xl md:w-14 " />
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
            <img src={express} alt="express" className="rounded-xl md:w-14 " />
          </figure>
          <h2 className="card-title text-accent-content mt-2 text-center">
            express
          </h2>
        </div>

        <div className="p-2 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl lg:w-28 bg-gray-200">
          <figure className="">
            <img src={mongoDB} alt="mongoDB" className="rounded-xl md:w-14 " />
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
  );
};

export default Myskils;
