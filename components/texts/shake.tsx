"use client"
import React, { useEffect } from 'react'
import { motion, Variants, useAnimation } from 'framer-motion'

const Stagger:Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
      repeat: Infinity
    }
  }
}
const textAnimate = {
  hidden:{y: 0, x: 0, opacity: 1},
  show: {y: [0,-10, 10, 0], scale: [1, 1.4, 1.4, 1], rotate: "360deg"}
}

const AfterControls = {
  active: {
    y: -10,
    transition: {
      duration: 0.4
    }
  }
}

const ShakingText = () => {
    const controls = useAnimation()
    const text="AnimateX"
    const textArray = text.split("")

    useEffect(() => {
      const sequence = async () => {
        await controls.start("hidden");
        await controls.start("show");
        await controls.start("active")
      }
      sequence()
    }, [controls])
  return (
    <>
       <motion.div variants={Stagger} onMouseEnter={() => controls.start("show")} animate={controls} initial="hidden" className='gap-1 font-bold text-xl cursor-pointer flex'>
          {
                textArray.map((me, i) => 
                <motion.span variants={textAnimate} animate={AfterControls}  key={i}>
                    {me}
                </motion.span>)
            }
       </motion.div>
    </>
  )
}

export default ShakingText