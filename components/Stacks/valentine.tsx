"use client"
import React, { useState } from 'react'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'


const Valentine = () => {
    const [isHover, setIsHovered] = useState(false)
    const [hovnum, setHoverNum] = useState(0)

    const add = () => {
        if(hovnum < 3){
          setHoverNum(hovnum + 1)
        }else{
          setHoverNum(3)
        }
    }
  return (
    <div className= "w-full h-[85%] md:w-1/2 rounded-lg bg-yellow-300 p-4 flex items-center justify-center relative">
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
            <span className='w-48'>Noname,{hovnum} Would you be my Valentine?</span>
            <div className='flex gap-5 mt-2 bg-purple-400 w-[80%] h-8 relative'>
                <button 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)} 
                className={cn('cursor-pointer bg-red-500 text-white font-bold px-4 w-28 py-2 rounded-md', hovnum > 0 ? "absolute top-0 left-0 z-20" : "")}>Yes</button>
                <motion.button
                whileHover={{
                  rotate: hovnum === 3 ? "25deg" : "0deg",
                  x: hovnum === 3 ? -150 : 0
                }}
                animate={{
                  y: hovnum === 1 ? 50 : hovnum === 2 ? -50 : hovnum === 3 ? 8 : 0 ,
                  x: hovnum === 1 ? -100 : hovnum === 2 ? -200 : hovnum === 3 ? -155 : 0 
                }}
                transition={{
                  duration: 0.4
                }}
                 layout 
                 onMouseEnter={() => add()} className={cn('cursor-pointer right-0 bg-black text-white font-bold px-4 w-28 py-1 absolute rounded-md',
                  hovnum === 1 ? "absolute" :
                  hovnum === 2 ? "absolute" : 
                  hovnum === 3 ? "absolute px-1 z-10 w-fit" : "")}>No</motion.button>
            </div>
        </div>
    </div> 
  )
}

export default Valentine