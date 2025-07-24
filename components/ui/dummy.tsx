"use client"
import React from 'react'
import { TiltCard } from './tiltcard'
import Image from 'next/image'


const Page = () => {
 
  return (
    <TiltCard className='overflow-hidden'>
      <div className='h-full bg-white text-center w-full flex-col flex p-2 items-center justify-center'>
          <div className='w-24 overflow-hidden border-3 border-gray-400 h-24 rounded-full relative'>
              <Image src={"/images.jpeg"} fill alt='pic'/>
          </div>
          <div className="text-black">
              <p>@Newton</p>
              <p className="text-gray-500 text-[12px]">~Software Developer</p>
          </div>
          <p className='text-xs text-black mt-3'>Hi there! Am a software developer and I love building animations on the web.</p>
      </div>
    </TiltCard>
  )
}

export default Page