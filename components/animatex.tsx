"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Swoop from './swoop'
import Link from 'next/link'

const AnimateX = () => {
  const [currentItem, setCurrentItem] = useState<number>(0)
  const [direction, setDirection] = useState(1)
  const max = 2
  const arr = [
    "green", "red","yellow"
  ]
  const colors = ["#00FF00", "#FF0000", "#FFFF00", "#0000FF"]

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentItem(prev => {
        let next = prev + direction;
        if(next >= max){
          setDirection(-1)
          next = max
        }
        if(next <= 0){
          setDirection(1);
          next = 0
        }
        return next;
      })
    , 1500)
    return () => clearInterval(interval)
  }, [direction])
  
  return (
    <div>
       <div  className='relative px-4 mb-13 w-fit h-fit mx-auto'>
         <div className="px-4 py-2 rounded-md w-fit mx-auto font-bold bg-white blur-[0.4px] relative z-20">
              AnimateX
          </div> 
          <div className='w-full flex absolute top-0 right-0 left-0 z-10 blur-[18px]'>
              {
                arr.map((item, i) => 
                  <motion.div key={item}
                    layoutId='Morph'
                    animate={{
                      scale: currentItem === i ? 1.4 : 1,
                      borderRadius: currentItem === i && i === 0 || 2 ? "8px" : "0",
                      rotate: currentItem === i ? "360deg" : "0deg",
                      backgroundColor: currentItem === i ? colors[i] : colors[Math.floor(Math.random() * colors.length)]
                    }}
                    transition={{
                      duration: 3,
                    }}
                    className={cn('bg-green-500 w-20 h-15', i === 1 ? "rounded-none" : i === 0 ? "rounded-l-md" : "rounded-r-md" )}></motion.div> 
                )
              }         
          </div>   
       </div>
       <Swoop id={currentItem}/>
       <div className='flex gap-8 mt-5 items-center justify-center'>
              <button className='bg-black px-3 py-2 rounded-md text-white text-center w-40 flex items-center justify-center shadow-md cursor-pointer'>
                <Link href={"/components"}>Components</Link>
              </button>  
              <button className='bg-gray-100 px-3 py-2 rounded-md text-black text-center w-40 flex items-center justify-center shadow-md cursor-pointer'>
                <Link className="w-full h-full items-center text-center" href="https://github.com/Newtaplix/AnimateX">Star on Github</Link>
                </button> 
       </div>
      
    </div>
  )
}

export default AnimateX