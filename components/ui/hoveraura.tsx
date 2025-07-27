import React from 'react'
import { useSpring , motion, useMotionValue } from 'framer-motion'


interface parent{
    children: React.ReactNode,
    blurSize?:number,
    blurColor?:string,
    className?:string
}

export const HoverAura = ({children, blurColor = "aqua", blurSize=12, className}:parent) => {

    const motionx = useMotionValue(0)
    const motiony = useMotionValue(0)

    const x = useSpring(motionx, {damping:20, stiffness:100})
    const y = useSpring(motiony, {damping:20, stiffness:100})

    const defaultstyle = 'w-full h-full z-20 relative'
    const handleMouseMoving = (e:React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement
        const rec = target.getBoundingClientRect()
        

        const posx = (e.clientX - rec.left)
        const posy = (e.clientY - rec.top)

        x.set(posx)
        y.set(posy)

    }
  return (
    <div className="w-full h-full relative">
        <motion.div 
        style={{
            translateX: x,
            translateY: y,
            width: blurSize + "px",
            height: blurSize + "px",
            background: blurColor
        }}
        className='w-20 h-20 rounded-full absolute blur-[18px] z-10 left-0'/>
        <div style={{position: "absolute", 
            height: "100%",
             width: "100%"}}
            
              onMouseMove={(e) => handleMouseMoving(e)} className={className ? className + " " + "z-20 pointer-events-none" : defaultstyle}>
            {children}
        </div>
    </div>
  )
}



export const code = `
import React from 'react'
import { useSpring , motion, useMotionValue } from 'framer-motion'


interface parent{
    children: React.ReactNode,
    blurSize?:number,
    blurColor?:string,
    className?:string
}

export const HoverAura = ({children, blurColor = "aqua", blurSize=12, className}:parent) => {

    const motionx = useMotionValue(0)
    const motiony = useMotionValue(0)

    const x = useSpring(motionx, {damping:20, stiffness:100})
    const y = useSpring(motiony, {damping:20, stiffness:100})

    const defaultstyle = 'w-full h-full z-20 relative'
    const handleMouseMoving = (e:React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement
        const rec = target.getBoundingClientRect()
        

        const posx = (e.clientX - rec.left)
        const posy = (e.clientY - rec.top)

        x.set(posx)
        y.set(posy)

    }
  return (
    <div className="w-full h-full relative">
        <motion.div 
        style={{
            translateX: x,
            translateY: y,
            width: blurSize + "px",
            height: blurSize + "px",
            background: blurColor
        }}
        className='w-20 h-20 rounded-full absolute blur-[18px] z-10 left-0'/>
        <div style={{position: "absolute", 
            height: "100%",
             width: "100%"}}
            
              onMouseMove={(e) => handleMouseMoving(e)} className={className ? className + " " + "z-20" : defaultstyle}>
            {children}
        </div>
    </div>
  )
}

`

export const useCase = `
"use client"
import React from 'react'
import { HoverAura } from './hoveraura'



const Page = () => {
 
  return (
    <HoverAura blurSize={70} blurColor='white'>
          <div
          className='text-white w-full h-full items-center flex-col justify-center flex text-xl'>
            Hover below
            <p className='text-[#0b0b0f]'>You are awesome!!</p>
       </div>
</HoverAura>
  )
}

export default Page
`