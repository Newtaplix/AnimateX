"use client"
import React, { useState } from 'react'
import { motion} from 'framer-motion'
import Image from 'next/image'

export const Avatar = () => {
    const [ hovered, setHovered] =  useState(0)
 
    const people = [
        {
            image: "/pic2.jpg",
            name: "Chen",
        },
        {
            image: "/pic5.jpg",
            name: "Johnson",
        },
        {
            image: "/pic3.jpg",
            name: "Michael",
        },
        {
            image: "/pic4.jpg",
            name: "Wilson",
        },
        {
            image: "/pic.jpg",
            name: "David",
        }
    ]

    
    

  return (
    <div className='relative flex'>
        <motion.div 
        
        className='w-14 h-14 relative rounded-full'>
            {
                people.map((person, i) => 
                <motion.div 
                initial={{
                    x: (i) * 34
                }}
                whileHover={{
                    scale: hovered === i ? 1.05 : 0.98,
                    zIndex: 30,
                    y: -7
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() =>  {setHovered(-1)}}
                className={`absolute border-3 cursor-pointer shadow-[2px] shadow-gray-300 border-[#0b0b0f] w-full left-0 top-0 h-full rounded-full z-10`} key={i}>
                   <div className='w-full h-full relative rounded-full'>
                   {
                        hovered === i &&
                        <motion.div 
                        initial={{
                            y: -40,
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                           
                        
                        }}
                        className='flex flex-col items-center w-fit justify-center right-0 -left-1/2 px-2 mx-auto 
                        absolute bg-gray-300/6 text-white border-1 border-gray-500/7 p-1 rounded-md'>
                           <div className='flex relative'>
                            {person.name.split("").map((l, i) => 
                                <motion.p 
                                initial={{y: 15,opacity: 0}}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    delay: i * 0.025
                                }}
                                key={i}>{l}</motion.p>)}
                           </div>
                         
                        </motion.div>
                   }
                    <Image fill src={person.image} className='rounded-full' alt='My Image' />
                   </div>
                </motion.div>)
            }
        </motion.div>
       
    </div>
  )
}
