"use client"
import React, { useState } from 'react'
import { Plus, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type iconType = "plus" | "drop"
type theme = "dark" | "light"

interface accordion{
  iconType?: iconType,
  className?:string,
  title?:string, 
  children?: React.ReactNode,
  variant?: theme
}

const variants = {
    light: "text-black rounded-md bg-white shadow-sm",
    dark: "text-gray-200 rounded-md bg-gray-200/4",
}

export const Accordion = ({iconType= "drop", className, title, children, variant }:accordion) => {
  const icon = iconType === "drop" ? <ChevronDown size={15}/> : <Plus size={15}/>
  const theme = variant === "dark" ? variants.dark : variants.light
  const [isOpen, setIsOpen] = useState(false)
 
  return (
        <div className={`p-2 w-[100%] ${theme} ${className}`}>
             <div className='justify-between gap-4 w-full flex items-center py-2'>
                <div className=''>
                    {title}
                </div>

                  {/* animated button */}
                <motion.div 
                animate={{rotate : isOpen && iconType === "drop" ? "180deg" : iconType === "plus" && isOpen ? "45deg" : 0}} 
                transition={{
                    stiffness: 0.1
                }}
                onClick={() => setIsOpen(!isOpen)} 
                className='p-2 rounded-md hover:bg-gray-200/5 cursor-pointer'> 
                    <span>{icon}</span>
                </motion.div>
             </div>

             {/* Animated drop body */}

            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                    initial={{
                       height: 0,
                    }}
                    animate={{
                        height: "auto"
                    }}
                    exit={{
                        height: 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
       
                     className='overflow-hidden w-full'>
                       {children}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
  )
}

  


export const AccordionCode = `

"use client"
import React, { useState } from 'react'
import { Plus, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type iconType = "plus" | "drop"
type theme = "dark" | "light"

interface accordion{
  iconType: iconType,
  className?:string,
  title?:string, 
  children?: React.ReactNode,
  variant?: theme
}

const variants = {
    light: "text-black rounded-md bg-white shadow-sm",
    dark: "text-gray-200 rounded-md bg-gray-200/4",
}

export const Accordion = ({iconType= "drop", className, title, children, variant }:accordion) => {
  const icon = iconType === "drop" ? <ChevronDown size={15}/> : <Plus size={15}/>
  const theme = variant === "dark" ? variants.dark : variants.light
  const [isOpen, setIsOpen] = useState(false)
 
  return (
        <div className={'p-2 justify-between mx-auto '${"${theme} ${className}"}''}>
             <div className='justify-between w-full flex items-center py-2'>
                {title}

                  {/* animated button */}
                <motion.div 
                animate={{rotate : isOpen && iconType === "drop" ? "180deg" : iconType === "plus" && isOpen ? "45deg" : 0}} 
                transition={{
                    stiffness: 0.1
                }}
                onClick={() => setIsOpen(!isOpen)} 
                className='p-2 rounded-md hover:bg-gray-200/5 cursor-pointer'> 
                    <span>{icon}</span>
                </motion.div>
             </div>

             {/* Animated drop body */}

            <AnimatePresence>
                {
                    isOpen &&
                    <motion.div
                    initial={{
                       height: 0,
                    }}
                    animate={{
                        height: "auto"
                    }}
                    exit={{
                        height: 0
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
       
                     className='overflow-hidden'>
                       {children}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
  )
}

 `

export const UseCaseCode = `
    import React from 'react'
import { Accordion } from './accordion'

const accordion = () => {
  return (
        <>
            <Accordion iconType="plus" 
            variant='dark' 
            className='w-[450px]' 
            title="Will squid game season 4 be released?" >
                No squid game season 4 will not realeased as the latest season 3 with 
                6 episode marked the end of this exciting series.After the premier it 
                was discovered that fans were disappointed with the finale that marked the 
                death of player 456
            </Accordion>
        </>
  )
}

export default accordion
`