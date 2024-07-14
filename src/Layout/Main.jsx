import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div className=" lg:mx-20 bg-dark  ">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
