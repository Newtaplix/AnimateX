"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface MarkerProp{
    level: string
}

const Marker = ({level}:MarkerProp) => {
    const [isfocus, setfocus] = useState(false)
  return (
  <>
    <AnimatePresence>
    {
            !isfocus ?
            <motion.div whileHover={{ scale: 1.1}} 
            layoutId='marker'
            initial={{
                opacity: 1
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0,
                scale: 1.1
            }}
            transition={{duration: 0.2}}
            style={{
                borderRadius: "50%"
            }}
            onMouseEnter={() => setfocus(true)} className={cn('absolute top-3 right-2 bg-green-500 w-5 h-5 cursor-pointer', level === "Normal" ? "bg-yellow-500" : level === "Hard" ? "bg-red-500" : "")}/> 
            :
            <motion.div
            initial={{
                opacity: 1
            }}
            animate={{
                opacity: 1
            }}
            exit={{
                opacity: 0,
                scale: 0.9
            }}
            transition={{ duration: 0.2}}
            style={{
                borderRadius: "20px"
            }}
            layoutId='marker' onMouseLeave={() => setfocus(false)} className={cn('absolute top-3 right-2 font-bold text-white bg-green-500 px-2 py-1 text-xs cursor-pointer rounded-full', level === "Normal" ? "bg-yellow-500" : level === "Hard" ? "bg-red-500" : "")}><span>{level}</span></motion.div>
        }
    </AnimatePresence>
  </>
  )
}

export default Marker