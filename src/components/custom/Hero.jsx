import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center h-[950px] mx-8 md:mx-32 gap-8 bg-gradient-to-r from-blue-50 to-blue-100 p-12 rounded-xl shadow-xl'>
      <h1 className='font-bold text-4xl text-center text-gray-900 mt-0'>
        <span className='text-[#2e2bd8]'>AI-Powered Travel</span> - Your Perfect Journey Awaits
      </h1>
      <p className='text-lg text-gray-600 text-center max-w-2xl mx-auto'>
        Explore destinations, curate your dream itineraries, and get real-time recommendations with our AI-driven platform – creating the perfect trip tailored just for you.
      </p>
      
      {/* New Additional Text */}
      <div className='text-center text-lg text-gray-500 max-w-xl mx-auto mt-6'>
        <p className='mb-4'>
          Whether you're looking for a weekend getaway, a family vacation, or an adventurous escape, our AI assistant understands your preferences and creates the best travel plans just for you.
        </p>
        <p>
          Experience the future of travel – seamless, personalized, and stress-free.
        </p>
      </div>

      {/* CTA Button */}
      <Link to={'/create-trip'}>
        <Button className='mt-4 px-8 py-3 bg-[#2e2bd8] text-white rounded-lg shadow-md hover:bg-[#1c1b8b] transition-all'>
          Get Started for Free
        </Button>
      </Link>

      {/* Optional Section to Add More Classy Visuals */}
      <div className='mt-3 text-center'>
        <p className='text-xl font-semibold text-gray-700'>
          Plan your dream vacation with the smartest travel companion by your side.
        </p>
      </div>
    </div>
  )
}

export default Hero
