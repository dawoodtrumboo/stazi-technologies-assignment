import React from 'react'

const tabBtn = ({name,handleClick,selectedCity}) => {
  console.log(selectedCity)
  return (
    <button className={` rounded-full text-xs font-bold px-4 py-2 
    ${selectedCity===name?'bg-[#3639E4] text-white':'bg-[#ECECFB] text-gray-700 '}`} onClick={()=>handleClick(name)}>
      {name}
    </button>
  )
}

export default tabBtn