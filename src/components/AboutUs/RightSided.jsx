import React from "react";

const RightSided = ({ imageSrc, headingText, paragraphText }) => {
  return (
    <div className="hero bg-white py-12">
      <div className="hero-content flex-col lg:flex-row-reverse items-center lg:space-x-12">
        <img src={imageSrc} alt="" className="max-w-lg rounded-lg" />

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

export default RightSided;
