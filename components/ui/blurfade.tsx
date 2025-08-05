"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface prop{
    text: string,
    staggerDelay?: number,
    duration?: number
}

export const BlurFade = ({text, staggerDelay= 0.08, duration= 1.2}:prop) => {
    const textp =  text

    const textVariants = {
        hidden: {
            opacity: 0,
            filter: "blur(18px)",
            scale: 1.3,
            y: 10
        },
        show:(i:number) => ({
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            y: 0,
            transition: {
                duration: duration,
                ease: "easeInOut",
                delay: i * staggerDelay
            }
        })
    }
  return (
    <div className='w-full md:w-1/2 mx-auto flex-wrap text-center text-white flex gap-1 justify-center'>
        {
            textp.split(" ").map((word, i) => 
                <motion.p variants={textVariants} custom={i} initial="hidden" animate="show" key={i}>{word}</motion.p>
            )
        }
    </div>
  )
}



export const Code = `
"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface prop{
    text: string,
    staggerDelay?: number,
    duration?: number
}

export const BlurFade = ({text, staggerDelay= 0.08, duration= 1.2}:prop) => {
    const textp =  text

    const textVariants = {
        hidden: {
            opacity: 0,
            filter: "blur(18px)",
            scale: 1.3,
            y: 10
        },
        show:(i:number) => ({
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            y: 0,
            transition: {
                duration: duration,
                ease: "easeInOut",
                delay: i * staggerDelay
            }
        })
    }
  return (
    <div className='w-full mx-auto flex-wrap text-center text-white flex gap-1 justify-center'>
        {
            textp.split(" ").map((word, i) => 
                <motion.p variants={textVariants} custom={i} initial="hidden" animate="show" key={i}>{word}</motion.p>
            )
        }
    </div>
  )
}

`




export const UseCase = `
"use client"
import React, { useState } from 'react'
import { BlurFade } from './blurfade'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Page = () => {
  const [text, setText] = useState(0)

  const textArr = [
    "Crazy appearing text for hero sections. It enhances your user experience with a smooth fluid appearance",
    "Wow you just keep moving forward so let the story continue. Hehehe!!",
    "Crazy appearing text for hero sections. It enhances your user experience with a smooth fluid appearance"
  ]

  const next = () => {
    if(text === textArr.length - 1){
        return null
    }else{
        setText(text +  1)
    }
  }
  const previous = () => {
    if(text === 0){
        return null
    }else{
        setText(text -  1)
    }
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
          {
              textArr.map((texts, i) => 
                  i === text &&
              <BlurFade key={i} text={texts}/>
              )
          }
          <div className='mt-10 flex gap-2'>
              <div onClick={previous} className='p-1 rounded-md shadow-xs shadow-white cursor-pointer bg-black text-white'><ChevronLeft size={24}/></div>
              <div onClick={next} className='p-1 rounded-md shadow-xs shadow-white bg-black cursor-pointer text-white'><ChevronRight size={24}/></div>
          </div>
    </div>
  )
}

export default Page
`