"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface zoopbtn{
    text: string,
    className?: string,
    duration?: number,
    staggerDuration?: number,
    onClick?: () => void
}
export const Zoop = ({text, duration=0.25, onClick, staggerDuration=0.025, className}:zoopbtn) => {
    
    const letters = text.split(/(?=\s)|/)
    const DURATION = duration
    const STAGGER = staggerDuration
    const origin = "relative overflow-hidden"
  return (
    <motion.div 
    onClick={onClick}
    initial="initial"
    whileHover="hovered"
    className={ origin + " " + className}>

        {/* Initail text */}
      <div>
        {letters.map((l, i) => 
            <motion.span
            className='inline-block h-fit'
            variants={{
                initial: {y: 0},
                hovered: {y: "-100%"}
            }}
            transition={{ 
                ease: "easeInOut",
                delay: i * STAGGER,
                duration: DURATION
            }}
            key={i}>{l}</motion.span>
            )}</div>

            {/* reveal text */}
      <div className='absolute inset-0'>
        {letters.map((l, i) => 
            <motion.span
            className='inline-block'
            variants={{
                initial: {y: "100%"},
                hovered: {y: 0}
            }}
            transition={{ 
                ease: "easeInOut",
                delay: i * STAGGER,
                duration: DURATION
            }}
            
            key={i}>{l}</motion.span>
            )}</div>
    </motion.div>
  )
}




export const ZoopCode = `
"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface zoopbtn{
    text: string,
    className?: string,
    duration?: number,
    staggerDuration?: number,
    onClick?: () => void
}
export const Zoop = ({text, duration=0.25, onClick, staggerDuration=0.025, className}:zoopbtn) => {
    
    const letters = text.split(/(?=\s)|/)
    const DURATION = duration
    const STAGGER = staggerDuration
    const origin = "items-center relative overflow-hidden cursor-pointer"
  return (
    <motion.div 
    onClick={onClick}
    initial="initial"
    whileHover="hovered"
    className={ origin + " " + className}>

        {/* Initail text */}
      <div>
        {letters.map((l, i) => 
            <motion.span
            className='inline-block h-fit'
            variants={{
                initial: {y: 0},
                hovered: {y: "-100%"}
            }}
            transition={{ 
                ease: "easeInOut",
                delay: i * STAGGER,
                duration: DURATION
            }}
            key={i}>{l}</motion.span>
            )}</div>

            {/* reveal text */}
      <div className='absolute inset-0'>
        {letters.map((l, i) => 
            <motion.span
            className='inline-block'
            variants={{
                initial: {y: "100%"},
                hovered: {y: 0}
            }}
            transition={{ 
                ease: "easeInOut",
                delay: i * STAGGER,
                duration: DURATION
            }}
            
            key={i}>{l}</motion.span>
            )}</div>
    </motion.div>
  )
}

`
export const UseCaseCode = `import React from 'react'
import { Zoop } from './zoop'
const page = () => {
  return (
    <Zoop text='AnimateX'/>
  )
}

export default page`