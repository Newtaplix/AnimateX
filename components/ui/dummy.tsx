"use client"
import React, { useState } from 'react'
import { Press } from './press'

const Page = () => {
    const [val, setVal] = useState(0)

    const add = () => {
      setVal((prev) => prev + 1)
    }
  return (
    <div className='flex items-center justify-center'>
    <span>{val}</span>
    <Press 
    text='Press & Hold' 
    className='w-44' 
    pressDuration={1} 
    onFull={() => add()} 
    sliderStyle='bg-red-200'/>
</div>
  )
}

export default Page