import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { motion, MotionStyle } from 'framer-motion'

type CSSVars = {
    [key: `--${string}`]: string | number
}

interface props{
    text?: string,
    onClick?: () => void,
    primaryCol?: string,
    gradientCol? : string ,
    className?:string,
    width?: number,
    icon?: React.ReactNode
}

export const AeroButton = ({text="AeroButton", 
    onClick, 
    primaryCol="#007BFF", 
    gradientCol="#FF4B91", 
    width=40,
    icon= <Send fill='white' size={24} />, 
    className=" rounded-md text-white gap-2 "}:props) => {
    
    
    const [hovered, setHovered] = useState(false)
    const [ isClicked, setIsClicked] = useState(false)

   
    const handleClick = () => {
        setIsClicked(true)
        setHovered(false)
        setTimeout(() => setIsClicked(false), 300)
    }

    const style: MotionStyle & CSSVars ={
        background: `linear-gradient(to top right, var(--c1) 10% , var(--c2))`,
        ["--c1"] : `${primaryCol}`,
        ["--c2"] : `${gradientCol}`,
       }

   
  return (
    <motion.button 
    whileTap={{
        scale: 0.97
    }}
   style={style}
   animate={{
    "--c1": hovered ?  `${primaryCol}` : `${primaryCol}`,
    "--c2": hovered ? `${gradientCol}` : `${primaryCol}`
   }}
    onMouseEnter={() => setHovered(true)} 
    onMouseLeave={() => setHovered(false)} 
    onClick={() => {
        handleClick()
        if(onClick){
            onClick()
        }
    }}
    className={`${className} flex w-${width} max-w-${width} overflow-hidden cursor-pointer p-2 items-center justify-center`}>
        {text}
        <motion.div className='max-w-fit overflow-hidden' 
        
        animate={{
            x: hovered ? 0 : 50,
            width: hovered ? 56 : 0,
            y: isClicked ? -50 : 0,
            transition: {
                duration: 0.2,
                type: "spring",
                damping: 15
            }
            // opacity: hovered ? 1 : 0
        }} layout>
           { icon }
        </motion.div>
    </motion.button>
  )
}


export const Code = `
"use client"
import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { motion, MotionStyle } from 'framer-motion'

type CSSVars = {
    [key: \`--\${string}\`]: string | number
}

interface props{
    text?: string,
    onClick?: () => void,
    primaryCol?: string,
    gradientCol? : string ,
    className?:string,
    width?: number,
    icon?: React.ReactNode
}

export const AeroButton = ({text="AeroButton", 
    onClick, 
    primaryCol="#007BFF", 
    gradientCol="#FF4B91", 
    width=40,
    icon= <Send fill='white' size={24} />, 
    className=" rounded-md text-white gap-2 "}:props) => {
    
    
    const [hovered, setHovered] = useState(false)
    const [ isClicked, setIsClicked] = useState(false)

   
    const handleClick = () => {
        setIsClicked(true)
        setHovered(false)
        setTimeout(() => setIsClicked(false), 300)
    }

    const style: MotionStyle & CSSVars ={
        background: "linear-gradient(to top right, var(--c1) 10% , var(--c2))",
        ["--c1"] : \`\${primaryCol}\`,
        ["--c2"] : \`\${gradientCol}\`,
       }

   
  return (
    <motion.button 
    whileTap={{
        scale: 0.97
    }}
   style={style}
   animate={{
    "--c1": hovered ?  \`\${primaryCol}\` : \`\${primaryCol}\`,
    "--c2": hovered ? \`\${gradientCol}\` : \`\${primaryCol}\`
   }}
    onMouseEnter={() => setHovered(true)} 
    onMouseLeave={() => setHovered(false)} 
    onClick={() => {
        handleClick()
        if(onClick){
            onClick()
        }
    }}
    className={\`\${className} flex w-\${width} max-w-\${width} overflow-hidden cursor-pointer p-2 items-center justify-center\`}>
        {text}
        <motion.div className='max-w-fit overflow-hidden' 
        
        animate={{
            x: hovered ? 0 : 50,
            width: hovered ? 56 : 0,
            y: isClicked ? -50 : 0,
            transition: {
                duration: 0.2,
                type: "spring",
                damping: 15
            }
            // opacity: hovered ? 1 : 0
        }} layout>
           { icon }
        </motion.div>
    </motion.button>
  )
}

`


export const CodeJS = `
import React, { useState } from 'react'
import { Send } from 'lucide-react'
import { motion } from 'framer-motion'

export const AeroButton = ({text="AeroButton", 
    onClick, 
    primaryCol="#007BFF", 
    gradientCol="#FF4B91", 
    width=40,
    icon= <Send fill='white' size={24} />, 
    className=" rounded-md text-white gap-2 "}) => {
    
    
    const [hovered, setHovered] = useState(false)
    const [ isClicked, setIsClicked] = useState(false)

   
    const handleClick = () => {
        setIsClicked(true)
        setHovered(false)
        setTimeout(() => setIsClicked(false), 300)
    }

    const style = {
        background: \`linear-gradient(to top right, \${primaryCol} 10% , \${gradientCol})\`,
       }

   
  return (
    <motion.button 
    whileTap={{
        scale: 0.97
    }}
   style={style}
   animate={{
    "--c1": hovered ?  \`\${primaryCol}\` : \`\${primaryCol}\`,
    "--c2": hovered ? \`\${gradientCol}\` : \`\${primaryCol}\`
   }}
    onMouseEnter={() => setHovered(true)} 
    onMouseLeave={() => setHovered(false)} 
    onClick={() => {
        handleClick()
        if(onClick){
            onClick()
        }
    }}
    className={\`\${className} flex w-\${width} max-w-\${width} overflow-hidden cursor-pointer p-2 items-center justify-center\`}>
        {text}
        <motion.div className='max-w-fit overflow-hidden' 
        
        animate={{
            x: hovered ? 0 : 50,
            width: hovered ? 56 : 0,
            y: isClicked ? -50 : 0,
            transition: {
                duration: 0.2,
                type: "spring",
                damping: 15
            }
        }} layout>
           { icon }
        </motion.div>
    </motion.button>
  )
}

`


export const UseCase = `
"use client"
import React from 'react'
import { AeroButton } from './aerobutton'

const Page = () => {

  return (
    <AeroButton 
    text='Send'
    width={30}
    primaryCol='#FF6B6B' 
    gradientCol='#FFD93D' 
    className='rounded-full gap-2 text-white p-2'/>
  )
}

export default Page
`

