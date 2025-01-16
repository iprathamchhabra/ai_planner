import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react"; // Ensure useState is imported
import { MdIosShare } from "react-icons/md";

function InfoSection({ trip }) {
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
    <div>
      <img
        src={photoUrl? photoUrl:"/placeholder.jpg"}
        alt="placeholder"
        className="h-[350px] w-full object-cover rounded-xl"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="text-2xl font-bold">
            {trip?.userSelection?.location?.label}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              📅 {trip.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              {trip.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
              {trip.userSelection?.traveller} Traveller
            </h2>
          </div>
        </div>
        <Button><MdIosShare /></Button>
      </div>
    </div>
  );
}

export default InfoSection;