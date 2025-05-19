'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'



const SecondBrain = () => {
    const [isFocus, setIsFocus] = useState(false)
  return (
    <div>
        <motion.button 
        onMouseEnter={() => setIsFocus(true)}
        onMouseLeave={() => setIsFocus(false)}
        whileHover={{ 
            scale: 1.3,
            filter: "blur[12px]"
        }}
        className="px-6 hover:border-5 hover:border-white/50 cursor-pointer py-2 rounded-md border bg-purple-600 text-white relative overflow-clip">
            <motion.div
            initial={{
                x: -100,
            }}
            animate={{
                x: isFocus ? 0 : -100
            }}
             className="absolute left-0 top-0 h-full bg-transparent backdrop-blur-2xl w-[95%]"/>
            Hover Me
        </motion.button>
        
    </div>
  )
}

export default SecondBrain