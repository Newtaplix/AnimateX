"use client"
import React from 'react'
import { motion } from 'framer-motion'

export const MeltingButton = () => {

    const drops = [
        {
            x: 10,
            y: 6
        },
        {
            x: 75,
            y: 6
        },
        {
            x: 30,
            y: 6
        },
        {
            x: 50,
            y: 6
        }
     ]

  return (
    <div className="rounded-md text-black p-2 relative flex items-center justify-center">
        <div className='w-full h-full rounded-md p-2 relative z-20 px-6'>
            Button
        </div>

        <svg className='w-0 h-0 absolute bottom-0'>
            <defs>
                <filter id='goo'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation={"10"} result='blur'/>
                    <feColorMatrix in='blur' mode={"matrix"} values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7' result='goo'/>
                    <feBlend in='SourceGraphic' in2={"goo"}/>
                </filter>
            </defs>
        </svg>



        <div className='z-10 absolute inset-0 rounded-md [filter:url(#goo)]'>
            <div className='w-full h-full rounded-md bg-red-500 relative'>
               {
                drops.map((pos, i) => 
                    <motion.div key={i}
                        initial={{
                            y: pos.y,
                            x: pos.x
                        }} 
                        className='absolute w-2 h-2 rounded-full bg-red-500 bottom-0 left-1'/>
                )
               }
            </div>

        </div>
    </div>
  )
}
