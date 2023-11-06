import React, {useState} from 'react'

export default function HorizontalCard() {

  const [searchNearby, setSearchNearby] = useState('');

  const handleSearch = () => {
    console.log('Searching nearby for: ', searchNearby);
  };

  return (
    <>
    <a href="#" className="flex flex-col items-center  md:flex-row ">
        <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-5xl font-customFont font-semibold tracking-tight text-indigo-600 dark:text-gray-900 dark:text-gray-900" style={{ fontFamily: 'YourCustomFont' }}>
          Find Your Freedom, <br/> Without Leaving Home
        </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <div className="p-5">
            <input
              type="text"
              // className="search-input"
              className="bg-white border border-gray-300 px-4 py-2 rounded w-64 "
              placeholder="🔍 Find your Location"
              value={searchNearby}
              onChange={(e) => setSearchNearby(e.target.value)}
            />
            
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700" onClick={handleSearch}>Search</button>
    
          </div>
        </div>
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/2 md:rounded-none md:rounded-l-lg" src="https://images.pexels.com/photos/17301141/pexels-photo-17301141/free-photo-of-close-up-of-couple-showing-rings-on-hands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
    </a>
    <div className="my-8">
    
      <div className="flex flex-wrap justify-center">
        <div className="w-1/1 p-10 dark:text-white text-indigo-600 text-3xl font-bold ">🚀12+</div>
        <div className="w-1/1 p-10 dark:text-white text-indigo-600 text-3xl font-bold ">🏢167k+</div>
        <div className="w-1/1 p-10 dark:text-white text-indigo-600 text-3xl font-bold ">🏨 239+</div>
        <div className="w-1/1 p-10 dark:text-white text-indigo-600 text-3xl font-bold ">🎖449</div>
      </div>
    </div>
    <style jsx>{`
        .search-input {
          color: black; 
        }
      `}</style>
    </>
  )
}
