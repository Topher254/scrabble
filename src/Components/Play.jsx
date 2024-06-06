import React, { useState } from 'react';


const Play = () => {
    const [letters, setLetters] = useState(Array(8).fill(''));

    //number arrays
    const buttonIndices = [...Array(255).keys()];

    const getInput = (index) => {
        let inputLetter = prompt("Enter Your letter");
        if (inputLetter) {
            setLetters(prevLetters => {
                const newLetters = [...prevLetters];
                newLetters[index] = inputLetter;
                return newLetters;
            });
        }
    }

   

    return (
        <div className='flex flex-wrap py-[1em]'>
            {buttonIndices.map((index) => (
                <div className='flex flex-shrink-0 ' key={index} >
                    <button type='input' onClick={() => getInput(index)} className='bg-yellow-300 text-red-500 font-semibold flex justify-center items-center p-3 w-[2em] h-[2em] border border-green-300 '>
                        {letters[index]}
                    </button>
                </div>
            ))}

           
        </div>
    );
}

export default Play;