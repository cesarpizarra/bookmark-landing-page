import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col md:flex-row gap-5 mt-10 ">
      <div className="flex flex-1 text-left w-full">
        <input
          type="email"
          placeholder="Enter your email address"
          className=" rounded outline-none w-full px-4 py-3 text-lg"
          required
        />
      </div>
      <button className="px-4 py-3 bg-soft-red text-white rounded font-medium btn hover:text-soft-red hover:bg-white hover:bg-transparent duration-300 border-2 border-[#ff5f45]">
        Contact Us
      </button>
    </form>
  );
};

export default Form;
