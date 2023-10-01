import React from 'react'
import { CityCards } from '../Components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass } from '@fortawesome/free-regular-svg-icons'

const NewYork = (props) => {
  return (
    <div className='w-full flex flex-col items-cente'>
        <div className='grid grid-cols-3 gap-x-[70px] gap-y-[40px]'>
          {props.cityData.map((cityData, index) => (
              <div key={index}>
                <CityCards cityData={cityData} />
              </div>
            ))}
          </div>
                
        
    </div>
  )
}

export default NewYork