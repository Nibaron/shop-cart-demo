import React from 'react';
import { Card } from 'flowbite-react';
import { Link, useLocation} from 'react-router-dom';

export const CustomizedCard = ({ title, imageSrc, price, rating }) => {
  const location = useLocation();
  let btnData = "Add To Cart";

  if (location.pathname === '/cart') {
    btnData = "Remove";
  }

  return (
    <Card imgAlt={title} imgSrc={imageSrc}>
      <Link to="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>{title}</p>
        </h5>
      </Link>
      <div className="mb-5 mt-2.5 flex items-center">
        {/* Replace with your rating component */}
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          <h1>{rating}/5.00</h1>
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${price}
        </span>
        <Link
          className={`rounded-lg ${btnData === "Remove"? "bg-red-700" :" bg-cyan-700"}  px-5 py-2.5 text-center text-sm font-medium text-white`}
          to="#"
        >
          <p>{btnData}</p>
        </Link>
      </div>
    </Card>
  )
}

