"use client"
import React, { useEffect } from 'react'
import { Mail, Layers } from 'lucide-react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface IconProps{
    targetRef: React.RefObject<HTMLDivElement | null>
}

export const Icon = ({targetRef}:IconProps) => {

    const list= [
        {
            icon: <Mail className='text-[#C555CE]' size={40}/>,
            y: -150,
            x: 50,
            rotate: "-10deg",
            endx: 250
        },
        {
            icon: <Layers className='text-[#C555CE]' size={40}/>,
            y: 0,
            x: 80,
            rotate: "-10deg",
            endx: 250
        },
        {
            icon: <Mail className='text-[#C555CE]' size={40}/>,
            y: 120,
            x: -10,
            rotate: "-10deg",
            endx: 250
        },
        {
            icon: <Mail className='text-[#C555CE]' size={40}/>,
            y: 120,
            x: 950,
            rotate: "10deg",
            endx: 750
        },
        {
            icon: <Mail className='text-[#C555CE]' size={40}/>,
            y: 0,
            x: 850,
            rotate: "10deg",
            endx: 750
        },
        {
            icon: <Mail className='text-[#C555CE]' size={40}/>,
            y: -150,
            x: 900,
            rotate: "10deg",
            endx: 750
        }
    ]
  return (
    <>
        {
            list.map((icon, i) => 
                <MyIcon icon={icon.icon} targetRef={targetRef} endX={icon.endx} rotate={icon.rotate} initY={icon.y} initX={icon.x} key={i}/>
            )
        }
    </>
  )
}




interface MyIconProps{
    icon: React.ReactNode,
    targetRef: React.RefObject<HTMLElement | null>,
    initY: number,
    initX: number,
    rotate: string,
    endX: number
}

export const MyIcon = ({icon, targetRef, initY, initX, rotate, endX}:MyIconProps) => {

    const { scrollYProgress } = useScroll({target: targetRef, offset: ["start start", "end start"]})

    const spring = useSpring(scrollYProgress, {damping: 15, stiffness: 100})
    const y = useTransform(spring, [0, 1], [initY, 600])
    const x = useTransform(spring, [0, 1], [initX, endX])

    useEffect(() => {
        console.log(scrollYProgress.get())
    }, [scrollYProgress])

  return (
    <motion.div 
    initial={{
        rotate: rotate
    }}

    style={{ y, x }}
    className='p-4 w-[74px] h-[74px] flex justify-center items-center top-1/2 -translate-y-1/2 absolute z-20 left-0 tc rounded-[20px] shadow-lg shadow-gray-600/40'>
        {icon}
    </motion.div>
  )
}
