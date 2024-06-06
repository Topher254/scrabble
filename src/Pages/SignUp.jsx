import React from 'react';
import imej from '../assets/image.jpeg';

const SignUp = () => {
  return (
    
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='w-[45em] p-8 bg-white shadow shadow-slate-500 rounded-md'>
        <h1 className='text-xl text-green-600 font-semibold mb-4 items-center flex justify-center'>Sign Up</h1>
        <div className='flex'>
          <div className='w-1/2'>
            <img src={imej} alt="Profile" className='min-w-full h-auto '/>
          </div>
          <div className='ml-4 flex flex-col justify-between'>
           
            <div className='my-2'>
              <label htmlFor="username" className='mr-2'>First Name</label>
              <input type="text" id="username" name="username" className='w-full bg-green-300 p-1 outline-none '/>
            </div>
            <div className='my-2'>
              <label htmlFor="username" className='mr-2'>Last Name</label>
              <input type="text" id="username" name="username" className='w-full bg-green-300 p-1 outline-none '/>
            </div>
            <div className='my-2'>
              <label htmlFor="username" className='mr-2'>Username</label>
              <input type="text" id="username" name="username" className='w-full bg-green-300 p-1 outline-none '/>
            </div>
            <div className='my-2'>
            <label htmlFor="gender" className='mr-2'>Gender</label>
            <input type="text" id="gender" name="gender" className='w-full bg-green-300 p-1 outline-none '/>
          </div>
            <div className='my-2'>
              <label htmlFor="password" className='mr-2'>Password</label>
              <input type="password" id="password" name="password" className='w-full bg-green-300 p-1 outline-none '/>
            </div>
            <div className='my-2'>
              <label htmlFor="repeat-password" className='mr-2'>Repeat Password</label>
              <input type="password" id="repeat-password" name="repeat-password" className='w-full outline-none bg-green-300 p-1 '/>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <button className='bg-green-600 text-white py-2 px-4 rounded-md mr-2'>Submit</button>
          <button className='bg-white text-green-600 border border-green-600 py-2 px-4 rounded-md mr-2'>Submit</button>
           </div>
      </div>
    </div>
  );
}

export default SignUp;
