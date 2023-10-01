import React, { useState } from 'react';
import { CityCards } from '../Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglass } from '@fortawesome/free-regular-svg-icons';

const Paris = (props) => {
  const [visibleCards, setVisibleCards] = useState(6); // Initial number of cards to display
  const cardsToLoad = 3; // Number of cards to load each time the button is clicked

  const loadMoreCards = () => {
    // Calculate the new number of visible cards
    const newVisibleCards = visibleCards + cardsToLoad;

    // Update the state to trigger a re-render
    setVisibleCards(newVisibleCards);
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='grid grid-cols-3 gap-x-[70px] gap-y-[40px]'>
        {props.cityData.slice(0, visibleCards).map((cityData, index) => (
          <div key={index}>
            <CityCards cityData={cityData} />
          </div>
        ))}
      </div>

      {visibleCards < props.cityData.length && (
        <div className='text-center my-5'>
          <button
            className="bg-[#3639E4] rounded-full
            px-4 py-2 text-white font-bold text-[14px] space-x-1"
            onClick={loadMoreCards}
          >
            <FontAwesomeIcon icon={faHourglass} size='lg' color='#fff' />
            <span>Show More</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Paris;
