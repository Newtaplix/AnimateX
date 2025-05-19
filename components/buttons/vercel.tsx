"use client"
import React from 'react'
import { motion, Variants } from "framer-motion"


const parentDive:Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.2,
            repeat: Infinity,
        }
    }
}

const Children = {
    hidden: {
        scale: 1,
    },
    show:{
        scale: [1,1.5,1],
        transition: {
           
        }
    }
}
const Vercel = () => {
  
  return (
    <div>
        <motion.div 
         variants={parentDive} initial="hidden" animate="show" className='flex blur-[10px] w-40'>
           {
                ["red","green","yellow"].map((color) => 
                    <motion.div variants={Children} key={color} className={`w-10 h-10 bg-${color}-400 flex-1`}/>
                )
           }
        </motion.div>
        Vercel

    </div>
  )
}

export default Vercel