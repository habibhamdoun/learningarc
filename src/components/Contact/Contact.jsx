import React from "react";
import image7 from "../../assets/image7.png";
import image13 from "../../assets/image13.jpeg";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${image13})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex justify-center items-center text-neutral-content">
          <div className="card w-full max-w-5xl shadow-xl rounded-xl bg-white transition-transform transform hover:scale-105 mb-12 mt-12">
            <div className="grid lg:grid-cols-2">
              <div className="flex items-center justify-center p-10">
                <img
                  src={image7}
                  alt="Contact Illustration"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
