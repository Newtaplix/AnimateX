"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


interface props{
    className?:string,
    auraColor?:string,
    onClick?:() => void,
    text?:string,
    auraTrans?:number
}
export const AuraButton = (
    {className = "bg-black p-2 px-4 rounded-md text-white cursor-pointer ",
     auraColor="white",
     text="HoverMe",
     auraTrans=18,
      onClick}:props) => {

    const [ hovered, setIsHovered] = useState(false)

    const blur = `${auraTrans}px`

  return (
    <motion.button 
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className={className + " " + 'overflow-hidden flex items-center justify-center relative'}>
       {text}
       <AnimatePresence>
            {
                hovered && 
                <motion.div 
                initial={{
                    y: 10,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                exit={{
                    y: 10,
                    opacity: 0
                }}
                transition={{
                    duration: 0.4
                }}
                style={{
                    background: auraColor,
                    filter: `blur(${blur})`
                }}
                
                className='w-full duration-0.5 h-1/2 rounded-full absolute -bottom-1/2 left-0'/>
            }
       </AnimatePresence>
    </motion.button>
  )
}



export const Codes = `
"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


interface props{
    className?:string,
    auraColor?:string,
    onClick?:() => void,
    text?:string,
    auraTrans?:number
}
export const AuraButton = (
    {className = "bg-black p-2 px-4 rounded-md text-white cursor-pointer ",
     auraColor="white",
     text="HoverMe",
     auraTrans=18,
      onClick}:props) => {

    const [ hovered, setIsHovered] = useState(false)

    const blur = \`\${auraTrans}px\`

  return (
    <motion.button 
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className={className + " " + 'overflow-hidden flex items-center justify-center relative'}>
       {text}
       <AnimatePresence>
            {
                hovered && 
                <motion.div 
                initial={{
                    y: 10,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                exit={{
                    y: 10,
                    opacity: 0
                }}
                transition={{
                    duration: 0.4
                }}
                style={{
                    background: auraColor,
                    filter: \`blur(\${blur})\`
                }}
                
                className='w-full duration-0.5 h-1/2 rounded-full absolute -bottom-1/2 left-0'/>
            }
       </AnimatePresence>
    </motion.button>
  )
}



`

export const UseCase = `
"use client"
import React from 'react'
import { AuraButton } from './aurabutton'




const Page = () => {
 
  return (
    <AuraButton 
    auraColor='white'
    auraTrans={10}
    className='bg-blue-700 text-white cursor-pointer p-2 px-4 rounded-md' 
    text='Button'/>
  )
}

export default Page
`