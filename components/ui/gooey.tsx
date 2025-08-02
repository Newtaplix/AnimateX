"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { Drama, MousePointer, Folder, Puzzle, X, Menu } from 'lucide-react'
import React, { useState } from 'react'

type opt = "up" | "down" | "left" | "right" | string

interface props{
    direction?: opt
}


export const GooeyMenu = ({direction ="right"}:props) => {
    const list = [
        {
            icon: <Folder size={34}/>,
            func: () => {},
        },
        {
            icon: <MousePointer size={34}/>,
            func: () => {},
        },
        {
            icon: <Drama size={34}/>,
            func: () => {},
        },
        {
          icon: <Puzzle size={34}/>,
          func: () => {},
      },
    ]
    const [isOpen, setIsOpen] = useState(false)
    const Items = {
        open: (i:number) => ({
            x: direction === "right" ? (i + 1) * 55 : direction === "left" ? (i + 1) * -55 : 0,
            y: direction === "down" ? (i + 1) * 55 : direction === "up" ? (i + 1) * -55 : 0,
            scale: 1,
            transition: {
                type: "spring", 
                damping: 13,
                delay: 0.0512 * i
            }
        }),
        close: (i:number) => ({
            x:0,
            y:0,
            scale: 0.8,
            transition: {type: "spring", stiffness: 100, damping: 14, delay: i * 0.0512}
        })
    }
  return (
   <>
            
         {/* svg filter */}
         <svg className='w-0 h-0 absolute'>
            <defs>
                <filter id='goo'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation={"10"} result='blur'/>
                    <feColorMatrix in='blur' mode={"matrix"} values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7' result='goo'/>
                    <feBlend in='SourceGraphic' in2={"goo"}/>
                </filter>
            </defs>
        </svg>

        {/* parent container */}
         <div className='relative rounded-full [filter:url(#goo)]'>

                {/* toggle button */}
                <motion.div whileTap={{scale: 1.15}} onClick={() => setIsOpen(!isOpen)} 
                    style={{
                        width: "50px",
                        height: "50px"
                    }}
                        className={'p-2 cursor-pointer rounded-full bg-white text-black z-20 overflow-hidden relative'}>

                        {/* X icon */}
                    <AnimatePresence>
                        {
                            !isOpen &&
                            <motion.div 
                            className='absolute inset-0 rounded-full flex items-center justify-center'
                            initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0, opacity: 0 }} >
                                <Menu size={34}/>
                            </motion.div>
                        }
                    </AnimatePresence>

                        {/* Y icon */}
                    <AnimatePresence>
                        {
                            isOpen &&
                            <motion.div 
                            className='absolute inset-0 rounded-full flex items-center justify-center'
                            initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0, opacity: 0 }}>
                                <X size={34}/>
                            </motion.div>
                        }
                    </AnimatePresence>
                </motion.div>

                {/* list of icons */}
                <div className='absolute left-0 p-2 top-0'>
                    {
                        list.map((icon, i) => 
                            <motion.div  
                            variants={Items}
                            custom={i}
                            animate= {isOpen ? "open" : "close"} 
                            key={i} onClick={icon.func} className={'cursor-pointer rounded-full bg-white text-black p-2 absolute z-10 left-0 top-0'}>
                                {icon.icon}
                            </motion.div>
                        )
                    }
                </div>
    </div>
   </>
  )
}



export const Code = `
"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { Drama, MousePointer, Folder, Puzzle, X, Menu } from 'lucide-react'
import React, { useState } from 'react'

type opt = "up" | "down" | "left" | "right"

interface props{
    direction?: opt
}


export const GooeyMenu = ({direction ="right"}:props) => {
    const list = [
        {
            icon: <Folder size={34}/>,
            func: () => {},
        },
        {
            icon: <MousePointer size={34}/>,
            func: () => {},
        },
        {
            icon: <Drama size={34}/>,
            func: () => {},
        },
        {
          icon: <Puzzle size={34}/>,
          func: () => {},
      },
    ]
    const [isOpen, setIsOpen] = useState(false)
    const Items = {
        open: (i:number) => ({
            x: direction === "right" ? (i + 1) * 55 : direction === "left" ? (i + 1) * -55 : 0,
            y: direction === "down" ? (i + 1) * 55 : direction === "up" ? (i + 1) * -55 : 0,
            scale: 1,
            transition: {
                type: "spring", 
                damping: 13,
                delay: 0.0512 * i
            }
        }),
        close: (i:number) => ({
            x:0,
            y:0,
            scale: 0.8,
            transition: {type: "spring", stiffness: 100, damping: 14, delay: i * 0.0512}
        })
    }
  return (
   <>
            
         {/* svg filter */}
         <svg className='w-0 h-0 absolute'>
            <defs>
                <filter id='goo'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation={"10"} result='blur'/>
                    <feColorMatrix in='blur' mode={"matrix"} values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7' result='goo'/>
                    <feBlend in='SourceGraphic' in2={"goo"}/>
                </filter>
            </defs>
        </svg>

        {/* parent container */}
         <div className='relative rounded-full [filter:url(#goo)]'>

                {/* toggle button */}
                <motion.div whileTap={{scale: 1.15}} onClick={() => setIsOpen(!isOpen)} 
                    style={{
                        width: "50px",
                        height: "50px"
                    }}
                        className={'p-2 cursor-pointer rounded-full bg-white text-black z-20 overflow-hidden relative'}>

                        {/* X icon */}
                    <AnimatePresence>
                        {
                            !isOpen &&
                            <motion.div 
                            className='absolute inset-0 rounded-full flex items-center justify-center'
                            initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0, opacity: 0 }} >
                                <Menu size={34}/>
                            </motion.div>
                        }
                    </AnimatePresence>

                        {/* Y icon */}
                    <AnimatePresence>
                        {
                            isOpen &&
                            <motion.div 
                            className='absolute inset-0 rounded-full flex items-center justify-center'
                            initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 0, opacity: 0 }}>
                                <X size={34}/>
                            </motion.div>
                        }
                    </AnimatePresence>
                </motion.div>

                {/* list of icons */}
                <div className='absolute left-0 p-2 top-0'>
                    {
                        list.map((icon, i) => 
                            <motion.div  
                            variants={Items}
                            custom={i}
                            animate= {isOpen ? "open" : "close"} 
                            key={i} onClick={icon.func} className={'cursor-pointer rounded-full bg-white text-black p-2 absolute z-10 left-0 top-0'}>
                                {icon.icon}
                            </motion.div>
                        )
                    }
                </div>
    </div>
   </>
  )
}`


export const UseCase = `
"use client"
import React from 'react'
import { GooeyMenu } from './gooey'

const Page = () => {
  return (
    <GooeyMenu direction='right'/>
  )
}

export default Page
`