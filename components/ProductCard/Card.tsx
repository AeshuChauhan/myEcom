import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaDollarSign, FaMapMarkerAlt, FaPhone, FaStar } from 'react-icons/fa';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import { Rating } from '@mui/material';

interface CardType {
  url: string;
  title: string;
  description: string;
  location:string;
  
  Contact:string;
  price:string;
  djAvailable: boolean;
  alcoholAvailable: boolean;
  rating:number;
}

const fetchMandapData = async () => {
  const response = await fetch('https://61cd-103-226-202-71.ngrok-free.app/mandaps');
  const data = await response.json();
  return data;
};

export default function Card1(props: CardType) {
  const { url, title, description, location,  Contact, price, djAvailable, alcoholAvailable,rating } = props;

  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = () => {
    // Add the current item to the cartItems state
    setCartItems((prevItems) => [...prevItems, title]);
  };

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
        <a href="#">
          <img className="rounded-t-lg" src={url} alt={title} />
        </a>
        <div className="p-5">
          <a href="#">
          <div className="flex items-center mb-2">
              <FaStar className="mr-2 text-yellow-500" /> 
              <h5 className="text-2xl font-bold text-gray-900 dark:text-black size">
                {title}
              </h5>
            </div>
            <p className='text-justify'>{description}</p>
            <div className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2 text-red-500" /> 
              <h6 className="text-lg font-bold text-gray-700 dark:text-gray-100 my-2">
                Location: {location}
              </h6>
            </div>
          </a>
          <div className="flex items-center mb-3 text-gray-700 dark:text-gray-400">
            <FaPhone className="mr-2 text-blue-500" /> 
            <p>{Contact}</p>
          </div>
          <div className="price-container">
            {/* <span className="price-label">Price:</span> */}
            <span className="price-amount">{price}</span>
            <MonetizationOnIcon className="rupee-icon" />
          </div>
          <div className="rating-container">
            <Rating name="read-only" value={rating} readOnly precision={0.5} />
          </div>
          <div className="flex items-center mb-2">
            <span className={`text-sm font-bold ${djAvailable ? 'text-green-600' : 'text-red-600'}`}>
              DJ: {djAvailable ? 'Yes' : 'No'}
            </span>
          </div>
          <div className="flex items-center mb-2">
            <span className={`text-sm font-bold ${alcoholAvailable ? 'text-blue-600' : 'text-red-600'}`}>
              Alcohol: {alcoholAvailable ? 'Yes' : 'No'}
            </span>
          </div>

          <button
            className="ml-0 inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-auto"
            onClick={addToCart}
          >
            Add to Cart
          </button>

          

          <Link href={`/detailsMandap?title=${encodeURIComponent(title || '')}&description=${encodeURIComponent(description || '')}&location=${encodeURIComponent(location || '')}&price=${encodeURIComponent(price || '')}&djAvailable=${encodeURIComponent(JSON.stringify(djAvailable))}&alcoholAvailable=${encodeURIComponent(JSON.stringify(alcoholAvailable))}&Contact=${encodeURIComponent(Contact || '')}&url=${encodeURIComponent(url || '')}`}>
          <button className="ml-0 inline-flex items-center px-2 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-auto">
            View Details
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        </Link>
        </div>
      </div>
    </>
  );
}