import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCardItem({trip}) {
    const [photoUrl, setPlacePhoto] = useState(''); // Initialize state for photo URL
    
      useEffect(() => {
        trip && GetPlacePhoto();
      }, [trip]);
    
      const GetPlacePhoto = async () => {
        const data = {
          textQuery: trip?.userSelection?.location?.label
        };
        try {
          const result = await GetPlaceDetails(data);
          console.log(result.data.places[0].photos[3].name);
          const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[3].name);
          setPlacePhoto(PhotoUrl);
        } catch (error) {
          console.error("Error fetching place details:", error);
        }
      };
  return (
    <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-95 transition-all'>
    <img src={photoUrl? photoUrl:"/placeholder.jpg"} alt="placeholder"  className="object-cover rounded-xl h-[250px] w-[450px]"/>
    <div>
        <h2 className='font-bold text-lg'>{trip?.userSelection?.location?.label}</h2>
        <h2 className='text-sm text-gray-500'>{trip?.userSelection?.noOfDays} Days trip with {trip?.userSelection?.budget} Budget.</h2>
    </div>
    </div>
    </Link>
  )
}

export default UserTripCardItem
