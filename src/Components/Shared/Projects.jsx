import purelife from "../../assets/images/1719987583606.png";
import foodhut from "../../assets/images/1716490540172.png";
import paceful from "../../assets/images/1716490060042.png";
const Projects = () => {
  return (
    <div>
      <h2 className=" text-center text-5xl font-bold">My Projects</h2>
      <div className=" mt-10 flex gap-4 justify-between ">
        <div className="card bg-base-100 w-1/3  shadow-xl">
          <figure>
            <img src={purelife} className=" lg:h-64" alt="purelife" />
          </figure>
          <div className="card-body">
            <p> 29 January 2024</p>
            <h2 className="card-title">purelife Health Care</h2>
            <p>Our website organizes medical camps such as blood donation and health check-ups. Participants can join easily, with some camps being free and others requiring payment via Stripe. Organizers manage camp details for seamless registration. We connect healthcare initiatives with participants, ensuring a straightforward experience for all involved</p>
            <div className="card-actions ">
              <button className="btn btn-info"><a target="_blank" href="https://github.com/arifulislamk/pureLife-server">Github Server</a></button>
              <button className="btn  btn-info"><a target="_blank" href="https://github.com/arifulislamk/pureLife-client">Github Client</a></button>
              <button className="btn  btn-info"><a target="_blank" href="https://purelife-health.web.app/">Live Site</a></button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-1/3 shadow-xl">
          <figure>
            <img src={foodhut} className=" lg:h-64" alt="foodhut" />
          </figure>
          <div className="card-body">
            <p> 29 January 2024</p>
            <h2 className="card-title">Food Share Website</h2>
            <p>Our food sharing website allows users to add, manage, update, and delete their food items. Users can request food from others and respond to requests. Every user can share their own food and request food from the community, fostering a collaborative and supportive food-sharing network.</p>
            <div className="card-actions ">
            <button className="btn  btn-info"><a target="_blank" href="https://github.com/arifulislamk/food-hut-server">Github Server</a></button>
              <button className="btn  btn-info"><a target="_blank" href="https://github.com/arifulislamk/food-hut-client">Github Client</a></button>
              <button className="btn  btn-info"><a target="_blank" href="https://food-hut-28b3b.web.app/">Live Site</a></button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-1/3 shadow-xl">
          <figure>
            <img src={paceful} alt="paceful" className=" lg:h-64" />
          </figure>
          <div className="card-body">
            <p> 29 January 2024</p>
            <h2 className="card-title">Tourists Support</h2>
            <p>Our tourist website features a comprehensive spots section where users can explore detailed information about various locations. Registered users can add their own travel spots, complete with details, to the all spots section. Users can also edit, update, or delete their added spots, making trip planning easy and personalized.</p>
            <div className="card-actions">
            <button className="btn  btn-info"><a target="_blank" href="https://github.com/arifulislamk/paceful-tour-server">Github Server</a></button>
              <button className="btn  btn-info"><a target="_blank" href="https://github.com/arifulislamk/paceful-tour-client">Github Client</a></button>
              <button className="btn  btn-info"><a target="_blank" href="https://peaceful-tour.web.app/">Live Site</a></button>
            </div>
          </div>
        </div>

  
      </div>
    </div>
  );
};

export default Projects;
