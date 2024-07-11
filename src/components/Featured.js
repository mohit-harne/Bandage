import React from 'react'
import f1 from '../images/f1.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
import clock from '../images/clock.png'
import graph from '../images/graph.png'
import btnrightarrow from '../images/btnrightarrow.png'
const Featured = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-[80px]'>

        <div className='flex flex-col gap-[15px]'>
        <h1 className='text-[14px] text-[#23A6F0] font-bold text-center'>Practice Advice</h1>
        <h1 className='text-[40px] text-[#252B42] font-bold text-center'>Featured Posts</h1>
        <h1 className='text-[14px] text-[#737373] font-normal w-[400px] text-center'>Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics </h1>
        </div>

        <div className='flex gap-[30px] lg:flex-row md:flex-row flex-col lg:scale-100 md:scale-75 scale-100 lg:mt-0 md:mt-[-100px] mt-[-20px]'>
            <div className='w-[348px] h-[606px] overflow-hidden shadow-md shadow-gray-400 flex flex-col gap-[10px] rounded-md hover:scale-105 transition-all'>
              <img src={f1} alt='M'/>
                 <div className='px-[35px] py-[25px] flex flex-col gap-[10px]'>
              <h1 className='text[12px] text-[#737373]'><span className='text-[#8EC2F2]'>Google</span>&nbsp; &nbsp;Trending&nbsp; &nbsp;New</h1>
              <h1 className='text-[20px] text-[#252B42] w-[230px] font-semibold'>Loudest à la Madison #1 (L'integral)</h1>
              <h1 className='text-[14px] text-[#737373] font-semibold w-[260px]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</h1>
                </div>
                <div className='px-[35px] flex justify-between'>
                    <h1 className='text-[12px] text-[#737373] font-semibold'><span><img className='h-[16px] w-[16px] inline-block mb-[4px]' src={clock} alt='M'/></span>&nbsp;22 April 2021</h1>
                    <h1 className='text-[12px] text-[#737373] font-semibold'><span><img className='h-[16px] w-[16px] inline-block mb-[4px]' src={graph} alt='M'/></span>&nbsp;10 comments</h1>
                </div>
                <div className='px-[38px]'>
                <button className='text-[14px] text-[#737373] font-bold'>Learn More&nbsp; <span><img className='h-[16px] w-[9px] inline-block' src={btnrightarrow} alt='M'/></span></button>
                </div>
            </div>
            <div className='w-[348px] h-[606px] overflow-hidden shadow-md shadow-gray-400 flex flex-col gap-[10px] rounded-md hover:scale-105 transition-all'>
              <img src={f2} alt='M'/>
                 <div className='px-[35px] py-[25px] flex flex-col gap-[10px]'>
              <h1 className='text[12px] text-[#737373]'><span className='text-[#8EC2F2]'>Google</span>&nbsp; &nbsp;Trending&nbsp; &nbsp;New</h1>
              <h1 className='text-[20px] text-[#252B42] w-[230px] font-semibold'>Loudest à la Madison #1 (L'integral)</h1>
              <h1 className='text-[14px] text-[#737373] font-semibold w-[260px]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</h1>
                </div>
                <div className='px-[35px] flex justify-between'>
                    <h1 className='text-[12px] text-[#737373] font-semibold'><span><img className='h-[16px] w-[16px] inline-block mb-[4px]' src={clock} alt='M'/></span>&nbsp;22 April 2021</h1>
                    <h1 className='text-[12px] text-[#737373] font-semibold'><span><img className='h-[16px] w-[16px] inline-block mb-[4px]' src={graph} alt='M'/></span>&nbsp;10 comments</h1>
                </div>
                <div className='px-[38px]'>
                <button className='text-[14px] text-[#737373] font-bold'>Learn More&nbsp; <span><img className='h-[16px] w-[9px] inline-block' src={btnrightarrow} alt='M'/></span></button>
                </div>
            </div>
            <div className='w-[348px] h-[606px] overflow-hidden shadow-md shadow-gray-400 flex flex-col gap-[10px] rounded-md hover:scale-105 transition-all'>
              <img src={f3} alt='M'/>
                 <div className='px-[35px] py-[25px] flex flex-col gap-[10px]'>
              <h1 className='text[12px] text-[#737373]'><span className='text-[#8EC2F2]'>Google</span>&nbsp; &nbsp;Trending&nbsp; &nbsp;New</h1>
              <h1 className='text-[20px] text-[#252B42] w-[230px] font-semibold'>Loudest à la Madison #1 (L'integral)</h1>
              <h1 className='text-[14px] text-[#737373] font-semibold w-[260px]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</h1>
                </div>
                <div className='px-[35px] flex justify-between'>
                    <h1 className='text-[12px] text-[#737373] font-semibold'><span><img className='h-[16px] w-[16px] inline-block mb-[4px]' src={clock} alt='M'/></span>&nbsp;22 April 2021</h1>
                    <h1 className='text-[12px] text-[#737373] font-semibold'><span><img className='h-[16px] w-[16px] inline-block mb-[4px]' src={graph} alt='M'/></span>&nbsp;10 comments</h1>
                </div>
                <div className='px-[38px]'>
                <button className='text-[14px] text-[#737373] font-bold'>Learn More&nbsp; <span><img className='h-[16px] w-[9px] inline-block' src={btnrightarrow} alt='M'/></span></button>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Featured