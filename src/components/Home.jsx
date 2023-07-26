import React from "react";
import { hero } from "../constant";
import HeroImage from "../assets/illustration-hero.svg";

const Home = () => {
  return (
    <section
      id="#"
      className="w-full max-w-[1280px] mx-auto px-4 py-4 flex justify-center mb-36"
    >
      <div className="grid lg:grid-cols-2 gap-20 md:gap-12">
        {/* For title text */}
        <div className="order-2 lg:order-1 flex justify-center flex-col gap-6 w-full max-w-lg mx-auto">
          {hero.map((title, i) => (
            <div key={i}>
              <h1 className="text-center lg:text-left text-3xl md:text-5xl font-medium text-verydark-blue">
                {title.title}
              </h1>
              <p className="text-center lg:text-left text-grayish-blue text-md md:text-[1.125rem]">
                {title.subtitle}
              </p>
            </div>
          ))}
          <div className="flex-col sm:flex-row flex justify-center lg:justify-start gap-7 ">
            <button className="bg-soft-blue py-3 px-6 font-medium text-white rounded shadow-lg hover:bg-transparent duration-300 hover:text-black">
              Get it on Chrome
            </button>
            <button className="hover:bg-soft-blue duration-300 py-3 px-6 font-medium rounded shadow-lg hover:text-white">
              Get it on Firefox
            </button>
          </div>
        </div>
        {/* For image right */}
        <div className="md:pt-16 order-1 lg:order-2 relative flex justify-center items-center  ">
          <img src={HeroImage} alt="Hero Image" />;
          <div className="absolute top-[17%] lg:top-32  right-[-5%] -z-10 rounded-l-full bg-soft-blue h-[80%] w-[95%]" />
        </div>
      </div>
    </section>
  );
};

export default Home;
