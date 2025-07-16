import React from 'react'
import { motion } from 'framer-motion'

interface pulse{
  children?: React.ReactNode,
  className?:string,
  displacement?: number,
  speed?:number,
  pulseDelay?: number
}

export const Pulse = ({children, className, displacement = 0, speed=0.6, pulseDelay=0.4}:pulse) => {
  const defaultStyles = 'inset-0 z-10 top-0 left-0 absolute'
  return (
    <div className="relative flex items-center justify-center">
        <div className='z-20'>{children}</div>
        <motion.div 
        initial={{
          scale: 1,
          opacity: 1
        }}
        animate={{
          scale: 1 + displacement,
          opacity: 0
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          repeatDelay: pulseDelay 
        }}
        className={className + " " + defaultStyles} />
    </div>)
   
}



export const pulseCode = `
import React from 'react'
import { motion } from 'framer-motion'

interface pulse{
  children?: React.ReactNode,
  className?:string,
  displacement?: number,
  speed?:number,
  pulseDelay?: number
}

export const PulseButton = ({children, className, displacement = 0, speed=0.6, pulseDelay=0.4}:pulse) => {
  const defaultStyles = 'inset-0 z-10 top-0 left-0 absolute'
  return (
    <div className="relative flex items-center justify-center">
        <div className='z-20'>{children}</div>
        <motion.div 
        initial={{
          scale: 1,
          opacity: 1
        }}
        animate={{
          scale: 1 + displacement,
          opacity: 0
        }}
        transition={{
          repeat: Infinity,
          duration: speed,
          repeatDelay: pulseDelay 
        }}
        className={className + " " + defaultStyles} />
    </div>)
   
}
`

export const UseCase = `
import React from 'react'
import { Heart } from 'lucide-react'
import { Pulse } from './pulse'


const page = () => {
  return (
    <Pulse displacement={0.5} className='rounded-full bg-red-500'>
    <div className='w-14 h-14 p-2 rounded-full bg-white text-red-600 items-center flex justify-center'>
      <Heart size={32}/></div>
      </Pulse>
    
  )
}

export default page
`