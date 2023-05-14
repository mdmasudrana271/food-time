import React from "react";
import "./secondBanner.css";
import cycle from "../../assets/img/cycle.png";

const SecondBanner = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-4 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        {/* left side of the banner  */}
        <div className="flex flex-col justify-center  text-start rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="md:text-5xl font-bold leading-none text-6xl text-primaryColor banner-text">
            Explore your <br /> favourite city’s food.
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur. Ornare massa nunc <br />{" "}
            nibh tristique. Non ligula tristique ut ut libero sit convallis{" "}
            <br /> maecenas. At egestas auctor porta mattis.
          </p>
          <button className="btn bg-primaryColor w-32 mt-5 border-none rounded-full">
            Explore{" "}
            <span className="ml-5">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.293 0.799012C10.4805 0.611541 10.7348 0.506226 11 0.506226C11.2652 0.506226 11.5195 0.611541 11.707 0.799012L15.707 4.79901C15.8945 4.98654 15.9998 5.24085 15.9998 5.50601C15.9998 5.77118 15.8945 6.02548 15.707 6.21301L11.707 10.213C11.5184 10.3952 11.2658 10.496 11.0036 10.4937C10.7414 10.4914 10.4906 10.3862 10.3052 10.2008C10.1198 10.0154 10.0146 9.76461 10.0123 9.50241C10.01 9.24022 10.1108 8.98761 10.293 8.79901L12.586 6.50601H1C0.734784 6.50601 0.48043 6.40065 0.292893 6.21312C0.105357 6.02558 0 5.77123 0 5.50601C0 5.2408 0.105357 4.98644 0.292893 4.79891C0.48043 4.61137 0.734784 4.50601 1 4.50601H12.586L10.293 2.21301C10.1055 2.02548 10.0002 1.77118 10.0002 1.50601C10.0002 1.24085 10.1055 0.98654 10.293 0.799012Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
        {/* right side of the banner */}
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 bg-bg_image bg-cover bg-no-repeat">
          <img
            src={cycle}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 cycle-image"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;
