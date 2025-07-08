"use client"
import React, { useState } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion, Variants } from 'framer-motion'

const arrowVariant: Variants = {
    initial:{
        opacity: 0,
        x:0,
        pathLength: 0
    },
    animate:{
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 3
        }
    }
}

interface gitbutton{
    onClick?: () => void
}
const GBTButton = ({ onClick }:gitbutton) => {
    const [isHover, setIsHovered] = useState(false)
  return (
    <motion.button onClick={onClick} onMouseLeave={() => setIsHovered(false)} 
    onMouseEnter={() => setIsHovered(true)} 
    className='bg-black gap-1 px-3 py-2 rounded-md text-white text-center w-40 flex items-center justify-center shadow-md cursor-pointer'>
        Components
        <AnimatePresence>
            {
                isHover ? 
                <motion.div layout layoutId='arrow' variants={arrowVariant} initial="initial" animate="animate" exit="initial">
                    <ChevronRight size={17}/>
                </motion.div>
                :
                <motion.div layout layoutId='arrow' variants={arrowVariant} initial="initial" animate="animate" exit="initial">
                    <ArrowRight size={17}/>
                </motion.div> 
            }
        </AnimatePresence>
    </motion.button>
  )
}

export default GBTButton