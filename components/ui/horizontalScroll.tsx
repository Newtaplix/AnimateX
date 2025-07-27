import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const HorizontalScroll2 = () => {
    const targetref = useRef(null)
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({ container: containerRef, target: targetref,})
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])
    const cards = [
        "green", "pink", "yellow", "red", "purple", "white","blue","aqua","orange"
    ]
  return (
    <section ref={containerRef} className='h-[400px] bg-red-500 overflow-y-scroll'>
            <div className='h-[400px]'>diame</div>
            <div ref={targetref} className='relative bg-yellow-400 h-[300vh]'>
                <div className='sticky top-0 h-screen flex bg-black items-center overflow-hidden'>
                    <motion.div style={{ x }} className='flex p-2 gap-4 h-full'>
                        {
                            cards.map((card) => 
                            <div key={card} 
                            style={{background: card}}
                            className='items-center flex h-100 w-100 text-black justify-center rounded-md'>
                                <p>{card}{scrollYProgress.get()}</p>
                            </div>)
                        }
                    </motion.div>
                </div>
            </div>
            <div className='h-[400px]'>diame</div>
    </section>
  )
}
