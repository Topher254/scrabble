import React from 'react'

const Play2 = () => {
    const row =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const cols= [
        {id:1},
        {id:2},
        {id:3},
    
    ]
  return (
    <div className='flex flex-col'>
      {cols.map((col,index)=>(
       
        <div className='flex'>
        <button type='input' className='bg-yellow-600 p-2 m-[.05em]'>X</button>
        </div>
      
      ))}
    </div>
  )
}

export default Play2
