import React from 'react'
import Displayer from './Displayer'
import NumControl from './NumControl'
import Operators from './Operators'

function Layout() {
  return (
    <div className='bg-black h-screen'>
        <div className="bg-white h-full w-[500px] m-auto grid grid-rows-[160px,1fr] grid-cols-4">
            <Displayer />
            <NumControl />
            <Operators />
        </div>
    </div>
  )
}

export default Layout