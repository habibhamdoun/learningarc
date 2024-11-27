import React from "react";

const LeftSided = ({ imageSrc, headingText, paragraphText }) => {
  return (
    <div className="hero bg-white py-12">
      <div className="hero-content flex-col lg:flex-row items-center lg:space-x-12">
        <img
          src={imageSrc}
          alt="Left Sided Content"
          className="max-w-lg rounded-lg"
        />

        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-primary leading-tight">
            {headingText}
          </h1>
          <p className="py-4 text-gray-600 text-lg leading-relaxed">
            {paragraphText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSided;
