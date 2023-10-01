import { useState, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TabBtn} from "./Components";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from './constants/data.json';
import { Mumbai, NewYork, Paris, London } from "./Pages";
import { faHourglass } from '@fortawesome/free-regular-svg-icons'

function App() {
  const [selectCity, setSelectCity] = useState("New York");
  const [cityData, setCityData] = useState(data[selectCity]);

  useEffect(() => {
    const storedCity = localStorage.getItem("selectedCity");
    if (storedCity) {
      setSelectCity(storedCity);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedCity", selectCity);
    setCityData(data[selectCity]);
  }, [selectCity]);

  const handleSelectCity = (city) => {
    setSelectCity(city);
  }

  return (
    <Router>
      <div className="App bg-[#F4F5FD] h-screen flex flex-col items-center px-[120px] !overflow-x-hidden ">
        <div className="w-[340px] flex flex-col items-center text-gray-700 ">
          <h1 className="text-[28px] font-bold">Featured Listed Property</h1>
          <p className="text-[10px] text-center font-semibold">
            Real estate can be bought, sold, leased or rented, and can be a valuable investment opportunity.
            The value of real estate can be...
          </p>
        </div>

        <div className="w-full mt-10 flex justify-between ">
          <div className="space-x-5">
            <Link to='/'>
              <TabBtn
                name="New York" 
                handleClick={handleSelectCity}
                selectedCity={selectCity}
              />
            </Link>
            <Link to='/mumbai'>
              <TabBtn
                name="Mumbai" 
                handleClick={handleSelectCity}
                selectedCity={selectCity}
              />
            </Link>
            <Link to='/paris'>
              <TabBtn
                name="Paris" 
                handleClick={handleSelectCity}
                selectedCity={selectCity}
              />
            </Link>
            <Link to='/london'>
              <TabBtn
                name="London" 
                handleClick={handleSelectCity}
                selectedCity={selectCity}
              />
            </Link>
          </div>
          <button className="bg-[#ECECFB] rounded-full text-xs font-bold 
            px-4 py-2 text-[#3639E4] border-[#3639E4] border-[1px] space-x-1">
            <span>View All</span>
            <FontAwesomeIcon icon={faArrowRight} size='xs' color='#3639E4'/>
          </button>
        </div>

        <div className='w-full flex flex-col items-center gap-5 my-5'>
          <Routes>
            <Route path="/" element={<NewYork cityData={cityData} />}/>
            <Route path="/mumbai" element={<Mumbai cityData={cityData} />}/>
            <Route path="/paris" element={<Paris cityData={cityData} />}/>
            <Route path="/london" element={<London cityData={cityData} />}/>
          </Routes>
        </div>
        <div className='text-center my-5'>
          <button className="bg-[#3639E4] rounded-full
          px-4 py-2 text-white font-bold text-[14px] space-x-1">
              <FontAwesomeIcon icon={faHourglass} size='lg' color='#fff'/>
              <span>Show More</span>
          </button>
          </div>
      </div>
    </Router>
  );
}

export default App;
