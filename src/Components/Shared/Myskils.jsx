import js from "../../assets/icons/js.png";
import mongoDB from "../../assets/icons/mongo.png";
import nodejs from "../../assets/icons/nodejs.png";
import react from "../../assets/icons/react.png";
const Myskils = () => {
  return (
    <div className=" mt-20 mb-20 grid grid-cols-4 gap-10 ">
      <div className="card  bg-base-100 shadow-5xl bg-gray-200">
        <figure className="pt-10">
          <img src={js} alt="js" className="rounded-xl w-14 " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Vanilla JavaScript</h2>
          <p className=" text-left">
            JavaScript creates interactive web pages with dynamic content,
            animations, and form validations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Myskils;
