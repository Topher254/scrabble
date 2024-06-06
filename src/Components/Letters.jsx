import React from 'react'

const Letters = () => {
    function Random_Letters(){
        const Alphabetss = 'abcdefghijklmnopqrstuvwxyz'
        let FinalChar = '';
    
        for (let i = 0;i<6;i++){
            const Id_random = Math.floor(Math.random()*Alphabetss.length)
            FinalChar +=Alphabetss.charAt(Id_random)
        }
        return FinalChar;
    }
   console.log(Random_Letters())


    
  return (
    <div>
      <p>{Random_Letters()}</p>
     
    </div>
  )
}

export default Letters
