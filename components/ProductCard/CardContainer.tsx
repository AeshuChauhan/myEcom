import React, { useEffect, useState } from 'react';
import Card from './Card';
import { getMandapDetails } from '@/functions/LoginApi/userAPI';

export default function CardContainer() {
  const [mandaps, setMandaps] = useState([]);

  useEffect(() => {
    const fetchMandaps = async () => {
      try {
        const response = await getMandapDetails();
        setMandaps(response.result || []);
      } catch (error) {
        console.error('Error fetching mandap details:', error);
      }
    };

    fetchMandaps();
  }, []);
console.log(mandaps);
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {mandaps.map((mandap, index) => (
          <div key={index}>
            <Card 
              url={mandap.img} 
              title={mandap.hotelName} 
              description={mandap.description} 
              Contact={mandap.mobileNumber} 
              location={mandap.location} 
              price={mandap.price} 
              djAvailable={mandap.djAvailable} 
              alcoholAvailable={mandap.alcoholAvailable}
              rating = {mandap.rating}
             />
          </div>
        ))}
      </div>
    </>
  );
}


































































































































// import React from 'react'
// import Card from './Card'

// let urls = [
//     "https://images.pexels.com/photos/15736030/pexels-photo-15736030/free-photo-of-a-long-hallway-with-ornate-columns-and-doors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//     "https://cdn.venuelook.com/uploads/space_36474/1690004055_595x400.png",
//     "https://cdn.venuelook.com/uploads/space_36474/1690004082_595x400.png",
//     "https://cdn.venuelook.com/uploads/space_36435/1689661504_595x400.png",
//     "https://cdn.venuelook.com/uploads/space_36055/1684933470_595x400.png",
//     "https://cdn.venuelook.com/uploads/space_36435/1689661509_595x400.png",
//     "https://cdn.venuelook.com/uploads/space_2125/1658921564_595x400.png",
//     "https://cdn.venuelook.com/uploads/space_8567/1671798024_595x400.png",
//     "https://cdn.venuelook.com/uploads/space_8566/1661348252_595x400.png",
//     "https://cdn.venuelook.com/uploads/space_29229/1642408407_595x400.png",
//     "https://cdn.venuelook.com/uploads/space_2400/1661346604_595x400.png",
//     "https://cdn.venuelook.com/uploads/space_36433/1689660192_595x400.png"

// ]
// export default function CardContainer() {
//   return (
//     <>

//             <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
//                   {
//                   (urls || []).map((url, i) => <div key={ i*Math.random()}> <Card url={url}/></div> )
//                   }
                
//             </div>

//         </>
//   )
// }
