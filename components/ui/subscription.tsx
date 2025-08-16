import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface props{
    value?: number,
    text?:string
}


export const SubscriptionCard = ({value=0}:props) => {
    const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const arrList = Array.from({length: 8})
    
  return (
                <div className='overflow-hidden h-8 flex w-fit text-white'>
                    <AnimatePresence>
                        {
                            arrList.map((_, i) =>
                                (i+1) <= String(value).length &&
                                <motion.div key={`list${i}`}
                                    initial={{opacity: 0}}
                                    animate={{
                                        y: `${Number(String(value).split("")[i]) * -100}%`,
                                        opacity: 1,
                                        x: 0
                                    }}
                                    transition={{
                                        bounce: 0.19,
                                        type: "spring",
                                        ease: "easeInOut"
                                    }}
                                    exit={{opacity: 0, y: -20}}
                                    style={{
                                        height: `${arr1.length * 100}%`
                                        }} className="shrink-0">
                                        {
                                            arr1.map((num, i) => 
                                            <div className='h-[100%] flex justify-center' key={i}>{num}</div>)
                                        
                                        }
                                    </motion.div> 
                            )
                        }
                    </AnimatePresence>
                </div>
  )
}
