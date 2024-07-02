import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import Banner from "../Components/Shared/Banner";

const Main = () => {
  return (
    <div>
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
