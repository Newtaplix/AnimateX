"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Creators = () => {
    const images = [
        "/next.svg", "/typescript.svg", "tail.svg"
    ]
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='flex justify-center flex-col items-center my-28'>
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className='flex justify-center flex-col items-center'>
            <h1 className='font-bold mt-10 text-2xl'>Created With</h1>
            <div className='relative mt-3 w-1/2 h-20'>
                {
                    images.map((item, i) => 
                    <motion.div layout key={i} initial={{
                        x: (Math.floor((i - 1) * 60))
                    }} 
                    animate={{
                        x: isHovered ? (Math.floor((i - 1) * 90)) :  (Math.floor((i - 1) * 60))
                    }}
                    className='absolute top-0 left-0 right-0 mx-auto rounded-full'>
                        <div key={i} className='relative  w-20 h-20 rounded-full'><Image alt='img' src={item} fill/></div>
                    </motion.div>)
                }
            </div>
        </div>
    </div>
  )
}

export default Creators