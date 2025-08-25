"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const AutoSlider = () => {
    const images = [
        "green", "yellow", "Blue", "Purple"
    ]

    const [current, setCurrent] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            if(current < images.length - 1){
                setCurrent((prev) => prev + 1)
            }else{
                setCurrent((prev) => prev - 1)
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [current, images.length])

  return (
    <div className='w-full h-full overflow-hidden rounded-3xl relative'>
        <motion.div 
        animate={{
            x: `-${(current / images.length) * 100}%`
        }}
        transition={{
            stiffness: 100,
            damping: 18,
            ease: "easeInOut"
        }}
        style={{
            width: `${images.length *  100}%`
        }}
        className='flex h-full overflow-hidden'>
            {
                images.map((image, i) => 
                <div style={{ background: image, width: "100%"}} className='h-full' key={i}>
                    {image}{current}
                </div>
                )
            }
        </motion.div>
        {/* <div className='absolute bottom-2 mx-auto left-0 right-0 flex '>
            <div onClick={() => setCurrent((prev) => prev + 1) } className='bg-red-300 p-4'>+</div>
            <div onClick={() => setCurrent((prev) => prev - 1) } className='p-4 bg-blue-300'>-</div>
        </div> */}
    </div>
  )
}
