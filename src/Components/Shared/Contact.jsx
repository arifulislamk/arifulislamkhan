import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import axios from "axios";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const message = e.target.message.value;
    const email = e.target.email.value;

    const info = { name, email, message };

    axios.post("https://arifulislamkhan-server.vercel.app/contactMe", info)
    .then((res) => {
      console.log(res.data);
      if(res.data.insertedId){
        toast.success("Thank you for contact me");
        e.target.reset();
      }
    });
  };

  return (
    <section id="target-section3" className=" mb-10 border border-orange-300 shadow-2xl rounded-2xl py-6 mt-20 dark:bg-gray-100 dark:text-gray-900">
      <h2 className=" text-center font-bold text-3xl lg:text-5xl lg:py-10 lg:mb-10">Contact </h2>
      <div className=" space-y-3 flex flex-col-reverse md:grid md:grid-cols-2 max-w-6xl  px-6 mx-auto lg:px-8 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className=" text-2xl text-center md:text-left pt-5 mb-4 lg:mb-10 font-medium ">
            You can direct call or email!
          </h1>
          <div className="space-y-8 text-xl">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Uttara,Dhaka, 1230</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>01727256612</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>ariful18374@gmail.com</span>
            </p>
            <div className=" flex gap-4">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61553049796138"
              >
                <FaFacebook className=" text-3xl text-blue-800" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ariful.i.khan.31/"
              >
                <FaInstagram className=" text-3xl text-red-500 " />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/robin-arif/">
                <FaLinkedin className=" text-3xl text-blue-500" />
              </a>
              <a target="_blank" href="https://github.com/arifulislamk">
                <FaGithub className=" text-3xl text-dark-500" />
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col py-6 space-y-3 md:space-y-6 md:py-0 md:px-6"
        >
          <label className="block">
            <span className="mb-1 text-xl md:text-2xl font-medium  ">
              Your/Company Name
            </span>
            <input
              type="text"
              name="name"
              placeholder="Pell Software / Ariful islam"
              className="block p-2 md:p-3 border border-gray-200 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </label>
          <label className="block">
            <span className="mb-1 text-xl font-medium  ">Email address</span>
            <input
              type="email"
              name="email"
              placeholder="ariful18374@gmail.com"
              className="block w-full p-2 md:p-3 border border-gray-200  rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            />
          </label>
          <label className="block">
            <span className="mb-1 text-xl font-medium  ">Message</span>
            <textarea
              required
              name="message"
              rows="3"
              placeholder="writing here your message"
              className="block w-full p-2 md:p-3 border border-gray-200  rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
            ></textarea>
          </label>
          <input
            className="md:px-8  btn btn-info text-white text-xl md:text-2xl rounded-3xl"
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </section>
  );
};

export default Contact;
