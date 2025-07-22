"use client"
import React, { Children, isValidElement, useState} from 'react'
import { motion, useTransform, useMotionValue } from 'framer-motion'

interface card{
    children: React.ReactNode,
    className?: string,
}

interface simplecard{
    children: React.ReactNode,
    className?: string,
    index?:number,
    arr?: React.ReactNode[],
    update?: React.Dispatch<React.SetStateAction<React.ReactNode[]>>
}


export const SwipeContainer = ({children, className}:card) => {
    const childArr = Children.toArray(children)
    const [compArr, setArr] = useState<React.ReactNode[]>(childArr)
  return (
    <div className={className + " " + "justify-center relative"}>
        {
            compArr.map((child, index) => 
            isValidElement(child) ? (
              <Card index={index} key={child.key} arr={compArr} update={setArr}>{child}</Card>
            ) : null
            )
        }
    </div>
  )
}

export const Card = ({children, className, index, arr, update}:simplecard) => {
    const x = useMotionValue(0)

    const rotateraw = useTransform(x, [-100, 100], [-25, 25])
    const isTop = index === (arr ? arr.length - 1 : null)
    const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5])

    const rotate = useTransform(() => {
        if(index){
            const offset = isTop ? 0 : 8 
            return (`${rotateraw.get() + offset}deg`)
        }
    })

    const handledragEnd = (() => {
       if(Math.abs(x.get()) > 75){
            if(arr && update && index){
                update((prev) => {
                    const currentCard = prev[index]
                    const clone = [...prev]
                    clone.splice(index, 1)
                    clone.unshift(currentCard)
                    return clone
                }) 
            }
       }
    })

    return (
        <motion.div
        drag = {isTop ? "x" : false}
        dragConstraints = {{left: 0, right: 0}}
        onDragEnd={handledragEnd}
        style={{
            x: isTop ? x : undefined,
            rotate,
            opacity: isTop ? opacity : 1,
            scale: isTop ? 1 : 0.95,
            transition:  "0.3s transform",
        }}
      
        className={className + " " + "absolute left-0 top-1/2 -translate-y-1/2 right-0 mx-auto"} >
            {children}
        </motion.div>
    )
}



export const code = `
"use client"
import React, { Children, isValidElement, useState} from 'react'
import { motion, useTransform, useMotionValue } from 'framer-motion'

interface card{
    children: React.ReactNode,
    className?: string,
}

interface simplecard{
    children: React.ReactNode,
    className?: string,
    index?:number,
    arr?: React.ReactNode[],
    update?: React.Dispatch<React.SetStateAction<React.ReactNode[]>>
}


export const SwipeContainer = ({children, className}:card) => {
    const childArr = Children.toArray(children)
    const [compArr, setArr] = useState<React.ReactNode[]>(childArr)
  return (
    <div className={className + " " + "justify-center"}>
        {
            compArr.map((child, index) => 
            isValidElement(child) ? (
              <Card index={index} key={child.key} arr={compArr} update={setArr}>{child}</Card>
            ) : null
            )
        }
    </div>
  )
}

export const Card = ({children, className, index, arr, update}:simplecard) => {
    const x = useMotionValue(0)

    const rotateraw = useTransform(x, [-100, 100], [-25, 25])
    const isTop = index === (arr ? arr.length - 1 : null)
    const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5])

    const rotate = useTransform(() => {
        if(index){
            const offset = isTop ? 0 : 8 
            return ('${"rotateraw.get() + offset"}deg')
        }
    })

    const handledragEnd = (() => {
       if(Math.abs(x.get()) > 75){
            if(arr && update && index){
                update((prev) => {
                    const currentCard = prev[index]
                    const clone = [...prev]
                    clone.splice(index, 1)
                    clone.unshift(currentCard)
                    return clone
                }) 
            }
       }
    })

    return (
        <motion.div
        drag = {isTop ? "x" : false}
        dragConstraints = {{left: 0, right: 0}}
        onDragEnd={handledragEnd}
        style={{
            x: isTop ? x : undefined,
            rotate,
            opacity: isTop ? opacity : 1,
            scale: isTop ? 1 : 0.95,
            transition:  "0.3s transform",
        }}
      
        className={className + " " + "absolute left-0 top-1/2 -translate-y-1/2  right-0 mx-auto"} >
            {children}
        </motion.div>
    )
}


`

export const useCase = `
"use client"
import React from 'react'
import { Card, SwipeContainer } from './card2'
import Image from 'next/image'

const Page = () => {
   
  const places = [
    {
      id: 1,
      url: "/pic.jpg",
      info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    },
    {
      id: 2,
      url: "/pic2.jpg",
        info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."

    },
    {
      id: 3,
      url: "/pic3.jpg",
       info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    },
    {
      id: 4,
      url: "/pic4.jpg",
       info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    },
    {
      id: 5,
      url: "/pic5.jpg",
       info: "Perched atop steep cliffs, Santorini is a dazzling island in the Aegean Sea, famous for its whitewashed hosues with blue domes the reflect sunlight like a dream."
    }
  ]
  return (
    <SwipeContainer className='h-[300px] w-full'>
        {
            places.map((place) => 
            <Card key={place.id} className='w-60 h-75 flex items-center rounded-md 
            overflow-hidden shadow-md shadow-black'>
              <div className='relative h-full w-full overflow-hidden rounded-md'>
                <div className='relative w-full h-full z-10'><Image draggable={false} src={place.url} fill alt='place'/></div>
                <div className='absolute bottom-0 rounded-b-md z-20 bg-transparent text-center backdrop-blur-md p-2 w-full text-black'>
                    {place.info}
                </div>
                </div>
            </Card>
            )
        }
    </SwipeContainer>
  )
}

export default Page
`