"use client"
import React, {useRef, useState } from 'react'
import { motion as m, useTransform, useMotionValue, useSpring, animate } from 'framer-motion'


interface types{
  tooltipcol?: string,
  maxValue?: number,
  trackWidth?: number,
  trackHeight?: number,
  trackColor?: string,
  buttonSize?: number,
  buttonColor?: string,
  className?: string,
  onChange?: (value:number) => void
}


export const Slider = ({tooltipcol="white", maxValue=120, buttonColor="#32CD32", onChange,
  trackWidth=300, trackColor="white", buttonSize=24, trackHeight=4, className}:types) => {
  
  
  const [isDown, setDown] = useState(false)
  const [X, setX] = useState(0)
  const ref = useRef(null)
  const x = useMotionValue(0)

  const springx = useSpring(x)
  const rotate = useTransform(springx, [0, (trackWidth / 2), trackWidth], [15, 0 , -15])

  const handledragend = () => {
    animate(springx, 150, {
      type: "spring",
      stiffness: 100,
      damping: 10
    })
  }
  const posx = useTransform(x, [0, (trackWidth - buttonSize)], [0, maxValue])

  return (
    <div ref={ref} style={{width: `${trackWidth}px`, height: `${trackHeight}px`, background: `${trackColor}`}} 
    className={`${className} rounded-full relative`}>

      {/* button */}
        <m.div 
        onMouseDown={() => setDown(true)}
        onMouseUp={() => setDown(false)}
        drag= {isDown ? "x" : false}
        onDrag={() => {
          setX(posx.get())
          if(onChange){
            onChange(Math.floor(posx.get()))
          }
        }}
        onDragEnd={handledragend}
        dragConstraints={ref}
        dragMomentum={false}
        style={{
          x,
          width: `${buttonSize}px`,
          height: `${buttonSize}px`

        }}
        whileTap={{scale: 0.93}}
        whileHover = "display"
        whileDrag= "display"
        initial = "hidden"
        className='rounded-full absolute top-1/2 cursor-pointer -translate-y-1/2  left-0'>
            <div style={{background: `${buttonColor}`}} className='w-full h-full rounded-full z-20 relative'></div>
            <m.div initial={{rotate: 0}} style={{rotate}} className='absolute h-8 w-full z-10 -top-10 left-0 right-0'>
                <div className='h-full w-full mx-auto'>
                    <m.div 
                    variants={{
                      display: {
                        y: 0, opacity: 1
                      },
                      hidden: {
                        y: 10, opacity: 0
                      }

                    }}
                    style={{background: tooltipcol}}
                    className='h-full w-full rounded-[2px]'>
                        <div className='w-full h-full relative mx-auto flex items-center justify-center'>
                            <div className='text-[14px]'>{Math.floor(X)}</div>
                            <div style={{background: tooltipcol}} className='w-2 h-2 rounded-[2px] rotate-45 -bottom-1 absolute mx-auto left-0 right-0'/>
                        </div>
                    </m.div>
                </div>
            </m.div>
        </m.div> 
    </div>
  )
}




export const codets = `
  "use client"
import React, {useRef, useState } from 'react'
import { motion as m, useTransform, useMotionValue, useSpring, animate } from 'framer-motion'


interface types{
  tooltipcol?: string,
  maxValue?: number,
  trackWidth?: number,
  trackHeight?: number,
  trackColor?: string,
  buttonSize?: number,
  buttonColor?: string,
  className?: string,
  onChange?: (value:number) => void
}


export const Slider = ({tooltipcol="white", maxValue=120, buttonColor="#32CD32", onChange,
  trackWidth=300, trackColor="white", buttonSize=24, trackHeight=4, className}:types) => {
  
  
  const [isDown, setDown] = useState(false)
  const [X, setX] = useState(0)
  const ref = useRef(null)
  const x = useMotionValue(0)

  const springx = useSpring(x)
  const rotate = useTransform(springx, [0, (trackWidth / 2), trackWidth], [15, 0 , -15])

  const handledragend = () => {
    animate(springx, 150, {
      type: "spring",
      stiffness: 100,
      damping: 10
    })
  }
  const posx = useTransform(x, [0, (trackWidth - buttonSize)], [0, maxValue])

  return (
    <div ref={ref} style={{width: \`$\{trackWidth}px\`, height: \`$\{trackHeight}px\`, background:\`$\{trackColor}\`}} 
    className={\`\${className} rounded-full relative\`}>

      {/* button */}
        <m.div 
        onMouseDown={() => setDown(true)}
        onMouseUp={() => setDown(false)}
        drag= {isDown ? "x" : false}
        onDrag={() => {
          setX(posx.get())
          if(onChange){
            onChange(Math.floor(posx.get()))
          }
        }}
        onDragEnd={handledragend}
        dragConstraints={ref}
        dragMomentum={false}
        style={{
          x,
          width: \`$\{buttonSize}px\`,
          height: \`$\{buttonSize}px\`

        }}
        whileTap={{scale: 0.93}}
        whileHover = "display"
        whileDrag= "display"
        initial = "hidden"
        className='rounded-full absolute top-1/2 cursor-pointer -translate-y-1/2  left-0'>
            <div style={{background: \`$\{buttonColor}\`}} className='w-full h-full rounded-full z-20 relative'></div>
            <m.div style={{rotate}} className='absolute h-8 w-full z-10 -top-10 left-0 right-0'>
                <div className='h-full w-full mx-auto'>
                    <m.div 
                    variants={{
                      display: {
                        y: 0, opacity: 1
                      },
                      hidden: {
                        y: 10, opacity: 0
                      }

                    }}
                    style={{background: tooltipcol}}
                    className='h-full w-full rounded-[2px]'>
                        <div className='w-full h-full relative mx-auto flex items-center justify-center'>
                            <div className='text-[14px]'>{Math.floor(X)}</div>
                            <div style={{background: tooltipcol}} className='w-2 h-2 rounded-[2px] rotate-45 -bottom-1 absolute mx-auto left-0 right-0'/>
                        </div>
                    </m.div>
                </div>
            </m.div>
        </m.div> 
    </div>
  )
}

`

export const codejs = `

import React, {useRef, useState } from 'react'
import { motion as m, useTransform, useMotionValue, useSpring, animate } from 'framer-motion'


export const Slider = ({tooltipcol="white", maxValue=120, buttonColor="#32CD32", onChange,
  trackWidth=300, trackColor="white", buttonSize=24, trackHeight=4, className}) => {
  
  
  const [isDown, setDown] = useState(false)
  const [X, setX] = useState(0)
  const ref = useRef(null)
  const x = useMotionValue(0)

  const springx = useSpring(x)
  const rotate = useTransform(springx, [0, (trackWidth / 2), trackWidth], [15, 0 , -15])

  const handledragend = () => {
    animate(springx, 150, {
      type: "spring",
      stiffness: 100,
      damping: 10
    })
  }
  const posx = useTransform(x, [0, (trackWidth - buttonSize)], [0, maxValue])

  return (
    <div ref={ref} style={{width: \`$\{trackWidth}px\`, height: \`$\{trackHeight}px\`, background:\`$\{trackColor}\`}} 
    className={\`\${className} rounded-full relative\`}>

      {/* button */}
        <m.div 
        onMouseDown={() => setDown(true)}
        onMouseUp={() => setDown(false)}
        drag= {isDown ? "x" : false}
        onDrag={() => {
          setX(posx.get())
          if(onChange){
            onChange(Math.floor(posx.get()))
          }
        }}
        onDragEnd={handledragend}
        dragConstraints={ref}
        dragMomentum={false}
        style={{
          x,
          width: \`$\{buttonSize}px\`,
          height: \`$\{buttonSize}px\`

        }}
        whileTap={{scale: 0.93}}
        whileHover = "display"
        whileDrag= "display"
        initial = "hidden"
        className='rounded-full absolute top-1/2 cursor-pointer -translate-y-1/2  left-0'>
            <div style={{background: \`$\{buttonColor}\`}} className='w-full h-full rounded-full z-20 relative'></div>
            <m.div style={{rotate}} className='absolute h-8 w-full z-10 -top-10 left-0 right-0'>
                <div className='h-full w-full mx-auto'>
                    <m.div 
                    variants={{
                      display: {
                        y: 0, opacity: 1
                      },
                      hidden: {
                        y: 10, opacity: 0
                      }

                    }}
                    style={{background: tooltipcol}}
                    className='h-full w-full rounded-[2px]'>
                        <div className='w-full h-full relative mx-auto flex items-center justify-center'>
                            <div className='text-[14px]'>{Math.floor(X)}</div>
                            <div style={{background: tooltipcol}} className='w-2 h-2 rounded-[2px] rotate-45 -bottom-1 absolute mx-auto left-0 right-0'/>
                        </div>
                    </m.div>
                </div>
            </m.div>
        </m.div> 
    </div>
  )
}

`

export const Case = `
  import React, { useState } from 'react'
import { Slider } from './slider'

const Page = () => {
  const [sliderval, setSliderVal] = useState(0)
  return (
    <div className='w-full h-full flex flex-col gap-3 items-center justify-center'>                  
        <Slider 
        onChange={(value) => setSliderVal(value)} 
        className='text-black' 
        trackWidth={350} 
        maxValue={100} 
        buttonColor='#9810fa'/>
          <p>{sliderval}</p>
    </div>
  )
}

export default Page
`