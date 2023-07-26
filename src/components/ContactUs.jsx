import React from "react";
import Form from "./Form";

const ContactUs = () => {
  return (
    <section id="contact" className="w-full mx-auto px-4 bg-soft-blue py-14">
      <div className="max-w-lg mx-auto text-center">
        <p className="font-medium text-lg text-white">35,000+ ALREADY JOINED</p>
        <h1 className="text-4xl font-medium text-white mt-6">
          Stay up-to-date with what we're doing.
        </h1>
      </div>
      <div className="w-full max-w-lg mx-auto ">
        <Form />
      </div>
    </section>
  );
};

export default ContactUs;
