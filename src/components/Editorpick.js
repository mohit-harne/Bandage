import React from 'react'
import men from '../images/men.png'
import women from '../images/women.png'
import kids from '../images/kids.png'
import access from '../images/access.png'
import { Link } from 'react-router-dom'
const Editorpick = () => {
  return (
    <div className='lg:w-auto md:w-auto w-screen lg:h-[770px] md:h-[770px] h-[1560px] py-[80px] grid gap-[48px] o'>

        <div className='grid gap-[20px] text-center'>
        <h1 className='text-[24px] font-bold text-[#252B42]'>EDITOR’S PICK</h1>
        <h1 className='text-[14px] font-normal text-[#737373]'>Problems trying to resolve the conflict between </h1>
        </div>
        <div className='flex flex-col lg:flex-row md:flex-row items-center gap-[30px] justify-center lg:scale-100 md:scale-75 scale-100'>
          <div className='lg:w-[510px] md:w-[510px] w-[324px] lg:h-[500px] md:h-[500px] h-[500px] overflow-hidden hover:scale-105 transition-all'><Link to="/shop"><img className='h-[500px]' src={men} alt='M'/><button className='hover:bg-gray-500 transition-all bg-white text-[16px] text-[#252B42] px-[50px] py-[10px] mt-[-80px] absolute font-bold ml-[40px]'>MEN</button></Link></div>
          <div className='lg:w-[240px] md:w-[240px] w-[324px] h-[500px] overflow-hidden hover:scale-105 transition-all'><img src={women} alt='M'/><Link to="/shop"><button className='hover:bg-gray-500 transition-all bg-white text-[16px] text-[#252B42] px-[50px] py-[10px] lg:mt-[-80px] md:mt-[-80px] mt-[-260px] absolute font-bold ml-[30px]'>WOMEN</button></Link></div>
                     <div className='flex flex-col gap-[16px]'>
                            <div className='lg:w-[240px] md:w-[240px] w-[324px] h-[242px] overflow-hidden hover:scale-105 transition-all'><img src={access} alt='M'/><Link to="/shop">
  <button className='hover:bg-gray-500 transition-all bg-white text-[16px] text-[#252B42] px-[50px] py-[10px] lg:mt-[-80px] md:mt-[-80px] mt-[-160px] absolute font-bold ml-[10px]'>
    ACCESSORIES
  </button>
</Link></div>
                            <div className='lg:w-[240px] md:w-[240px] w-[324px] h-[242px] overflow-hidden hover:scale-105 transition-all'><img src={kids} alt='M'/><Link to="/shop"><button className='hover:bg-gray-500 transition-all bg-white text-[16px] text-[#252B42] px-[50px] py-[10px] lg:mt-[-80px] md:mt-[-80px] mt-[-160px] absolute font-bold ml-[10px]'>KIDS</button></Link></div>
                     </div>
        </div>


    </div>
  )
}

export default Editorpick