"use client"
import React, { useState } from 'react'
import { Snail, Wand, Command,Code,Zap } from 'lucide-react'
import {  motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const Cards = () => {
    const quotes = [
        {
            quote: "Every pixels deserves to dance - we make sure it moves with purpurse and style",
            icon: <Wand/>
        },
        {
            quote: "Bring your interface to life - one motion at a time.",
            icon: <Command/>
        },
        {
            quote: "Clean code. slick motion. Built for developers who obsess over the details",
            icon: <Snail/>

        },
        {
            quote: "Design shouldn't sit still. We bring it to life with every interaction.",
            icon: <Zap/>
        },
        {
            quote: "Animations so smooth you'll forget your're looking at code.",
            icon: <Code/>
        }
    ]
    const [isHovered, setIsHovered] = useState(true)
  return (
    <>
      <div onMouseEnter={() => setIsHovered(true)} className='w-full hidden md:flex gap-2 relative h-70'>
          {
            quotes.map((item, i) => 
            <motion.div
            layout
            initial={{
                x: -((i * 7) - 5),
                rotate: `${((i + 2) * 2) - 5}deg`
            }}
            animate={{
                x: isHovered ? (Math.floor(((i - 2)* 240)))  : 0,
                rotate: isHovered ?`${Math.floor(((i - 2) * 2))}deg` : `${((i + 2) * 2) - 5}deg`,
            }}
            transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: 0.3,
                type: "spring"
            }}
             key={i} className={cn('p-2 flex flex-col right-0 left-0 mx-auto items-center text-center w-60 h-70 justify-center border-1 border-gray-300/50 cursor-pointer rounded-md shadow-md bg-white absolute' )}>
                <div className='p-4 rounded-full w-20 h-20 flex items-center justify-center bg-gray-300'>
                   {item.icon} 
                </div>
                <p className='mt-3'>{item.quote}</p>
            </motion.div>
            )
        }
      </div>
    </>
  )
}

export default Cards