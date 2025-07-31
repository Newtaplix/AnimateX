"use client"
import React, { useEffect, useState } from 'react'
import { useAnimate, AnimationSequence, motion } from 'framer-motion'


interface prop{
  children: React.ReactNode
}

export const StarsGlimmer = () => {
    const [scope, animate] = useAnimate()
    const [isTaped, setIsTaped] = useState(false)
    const randomNumberGenerator = (max:number, min:number) => {
      return (Math.random() * (max - min ) + min)
    }

    const arr = Array.from({length: 20})

    useEffect(() => {
      if(scope.current){
        const rect =  scope.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        
        const arr = Array.from({length: 20})
        const StarPositions: AnimationSequence = arr.map((_, i) => 
        [ `.star-${i}`,
          {
            x: Math.floor(randomNumberGenerator(-10, width)),
            y: Math.floor(randomNumberGenerator(0, height/1.5)),
            opacity: 0,
            scale: 0,
            rotate: "-45"
          },
          {
            duration: 0.000001,
            at: "<"
          }])

          const StarsShow: AnimationSequence = arr.map((_, i) => 
            [ `.star-${i}`,
              {
                scale: 1,
                opacity: 1,
                rotate: "0deg"
              },
              {
                duration: 0.8,
              }])

          
          const StarsFade: AnimationSequence = arr.map((_, i) => 
            [ `.star-${i}`,
              {
                scale: 0,
                opacity: 0,
                rotate: "-45deg"
              },
              {
                duration: 0.8,
                delay: 20
              }])

        animate([
          ...StarPositions,
          ...StarsShow,
          ...StarsFade,
        ])

       
      }
    }, [scope, animate, isTaped])


    const handleRestart = () => {
      if(isTaped){
        setIsTaped(false)
      }
    }
   
  return (
    <div ref={scope} onClick={() => setIsTaped(!isTaped)} className='h-full w-full relative overflow-hidden'>
           {
                arr.map((_,i) => 
                    <motion.div onClick={handleRestart} className={`star-${i} opacity-0 absolute`}  key={i}>
                        <div style={{
                          boxShadow: "1px 1px 12px 1px yellow",
                          background: "yellow",
                          filter: "blur(2px)"
                        }}  className='fill-yellow-500 w-2 h-2'/>
                    </motion.div>
                )
           }
    </div>
  )
}
