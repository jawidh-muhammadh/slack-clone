import Image from "next/image";
import Link from "next/link";

const Secondsection = () => {
  return (
    <div className=" bg-[#F4EDE4] pt-9 pb-9 overflow-hidden ">
      <h1 className=" text-sm md:mx-0 mx-16  font-bold text-center">
        {" "}
        TRUSTED BY COMPANIES ALL OVER THE WORLD
      </h1>

      {/* className="   hidden  pt-4 gap-16 md:mx-0 md:flex justify-center items-center" */}
      <div className=" md:max-w-3xl lg:max-w-5xl mx-auto grid lg:grid-cols-6 md:grid-cols-5    items-center sm:grid-cols-3 grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/airbnb-logo.png"
            className=" w-28"
            width={500}
            height={100}
            alt="airbnb"
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/assets/nasa-logo.png"
            className=" w-16"
            width={500}
            height={500}
            alt="airbnb"
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/assets/uber-logo.png"
            className=" w-20"
            width={500}
            height={100}
            alt="airbnb"
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/assets/target-logo.png"
            className=" w-10"
            width={50}
            height={50}
            alt="airbnb"
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/assets/nyt.png"
            className=" w-48"
            width={500}
            height={500}
            alt="airbnb"
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/assets/etsy-logo.png"
            className=" w-20"
            width={500}
            height={500}
            alt="airbnb"
          />
        </div>
      </div>

      {/* RENDER OTHER VIDEOS HERE */}

      {/* video one */}

      <div className=" flex  lg:flex-row flex-col lg:justify-between  2xl:justify-center w-full pt-12 lg:gap-28 lg:items-center">
        <video autoPlay loop muted className="  w-[600px]  ">
          <source src="/assets/videos/team_together.webm" type="video/webm" />
        </video>

        <div className=" mx-4 mt-5">
          <h1 className="  text-3xl lg:text-5xl max-w-xl font-bold">
            {" "}
            Bring your team together{" "}
          </h1>
          <p className=" pt-3 max-w-[500px] font-medium text-md">
            {" "}
            At the heart of Slack are channels: organized spaces for everyone
            and everything you need for work. In channels, it’s easier to
            connect across departments, offices, time zones and even other
            companies.{" "}
          </p>

          <Link className=" flex gap-2 pt-5" href="/">
            <p className=" text-blue-900 font-semibold">
              {" "}
              Learn more about channels{" "}
            </p>
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>{" "}
          </Link>
        </div>
      </div>

      {/* video one - ends */}

      {/* video two  */}

      <div className=" flex lg:flex-row lg:justify-between 2xl:justify-center  flex-col pt-16 justify-between gap-20 items-center">
        <div className=" xl:pl-16 2xl:pl-0   max-w-[500px]">
          <h1 className=" text-5xl max-w-lg font-bold">
            {" "}
            Choose how you want to work{" "}
          </h1>
          <p className=" pt-3 font-medium text-md">
            {" "}
            In Slack, you’ve got all the flexibility to work when, where and how
            it’s best for you. You can easily chat, send audio and video clips,
            or hop on a huddle to talk things out live.{" "}
          </p>

          <Link className=" flex gap-2 pt-5" href="/">
            <p className="text-blue-900 font-semibold">
              {" "}
              Learn more about flexible communication{" "}
            </p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </Link>
        </div>

        <video autoPlay loop muted className="  w-[600px]  ">
          <source src="/assets/videos/wanttowork.webm" type="video/webm" />
        </video>
      </div>

      {/* video two - ends  */}

      {/* video three  */}
      <div className="flex lg:justify-between 2xl:justify-center  lg:flex-row flex-col pt-16 justify-evenly lg:gap-24 items-center">
        <video autoPlay loop muted className="  w-[600px]  ">
          <source src="/assets/videos/movefaster.webm" type="video/webm" />
        </video>

        <div className=" max-w-[600px]  ">
          <h1 className=" text-5xl  font-bold">
            {" "}
            Move faster with your tools in one place{" "}
          </h1>
          <p className=" pt-3  max-w-lg font-medium text-md">
            {" "}
            With your other work apps connected to Slack, you can work faster by
            switching tabs less. And with powerful tools like Workflow Builder,
            you can automate away routine tasks.
          </p>

          <Link className=" flex gap-2 pt-5" href="/">
            <p className=" text-blue-900 font-semibold">
              {" "}
              Learn more about the Slack platform
            </p>
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>{" "}
          </Link>
        </div>
      </div>

      {/* video three - ends  */}

      {/* RENDER OTHER VIDEOS HERE - ends */}
    </div>
  );
};

export default Secondsection;
