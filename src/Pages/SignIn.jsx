import React from 'react';
import imej from '../assets/image2.jpeg';
import { Link } from 'react-router-dom';


const SignIn = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
      <div className='w-[45em] p-8 bg-white shadow-md shadow-slate-500 rounded-md'>
        <h1 className='text-xl text-green-600 font-semibold mb-4 items-center flex justify-center'>Sign In</h1>
        <div className='flex'>
          <div className='w-1/2'>
            <img src={imej} alt="Profile" className='min-w-full h-auto '/>
          </div>
          <div className='ml-4 flex flex-col'>
            <div className='my-2'>
              <label htmlFor="username" className='mr-2'>Username:</label>
              <input type="text" id="username" name="username" className='w-full bg-green-300 p-1 outline-none '/>
            </div>
            <div className='my-2'>
              <label htmlFor="password" className='mr-2'>Password:</label>
              <input type="password" id="password" name="password" className='w-full bg-green-300 p-1 outline-none '/>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center mt-4'>
         <Link to='/logged'> <button className='bg-green-600 text-white py-2 px-4 rounded-md mr-2'>Log In</button>
         </Link>
         <a href="#" className='text-green-600'>Forgot password ?</a>
        </div>
        <div className='flex justify-center py-[1em]'>
        <p className=' mx-2 tracking-tight text-green-800'>New Player ?</p>
        <Link to="/signout" className='hover:cursor-pointer text-blue-500'>Create Account</Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
