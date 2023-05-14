import React from "react";
import "./banner.css";
import plate1 from "../../assets/img/plate1.png";
import plate2 from "../../assets/img/plate2.png";
import bg from "../../assets/img/bg.png";

const Banner = () => {
  return (
    <section className="bg-secondaryColor h-full">
      <div className="md:flex justify-between items-center p-3 md:p-6 mx-auto sm:py-12 lg:py-44 ">
        {/* left side banner  */}
        <div className="mt-10 md:mt-0">
          <img
            src={bg}
            alt=""
            className="w-52 md:absolute top-[75px] left-[-40px] rotate-45 z-0 blur-[2px] hidden md:block"
          />
          <div className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl text-primaryColor banner-text rounded-sm z-10">
            <h1>Order food online</h1>
            <h1>from your favourite</h1>
            <h1>local restaurants.</h1>
          </div>
          <p className="text-xl text-gray-500 font-semibold">
            Freshly made food delivered to your door.
          </p>
          <div className="form-control mt-5 flex flex-row justify-start items-center">
            <div className="w-8 h-8 bg-orange-400 rounded-full absolute  md:left-7 left-4"></div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered rounded-full md:w-96 px-10"
            />
            <button className="btn bg-primaryColor md:w-40 rounded-full border-none absolute md:left-[370px] left-[200px]">
              <span><svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 19.0943L13 13.0943M15 8.09435C15 9.0136 14.8189 9.92385 14.4672 10.7731C14.1154 11.6224 13.5998 12.3941 12.9497 13.0441C12.2997 13.6941 11.5281 14.2097 10.6788 14.5615C9.82951 14.9133 8.91925 15.0943 8 15.0943C7.08075 15.0943 6.1705 14.9133 5.32122 14.5615C4.47194 14.2097 3.70026 13.6941 3.05025 13.0441C2.40024 12.3941 1.88463 11.6224 1.53284 10.7731C1.18106 9.92385 1 9.0136 1 8.09435C1 6.23783 1.7375 4.45735 3.05025 3.1446C4.36301 1.83184 6.14348 1.09435 8 1.09435C9.85652 1.09435 11.637 1.83184 12.9497 3.1446C14.2625 4.45735 15 6.23783 15 8.09435Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg></span>
              <span>Search</span>
            </button>
          </div>
        </div>
        {/* right side banner  */}
        <div className="flex items-center justify-center mt-20 lg:mt-0  overflow-hidden p-6 md:p-0">
          <img
            src={plate2}
            alt=""
            className="md:w-52 w-28 top-[440px] left-[-5px] absolute md:top-[190px] md:left-[800px] z-0"
          />
          <img
            src={bg}
            alt=""
            className="md:w-52 md:absolute top-[180px] right-[-35px] z-0 blur-[2px] hidden md:block"
          />
          <img
            src={plate1}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
