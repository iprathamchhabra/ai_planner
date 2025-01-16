import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className='font-bold text-lg mt-10'>Places To Visit</h2>
      <div>
        {trip?.tripdata?.travelPlan?.itinerary?.length > 0 ? (
          trip.tripdata.travelPlan.itinerary.map((item, index) => (
            <div key={index} className='mt-3'>
              <h2 className='font-medium text-lg'>{item.day}</h2>
              <div className='grid md:grid-cols-2 gap-5'>
                {item.plan.map((place, index) => (
                  <div key={index}>
                    <h2 className='font-medium text-sm text-orange-700'>{place.timeToVisit}</h2>
                    <PlaceCardItem place={place} />
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No places to visit available for this trip.</p>
        )}
      </div>
    </div>
  );
}

export default PlacesToVisit;