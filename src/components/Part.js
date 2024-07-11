import React from 'react'
import cold from '../images/cold.png'
const Part = () => {
  return (
    <div className='flex lg:gap-[120px] md:gap-[80px] gap-[40px] items-center justify-center lg:scale-100 md:scale-75 scale-50 lg:mt-0 md:mt-[-90px] mt-[-170px]'>
        <img className='w-[725px] h-[774px]' src={cold} alt='M'/>
        <div className='flex flex-col gap-[30px]'>
            <h1 className='text-[16px] text-[#BDBDBD] font-bold'>SUMMER 2020</h1>
            <h1 className='text-[40px] text-[#252B42] font-bold w-[350px]'>Part of the Neural 
            Universe</h1>
            <h1 className='text-[20px] text-[#737373] font-normal w-[340px]'>We know how large objects will act, 
            but things on a small scale.</h1>
            <div className='flex gap-[10px]'>
                <button className='px-[40px] py-[15px] bg-[#2DC071] text-[14px] font-bold text-white rounded-md hover:bg-green-300 transition-all'>BUY NOW</button>
                <button className='px-[40px] py-[15px] bg-white text-[#2DC071] text-[14px] font-bold rounded-md border-2 border-[#2DC071] hover:bg-green-300 transition-all'>READ MORE</button>
            </div>
        </div>
    </div>
  )
}

export default Part