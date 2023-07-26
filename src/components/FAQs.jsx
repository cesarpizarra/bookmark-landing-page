import React, { useState } from "react";
import { FAQsItems } from "../constant";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 mb-36">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="font-medium text-3xl">Frequently Asked Questions</h1>
        <p className="text-lg text-grayish-blue mt-6">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free
        </p>
      </div>

      <div className="max-w-lg mx-auto mt-20 flex justify-center flex-col">
        {FAQsItems.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full font-medium text-lg p-4 text-left flex items-center justify-between border-b"
              onClick={() => handleToggle(index)}
            >
              <span className="text-verydark-blue hover:text-soft-red duration-300">
                {item.question}
              </span>
              <span>
                {activeIndex === index ? (
                  <AiOutlineUp className="text-soft-red" />
                ) : (
                  <AiOutlineDown />
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className=" p-4 mt-2 rounded border-b">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
        <div className="flex justify-center">
          <button className="text-white bg-soft-blue shadow-lg  px-8 py-2 rounded text-lg hover:text-black duration-300 hover:bg-transparent">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
