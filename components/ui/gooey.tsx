"use client"
import { AnimatePresence, motion } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import React, { useState } from 'react'

type opt = "up" | "down" | "left" | "right" | string

interface list{
    icon: React.ReactNode,
    func: () => void
}

interface props{
    direction?: opt,
    list: list[], 
}


export const GooeyMenu = ({direction ="right", list}:props) => {

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
import { X, Menu } from 'lucide-react'
import React, { useState } from 'react'

type opt = "up" | "down" | "left" | "right" | string

interface list{
    icon: React.ReactNode,
    func: () => void
}

interface props{
    direction?: opt,
    list: list[], 
}


export const GooeyMenu = ({direction ="right", list}:props) => {

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

`


export const CodeJS = `
import { AnimatePresence, motion } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import React, { useState } from 'react'

export const GooeyMenu = ({direction ="right", list}) => {

    const [isOpen, setIsOpen] = useState(false)
    const Items = {
        open: (i) => ({
            x: direction === "right" ? (i + 1) * 55 : direction === "left" ? (i + 1) * -55 : 0,
            y: direction === "down" ? (i + 1) * 55 : direction === "up" ? (i + 1) * -55 : 0,
            scale: 1,
            transition: {
                type: "spring", 
                damping: 13,
                delay: 0.0512 * i
            }
        }),
        close: (i) => ({
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
                    <feBlend in='SourceGraphic' in2='goo'/>
                </filter>
            </defs>
         </svg>

         <div className='relative flex items-center justify-center'>
            <div className='relative flex items-center justify-center'>
                <AnimatePresence>
                    {
                        list.map((item, i) => 
                        <motion.div
                        key={i}
                        initial={false}
                        animate={isOpen ? Items.open(i) : Items.close(i)}
                        className='absolute cursor-pointer'
                        onClick={() => {
                            item.func()
                            setIsOpen(false)
                        }}
                        >
                            <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg'>
                                {item.icon}
                            </div>
                        </motion.div>
                        )
                    }
                </AnimatePresence>
                
                <motion.div
                onClick={() => setIsOpen(!isOpen)}
                className='w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center cursor-pointer shadow-lg'
                animate={{
                    rotate: isOpen ? 45 : 0
                }}
                >
                    <AnimatePresence mode="wait">
                        {
                            isOpen ? 
                            <X size={24} color='white'/>
                            :
                            <Menu size={24} color='white'/>
                        }
                    </AnimatePresence>
                </motion.div>
            </div>
         </div>
   </>
  )
}

`


export const UseCase = `
"use client"
import React from 'react'
import { GooeyMenu } from './gooey'
import { Drama, Folder, MousePointer, Puzzle } from 'lucide-react'

const Page = () => {
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

  return (
    <GooeyMenu list={list} direction='right'/>
  )
}

export default Page
`


