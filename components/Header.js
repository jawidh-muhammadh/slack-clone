import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className=" w-full flex  justify-center">
      {/* // WEB VIEW BELOW  */}
      <section className=" max-w-7xl mx-4 lg:flex hidden pt-3  w-full">
        <nav className=" flex w-full items-center justify-between ">
          {/* LEFT side of the navbar */}
          <div>
            <ul className=" flex gap-9 font-bold text-white text-sm items-center">
              <Link href="/">
                <Image
                  src="/assets/slackwhite.svg"
                  alt="logo"
                  width={200}
                  height={200}
                  className=" w-32"
                />
              </Link>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">Prices</Link>
              </li>
              <li>
                <Link href="/">Enterprise</Link>
              </li>

              <li>
                <Link href="/">Resources</Link>
              </li>

              <li>
                <Link href="/">Pricing</Link>
              </li>
            </ul>
          </div>
          {/* LEFT side of the navbar -ENDS */}

          {/* RIGHT side of the navbar */}

          <div className=" flex gap-9 items-center">
            {/* search and signin */}
            <div className="flex items-center gap-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <Link href={"/"}>
                {" "}
                <p className=" font-bold  text-sm text-white ">
                  {" "}
                  Sign in{" "}
                </p>{" "}
              </Link>
            </div>
            {/* search and signin ENDS  */}

            {/* buttons  */}
            <div className=" flex gap-7">
              {/* talk to sales  */}
              <div className=" xl:flex hidden ">
                {" "}
                <button className=" rounded-sm py-2 px-4 bg-transparent border text-white font-semibold border-white ">
                  {" "}
                  Talk To Sales{" "}
                </button>{" "}
              </div>
              {/* talk to sales  */}

              {/* talk for free  */}
              <div>
                <button className=" rounded-sm py-2 px-4 bg-white  border text-[#541554] font-semibold border-white ">
                  {" "}
                  Try For Free{" "}
                </button>{" "}
              </div>
              {/* talk for free  */}
            </div>
            {/* buttons ends  */}
          </div>

          {/* RIGHT side of the navbar - ENDS */}
        </nav>
      </section>
      {/* // WEB VIEW ENDS  */}

      {/* MOBILE VIEW BELOW  */}
      <section className=" mx-2  pt-1  lg:hidden flex justify-between w-full ">
        <Link href="/">
          <Image
            src="/assets/slackwhite.svg"
            alt="logo"
            width={200}
            height={200}
            className=" w-32 -ml-2"
          />
        </Link>

        <div className=" flex gap-6 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 text-white h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </section>
      {/* MOBILE VIEW ENDS  */}
    </div>
  );
};

export default Header;
