"use client"
import React from 'react'
import { motion, stagger, AnimationSequence as AnimateSequence, useAnimate} from 'framer-motion'




export const Sparkles = () => {
    
    const  [scope, animate] =  useAnimate()

    // const springx = useSpring(x)
    // const springy = useSpring(y)

    
    const handleClick = () => {
        const sparkles = Array.from({length: 20})
        const sparkleAnimation: AnimateSequence = sparkles.map((_,index) => [
            `.sparkles-${index}`,
            {
                x: randomNumberGenerator(-100, 100),
                y: randomNumberGenerator(-100, 100),
                scale: randomNumberGenerator(0.5, 1),
                opacity: 1

            },
            {
                duration: 0.4,
                at: "<"
            },
        ]);
        const sparkleReset: AnimateSequence = sparkles.map((_, i) => [
            `.sparkles-${i}`,
            {
                x:0,
                y:0
            },
            {
                duration: 0.00001,
              
            }
        ])
        
        const sparkleFade: AnimateSequence = sparkles.map((_, i) => [
            `.sparkles-${i}`,
            {
                opacity:0,
                scale: 0
            },
            {
                duration: 0.5,
                at: "<"
            },
        ])

        animate([
            ...sparkleReset,
            [".letter", {y: -32}, {duration: 0.2, delay: stagger(0.05)}],
            ["button", {scale: 0.8}, {duration: 0.1, at: "<"}],
            ["button", {scale: 1}, {duration: 0.1}],
            ...sparkleAnimation,
            [".letter", {y: 0}, {duration: 0.00001, at: 0.5}],
            ...sparkleFade
           
            
        ])
     
        
    }

    const randomNumberGenerator = (max:number, min:number) => {
        return (Math.random() * (max - min ) + min)
    }

    const text = "Sparkles"
  
  return (
   <div ref={scope}>
     <motion.button
    onClick={handleClick} className="border-2 border-gray-300 rounded-full flex items-center justify-center relative cursor-pointer p-2 px-8">
        <span className='h-8 overflow-hidden block'>
            {
                text.split("").map((l, i) => 
                <span
                data-letter = {l}
                className='letter inline-block relative h-8 leading-8 after:absolute
                after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]' 
                key={i}>
                    {l}
                </span>
                )
            }
        </span>
      <span className='absolute inset-0 pointer-events-none -z-10 block'>
        {
                Array.from({length: 20}).map((_, i) => 
                <motion.div 
                key={i} className={`absolute w-4 h-4 rounded-full bg-red-500 opacity-0 left-1/2 top-1/2 sparkles-${i}`} />
                )
        }
      </span>

    </motion.button>
   </div>
  )
}
