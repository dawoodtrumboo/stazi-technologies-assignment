import React from 'react'
import CityCards from './CityCards'

const CardSection = ({cityData}) => {
  return (
    <div className='w-full flex flex-col items-center gap-5 my-5'>
    <div className='grid grid-cols-3 gap-x-[70px] gap-y-[40px]'>
    {cityData.selectedCity.map((cityData, index) => (
        <div key={index}>
          <CityCards cityData={cityData} />
        </div>
      ))}
    </div>
    
  
    </div>
  )
}

export default CardSection