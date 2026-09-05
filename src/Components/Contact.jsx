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

    axios
      .post("https://arifulislamkhan-server.vercel.app/contactMe", info)
      .then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          toast.success("Thank you for contact me");
          e.target.reset();
        }
      });
  };

  return (
    <section
      id="target-section3"
      className="
      mb-10
      mt-20
      border
      border-yellow-500/70
      shadow-[0_0_10px_rgba(250,204,21,0.22),0_0_22px_rgba(245,158,11,0.14)]
      rounded-2xl
      py-6
      bg-gradient-to-r
      from-base-100
      via-warning/25
      to-warning/10
      text-base-content
      "
    >
      <h2 className="text-center font-bold font-roboto text-3xl lg:text-5xl lg:py-10 lg:mb-10">
        Contact
      </h2>

      <div className="space-y-3 flex flex-col-reverse md:grid md:grid-cols-2 max-w-6xl px-6 mx-auto lg:px-8 md:divide-x md:divide-yellow-500/40">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-xl md:text-2xl text-center md:text-left pt-5 mb-4 lg:mb-10 font-medium">
            You can direct call or email!
          </h1>

          <div className="space-y-8 text-xl">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>

              <span>Uttara,Dhaka, 1230</span>
            </p>

            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6 text-orange-500"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>

              <span>01727256612</span>
            </p>

            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6 text-red-500"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>

              <span>ariful18374@gmail.com</span>
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=61553049796138"
              >
                <FaFacebook className="text-3xl text-blue-600 transition-all duration-200 hover:scale-125" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/ariful.i.khan.31/"
              >
                <FaInstagram className="text-3xl text-red-500 transition-all duration-200 hover:scale-125" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/robin-arif/"
              >
                <FaLinkedin className="text-3xl text-blue-500 transition-all duration-200 hover:scale-125" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/arifulislamk"
              >
                <FaGithub className="text-3xl text-base-content transition-all duration-200 hover:scale-125" />
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col py-6 space-y-3 md:space-y-6 md:py-0 md:px-6"
        >
          <label className="block">
            <span className="mb-1 text-xl md:text-2xl font-medium">
              Your/Company Name
            </span>

            <input
              type="text"
              name="name"
              placeholder="Ariful islam"
              className="
              block
              p-2
              md:p-3
              w-full
              rounded-md
              shadow-sm
              bg-base-100
              text-base-content
              border
              border-yellow-500/50
              outline-none
              transition-all
              duration-300
              focus:border-orange-500
              focus:shadow-[0_0_8px_rgba(250,204,21,0.35),0_0_16px_rgba(249,115,22,0.20)]
              "
            />
          </label>

          <label className="block">
            <span className="mb-1 text-xl font-medium">Email</span>

            <input
              type="email"
              name="email"
              placeholder="ariful18374@gmail.com"
              className="
              block
              p-2
              md:p-3
              w-full
              rounded-md
              shadow-sm
              bg-base-100
              text-base-content
              border
              border-yellow-500/50
              outline-none
              transition-all
              duration-300
              focus:border-orange-500
              focus:shadow-[0_0_8px_rgba(250,204,21,0.35),0_0_16px_rgba(249,115,22,0.20)]
              "
            />
          </label>

          <label className="block">
            <span className="mb-1 text-xl font-medium">Message</span>

            <textarea
              required
              name="message"
              rows="3"
              placeholder="writing here ........."
              className="
              block
              p-2
              md:p-3
              w-full
              rounded-md
              bg-base-100
              text-base-content
              border
              border-yellow-500/50
              outline-none
              transition-all
              duration-300
              focus:border-orange-500
              focus:shadow-[0_0_8px_rgba(250,204,21,0.35),0_0_16px_rgba(249,115,22,0.20)]
              "
            />
          </label>

          <input
            className="
            md:px-8
            btn
            border-none
            text-white
            text-xl
            md:text-2xl
            font-bold
            rounded-3xl
            bg-gradient-to-r
            from-yellow-400
            via-orange-500
            to-red-600
            transition-all
            duration-200
            hover:scale-105
            hover:-rotate-1
            hover:animate-pulse
            hover:shadow-[0_0_8px_#facc15,0_0_18px_#f97316,0_0_30px_#ef4444,0_0_45px_#dc2626]
            active:scale-95
            cursor-pointer
            "
            type="submit"
            value="Send"
          />
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
