"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'

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
  return (
   <div className='relative'>
            <div className='absolute w-full h-full bg-gray-800 blur-[13px]'/>
         <div className='bg-black overflow-hidden relative p-3 w-15 h-15 rounded-md text-white flex items-center justify-center text-3xl font-bold shadow-2xl'>
            <motion.div variants={logo} initial="initial" animate="animate" className='absolute top-0 blur-[15px] left-0 h-200 w-[20%] bg-white'/>
                Ax
            </div>
   </div>
  )
}

export default Logo