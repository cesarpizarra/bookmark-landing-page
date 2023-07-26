import React, { useState } from "react";
import { featureTabs } from "../constant";

const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const renderTabContent = () => {
    const activeFeature = featureTabs.find((tab) => tab.id === activeTab);
    return (
      <div className="grid lg:grid-cols-2 py-10 gap-10 place-items-center">
        <div className="relative flex justify-center items-center">
          <div className="image-container">
            <img
              src={activeFeature.tabContent.illustration}
              alt="Illustration"
              className="w-full h-full"
            />
            <div className="absolute top-[17%] lg:top-25 right-[5%] -z-10 rounded-r-full bg-soft-blue h-[95%] w-screen" />
            {/* Fixed height for container */}
          </div>
        </div>
        <div className="flex justify-center flex-col gap-8 w-full max-w-lg mx-auto mt-10 sticky top-0">
          <h2 className="font-bold text-3xl text-center lg:text-start">
            {activeFeature.tabContent.title}
          </h2>
          <p className="text-xl text-grayish-blue text-center lg:text-start">
            {activeFeature.tabContent.description}
          </p>
          <button className="hidden lg:inline-flex text-white bg-soft-blue shadow-lg w-28 px-4 py-4 rounded text-lg hover:text-black duration-300 hover:bg-transparent">
            More Info
          </button>
        </div>
      </div>
    );
  };

  return (
    <section
      id="features"
      className="w-full max-w-[1280px]  mx-auto px-4 mb-36"
    >
      <div className="max-w-lg mx-auto text-center">
        <h1 className="font-medium text-3xl">Features</h1>
        <p className="text-lg text-grayish-blue mt-6">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="w-full max-w-lg mx-auto mt-10 border-b-2 border-gray-200">
        <div className="flex-col lg:flex-row flex justify-center gap-10 ">
          {featureTabs.map((tab) => (
            <button
              key={tab.id}
              className={`text-lg hover:text-soft-red duration-300 ${
                tab.id === activeTab
                  ? "active border-soft-red border-b-4 font-medium text-lg"
                  : "border-b  lg:border-none border-gray-300"
              }`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      {renderTabContent()}
    </section>
  );
};

export default Features;
