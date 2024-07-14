const Education = () => {
  return (
    <div id="target-section2" className="border mt-20 mb-20 md:p-10 border-orange-300 shadow-2xl rounded-2xl ">
      <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className=" relative  container flex flex-col justify-center p-2 md:p-6 mx-auto lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-xl font-bold leading-none sm:text-3xl">
                World University
                <span className="dark:text-violet-600"> Of </span>Bangladesh
              </h1>
              <div className=" text-left  lg:text-xl  mt-3 lg:mt-6">
                <h4>Department : Computer Science and Engineering</h4>
                <h4>Running Semister : 6th</h4>
                <h4>Average Cgpa : 3.20 (out of 4)</h4>
                <h4>Graduation will be completed : 2026</h4>
                <h4>Location : Uttara, Dhaka</h4>
              </div>
            </div>
            <div className=" hidden lg:block border border-gray-400 h-60 w-0"></div>
            <div className="flex flex-col justify-center mb-5 p-3 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-xl font-bold leading-none sm:text-3xl">
                I.E.S School And College
              </h1>
              <div className=" text-left  lg:text-xl  mt-3 lg:mt-6">
                <h4>Section : Science</h4>
                <h4>Gpa : 4.75 (out of 5)</h4>
                <h4>Completed H.S.C: 2021</h4>
                <h4>Location : Uttara, Dhaka</h4>
              </div>
            </div>
            {/* <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <div className=" absolute -top-10 right-10">
                <img
                  src="https://i.ibb.co/g7RJq8q/Whats-App-Image-2024-07-04-at-12-40-58.jpg"
                  alt=""
                  className=" object-contain w-60 h-72 rounded-4xl sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
              <div className=" absolute bottom-5 right-10 ">
                <img
                  src="https://i.ibb.co/nsKZ24L/Whats-App-Image-2024-07-04-at-12-40-13-Copy.jpg"
                  alt=""
                  className=" w-60 rounded-4xl object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
              <div className=" absolute bottom-28 right-[280px] ">
                <img
                  src="https://i.ibb.co/NCVkqrM/Whats-App-Image-2024-07-04-at-12-35-51.jpg"
                  alt=""
                  className=" rounded-3xl w-60  object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                />
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;
