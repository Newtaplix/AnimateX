"use client"
import React, { useEffect, useState } from 'react'
import { useAnimate, AnimationSequence, motion } from 'framer-motion'


interface prop{
  children?: React.ReactNode,
  glimColor?: string,
  glimCount?:number
}


export const StarsGlimmer = ({children, glimColor = "yellow", glimCount = 20}:prop) => {
    const [scope, animate] = useAnimate()
    const [isTaped, setIsTaped] = useState(false)
    const randomNumberGenerator = (max:number, min:number) => {
      return (Math.random() * (max - min ) + min)
    }

    const arr = Array.from({length: glimCount})

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
               
              },
              {
                duration: 1,
                delay: 3
              }])

          
          const StarsFade: AnimationSequence = arr.map((_, i) => 
            [ `.star-${i}`,
              {
                scale: 0,
                opacity: 0,
               
              },
              {
                duration: 1,
                delay: 3
               
              }])

        animate([
          ...StarPositions,
          ...StarsShow,
          ...StarsFade,
          ...StarPositions,
          ...StarsShow,
          ...StarsFade,
        ])

        setTimeout(() => setIsTaped(true), 60000)

       
      }
    }, [scope, animate, glimCount, isTaped])


    const handleRestart = () => {
      if(isTaped){
        setIsTaped(false)
      }
    }
   
  return (
    <div ref={scope} onClick={() => handleRestart()} className='h-full w-full relative overflow-hidden'>
           {
                arr.map((_,i) => 
                    <motion.div  className={`star-${i} opacity-0 z-10 absolute`}  key={i}>
                        <div style={{
                          boxShadow: `1px 1px 12px 1px ${glimColor}`,
                          background: `${glimColor}`,
                          filter: "blur(2px)"
                        }}  className='w-2 h-2'/>
                    </motion.div>
                )
           }
           <div className='z-20 w-full relative h-full'>
              {children}
           </div>
    </div>
  )
}

export const code = `

"use client"
import React, { useEffect, useState } from 'react'
import { useAnimate, AnimationSequence, motion } from 'framer-motion'


interface prop{
  children?: React.ReactNode,
  glimColor?: string,
  glimCount?:number
}


export const StarsGlimmer = ({children, glimColor = "yellow", glimCount = 20}:prop) => {
    const [scope, animate] = useAnimate()
    const [isTaped, setIsTaped] = useState(false)
    const randomNumberGenerator = (max:number, min:number) => {
      return (Math.random() * (max - min ) + min)
    }

    const arr = Array.from({length: glimCount})

    useEffect(() => {
      if(scope.current){
        const rect =  scope.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        
        const arr = Array.from({length: 20})
        const StarPositions: AnimationSequence = arr.map((_, i) => 
        [ \`.star-\${i}\`,
          {
            x: Math.floor(randomNumberGenerator(-10, width)),
            y: Math.floor(randomNumberGenerator(0, height/1.5)),
            opacity: 0,
            scale: 0,
           
          },
          {
            duration: 0.000001,
            at: "<"
          }])

          const StarsShow: AnimationSequence = arr.map((_, i) => 
            [ \`.star-\${i}\`,
              {
                scale: 1,
                opacity: 1,
               
              },
              {
                duration: 1,
                delay: 3
              }])

          
          const StarsFade: AnimationSequence = arr.map((_, i) => 
            [ \`.star-\${i}\`,
              {
                scale: 0,
                opacity: 0,
               
              },
              {
                duration: 1,
                delay: 3
               
              }])

        animate([
          ...StarPositions,
          ...StarsShow,
          ...StarsFade,
        ])

        setTimeout(() => setIsTaped(true), glimCount * 1000)

       
      }
    }, [scope, animate, glimCount, isTaped])


    const handleRestart = () => {
      if(isTaped){
        setIsTaped(false)
      }
    }
   
  return (
    <div ref={scope} onClick={() => handleRestart()} className='h-full w-full relative overflow-hidden'>
           {
                arr.map((_,i) => 
                    <motion.div  className={\`star-\${i} opacity-0 z-10 absolute\`}  key={i}>
                        <div style={{
                          boxShadow: \`1px 1px 12px 1px \${glimColor}\`,
                          background: \`\${glimColor}\`,
                          filter: "blur(2px)"
                        }}  className='w-2 h-2'/>
                    </motion.div>
                )
           }
           <div className='z-20 w-full relative h-full'>
              {children}
           </div>
    </div>
  )
}

`

export const Use = `

"use client"
import React from 'react'
import { StarsGlimmer } from './starsglimmer'




const Page = () => {
 
  return (
    <StarsGlimmer glimColor='white'>
      <div className='w-full h-full flex items-center text-white bg-black/6 text-center flex-col justify-center'>
          <h1 className='text-4xl'>Welcome to NextGen</h1>
          <p className='md:w-[70%] mx-auto w-full mt-3'>Where the future your desire is no longer just a fantasy but we bring it straight to your front door.</p>
      </div>

    </StarsGlimmer>
  )
}

export default Page
`