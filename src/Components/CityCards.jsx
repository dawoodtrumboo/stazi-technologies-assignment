import React from 'react';
import { Link } from 'react-router-dom';
import {
  faBuilding,
  faHeart,
  faArrowsUpDownLeftRight,
  faBath,
  faBed,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CityCards = ({ cityData }) => {
  return (
    <div className='w-[350px] bg-white rounded-xl p-1'>
      <Link to={`/property/${cityData.id}`}>
        <div className='relative overflow-hidden rounded-xl h-[270px] flex items-center'>
          <div className='absolute top-2 left-0 flex justify-between items-center w-full px-5'>
            <span className='text-[10px] font-semibold text-[#3639E4] bg-[#F4F5FD] rounded-full px-2 py-1'>
              For Rent
            </span>
            <div className='bg-[#F4F5FD] rounded-full flex justify-center items-center h-[20px] w-[20px]'>
              <FontAwesomeIcon icon={faHeart} size='xs' color='#3639E4' />
            </div>
          </div>
          <img src={cityData.imageurl} alt='city' className='w-[120%] h-[100%]' />
        </div>
        <div className='p-3 space-y-3'>
          <div className='text-[10px] text-gray-800 space-x-1'>
            <FontAwesomeIcon icon={faLocationDot} size='sm' color='#B60707' />
            <span>{cityData.location}</span>
          </div>
          <div className='font-semibold text-[16px]'>{cityData.name}</div>
          <div className='text-[10px] font-semibold flex justify-evenly py-1'>
            <div className='flex flex-col items-center gap-1'>
              <FontAwesomeIcon icon={faBuilding} color='<FontAwesomeIcon icon={faBuilding} />' size='sm' />
              <div>{cityData.num_rooms} rooms</div>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <FontAwesomeIcon icon={faBed} color='<FontAwesomeIcon icon={faBuilding} />' size='sm' />
              <div>{cityData.num_beds} beds</div>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <FontAwesomeIcon icon={faBath} color='<FontAwesomeIcon icon={faBuilding} />' size='sm' />
              <div>{cityData.num_baths} baths</div>
            </div>
            <div className='flex flex-col items-center gap-1'>
              <FontAwesomeIcon
                icon={faArrowsUpDownLeftRight}
                color='<FontAwesomeIcon icon={faBuilding} />'
                size='sm'
              />
              <div>{cityData.area_size_sqft} sqft</div>
            </div>
          </div>
          <div className='text-[10px] font-bold flex justify-between items-center text-gray-800'>
            <div>
              <span className='text-[12px] text-[#3639E4]'>${cityData.rent}</span> /month
            </div>
            <button className='bg-transparent rounded-full px-2 py-1 text-[#3639E4] border-[#3639E4] border-[1px] text-[10px]'>
              Read More
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CityCards;
