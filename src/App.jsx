import { useState, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TabBtn, CardSection } from "./Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from './constants/data.json'
function App() {

  const [selectCity, setSelectCity] = useState("New York"); // Always initialize to "New York" by default
  const [cityData, setCityData] = useState(data[selectCity]);

  // Load the last selected city from localStorage if available
  useEffect(() => {
    const storedCity = localStorage.getItem("selectedCity");
    if (storedCity) {
      setSelectCity(storedCity);
    }
  }, []);

  // Update selectedCity in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("selectedCity", selectCity);
    setCityData(data[selectCity]); // Update cityData when selectCity changes
  }, [selectCity]);

  const handleSelectCity = (city) => {
    setSelectCity(city);
  }
  

  return (
    <div className="App bg-[#F4F5FD] h-screen flex flex-col items-center px-[120px] !overflow-x-hidden ">

      <div className="w-[340px] flex flex-col items-center ">
        <h1 className="text-[28px] font-bold">Featured Listed Property</h1>
        <p className="text-[10px] text-center font-semibold">Real estate can be bought, sold, leased or rented, and can be a 
          valuable investment oppurtunity. The value of real estate can be...</p>
      </div>

                  {/* Tab Bar Starts Here */}
      <div className="w-full mt-10 flex justify-between ">
      <div className="space-x-5">
      <TabBtn
      name="New York" 
      handleClick = {handleSelectCity}
      selectedCity = {selectCity}
      />
      <TabBtn
      name="Mumbai" 
      handleClick = {handleSelectCity}
      selectedCity = {selectCity}
      />
      <TabBtn
      name="Paris" 
      handleClick = {handleSelectCity}
      selectedCity = {selectCity}
      />
      <TabBtn
      name="London" 
      handleClick = {handleSelectCity}
      selectedCity = {selectCity}
      />
      </div>
      <button className="bg-[#ECECFB] rounded-full text-xs font-bold 
      px-4 py-2 text-[#3639E4] border-[#3639E4] border-[1px] space-x-1">
       <span>View All</span>
       <FontAwesomeIcon icon={faArrowRight} size='xs' color='#3639E4'/>
      </button>
      </div>
                    {/* Tab Bar Ends Here */}

        <CardSection
        selectedCity = {cityData}
        />

    </div>
  );
}

export default App;
