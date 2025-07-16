"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


interface fade{
    children?: React.ReactNode,
    repeat?: boolean,
    amountx?: number,
    amounty?:number,
    view?: number,
    className?: string,
    duration? : number
}
export const Fade = ({children, repeat=false, amounty=0, className, amountx=0, view=0.5, duration=0.5}:fade) => {
    const ref = useRef(null)
    const once = !repeat ? true : false 
    const isInView = useInView(ref, {once: once, amount:view})
  
  return (
    <motion.div
    className={className}
    initial={{
        y: amounty,
        x: amountx,
        opacity: 0
    }} 
    animate={{
        y: isInView ? 0 : amounty, 
        x: isInView ? 0 : amountx, 
        opacity: isInView ? 1 : 0
    }}
    transition={{
        duration: duration
    }}
    ref={ref}>
        {children}
    </motion.div>
  )
}


export const FadeCode = `
"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


interface fade{
    children?: React.ReactNode,
    repeat?: boolean,
    amountx?: number,
    amounty?:number,
    view?: number,
    axis?: axis,
    className?:string,
    duration? : number
}
export const Fade = ({children, repeat=false, amounty=0, amountx=0, view=0.5, duration=0.5}:fade) => {
    const ref = useRef(null)
    const once = !repeat ? true : false 
    const isInView = useInView(ref, {once: once, amount:view})
  
  return (
    <motion.div
    className={className}
    initial={{
        y: amounty,
        x: amountx,
        opacity: 0
    }} 
    animate={{
        y: isInView ? 0 : amounty, 
        x: isInView ? 0 : amountx, 
        opacity: isInView ? 1 : 0
    }}
    transition={{
        duration: duration
    }}
    ref={ref}>
        {children}
    </motion.div>
  )
}

`

export const UseCode = `
import React from 'react'
import { Fade } from './fade'


const page = () => {
  return (
    <div className='h-80 bg-gray-200/6 overflow-y-scroll overflow-x-hidden flex flex-col gap-4 w-full p-2 md:w-1/2'>
            <Fade amounty={20} view={0.6}>
                <p className='mt-5 h-50 bg-blue-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
            </Fade>
            <Fade amounty={20} view={0.6}>
                <p className='mt-5 h-50 bg-green-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
            </Fade>
            <Fade amountx={-20} view={0.6}>
                <p className='mt-5 h-50 bg-red-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
            </Fade>
            <Fade amounty={20} view={0.6}>
                <p className='mt-5 h-50 bg-blue-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
            </Fade>
            <Fade amounty={20} view={0.6}>
                <p className='mt-5 h-50 bg-green-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
            </Fade>
            <Fade amountx={-20} view={0.6}>
                <p className='mt-5 h-50 bg-red-500 rounded-md p-2 items-center flex'>A smooth, rthythmic scaling animation that mimics a heartbeat or ripple effect.
                Ideal for highlighting live status indicators, notifications, or call-to-action buttons.</p>
            </Fade>

    </div>
    
  )
}

export default page
`