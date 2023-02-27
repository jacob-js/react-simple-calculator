import React from 'react'
import Displayer from './Displayer'

function Layout() {
  return (
    <div className='bg-black h-screen'>
        <div className="bg-white h-full w-[500px] m-auto">
            <Displayer />
        </div>
    </div>
  )
}

export default Layout