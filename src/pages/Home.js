import React from 'react'
import Slider1 from '../components/Slider1'
import Editorpick from '../components/Editorpick'
import Bestseller from '../components/Bestseller'
import Slider2 from '../components/Slider2'
import Part from '../components/Part'
import Featured from '../components/Featured'
const Home = () => {
  return (
    <div className=''>
      <Slider1/> 
     <div className='grid justify-center'><Editorpick/></div>  
     <div className='grid justify-center'><Bestseller/></div> 
     <div className='lg:mt-[100px] md:mt-[50px] mt-[50px]'><Slider2/></div> 
     <Part/> 
    <div className='lg:mt-[100px] md:mt-[0px] mt-[-110px]'> <Featured/></div> 
   <br/><br/><br/><br/>
    </div>
    
  )
}

export default Home