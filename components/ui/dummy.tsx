"use client"
import React from 'react'
import { Meteor } from './meteobg'




const Page = () => {
 
  return (
    <Meteor meteoColor='yellow'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-fit h-fit rounded-full text-white text-4xl md:text-9xl relative'>
                <h1 className='z-10'>SpaceX</h1>
                <div className='absolute z-20 h-[55%] bg-[#0b0b0f] w-full blur-[18px] -bottom-5 left-0'/>
            </div>
        </div>
    </Meteor>
  )
}

export default Page