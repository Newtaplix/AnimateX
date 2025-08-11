"use client"
import React, { useEffect } from 'react'
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion'


const colors =  ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]
export const Gradient = () => {
   

    const color = useMotionValue(colors[0])
    const color2 = useMotionValue(colors[0])

    useEffect(() => {
        animate(color, colors, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
        
        animate(color2, colors, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5
        })
    }, [color, color2])

    const backgroundImage = useMotionTemplate`linear-gradient(90deg, ${color2}, ${color})`
  return (
    <motion.div style={{backgroundImage, backgroundColor: "red"}} className='w-full p-2 h-full'>
        Greener Pasture{color.get()}
    </motion.div>
  )
}
