import js from "../../assets/icons/js.png";
import mongoDB from "../../assets/icons/mongo.png";
import nodejs from "../../assets/icons/nodejs.png";
import react from "../../assets/icons/react.png";
import nextjs from "../../assets/icons/rsz_1nextjs.png";
import tailwind from "../../assets/icons/rsz_tailwind.png";
import express from "../../assets/icons/rsz_express.png";
import css from "../../assets/icons/rsz_css.png";
import html from "../../assets/icons/rsz_1html.png";
const Myskils = () => {
  return (
    <>
    <h1 className=" text-5xl font-bold text-center mt-20 ">My Skills</h1>
      <div className=" mt-10 mb-20 grid grid-cols-8 gap-2 ">
        <div className="p-3 rounded-3xl flex flex-col items-center justify-center   btn-base-300 shadow-5xl w-40 bg-gray-200">
          <figure className="">
            <img src={html} alt="html" className="rounded-xl w-16 " />
          </figure>
          <h2 className="card-title mt-4 text-accent-content text-center">Html</h2>
        </div>

        <div className="p-3 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl w-40 bg-gray-200">
          <figure className="">
            <img src={css} alt="css" className="rounded-xl w-16 " />
          </figure>
          <h2 className="card-title text-accent-content mt-4 text-center">css</h2>
        </div>

        <div className="p-3 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl w-40 bg-gray-200">
          <figure className="">
            <img src={tailwind} alt="tailwind" className="rounded-xl w-16 " />
          </figure>
          <h2 className="card-title text-accent-content mt-4 text-center">tailwind</h2>
        </div>
        <div className="p-3 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl w-40 bg-gray-200">
          <figure className="">
            <img src={js} alt="js" className="rounded-xl w-16 " />
          </figure>
          <h2 className="card-title text-accent-content mt-4 text-center">Vanilla JavaScript</h2>
        </div>

        <div className="p-3 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl w-40 bg-gray-200">
          <figure className="">
            <img src={react} alt="react" className="rounded-xl w-16 " />
          </figure>
          <h2 className="card-title text-accent-content mt-4 text-center">react</h2>
        </div>
        <div className="p-3 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl w-40 bg-gray-200">
          <figure className="">
            <img src={nodejs} alt="nodejs" className="rounded-xl w-16 " />
          </figure>
          <h2 className="card-title text-accent-content mt-4 text-center">nodejs</h2>
        </div>
        <div className="p-3 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl w-40 bg-gray-200">
          <figure className="">
            <img src={express} alt="express" className="rounded-xl w-16 " />
          </figure>
          <h2 className="card-title text-accent-content mt-4 text-center">express</h2>
        </div>

        <div className="p-3 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl w-40 bg-gray-200">
          <figure className="">
            <img src={mongoDB} alt="mongoDB" className="rounded-xl w-16 " />
          </figure>
          <h2 className="card-title text-accent-content mt-4 text-center">mongoDB</h2>
        </div>
        <div className="p-3 rounded-3xl flex flex-col items-center justify-center  btn-base-300  shadow-5xl w-40 bg-gray-200">
          <figure className="">
            <img src={nextjs} alt="nextjs" className="rounded-xl w-16 " />
          </figure>
          <h2 className="card-title text-accent-content mt-4 text-center">nextjs</h2>
        </div>
      </div>
    </>
  );
};

export default Myskils;
