import React from 'react'
import CityCards from './CityCards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass } from '@fortawesome/free-regular-svg-icons'

const CardSection = (props) => {
  return (
    <div className='w-full flex flex-col items-center gap-5 my-5'>
    <div className='grid grid-cols-3 gap-x-[70px] gap-y-[40px]'>
    {props.selectedCity.map((cityData, index) => (
        <div key={index}>
          <CityCards cityData={cityData} />
        </div>
      ))}
    </div>
    <button className="bg-[#3639E4] rounded-full
                px-4 py-2 text-white font-bold text-[14px] space-x-1">
                <FontAwesomeIcon icon={faHourglass} size='lg' color='#fff'/>
                 <span>Show More</span>
                </button>
    </div>
  )
}

export default CardSection