"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion as m } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAnimate } from 'framer-motion'
import Image from 'next/image'

interface props{
  images: string[],
  className?: string,
  buttonStyles?: string
}

export const Fading = ({images, className, 
  buttonStyles="p-4 cursor-pointer rounded-full flex items-center justify-center bg-gray-400"}: props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [ width,  setWidth] = useState(0)
  const [scope, animate] =  useAnimate()

  const isMobile = window.innerWidth < 500


  useEffect(() => {
    if(!containerRef.current) return;
    setWidth(containerRef.current.offsetWidth)
    console.log(containerRef.current.offsetWidth)
  }, [])
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(0)

  // function for next button
  const handleNext = () => {
    if(!cardRef.current) return;
    if(current !== images.length - 1 && !isMobile){
      animate(".slide", {x: cardRef.current.offsetWidth * (-current)}, {duration: 0.3})
      setCurrent((prev) => prev + 1)
      setPrev(current - 1)
    }
    if(isMobile && current !== images.length){
      animate(".slide", {x: cardRef.current.offsetWidth * (-current)}, {duration: 0.3})
      setCurrent((prev) => prev + 1)
      setPrev(current - 1)
    }
  }

  // function for previous button
  const handlePrev = () => {
     if(!cardRef.current) return;
     if(current !== 0 && !isMobile){
      animate(".slide", {x: cardRef.current.offsetWidth * (-prev)}, {duration: 0.3})
      setPrev((prev) => prev - 1)
      setCurrent(prev + 1)
    }
    if(current !== 1 && isMobile){
      animate(".slide", {x: cardRef.current.offsetWidth * (-prev)}, {duration: 0.3})
      setPrev((prev) => prev - 1)
      setCurrent(prev + 1)
    }

  }
  return (
    <div ref={containerRef} className={`${className} relative overflow-hidden`}>

      {/* control buttons */}
        <div className="w-full h-10 bottom-0 top-0 my-auto absolute z-10 flex items-center justify-between">
          <m.div 
          whileTap={{scale: 0.97}}
          onClick={handlePrev}
          className={`${buttonStyles}`}><ChevronLeft size={18}/></m.div>

          <m.div onClick={handleNext}
          whileTap={{scale: 0.97}}
          className={`${buttonStyles}`}><ChevronRight size={18}/></m.div>
        </div>


        <div ref={scope} className='w-fit h-full'>
            
            {/* translatinng cards container */}
            <m.div
            initial={{
              x: cardRef.current?.offsetWidth
            }} 
            className='w-fit slide flex h-full relative'>

                {/* Array of items */}
              {
                  images.map((image, i) => 
                    <m.div 
                    ref={cardRef}
                    style={{
                      width: window.innerWidth < 500 ? window.innerWidth - 40 : width/3
                    }}
                    animate={{
                      scale: isMobile && i === current - 1 ? 0.9 : !isMobile && i === current ? 1 : 0.78
                    }}
                    key={i} className='h-full rounded-md flex items-center justify-center text-4xl bg-gray-500 relative overflow-hidden'>
                      {/* replace div id with your array components */}
                        <Image src={image} fill alt={image}/>
                    </m.div>
                  )
              }
            </m.div>
        </div>
    </div>
  )
}

export const codeTs = `
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion as m } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAnimate } from 'framer-motion'
import Image from 'next/image'

interface props{
  images: string[],
  className?: string,
  buttonStyles?: string
}

export const Fading = ({images, className, 
  buttonStyles="p-4 cursor-pointer rounded-full flex items-center justify-center bg-gray-400"}: props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [ width,  setWidth] = useState(0)
  const [scope, animate] =  useAnimate()

  const isMobile = window.innerWidth < 500


  useEffect(() => {
    if(!containerRef.current) return;
    setWidth(containerRef.current.offsetWidth)
    console.log(containerRef.current.offsetWidth)
  }, [])
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(0)

  // function for next button
  const handleNext = () => {
    if(!cardRef.current) return;
    if(current !== images.length - 1 && !isMobile){
      animate(".slide", {x: cardRef.current.offsetWidth * (-current)}, {duration: 0.3})
      setCurrent((prev) => prev + 1)
      setPrev(current - 1)
    }
    if(isMobile && current !== images.length){
      animate(".slide", {x: cardRef.current.offsetWidth * (-current)}, {duration: 0.3})
      setCurrent((prev) => prev + 1)
      setPrev(current - 1)
    }
  }

  // function for previous button
  const handlePrev = () => {
     if(!cardRef.current) return;
     if(current !== 0 && !isMobile){
      animate(".slide", {x: cardRef.current.offsetWidth * (-prev)}, {duration: 0.3})
      setPrev((prev) => prev - 1)
      setCurrent(prev + 1)
    }
    if(current !== 1 && isMobile){
      animate(".slide", {x: cardRef.current.offsetWidth * (-prev)}, {duration: 0.3})
      setPrev((prev) => prev - 1)
      setCurrent(prev + 1)
    }

  }
  return (
    <div ref={containerRef} className={\`$\{className} relative overflow-hidden\`}>

      {/* control buttons */}
        <div className="w-full h-10 bottom-0 top-0 my-auto absolute z-10 flex items-center justify-between">
          <m.div 
          whileTap={{scale: 0.97}}
          onClick={handlePrev}
          className={\`$\{buttonStyles}\`}><ChevronLeft size={18}/></m.div>

          <m.div onClick={handleNext}
          whileTap={{scale: 0.97}}
          className={\`$\{buttonStyles}\`}><ChevronRight size={18}/></m.div>
        </div>


        <div ref={scope} className='w-fit h-full'>
            
            {/* translatinng cards container */}
            <m.div
            initial={{
              x: cardRef.current?.offsetWidth
            }} 
            className='w-fit slide flex h-full relative'>

                {/* Array of items */}
              {
                  images.map((image, i) => 
                    <m.div 
                    ref={cardRef}
                    style={{
                      width: window.innerWidth < 500 ? window.innerWidth - 40 : width/3
                    }}
                    animate={{
                      scale: isMobile && i === current - 1 ? 0.9 : !isMobile && i === current ? 1 : 0.78
                    }}
                    key={i} className='h-full rounded-md flex items-center justify-center text-4xl bg-gray-500 relative overflow-hidden'>
                      {/* replace div id with your array components */}
                        <Image src={image} fill alt={image}/>
                    </m.div>
                  )
              }
            </m.div>
        </div>
    </div>
  )
}

`


export const codeJs = `

import React, { useEffect, useRef, useState } from 'react'
import { motion as m } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useAnimate } from 'framer-motion'

export const Fading = ({images, className, 
  buttonStyles="p-4 cursor-pointer rounded-full flex items-center justify-center bg-gray-400"}: props) => {
  const containerRef = useRef(null)
  const cardRef = useRef(null)
  const [ width,  setWidth] = useState(0)
  const [scope, animate] =  useAnimate()

  const isMobile = window.innerWidth < 500


  useEffect(() => {
    if(!containerRef.current) return;
    setWidth(containerRef.current.offsetWidth)
    console.log(containerRef.current.offsetWidth)
  }, [])
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(0)

  // function for next button
  const handleNext = () => {
    if(!cardRef.current) return;
    if(current !== images.length - 1 && !isMobile){
      animate(".slide", {x: cardRef.current.offsetWidth * (-current)}, {duration: 0.3})
      setCurrent((prev) => prev + 1)
      setPrev(current - 1)
    }
    if(isMobile && current !== images.length){
      animate(".slide", {x: cardRef.current.offsetWidth * (-current)}, {duration: 0.3})
      setCurrent((prev) => prev + 1)
      setPrev(current - 1)
    }
  }

  // function for previous button
  const handlePrev = () => {
     if(!cardRef.current) return;
     if(current !== 0 && !isMobile){
      animate(".slide", {x: cardRef.current.offsetWidth * (-prev)}, {duration: 0.3})
      setPrev((prev) => prev - 1)
      setCurrent(prev + 1)
    }
    if(current !== 1 && isMobile){
      animate(".slide", {x: cardRef.current.offsetWidth * (-prev)}, {duration: 0.3})
      setPrev((prev) => prev - 1)
      setCurrent(prev + 1)
    }

  }
  return (
    <div ref={containerRef} className={\`$\{className} relative overflow-hidden\`}>

      {/* control buttons */}
        <div className="w-full h-10 bottom-0 top-0 my-auto absolute z-10 flex items-center justify-between">
          <m.div 
          whileTap={{scale: 0.97}}
          onClick={handlePrev}
          className={\`$\{buttonStyles}\`}><ChevronLeft size={18}/></m.div>

          <m.div onClick={handleNext}
          whileTap={{scale: 0.97}}
          className={\`$\{buttonStyles}\`}><ChevronRight size={18}/></m.div>
        </div>


        <div ref={scope} className='w-fit h-full'>
            
            {/* translatinng cards container */}
            <m.div
            initial={{
              x: cardRef.current?.offsetWidth
            }} 
            className='w-fit slide flex h-full relative'>

                {/* Array of items */}
              {
                  images.map((image, i) => 
                    <m.div 
                    ref={cardRef}
                    style={{
                      width: window.innerWidth < 500 ? window.innerWidth - 40 : width/3
                    }}
                    animate={{
                      scale: isMobile && i === current - 1 ? 0.9 : !isMobile && i === current ? 1 : 0.78
                    }}
                    key={i} className='h-full rounded-md flex items-center justify-center text-4xl bg-gray-500 relative overflow-hidden'>
                      {/* replace div id with your array components */}
                        <img src={image} width="100%" height="100%" alt={image}/>
                    </m.div>
                  )
              }
            </m.div>
        </div>
    </div>
  )
}

`