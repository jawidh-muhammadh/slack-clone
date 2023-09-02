import Image from "next/image";

const Herocontent = () => {
  return (
    <section className=" flex  max-w-7xl mx-auto w-full">
      <div className=" md:flex items-center  max-w-7xl justify-between gap-16  pt-16  ">
        {/* text content  */}
        <div className=" md:ml-8">
          <h1 className=" md:text-left text-center  font-bold text-4xl md:text-6xl text-white">
            {" "}
            Made for people.{" "}
          </h1>
          <h1 className=" md:text-left text-center pt-1 font-bold text-4xl md:text-6xl text-[#ECB22E]">
            {" "}
            Built for productivity.{" "}
          </h1>
          <p className=" pt-2 md:mx-0 mx-2  md:text-left text-center text-white  max-w-xl text-lg">
            {" "}
            Connect the right people, find anything you need and automate the
            rest. That's work in Slack, your productivity platform.{" "}
          </p>
          <div className="  flex pt-6 gap-4 w-full  lg:flex-row flex-col">
            <div className=" flex  ">
              <button
                type="button"
                className="text-black md:mx-0 mx-3 bg-white  w-full    font-semibold rounded-sm text-sm md:px-12 py-4   "
              >
                SIGN UP WITH EMAIL
              </button>
            </div>
            <div className="  flex  ">
              <button
                type="button"
                className=" flex md:gap-3 items-center   text-white  md:mx-0 mx-3 bg-[#4285F4] lg:w-fit w-full    font-semibold rounded-sm text-sm md:px-2 py-1 md:py-2    "
              >
                <span className=" bg-white px-2 md:mx-0 mx-1 rounded-sm py-2">
                  <Image
                    className=" w-8 md:w-6"
                    src="/assets/social/google.png"
                    alt="google"
                    width={100}
                    height={100}
                  />
                </span>
                <p className="  mx-auto   md:pr-2"> SIGN UP WITH GOOGLE </p>
              </button>
            </div>
          </div>

          <p className=" font-semibold mt-5 lg:flex hidden text-white text-lg ">
            {" "}
            Slack is free to try for as long as you’d like{" "}
          </p>
        </div>
        {/* text content -ENDS  */}

        {/* Video  */}
        <div className=" lg:-mr-56 lg:ml-0  md:-mr-16 md:-ml-16  md:mt-20   -mr-48  -ml-16 lg:mt-0 mt-7   ">
          <video autoPlay loop muted className="  w-[700px]  ">
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Video - ENDS  */}
      </div>
    </section>
  );
};

export default Herocontent;
