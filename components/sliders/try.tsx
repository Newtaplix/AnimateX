"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion as m, useAnimate } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface sliderprop{
    slidesInView?: number,
    heading?: string,
    description?: string,
    images: string[],
    height?: number
}


export const Steps = ({slidesInView = 3, heading="Check out our vacation spots",
     description="Beautiful spots from all over the world.", images, height=300}:sliderprop) => {
    const parentRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)
    const [scope, animate] =  useAnimate()
    const [current, setCurrent] = useState(1)
    const [prev, setPrev] = useState(0)


    useEffect(() => {
        if(parentRef.current){
            const width = parentRef.current.offsetWidth
            setWidth(width)
        }
    }, [])

    const handlenext = () => {
        if(!cardRef.current) return;
        if( current !== (images.length - slidesInView + 1)){
           animate(".slider", {x:-((cardRef.current.offsetWidth * current))},{duration: 0.3} )
           setCurrent((prev) => prev + 1)
           setPrev(current - 1)
        }
    }

    const handleprev = () => { 
        if(!cardRef.current) return;
        if( prev !== (0)){
           animate(".slider", {x:-((cardRef.current.offsetWidth * prev))},{duration: 0.3} )
           setPrev((prev) => prev - 1)
           setCurrent(prev + 1)
        }
    }

  return (
   <div ref={scope} className='w-full flex flex-col gap-4'>
         <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col gap-[2px]'>
                    <h1 className='text-3xl text-gray-100'>{heading}</h1>
                    <p className='text-gray-400'>{description}</p>
                </div>

                <div className='w-fit flex items-center justify-end gap-4'>
                    <m.button
                    whileTap={{scale: 0.97}} 
                    onClick={() => handleprev()}
                    className='p-2 cursor-pointer rounded-full items-center justify-center bg-white/80 text-black'><ChevronLeft size={20}/></m.button>
                      <m.button
                      onClick={() => handlenext()}
                    whileTap={{scale: 0.97}} 
                    className='p-2 rounded-full cursor-pointer items-center justify-center bg-white/80 text-black'><ChevronRight size={20}/></m.button>
                </div>
            </div>
         <div ref={parentRef} className='w-full overflow-x-hidden flex items-center'>
            <m.div style={{height:`${height}px`}} className='w-fit slider flex h-fit relative'>
                    {
                        images.map((image, i) => 
                            <div ref={cardRef} key={i}
                                style={{width: ((width / slidesInView) - 4)}} 
                                className='h-full shrink-0 rounded-md flex items-center justify-center relative overflow-hidden px-1'>
                                    <div className='h-full relative w-full rounded-md overflow-hidden'>
                                        <Image fill src={image} alt={image}/>
                                    </div>
                            </div>
                        )
                    }
            </m.div>
        </div>
   </div>
  )
}
 


export const CodeTs = `
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion as m, useAnimate } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'


interface sliderprop{
    slidesInView?: number,
    heading?: string,
    description?: string,
    images: string[],
    height?: number
}


export const Steps = ({slidesInView = 3, heading="Check out our vacation spots",
     description="Beautiful spots from all over the world.", images, height=300}:sliderprop) => {
    const parentRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)
    const [scope, animate] =  useAnimate()
    const [current, setCurrent] = useState(1)
    const [prev, setPrev] = useState(0)


    useEffect(() => {
        if(parentRef.current){
            const width = parentRef.current.offsetWidth
            setWidth(width)
        }
    }, [])

    const handlenext = () => {
        if(!cardRef.current) return;
        if( current !== (images.length - slidesInView + 1)){
           animate(".slider", {x:-((cardRef.current.offsetWidth * current))},{duration: 0.3} )
           setCurrent((prev) => prev + 1)
           setPrev(current - 1)
        }
    }

    const handleprev = () => { 
        if(!cardRef.current) return;
        if( prev !== (0)){
           animate(".slider", {x:-((cardRef.current.offsetWidth * prev))},{duration: 0.3} )
           setPrev((prev) => prev - 1)
           setCurrent(prev + 1)
        }
    }

  return (
   <div ref={scope} className='w-full flex flex-col gap-4'>
         <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col gap-[2px]'>
                    <h1 className='text-3xl text-gray-100'>{heading}</h1>
                    <p className='text-gray-400'>{description}</p>
                </div>

                <div className='w-fit flex items-center justify-end gap-4'>
                    <m.button
                    whileTap={{scale: 0.97}} 
                    onClick={() => handleprev()}
                    className='p-2 cursor-pointer rounded-full items-center justify-center bg-white/80 text-black'><ChevronLeft size={20}/></m.button>
                      <m.button
                      onClick={() => handlenext()}
                    whileTap={{scale: 0.97}} 
                    className='p-2 rounded-full cursor-pointer items-center justify-center bg-white/80 text-black'><ChevronRight size={20}/></m.button>
                </div>
            </div>
         <div ref={parentRef} className='w-full overflow-x-hidden flex items-center'>
            <m.div style={{height:\`$\{height}px\`}} className='w-fit slider flex h-fit relative'>
                    {
                        images.map((image, i) => 
                            <div ref={cardRef} key={i}
                                style={{width: ((width / slidesInView) - 4)}} 
                                className='h-full shrink-0 rounded-md flex items-center justify-center relative overflow-hidden px-1'>
                                    <div className='h-full relative w-full rounded-md overflow-hidden'>
                                        <Image fill src={image} alt={image}/>
                                    </div>
                            </div>
                        )
                    }
            </m.div>
        </div>
   </div>
  )
}
 
`


export const CodeJs = `
import React, { useEffect, useRef, useState } from 'react'
import { motion as m, useAnimate } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'



export const Steps = ({slidesInView = 3, heading="Check out our vacation spots",
     description="Beautiful spots from all over the world.", images, height=300}) => {
    const parentRef = useRef(null)
    const cardRef = useRef(null)
    const [width, setWidth] = useState(0)
    const [scope, animate] =  useAnimate()
    const [current, setCurrent] = useState(1)
    const [prev, setPrev] = useState(0)


    useEffect(() => {
        if(parentRef.current){
            const width = parentRef.current.offsetWidth
            setWidth(width)
        }
    }, [])

    const handlenext = () => {
        if(!cardRef.current) return;
        if( current !== (images.length - slidesInView + 1)){
           animate(".slider", {x:-((cardRef.current.offsetWidth * current))},{duration: 0.3} )
           setCurrent((prev) => prev + 1)
           setPrev(current - 1)
        }
    }

    const handleprev = () => { 
        if(!cardRef.current) return;
        if( prev !== (0)){
           animate(".slider", {x:-((cardRef.current.offsetWidth * prev))},{duration: 0.3} )
           setPrev((prev) => prev - 1)
           setCurrent(prev + 1)
        }
    }

  return (
   <div ref={scope} className='w-full flex flex-col gap-4'>
         <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col gap-[2px]'>
                    <h1 className='text-3xl text-gray-100'>{heading}</h1>
                    <p className='text-gray-400'>{description}</p>
                </div>

                <div className='w-fit flex items-center justify-end gap-4'>
                    <m.button
                    whileTap={{scale: 0.97}} 
                    onClick={() => handleprev()}
                    className='p-2 cursor-pointer rounded-full items-center justify-center bg-white/80 text-black'><ChevronLeft size={20}/></m.button>
                      <m.button
                      onClick={() => handlenext()}
                    whileTap={{scale: 0.97}} 
                    className='p-2 rounded-full cursor-pointer items-center justify-center bg-white/80 text-black'><ChevronRight size={20}/></m.button>
                </div>
            </div>
         <div ref={parentRef} className='w-full overflow-x-hidden flex items-center'>
            <m.div style={{height:\`$\{height}px\`}} className='w-fit slider flex h-fit relative'>
                    {
                        images.map((image, i) => 
                            <div ref={cardRef} key={i}
                                style={{width: ((width / slidesInView) - 4)}} 
                                className='h-full shrink-0 rounded-md flex items-center justify-center relative overflow-hidden px-1'>
                                    <div className='h-full relative w-full rounded-md overflow-hidden'>
                                        <img width="100%" height="100%" src={image} alt={image}/>
                                    </div>
                            </div>
                        )
                    }
            </m.div>
        </div>
   </div>
  )
}
 
`