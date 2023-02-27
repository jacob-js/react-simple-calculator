import React from 'react';

const KEYS = [
    {text: "÷", value: "/"},
    {text: "x", value: "*"},
    {text: "-", value: "-"},
    {text: "+", value: "+"},
    {text: "=", value: "="},
]

function Operators() {
  return (
    <div className='bg-orange-600 h-full grid grid-cols-1 grid-rows-5 font-bold text-white text-2xl'>
        {
            KEYS.map((key, index) =>(
                <div className={`border active:bg-orange-500 transition-all border-gray-400 w-full h-full flex justify-center items-center cursor-pointer`} key={index}>{key.text}</div>
            ))
        }
    </div>
  )
}

export default Operators