import React, { useState } from "react";
import { string } from "yup";

const userSchema = string().email();

const Form = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handleBlur = async () => {
    try {
      await userSchema.validate(email);
      setErrorMessage("Make sure it's an email!");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <form className="flex flex-col md:flex-row gap-5 mt-10">
      <div className="flex flex-1 flex-col text-left w-full relative">
        <input
          type="email"
          placeholder="Enter your email address"
          className="rounded outline-none w-full px-4 py-3 text-lg"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errorMessage && (
          <p className="bg-soft-red text-white italic absolute bottom-[-1.5rem] w-full mb-4">
            {errorMessage}
          </p>
        )}
      </div>
      <button className="px-4 py-3 bg-soft-red text-white rounded font-medium btn hover:text-soft-red hover:bg-white hover:bg-transparent duration-300 border-2 border-[#ff5f45]">
        Contact Us
      </button>
    </form>
  );
};

export default Form;
