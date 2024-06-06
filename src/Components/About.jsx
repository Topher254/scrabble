import React from 'react'
import { about_items } from '../Contraints'
import { BiArrowToRight, BiCheck } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='flex justify-center flex-col pb-[4em] '>
      
    <h1 className='text-3xl flex justify-center items-center  py-[1em] font-semibold text-green-600'>How do you play it?<span> 😃 </span></h1>
      <div className='mx-[4em] md:grid md:grid-cols-3 md:gap-2'>
      {about_items.map((item,index)=>(
        <div className='py-[1em]'>
        <h1 className='text-xl flex text-green-600 py-1 font-mono'>{item.abouta}</h1>
        <p className='font-mono flex'><BiCheck className= 'flex flex-shrink-0 mx-2 bg-green-600 text-white rounded-full p-1' size={25}/>{item.description}</p>
        </div>
        
      ))}
      </div>
      <div className='flex justify-center items-center'>
     <Link to='../signin'> <button className='text-white bg-green-600 rounded-md p-2 flex justify-center items-center'>Start Playing  😉 <span><BiArrowToRight size={20} className='flex justify-center items-center'/></span></button>
     </Link>
     </div>
    </div>
  )
}

export default About
