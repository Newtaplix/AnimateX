"use client"
import React, { useEffect,useRef,useState } from 'react'
import { motion} from 'framer-motion'

interface prop{
    children?: React.ReactNode,
    duration?:number,
    meteoColor?:string,
    meteoCount?:number
}


export const Meteor = ({children, duration = 2, meteoColor="white", meteoCount=7}:prop) => {
    const ref= useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    
    useEffect(() => {
        if(ref.current){
            const heightR = ref.current.getBoundingClientRect()
            setHeight(heightR.height)
            setWidth(heightR.width)
            

        }
    }, [ref])

    const randomNumberGenerator = (max:number, min:number) => {
        return (Math.random() * (max - min ) + min)
    }

  return (
    <div ref={ref} className='h-full w-full overflow-hidden flex rounded-md relative'>
       {
         Array.from({length: meteoCount}).map((_, i) => 
         <motion.div
         initial={{
            x: randomNumberGenerator(-10, width),
            opacity: 0,
            y: -10
         }}
         animate={{
            y: (Math.floor(height + 10)),
            opacity: 1,
         }}
         transition={{
            duration: duration,
            repeat: Infinity,
            delay: i * 0.5 + 2,
            repeatType: "loop",
            repeatDelay: i * 0.5,
            ease: "linear"
         }}
         style={{
            boxShadow: `1px 1px 12px 1px ${meteoColor}` ,
            background:`linear-gradient(to bottom, ${meteoColor}, transparent)`
         }}
         key={i}
         className={`w-[2px] shadow-[2px] drop-${i} opacity-0 z-10 mx-auto h-4`}/>)
       }
       <div className='z-20 absolute inset-0 '>
            {
                children
            }
       </div>
    </div>
  )
}



export const Code = `
"use client"
import React, { useEffect,useRef,useState } from 'react'
import { motion} from 'framer-motion'

interface prop{
    children?: React.ReactNode,
    duration?:number,
    meteoColor?:string,
    meteoCount?:number
}


export const Meteor = ({children, duration = 2, meteoColor="white", meteoCount=7}:prop) => {
    const ref= useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    
    useEffect(() => {
        if(ref.current){
            const heightR = ref.current.getBoundingClientRect()
            setHeight(heightR.height)
            setWidth(heightR.width)
            

        }
    }, [ref])

    const randomNumberGenerator = (max:number, min:number) => {
        return (Math.random() * (max - min ) + min)
    }

  return (
    <div ref={ref} className='h-full w-full overflow-hidden flex rounded-md relative'>
       {
         Array.from({length: meteoCount}).map((_, i) => 
         <motion.div
         initial={{
            x: randomNumberGenerator(-10, width),
            opacity: 0,
            y: -10
         }}
         animate={{
            y: (Math.floor(height + 10)),
            opacity: 1,
         }}
         transition={{
            duration: duration,
            repeat: Infinity,
            delay: i * 0.5 + 2,
            repeatType: "loop",
            repeatDelay: i * 0.5,
            ease: "linear"
         }}
         style={{
            boxShadow: \`1px 1px 12px 1px \${meteoColor}\` ,
            background: \`linear-gradient(to bottom," \${meteoColor}", transparent)\`
         }}
         key={i}
         className="w-[2px] shadow-[2px]  opacity-0 z-10 mx-auto h-4"/>)
       }
       <div className='z-20 absolute inset-0 '>
            {
                children
            }
       </div>
    </div>
  )
}

`

export const Use = `
"use client"
import React from 'react'
import { Meteor } from './meteobg'




const Page = () => {
 
  return (
    <Meteor meteoColor='yellow'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-fit h-fit rounded-full text-white text-4xl md:text-9xl relative'>
                <h1 className='z-10'>SpaceX</h1>
                <div className='absolute z-20 h-[55%] bg-[#0b0b0f] w-full blur-[18px] -bottom-5 left-0'/>
            </div>
        </div>
    </Meteor>
  )
}

export default Page
`