import React from "react";
import { FaStar } from "react-icons/fa";

const CardsTestimonial = ({s1, s2, s3, s4, s5, testimony, image, name, type}) => {
  return (
    <>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <FaStar className={`${s1}`} />
            <FaStar className={`${s2}`} />
            <FaStar className={`${s3}`} />
            <FaStar className={`${s4}`} />
            <FaStar className={`${s5}`} />
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          "{testimony}"
        </p>
        <div className="flex items-center">
          <img
            src={image}
            alt="Customer"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h4 className="font-bold text-gray-900">{name}</h4>
            <p className="text-sm text-gray-600">{type}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsTestimonial;
