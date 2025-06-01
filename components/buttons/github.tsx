"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Github = () => {
    const [isHover, setIsHovered] = useState(false)
  return (
    <button 
    onMouseEnter={() => setIsHovered(true)} 
    onMouseLeave={() => setIsHovered(false)}
    className="p-2 px-4 flex gap-2 cursor-pointer items-center bg-black text-white rounded-md">
        <span>Learn More</span>
       
        <motion.svg xmlns="http://www.w3.org/2000/svg" 
        width="17" 
        height="17"
        viewBox="0 0 24 24" 
        fill="none"
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round">
        <motion.path 
        initial={{ opacity: 0, x: -7 }}
        animate={{ opacity: isHover ? 1 : 0, x: isHover ? 0 : -8}}
        transition = {{
            duration: 0.3
        }}
         d="M5 12h14"/>
         <motion.path 
         initial={{ x: -8}}
         animate={{ x: isHover ? 0 : -8}}
         transition = {{
            duration: 0.3
        }}
          d="m12 5 7 7-7 7"/>
        </motion.svg>
    </button>
  )
}

export default Github