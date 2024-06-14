import React from 'react'

const Letters = () => {
    function Random_Letters(){
        const Alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
        let FinalChar = '';
    
        for (let i = 0; i < 6; i++) {
            const Id_random = Math.floor(Math.random() * Alphabets.length);
            FinalChar += Alphabets.charAt(Id_random);
        }
        return FinalChar;
    }

  return (
    <div>
      <div className='shadow-md shadow-slate-300 my-2'>
        <h1 className="font-semibold p-2 text-xl text-green-600">Letters</h1>
        <div className="pl-2 py-2">
          {/* Display of the random letters */}
          <p>{Random_Letters()}</p>
        </div>
      </div>
    </div>
  )
}

export default Letters
