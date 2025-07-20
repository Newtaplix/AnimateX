import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


interface press{
    pressDuration?: number,
    text?:string,
    className?:string,
    sliderStyle?:string,
    onFull?: () => void
}

export const Press = ({pressDuration = 2, text, className, onFull, sliderStyle }:press) => {
    const [isComplete, setIsComplete] = useState(false)
    const ref = useRef<ReturnType<typeof setTimeout> | null>(null)
    
    
    const defaultStyle = "p-2 px-4 items-center justify-center flex rounded-md relative overflow-hidden text-black"
    const defaultSlider = 'absolute h-full w-full z-10 bg-blue-300 top-0 left-0'
    
    
    const handlepointerdown = () => {
        ref.current = setTimeout(() => {
            setIsComplete(true)
            if(onFull){
                onFull()
            }
        },(pressDuration * 1000) + 500)
    }

    const handlepointerup = () => {
        if(ref.current){
            clearTimeout(ref.current);
            setIsComplete(false)
        }
    }
    
  return (
    <motion.div
    whileTap="press"
    initial="ïnitial"
    onPointerUp={() => handlepointerup()}
    onPointerDown={() => handlepointerdown()}
    onPointerLeave={() => handlepointerup()}
     className={className + " " + defaultStyle}>
     
      <div className='z-20'>
      <AnimatePresence>
            {
                isComplete ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <motion.path 
                        d="M21.801 10A10 10 0 1 1 17 3.335"
                        initial={{pathLength: 0}}
                        animate={{
                            pathLength: 1 
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            
                        }}
                        />
                        <motion.path 
                        d="m9 11 3 3L22 4"
                        initial={{pathLength: 0}}
                        animate={{
                            pathLength: 1 
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.1
                        }}
                        />
                    </svg> 
                          :   <motion.span 
                          initial={{y: -10}}
                          animate={{y: 0}}
                          exit={{y: -10}}
                          >{text}</motion.span>
            }
        
        </AnimatePresence>
      </div>



       <motion.div 
       layout 
       initial= {{width: 0}}
        variants={{
            press: {width: "100%"},
           
        }}
        transition={{
            duration: pressDuration + 0.5
        }}
        
       className={defaultSlider + " " + sliderStyle}/>
    </motion.div>
  )
}



export const Code = `
import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


interface press{
    pressDuration?: number,
    text?:string,
    className?:string,
    sliderStyle?:string,
    onFull?: () => void
}

export const Press = ({pressDuration = 2, text, className, onFull, sliderStyle }:press) => {
    const [isComplete, setIsComplete] = useState(false)
    const ref = useRef<ReturnType<typeof setTimeout> | null>(null)
    
    
    const defaultStyle = "p-2 px-4 items-center justify-center flex rounded-md relative overflow-hidden text-black"
    const defaultSlider = 'absolute h-full w-full z-10 bg-blue-300 top-0 left-0'
    
    
    const handlepointerdown = () => {
        ref.current = setTimeout(() => {
            setIsComplete(true)
            if(onFull){
                onFull()
            }
        },(pressDuration * 1000) + 500)
    }

    const handlepointerup = () => {
        if(ref.current){
            clearTimeout(ref.current);
            setIsComplete(false)
        }
    }
    
  return (
    <motion.div
    whileTap="press"
    initial="ïnitial"
    onPointerUp={() => handlepointerup()}
    onPointerDown={() => handlepointerdown()}
    onPointerLeave={() => handlepointerup()}
     className={className + " " + defaultStyle}>
     
      <div className='z-20'>
      <AnimatePresence>
            {
                isComplete ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <motion.path 
                        d="M21.801 10A10 10 0 1 1 17 3.335"
                        initial={{pathLength: 0}}
                        animate={{
                            pathLength: 1 
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            
                        }}
                        />
                        <motion.path 
                        d="m9 11 3 3L22 4"
                        initial={{pathLength: 0}}
                        animate={{
                            pathLength: 1 
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.1
                        }}
                        />
                    </svg> 
                          :   <motion.span 
                          initial={{y: -10}}
                          animate={{y: 0}}
                          exit={{y: -10}}
                          >{text}</motion.span>
            }
        
        </AnimatePresence>
      </div>



       <motion.div 
       layout 
       initial= {{width: 0}}
        variants={{
            press: {width: "100%"},
           
        }}
        transition={{
            duration: pressDuration + 0.5
        }}
        
       className={defaultSlider + " " + sliderStyle}/>
    </motion.div>
  )
}


`

export const UseCase = `
"use client"
import React, { useState } from 'react'
import { Press } from './press'

const Page = () => {
    const [val, setVal] = useState(0)

    const add = () => {
      setVal((prev) => prev + 1)
    }
  return (
    <div className='flex items-center justify-center'>
    <span>{val}</span>
    <Press 
    text='Press & Hold' 
    className='w-44 bg-white' 
    pressDuration={1} 
    onFull={() => add()} 
    sliderStyle='bg-red-200'/>
</div>
  )
}

export default Page
`