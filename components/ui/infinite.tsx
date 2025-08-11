import React from 'react'
import { motion } from 'framer-motion'

export const InfiniteCarousel = () => {

    const items= [
        "green", "yellow","purple","orange"
    ]
  return (
    <div style={{
        maskImage: "linear-gradient( to right, black, transparent, black )"
    }} className='w-full h-full flex items-center relative'>
        <motion.div 
            animate={{
                x: "-50%"
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
            }}
                className='flex gap-2 justify-end w-fit overflow-x-visible relative'>
            {
                items.map((item, i) => 
                <div style={{background: item}} 
                className='w-60 text-black h-70 rounded-md flex items-center justify-center' key={i}>{item}</div>)
            }
            {
                items.map((item, i) => 
                <div style={{background: item}} 
                className='w-60 h-70 text-black rounded-md flex items-center justify-center' key={i}>{item}</div>)
            }
    </motion.div>
    </div>
  )
}


export const Code = `
import React from 'react'
import { motion } from 'framer-motion'

export const InfiniteCarousel = () => {

    const items= [
        "green", "yellow","purple","orange"
    ]
  return (
    <div className='w-full h-full flex items-center relative'>
         <div className='absolute h-full w-[10%] z-20 -left-10 blur-[18px] bg-black'></div>
         <div className='absolute h-full w-[10%] z-20 -right-10 blur-[18px] bg-black'></div>
        <motion.div 
            animate={{
                x: "-50%"
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
            }}
                className='flex gap-2 justify-end w-fit overflow-x-visible relative'>
            {
                items.map((item, i) => 
                <div style={{background: item}} 
                className='w-60 text-black h-70 rounded-md flex items-center justify-center' key={i}>{item}</div>)
            }
            {
                items.map((item, i) => 
                <div style={{background: item}} 
                className='w-60 h-70 text-black rounded-md flex items-center justify-center' key={i}>{item}</div>)
            }
    </motion.div>
    </div>
  )
}

`