"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface swoopProp{
    id: number
}

const Swoop = ({id}:swoopProp) => {
    const current = id
    const words = ["Experience", "Learn", "Animate"]
  return (
    <div>
        <div className='flex mb-5 w-fit mx-auto px-2'>
            {
                words.map((item, i) => 
                    <motion.div key={item} className='text-2xl md:text-4xl lg:text-5xl relative w-fit px-2 md:px-5 text-center items-center text-gray-300 flex'>
                        <span>{item}</span>
                    <AnimatePresence>
                        {
                                current === i ?
                                <motion.div 
                                layoutId="header-text"
                                
                                animate={{

                                    opacity: i === current ? 1 : 0
                                }}
                                className='bg-transparent absolute w-full top-0 left-0 right-0 h-full'>
                                    <div className='w-full h-full relative transparent border-2 border-gray-400 bg-gray-400/2'>
                                            <div className='bg-gray-400 absolute h-2 w-2 rounded-full -top-1 -left-1 '/>
                                            <div className='bg-gray-400 absolute h-2 w-2 rounded-full -top-1 -right-1 '/>
                                            <div className='bg-gray-400 absolute h-2 w-2 rounded-full -bottom-1 -left-1 '/>
                                            <div className='bg-gray-400 absolute h-2 w-2 rounded-full -bottom-1 -right-1 '/>
                                    </div>

                                </motion.div>
                                : null
                        }
                    </AnimatePresence>
                    </motion.div>
                )
            }
        </div>
    </div>
  )
}

export default Swoop