"use client"
import React from 'react'
import { useRouter } from 'next/navigation'



const Logo = () => {
    const router = useRouter()
  return (
   <div onClick={() => router.push("/")} className='cursor-pointer relative'>
            <div className='absolute w-full h-full bg-gray-800 blur-[10px]  md:blur-[10px]'/>
            <div className='bg-black overflow-hidden relative w-10 h-10 md:w-12 md:h-12 rounded-md text-white flex items-center justify-center text-2xl md:text-2xl font-bold shadow-xl'>
                Ax
            </div>
   </div>
  )
}

export default Logo