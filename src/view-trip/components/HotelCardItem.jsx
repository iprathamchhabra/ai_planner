import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';

function HotelCardItem({hotel}) {
    const [photoUrl, setPlacePhoto] = useState(''); // Initialize state for photo URL

  useEffect(() => {
    hotel && GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotelName
    };
    try {
      const result = await GetPlaceDetails(data);
      console.log(result.data); // Log the entire result for inspection
      if (result.data.places[0].photos.length > 3) {
        const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[3].name);
        setPlacePhoto(PhotoUrl);
        console.log("Photo URL:", PhotoUrl); // Log the photo URL
      } else {
        console.error("Not enough photos available");
      }
    } catch (error) {
      console.error("Error fetching place details:", error);
    }
  };

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.hotelName + "," + hotel?.hotelAddress} target='_blank'>
      <div className='hover:scale-105 transition-all cursor-pointer'>
        <img src={photoUrl? photoUrl:"/placeholder.jpg"} className='rounded-lg h-[180px] w-full object-cover'/>
        <div className='my-2 flex flex-col gap-2'>
          <h2 className='font-medium'>{hotel?.hotelName}</h2>
          <h2 className='text-xs text-gray-500'>{hotel?.hotelAddress}</h2>
          <h2 className='text-sm'>💰{hotel?.price}</h2>
          <h2 className='text-sm'>⭐{hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  )
}

export default HotelCardItem