import React from 'react';
import { useParams } from 'react-router-dom';
import { CityCards } from '../Components';

const PropertyPage = ({ cityData }) => {
  const { id } = useParams();

  // Find the selected card data by ID
  const selectedCardData = cityData.find((city) => city.id === id);

  return (
    <div className='w-full flex flex-col items-center'>
      <CityCards cityData={selectedCardData} />
    </div>
  );
};

export default PropertyPage;
