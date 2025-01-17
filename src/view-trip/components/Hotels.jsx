import React from 'react'
import { Link } from 'react-router-dom'
import HotelCardItem from './HotelCardItem'

function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5'>
      Hotels Recommendations
      </h2>

      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3'>
      {trip?.tripdata?.travelPlan?.hotels?.length > 0 ? (
  trip.tripdata.travelPlan.hotels.map((hotel, index) => (
    <HotelCardItem hotel={hotel} key={index} />
  ))
) : (
  <p>No hotel recommendations available.</p>
)}
        </div>
    </div>
  )
}

export default Hotels