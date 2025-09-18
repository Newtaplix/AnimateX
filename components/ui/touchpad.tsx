"use client"
import { useMotionValue, motion as m, useSpring } from 'framer-motion'
import React, { useRef } from 'react'

interface touchprop{
    className?:string,
    children?: React.ReactNode,
    size?: string,
    duration?: number,
    color?: string
}

export const TouchPad = ({className, color="#32CD32", children, size="10", duration= 0.25}:touchprop) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const motionx = useMotionValue(0)
    const motiony = useMotionValue(0) 
    

    const x = useSpring(motionx, {duration: 0.2})
    const y = useSpring(motiony, {duration: 0.2})
    

    const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
        const target = containerRef.current
        if(target){
            const rect = target.getBoundingClientRect()

            const posx =  (e.clientX - (rect.left)) 
            const posy = (e.clientY - (rect.top - Number(size) / 2))
     
            x.set(posx)
            y.set(posy)
        }
    }
  return (
    <m.div onMouseMove={handleMouseMove}
        whileTap="taped"
        initial="initial"
        ref={containerRef} className={`${className} w-full relative h-full`}>
            {children}

        <m.div variants={{
            initial: {
                opacity: 0
            },
            taped: {
                scale: [0, 1.3], opacity: [1, 0], transition: {duration: duration}
            }
        }} style={{x, y, backgroundImage: `radial-gradient(transparent, ${color})`}} 
        className={`w-${size} h-${size} z-90 rounded-full hidden lg:flex absolute top-0 left-0`}>
           
        </m.div>
    </m.div>
  )
}



export const tscode = `
"use client"
import { useMotionValue, motion as m, useSpring } from 'framer-motion'
import React, { useRef } from 'react'

interface touchprop{
    className?:string,
    children?: React.ReactNode,
    size?: string,
    duration?: number,
    color?: string
}

export const TouchPad = ({className, color="#32CD32", children, size="10", duration= 0.25}:touchprop) => {
    const containerRef = useRef<HTMLDivElement>(null)

    const motionx = useMotionValue(0)
    const motiony = useMotionValue(0) 
    

    const x = useSpring(motionx, {duration: 0.2})
    const y = useSpring(motiony, {duration: 0.2})
    

    const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
        const target = containerRef.current
        if(target){
            const rect = target.getBoundingClientRect()

            const posx =  (e.clientX - (rect.left)) 
            const posy = (e.clientY - (rect.top - Number(size) / 2))
     
            x.set(posx)
            y.set(posy)
        }
    }
  return (
    <m.div onMouseMove={handleMouseMove}
        whileTap="taped"
        initial="initial"
        ref={containerRef} className={\`$\{className} w-full relative h-full\`}>
            {children}

        <m.div variants={{
            initial: {
                opacity: 0
            },
            taped: {
                scale: [0, 1.3], opacity: [1, 0], transition: {duration: duration}
            }
        }} style={{x, y, backgroundImage: \`radial-gradient(transparent, $\{color})\`}} 
        className={\`w-$\{size} h-$\{size} z-90 rounded-full hidden lg:flex absolute top-0 left-0\`}>
           
        </m.div>
    </m.div>
  )
}

`

export const jscode = `

import { useMotionValue, motion as m, useSpring } from 'framer-motion'
import React, { useRef } from 'react'

export const TouchPad = ({className, color="#32CD32", children, size="10", duration= 0.25}) => {
    const containerRef = useRef(null)

    const motionx = useMotionValue(0)
    const motiony = useMotionValue(0) 
    

    const x = useSpring(motionx, {duration: 0.2})
    const y = useSpring(motiony, {duration: 0.2})
    

    const handleMouseMove = (e) => {
        const target = containerRef.current
        if(target){
            const rect = target.getBoundingClientRect()

            const posx =  (e.clientX - (rect.left)) 
            const posy = (e.clientY - (rect.top - Number(size) / 2))
     
            x.set(posx)
            y.set(posy)
        }
    }
  return (
    <m.div onMouseMove={handleMouseMove}
        whileTap="taped"
        initial="initial"
        ref={containerRef} className={\`$\{className} w-full relative h-full\`}>
            {children}

        <m.div variants={{
            initial: {
                opacity: 0
            },
            taped: {
                scale: [0, 1.3], opacity: [1, 0], transition: {duration: duration}
            }
        }} style={{x, y, backgroundImage: \`radial-gradient(transparent, $\{color})\`}} 
        className={\`w-$\{size} h-$\{size} z-90 rounded-full hidden lg:flex absolute top-0 left-0\`}>
           
        </m.div>
    </m.div>
  )
}

`

export const UseCase = `
"use client"
import React from 'react'
import { TouchPad } from './touchpad'
import { ShimmerButton } from './shimmerbtn'

const Page = () => {
  return (
    <TouchPad className="flex items-center justify-center">
            <ShimmerButton text="Try to Click Me!"/>
    </TouchPad>
  )
}

export default Page
`