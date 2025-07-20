import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const HorizontalScroll2 = () => {
    const targetref = useRef(null)
    const { scrollYProgress } = useScroll({ target: targetref,})
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])
    const cards = [
        "green", "pink", "yellow", "red", "purple", "white"
    ]
  return (
    <section ref={targetref} className='h-[400vh] bg-red-500 relative'>
        <div className='sticky top-0 flex h-screen bg-blue-500 items-center overflow-hidden'>
            <motion.div style={{ x }} className='flex p-2 gap-4 w-[400vw]'>
                {
                    cards.map((card) => 
                    <div key={card} 
                    style={{background: card}}
                    className='group items-center flex h-80 w-60 text-black justify-center rounded-md'>
                        <p>{card}{scrollYProgress.get()}</p>
                    </div>)
                }
            </motion.div>
        </div>
    </section>
  )
}
