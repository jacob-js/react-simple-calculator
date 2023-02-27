import React from 'react';

const KEYS = [
    {text: "AC", value: 'AC'},
    {text: "+/-", value: '+/-'},
    {text: "%", value: '%'},
    ...[...Array(10).keys()].reverse().map(k => ({text: k, value: k})),
    {text: ".", value: '.'}
];

function NumControl() {
  return (
    <div className='col-sp bg-gray-200 text-2xl h-full col-span-3 grid grid-cols-3 grid-rows-5 place-items-center font-bold'>
        {
            KEYS.map((key, index) =>(
                <div className={`border active:bg-white transition-all border-gray-400 w-full h-full flex justify-center items-center cursor-pointer ${key.text == "0" ? 'col-span-2': ''}`} key={index}>{key.text}</div>
            ))
        }
    </div>
  )
}

export default NumControl