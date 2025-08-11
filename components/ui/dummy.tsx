"use client"
import React from 'react'
import { AeroButton } from './aerobutton'

const Page = () => {

  return (
    <AeroButton 
    text='Send'
    width={30}
    primaryCol='#FF6B6B' 
    gradientCol='#FFD93D' 
    className='rounded-full gap-2 text-white p-2'/>
  )
}

export default Page