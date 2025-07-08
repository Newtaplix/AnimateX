import React from 'react'
import { Copyright,Heart, Link } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full right-0 borde-t-2 p-2 bottom-0 text-gray-500 md:w-[80%] md:mx-auto mt-30 items-center border-t-gray-400 flex flex-col'>
      <div className='flex justify-center flex-col tc gap-4 w-fit mx-auto text-center'>
          <span className='underline flex gap-2'><Link size={14}/>Documentation</span>
      </div>
      
      <div className='relative flex w-full text-center justify-center'>
          <div className='absolute bg-[#0b0b0f] w-full h-[50%] blur-[18px] bottom-0 left-0'/>
          <h1 className='text-6xl md:text-6xl lg:text-9xl hc text-center'>AnimateX</h1>
      </div>
      <p className='flex text-[14px] hc items-center gap-2 mt-3'>Created with <Heart size={14} color='red'/> by Ngwa Newton-Raul </p>
      <p className='flex text-xs items-center gap-2 mt-3'>Copyright <Copyright size={14}/>2025</p>
    </div>
  )
}

export default Footer