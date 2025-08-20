"use client"
import React, { useState } from 'react'
import { Incrementer } from './incrementer'

const Page = () => {
  const [value, setValue] = useState(0)
  return (
    <div className='flex gap-6 items-center text-3xl'>
      <div 
      className='p-2 rounded-full bg-white text-black h-10 w-10 cursor-pointer flex items-center justify-center' 
      onClick={() => setValue((prev) => prev - 1) }>-</div>
        <Incrementer value={value} text='md'/>
      <div className='p-2 rounded-full bg-white text-black h-10 w-10 cursor-pointer flex items-center justify-center' 
      onClick={() => setValue((prev) => prev + 1) }>+</div>
    </div>
  )
}

export default Page