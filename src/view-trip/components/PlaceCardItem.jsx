import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { GrMapLocation } from "react-icons/gr";
import { Link } from 'react-router-dom';

function PlaceCardItem({place}) {
  const [photoUrl, setPlacePhoto] = useState(''); // Initialize state for photo URL

  useEffect(() => {
    place && GetPlacePhoto();
  }, [place]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: place?.placeName
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
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeName} target='_blank'>
    <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
      <img src={photoUrl? photoUrl:"/placeholder.jpg"} className='w-[130px] h-[130px] rounded-xl object-cover'/>
      <div>
      <h2 className='font-bold text-lg'>{place.placeName}</h2>
      <p className='text-sm text-gray-500'>{place.placeDetails}</p>
      <p>💲{place.ticketPricing}</p>
    </div><Button className='ml-auto' ><GrMapLocation/></Button></div></Link>
  )
}

export default PlaceCardItem
