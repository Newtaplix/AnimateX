import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

interface parent{
    className?: string,
    children?: React.ReactNode,
    shadowStyle?: string
}

export const TiltCard = ({children, shadowStyle, className}:parent) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springX = useSpring(x)
    const springY = useSpring(y)
    
    const rotateX = useTransform(springY, [-0.5, 0.5], ["-10deg","10deg"])
    const rotateY = useTransform(springX, [-0.5, 0.5], ["10deg", "-10deg"])

    const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
       const target = e.target as HTMLElement;
       const rect = target.getBoundingClientRect()

       const width = rect.width;
       const height = rect.height;

       const posx =  ((e.clientX - rect.left) / width) - 0.5
       const posy = ((e.clientY - rect.top) / height) - 0.5

       x.set(posx)
       y.set(posy)

    }
    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const defaultChild = 'absolute inset-4 rounded-md bg-gray-800'
    const shadowStyleDefault = 'w-60 h-75 rounded-md bg-gray-200/5 relative'
  return (
    <motion.div
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
    }} 
    className={ shadowStyle + " " + shadowStyleDefault}>
        <div 
        style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(40px)"
        }}
        className={defaultChild + " " + className}>
            {children}
        </div>

    </motion.div>
  )
}



export const code = `
import React from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

interface parent{
    className?: string,
    children?: React.ReactNode,
    shadowStyle?: string
}

export const TiltCard = ({children, shadowStyle, className}:parent) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const springX = useSpring(x)
    const springY = useSpring(y)
    
    const rotateX = useTransform(springY, [-0.5, 0.5], ["-10deg","10deg"])
    const rotateY = useTransform(springX, [-0.5, 0.5], ["10deg", "-10deg"])

    const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
       const target = e.target as HTMLElement;
       const rect = target.getBoundingClientRect()

       const width = rect.width;
       const height = rect.height;

       const posx =  ((e.clientX - rect.left) / width) - 0.5
       const posy = ((e.clientY - rect.top) / height) - 0.5

       x.set(posx)
       y.set(posy)

    }
    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const defaultChild = 'absolute inset-4 rounded-md bg-gray-800'
    const shadowStyleDefault = 'w-60 h-75 rounded-md bg-gray-200/5 relative'
  return (
    <motion.div
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
    }} 
    className={ shadowStyle + " " + shadowStyleDefault}>
        <div 
        style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(40px)"
        }}
        className={defaultChild + " " + className}>
            {children}
        </div>

    </motion.div>
  )
}


`

export const useCase = `
"use client"
import React, { useState } from 'react'
import { TiltCard } from './tiltcard'
import Image from 'next/image'


const Page = () => {
  const [confirm, setConfirm] = useState("")  
 
  return (
    <TiltCard className='overflow-hidden'>
      <div className='h-full bg-white text-center w-full flex-col flex p-2 items-center justify-center'>
          <div className='w-24 overflow-hidden border-3 border-gray-400 h-24 rounded-full relative'>
              <Image src={"/images.jpeg"} fill alt='pic'/>
          </div>
          <div className="text-black">
              <p>@Newton</p>
              <p className="text-gray-500 text-[12px]">~Software Developer</p>
          </div>
          <p className='text-xs text-black mt-3'>Hi there! Am a software developer and I love building animations on the web.</p>
      </div>
    </TiltCard>
  )
}

export default Page
`