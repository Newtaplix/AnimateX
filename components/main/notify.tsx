"use client"
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface props{
    message: string,
    condition: boolean,
    icon?: ReactNode,
    type?: string,
    direction?: string,
    axis?: string,
    displacement?: string,
    duration?: string
}

const Notify = ({message, icon, condition, type, axis="y", direction = "up", displacement = "10", duration= "0.4"}:props) => {
    const val = Number(displacement)
  return (
    <motion.div 
    initial={{
        y:  direction === "up" && axis === "y" ? val: direction === "down" && axis === "y" ? -val: 0,
        x: direction === "left" && axis === "x" ? val: direction === "right" && axis === "x" ? -val: 0,
        opacity: 0
    }}
    animate={{
        y: !condition && axis === "y" && direction === "up" ? val: !condition && axis === "y" && direction === "down" ? -val: 0,  
        x: !condition && axis === "x" && direction === "right" ? val: !condition && axis === "x" && direction === "left" ? -val: 0,
        opacity: condition ? 1 : 0
    }}
    transition={{
        duration: duration === ""? 0.4 :`${Number(duration)}`
    }}
    className={cn('px-4 flex items-center mx-auto justify-center gap-2 rounded-full py-1 border-1',
        !type ? "border-gray-600 tc" :
     type === "danger" ? "border-red-500 text-red-500" : type === "success" ? "border-green-500 text-green-500" : '')}>
        {icon}
        <span>{message}</span>
    </motion.div>
  )
}

export default Notify