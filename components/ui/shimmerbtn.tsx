"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface button{
    className?: string,
    text?:string,
    shimmerColor?: string,
    onClick?:() => void,
    shimmerTrans?:number
}

export const ShimmerButton = ({
    className='p-2 cursor-pointer rounded-md text-white px-4 bg-black flex items-center justify-center', 
    text="button", shimmerColor="white", onClick, shimmerTrans=18}:button) => {



    const ref = useRef<HTMLButtonElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if(ref.current){
            const rect = ref.current.getBoundingClientRect()
            setWidth(rect.width)
        }
    }, [])

    const blur = `${shimmerTrans}px`

  return (
    <button ref={ref} onClick={onClick} className={className + " " + "overflow-hidden relative"}>
       {text}
        <motion.div 
        style={{
            filter: `blur(${blur})`,
            background: shimmerColor
        }}
        initial={{
            x:-80
        }}
        animate={{
            x: width + 24
        }}
        transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
        }}
        className='absolute h-full w-2 top-0 inset-0'/>
    </button>
  )
}


export const Code = `
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface button{
    className?: string,
    text?:string,
    shimmerColor?: string,
    onClick?:() => void,
    shimmerTrans?:number
}

export const ShimmerButton = ({
    className='p-2 cursor-pointer rounded-md text-white px-4 bg-black flex items-center justify-center', 
    text="button", shimmerColor="white", onClick, shimmerTrans=18}:button) => {



    const ref = useRef<HTMLButtonElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if(ref.current){
            const rect = ref.current.getBoundingClientRect()
            setWidth(rect.width)
        }
    }, [])

    const blur = \`\${shimmerTrans}px\`\

  return (
    <button ref={ref} onClick={onClick} className={className + " " + "overflow-hidden relative"}>
       {text}
        <motion.div 
        style={{
            filter: \`blur(\${blur})\`,
            background: shimmerColor
        }}
        initial={{
            x:-80
        }}
        animate={{
            x: width + 24
        }}
        transition={{
            duration: 2.4,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
        }}
        className='absolute h-full w-2 top-0 inset-0'/>
    </button>
  )
}

`

export const Use = `
"use client"
import React from 'react'
import { ShimmerButton } from './shimmerbtn'

const Page = () => {
 
  return (
    <ShimmerButton 
    text='Start Now' 
    shimmerColor='white'
    shimmerTrans={10}
    className='text-white bg-blue-500 p-2 px-4 cursor-pointer rounded-md'/>
  )
}

export default Page
`