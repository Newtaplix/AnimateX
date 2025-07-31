"use client"
import React from 'react'
import { AuraButton } from './aurabutton'




const Page = () => {
 
  return (
    <AuraButton 
    auraColor='white'
    auraTrans={10}
    className='bg-blue-700 text-white cursor-pointer p-2 px-4 rounded-md' 
    text='Button'/>
  )
}

export default Page