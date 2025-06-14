"use client"
import React, { useState } from 'react'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'


const Valentine = () => {
    const [isHover, setIsHovered] = useState(false)
    const [randomX, setRandomX] = useState(0)
    const [randomY, setRandomY] = useState(0)

    const randomNumberGeneratorX = (min:number, max:number) => {
        setRandomX(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    const randomNumberGeneratorY = (min:number, max:number) => {
      setRandomY(Math.floor(Math.random() * (max - min)) + min);
  }
  return (
    <div className= "w-full h-[85%] bg-yellow-500/20 md:w-1/2 rounded-lg p-4 flex items-center justify-center relative">
        <div className="flex flex-col gap-2 items-center justify-center text-center w-full">
            <motion.span 
               animate ={{
                y: isHover ? -10 : 0,
                scale: isHover ? 1.2 : 1
           }}
           transition={{
                duration: 0.4
           }}
            className='text-red-600 fill-red-600'> <Heart className='fill-red-600' size={72}/></motion.span>
            <span className='w-48'>Noname, Would you be my Valentine?</span>
            <div className='flex gap-5 mt-2 w-[80%] h-8 relative'>
                <button 
                onMouseEnter={() => {
                  setIsHovered(true)
                  
                }} 
                onMouseLeave={() => setIsHovered(false)} 
                className={cn('cursor-pointer bg-red-500 text-white font-bold px-4 w-28 py-2 rounded-md')}>Yes</button>
                <motion.button
                animate={{
                  y: randomY,
                  x: randomX 
                }}
                transition={{
                  duration: 0.4
                }}
                 layout 
                 onMouseEnter={() => {
                  randomNumberGeneratorX(-250, 150)
                  randomNumberGeneratorY(-210, 95)
                 }} className={cn('cursor-pointer right-0 bg-black text-white font-bold px-4 w-28 py-1 absolute rounded-md')}>No</motion.button>
            </div>
        </div>
    </div> 
  )
}

export default Valentine