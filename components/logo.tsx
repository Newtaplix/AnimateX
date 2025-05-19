"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { useRouter } from 'next/navigation'

const logo:Variants = {
    initial: {
        x: -100
    },
    animate: {
        x: 100,
        transition: {
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut"
        }
    }
}



const Logo = () => {
    const router = useRouter()
  return (
   <div onClick={() => router.push("/")} className='cursor-pointer relative'>
            <div className='absolute w-full h-full bg-gray-800 blur-[10px]  md:blur-[13px]'/>
         <div className='bg-black overflow-hidden relative p-3 w-10 h-10 md:w-15 md:h-15 rounded-md text-white flex items-center justify-center text-2xl md:text-3xl font-bold shadow-2xl'>
            <motion.div variants={logo} initial="initial" animate="animate" className='absolute top-0 blur-[15px] left-0 h-200 w-[20%] bg-white'/>
                Ax
            </div>
   </div>
  )
}

export default Logo