import React from "react";
import Chrome from "../assets/logo-chrome.svg";
import FireFox from "../assets/logo-firefox.svg";
import Opera from "../assets/logo-opera.svg";
import Dots from "../assets/bg-dots.svg";
const DownloadExtension = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 mb-36">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="font-medium text-3xl">Download the Extension</h1>
        <p className="text-lg text-grayish-blue mt-6">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-10">
        <div className="flex flex-col rounded-md shadow-md lg:mb-16">
          <div className="p-10 flex flex-col items-center">
            <img src={Chrome} alt="Chrome" />
            <h3 className="mt-5 mb-2 text-dark-blue text-xl font-medium">
              Add to Chrome
            </h3>
            <p className="mb-2 text-grayish-blue text-sm md:text-base">
              Minimum version 62
            </p>
          </div>
          <img src={Dots} alt="Dots Background" />
          <div className="flex p-6">
            <button className="shadow-md flex-1 bg-soft-blue hover:bg-white py-3 rounded text-white hover:text-black duration-300">
              Add & Install Extension
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-md shadow-md lg:mt-16">
          <div className="p-10 flex flex-col items-center">
            <img src={FireFox} alt="Fire Fox" />
            <h3 className="mt-5 mb-2 text-dark-blue text-xl font-medium">
              Add to Firefox
            </h3>
            <p className="mb-2 text-grayish-blue text-sm md:text-base">
              Minimum version 55
            </p>
          </div>
          <img src={Dots} alt="Dots Background" />
          <div className="flex p-6">
            <button className="shadow-md flex-1 bg-soft-blue hover:bg-white py-3 rounded text-white hover:text-black duration-300">
              Add & Install Extension
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-md shadow-md lg:mt-24">
          <div className="p-10 flex flex-col items-center">
            <img src={Opera} alt="Opera" />
            <h3 className="mt-5 mb-2 text-dark-blue text-xl font-medium">
              Add to Opera
            </h3>
            <p className="mb-2 text-grayish-blue text-sm md:text-base">
              Minimum version 46
            </p>
          </div>
          <img src={Dots} alt="Dots Background" />
          <div className="flex p-6">
            <button className="shadow-md flex-1 bg-soft-blue hover:bg-white py-3 rounded text-white hover:text-black duration-300">
              Add & Install Extension
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadExtension;
