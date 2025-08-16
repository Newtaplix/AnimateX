"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'


interface props{
    text?: string,
    onClick?: () => void,
    width?: string,
    className?: string,
    bgPrimaryColor?: string,
    bgSecondaryColor?: string,
    textPrimaryColor?: string,
    textSecondaryColor?: string
}

export const ArrowButton = ({text="ArrowButton", 
    onClick, 
    width="40",
    bgPrimaryColor="#FFFFFF",
    bgSecondaryColor="#000000", 
    textPrimaryColor="#000000",
    textSecondaryColor="#FFFFFF", 
    className = "p-2 rounded-md"}:props) => {
  
    const [ isHovered, setIsHovered] = useState(false)
  
    return (
    <motion.button layout
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} 
    whileTap={{scale: 0.97}}
    animate = {{
        background : isHovered ? bgSecondaryColor : bgPrimaryColor ,
        color: isHovered ? textSecondaryColor : textPrimaryColor,
    }}
    className={`${className} w-${width} flex items-center cursor-pointer 
    shrink-0 overflow-hidden gap-2 justify-center`}>
        <motion.div
            transition={{duration: 0.3, ease: "linear"}}
            animate={{
                width: isHovered ? 24 : 8, 
                height: isHovered ? 24 : 8,
                background: isHovered ? bgPrimaryColor : bgSecondaryColor ,
                color: isHovered ? textPrimaryColor : textSecondaryColor 

            }}
        className='overflow-hidden rounded-full flex items-center justify-center p-[3px]'>

            {/* Arrow container */}
            <motion.div
            initial={{opacity: 0, rotate: "140deg", x: -50}} 
            animate={{ opacity: isHovered ? 1 : 0, 
                    rotate: isHovered ? "180deg" : "0deg",
                    x: isHovered ? 0 : -50}}
            transition={{
                duration: 0.5
            }}
                >
                <ArrowLeft size={20}/>
            </motion.div>
        </motion.div>

        {/* text */}
        {text}
    </motion.button>
  )
}


export const Code = `
"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'


interface props{
    text?: string,
    onClick?: () => void,
    width?: string,
    className?: string,
    bgPrimaryColor?: string,
    bgSecondaryColor?: string,
    textPrimaryColor?: string,
    textSecondaryColor?: string
}

export const ArrowButton = ({text="ArrowButton", 
    onClick, 
    width="40",
    bgPrimaryColor="#FFFFFF",
    bgSecondaryColor="#000000", 
    textPrimaryColor="#000000",
    textSecondaryColor="#FFFFFF", 
    className = "p-2 rounded-md"}:props) => {
  
    const [ isHovered, setIsHovered] = useState(false)
  
    return (
    <motion.button layout
    onClick={onClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} 
    whileTap={{scale: 0.97}}
    animate = {{
        background : isHovered ? bgSecondaryColor : bgPrimaryColor ,
        color: isHovered ? textSecondaryColor : textPrimaryColor,
    }}
    className={\`\${className} w-$\{width} flex items-center cursor-pointer 
    shrink-0 overflow-hidden gap-2 justify-center\`\}>
        <motion.div
            transition={{duration: 0.3, ease: "linear"}}
            animate={{
                width: isHovered ? 24 : 8, 
                height: isHovered ? 24 : 8,
                background: isHovered ? bgPrimaryColor : bgSecondaryColor ,
                color: isHovered ? textPrimaryColor : textSecondaryColor 

            }}
        className='overflow-hidden rounded-full flex items-center justify-center p-[3px]'>

            {/* Arrow container */}
            <motion.div
            initial={{opacity: 0, rotate: "140deg", x: -50}} 
            animate={{ opacity: isHovered ? 1 : 0, 
                    rotate: isHovered ? "180deg" : "0deg",
                    x: isHovered ? 0 : -50}}
            transition={{
                duration: 0.5
            }}
                >
                <ArrowLeft size={20}/>
            </motion.div>
        </motion.div>

        {/* text */}
        {text}
    </motion.button>
  )
}

`

export const UseCase = `
"use client"
import React from 'react'
import { ArrowButton } from './arrowbtn'

const Page = () => {

  return (
    <ArrowButton 
      text='Get Started'
      bgPrimaryColor='#FFFFFF'
      bgSecondaryColor='#3498db'
      textPrimaryColor='#3498db'
      textSecondaryColor='#FFFFFF'
  className='rounded-full p-2'/>
  )
}

export default Page
`