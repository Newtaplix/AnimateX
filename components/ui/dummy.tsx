"use client"
import React from 'react'
import { HoverAura } from './hoveraura'



const Page = () => {
 
  return (
    <HoverAura blurSize={70} blurColor='white'>
          <div
          className='text-white w-full h-full items-center flex-col justify-center flex text-xl'>
            Hover below
            <p className='text-[#0b0b0f]'>You are awesome!!</p>
       </div>
</HoverAura>
  )
}

export default Page