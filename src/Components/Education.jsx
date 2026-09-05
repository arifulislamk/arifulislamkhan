const Education = () => {
  return (
    <div
      id="target-section2"
      className="
      mt-20
      mb-20
      md:p-10
      border
      border-yellow-500/70
      shadow-[0_0_10px_rgba(250,204,21,0.22),0_0_22px_rgba(245,158,11,0.14)]
      rounded-2xl
      bg-gradient-to-r
      from-base-100
      via-warning/25
      to-warning/10
      text-base-content
      "
    >
      <div>
        <section>
          <div className="relative container flex flex-col justify-center p-2 md:p-6 mx-auto lg:flex-row lg:justify-between">
            
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-xl font-bold leading-none sm:text-3xl">
                World University
                <span className="text-warning"> Of </span>
                Bangladesh
              </h1>

              <div className="text-left lg:text-xl mt-3 lg:mt-6">
                <h4>Department : Computer Science and Engineering</h4>
                <h4>Running Semister : 9th</h4>
                <h4>Average Cgpa : 3.19 (out of 4)</h4>
                <h4>Graduation will be completed : 2026</h4>
                <h4>Location : Uttara, Dhaka</h4>
              </div>
            </div>

            <div className="hidden lg:block border border-yellow-500/50 h-60 w-0"></div>

            <div className="flex flex-col justify-center mb-5 p-3 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-xl font-bold leading-none sm:text-3xl">
                I.E.S School And College
              </h1>

              <div className="text-left lg:text-xl mt-3 lg:mt-6">
                <h4>Section : Science</h4>
                <h4>Gpa : 4.75 (out of 5)</h4>
                <h4>Completed H.S.C: 2021</h4>
                <h4>Location : Uttara, Dhaka</h4>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;