import React from 'react'
import DarkIcon from './DarkIcon'
import { useTheme } from 'next-themes';

const Navbar = () => {
  
  return (
    <div className='h-24  md:h-16 px-10 border-b-2 p-4 flex justify-between items-center'>
      <div className='w-1/2 flex justify-start'>
        Where in the world?
      </div>
      <div className='w-1/2 flex justify-end'>
       <DarkIcon/>
      </div>

    </div>
  )
}

export default Navbar