import React from "react";
import { FaStar } from "react-icons/fa";

const CardsFeatured = ({image, title, author, s1, s2, s3, s4, s5, rate, price}) => {
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <img
          src={image}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg text-gray-900 mb-1">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-2">{author}</p>
          <div className="flex items-center mb-3">
            <FaStar className={`${s1}`} />
            <FaStar className={`${s2}`} />
            <FaStar className={`${s3}`} />
            <FaStar className={`${s4}`} />
            <FaStar className={`${s5}`} />
            <span className="text-sm text-gray-600 ml-2">{rate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-indigo-600">{price}</span>
            <button className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsFeatured;
