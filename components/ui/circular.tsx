"use client"
import React, { useState } from 'react'
import {  motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface arrItem{
    icon: React.ReactNode,
    func: () => void
}

interface props{
    items: arrItem[],
    iconStyles?: string,
    toggleBtnStyles?: string,
    displacement?: number
}

export const CircularMenu = ({items, displacement = 110,
    iconStyles='p-2 cursor-pointer rounded-full bg-black text-white',
    toggleBtnStyles="cursor-pointer rounded-full bg-white text-black p-2"}:props) => {
    
    const [isOpen, setIsOpen] = useState(false)
    const Links = items


    const radius = displacement
    const Items = {
        open: (i:number) => ({
            x: radius * Math.cos((i * 2 * Math.PI) / Links.length),
            y: radius * Math.sin((i * 2 * Math.PI) / Links.length),
            scale: 1,
            transition: {
                type: "spring", 
                damping: 10,
                delay: 0.0512 * i
            }
        }),
        close: (i:number) => ({
            x:0,
            y:0,
            scale: 0.8,
            transition: {type: "spring", stiffness: 100, damping: 15, delay: ((Links.length - 1) - i) * 0.0512}
        })
    }

  return (
    <div className='relative rounded-full'>
        <motion.div whileTap={{scale: 1.15}} onClick={() => setIsOpen(!isOpen)} 
            style={{
                width: "50px",
                height: "50px"
            }}
                className={ toggleBtnStyles + " " + 'z-20 overflow-hidden relative'}>
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

        <div className='absolute left-0 p-2 top-0'>
            {
                Links.map((icon, i) => 
                    <motion.div  
                    variants={Items}
                    custom={i}
                    animate= {isOpen ? "open" : "close"} 
                    key={i} onClick={icon.func} className={ iconStyles + " " + 'absolute z-10 left-0 top-0'}>
                        {icon.icon}
                    </motion.div>
                )
            }
        </div>
    </div>
  )
}


export const codes = `
"use client"
import React, { useState } from 'react'
import {  motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface arrItem{
    icon: React.ReactNode,
    func: () => void
}

interface props{
    items: arrItem[],
    iconStyles?: string,
    toggleBtnStyles?: string,
    displacement?: number
}

export const CircularMenu = ({items, displacement = 110,
    iconStyles='p-2 cursor-pointer rounded-full bg-black text-white',
    toggleBtnStyles="cursor-pointer rounded-full bg-white text-black p-2"}:props) => {
    
    const [isOpen, setIsOpen] = useState(false)
    const Links = items


    const radius = displacement
    const Items = {
        open: (i:number) => ({
            x: radius * Math.cos((i * 2 * Math.PI) / Links.length),
            y: radius * Math.sin((i * 2 * Math.PI) / Links.length),
            scale: 1,
            transition: {
                type: "spring", 
                damping: 10,
                delay: 0.0512 * i
            }
        }),
        close: (i:number) => ({
            x:0,
            y:0,
            scale: 0.8,
            transition: {type: "spring", stiffness: 100, damping: 15, delay: ((Links.length - 1) - i) * 0.0512}
        })
    }

  return (
    <div className='relative rounded-full'>
        <motion.div whileTap={{scale: 1.15}} onClick={() => setIsOpen(!isOpen)} 
            style={{
                width: "50px",
                height: "50px"
            }}
                className={ toggleBtnStyles + " " + 'z-20 overflow-hidden relative'}>
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

        <div className='absolute left-0 p-2 top-0'>
            {
                Links.map((icon, i) => 
                    <motion.div  
                    variants={Items}
                    custom={i}
                    animate= {isOpen ? "open" : "close"} 
                    key={i} onClick={icon.func} className={ iconStyles + " " + 'absolute z-10 left-0 top-0'}>
                        {icon.icon}
                    </motion.div>
                )
            }
        </div>
    </div>
  )
}
`



export const UseCase = `
"use client"
import React from 'react'
import { CircularMenu } from './circular'
import { Drama, File, Folder, MousePointer, Pen, Text, Puzzle } from 'lucide-react'



const Page = () => {
  const list = [
    {
        icon: <Pen size={34}/>,
        func: () => {},
    },
    {
        icon: <Text size={34}/>,
        func: () => {},
    },
    {
        icon: <File size={34}/>,
        func: () => {},
    },
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
    <CircularMenu displacement={140} items={list}/>
  )
}

export default Page
`