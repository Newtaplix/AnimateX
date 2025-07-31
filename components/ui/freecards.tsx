import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'


interface cards{
    container: React.RefObject<HTMLDivElement | null>,
    containerHeight: number,
    containerWidth: number
}


const randomNumberGenerator = (max:number, min:number) => {
    return (Math.random() * (max - min ) + min)
}


export const FreeCards = () => {
    const container = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if(container.current){
            const rect = container.current.getBoundingClientRect()
            setHeight(rect.height)
            setWidth(rect.width)
        }
    }, [])
   

  return (
    <div ref={container} className='w-full h-full'>
       {
            Array.from({length: 7}).map((_,i) => 
                <Cards container={container} containerHeight={height} containerWidth={width} key={i} />
            )
       }
    </div>
  )
}

export const Cards = ({container, containerHeight, containerWidth}:cards) => {
    return (
        <motion.div 
        drag
        dragConstraints={container}
        initial={{
            x: Math.floor(randomNumberGenerator(-10, containerWidth)),
            y: Math.floor(randomNumberGenerator(-10, containerHeight)),
            rotate: `${Math.floor(randomNumberGenerator(-20, 20))}deg`
        }}
        transition={{
            duration: 1.8
        }}
        className='h-40 w-30 border-3 border-white absolute'>
            <div className='w-full h-full relative'>
            <Image draggable={false} src={"/88.png"} fill alt='image'/>
            </div>
        </motion.div>
    )
}