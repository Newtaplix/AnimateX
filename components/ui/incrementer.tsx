import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface props{
    value?: number,
    text?:string,
    currency?: string,
    duration?: number
}


export const Incrementer = ({value=0, text="md", currency, duration}:props) => {
    const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const arrList = Array.from({length: 8})
    

    const sizes = {
        sm: "text-xl md:text-2xl h-[28px] md:h-[26px]",
        md: "text-2xl md:text-4xl h-[28px] md:h-[38px]",
        lg: "text-4xl md:text-6xl h-[36px] md:h-[60px]",
        smm: "text-[14px] h-[20px]"
    }

    const size = text === "sm" ? sizes.sm : text === "md" ? sizes.md : text === "lg" ? sizes.lg : sizes.smm

  return (
               
                <motion.div layout className={`${size} overflow-hidden flex w-fit`}>
                    <AnimatePresence>
                        {
                            arrList.map((_, i) =>
                                (i+1) <= String(value).length &&
                                <motion.div key={`list${i}`}
                                    initial={{opacity: 0,x: 15, y:15, filter: "blur(18px)"}}
                                    animate={{
                                        y: `${Number(String(value).split("")[i]) * -12}%`,
                                        opacity: 1,
                                        width: "auto",
                                        filter: "blur(0px)",
                                        x: 0
                                    }}
                                    transition={{
                                        bounce: 0.19,
                                        type: "spring",
                                        ease: "easeInOut",
                                        duration: duration
                                    }}
                                    exit={{opacity: 0, width: 0, x: 15, y:15, filter: "blur(18px)"}}
                                    style={{
                                        height: `${arr1.length * 100}%`
                                        }} className="shrink-0">
                                        {
                                            arr1.map((num, i) => 
                                            <div className='h-[12%] flex justify-center' key={i}>{num}</div>)
                                        
                                        }
                                    </motion.div> 
                            )
                        }
                    </AnimatePresence>
                    { currency ? <motion.p layout>{currency}</motion.p> : ""}
                </motion.div>

  )
}


export const Code = `import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface props{
    value?: number,
    text?:string,
    currency?: string
}


export const Incrementer = ({value=0, text="md", currency}:props) => {
    const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const arrList = Array.from({length: 8})
    

    const sizes = {
        sm: "text-xl md:text-2xl h-[28px] md:h-[26px]",
        md: "text-2xl md:text-4xl h-[28px] md:h-[38px]",
        lg: "text-4xl md:text-6xl h-[36px] md:h-[60px]"
    }

    const size = text === "sm" ? sizes.sm : text === "md" ? sizes.md : sizes.lg

  return (
               
                <motion.div layout className={\`$\{size} overflow-hidden flex w-fit text-white\`}>
                    <AnimatePresence>
                        {
                            arrList.map((_, i) =>
                                (i+1) <= String(value).length &&
                                <motion.div key={\`list$\{i}\`}
                                    initial={{opacity: 0, width: 0, x: 15, y:15, filter: "blur(18px)"}}
                                    animate={{
                                        y: \`$\{Number(String(value).split("")[i]) * -12}%\`,
                                        opacity: 1,
                                        width: "auto",
                                        filter: "blur(0px)",
                                        x: 0
                                    }}
                                    transition={{
                                        bounce: 0.19,
                                        type: "spring",
                                        ease: "easeInOut"
                                    }}
                                    exit={{opacity: 0, width: 0, x: 15, y:15, filter: "blur(18px)"}}
                                    style={{
                                        height: \`$\{arr1.length * 100}%\`
                                        }} className="shrink-0">
                                        {
                                            arr1.map((num, i) => 
                                            <div className='h-[12%] flex justify-center' key={i}>{num}</div>)
                                        
                                        }
                                    </motion.div> 
                            )
                        }
                    </AnimatePresence>
                    { currency ? <motion.p layout>{currency}</motion.p> : ""}
                </motion.div>

  )
}


`


export const UseCase = `
"use client"
import React, { useState } from 'react'
import { Incrementer } from './incrementer'

const Page = () => {
  const [value, setValue] = useState(0)
  return (
    <div className='flex gap-6 items-center text-3xl'>
      <div 
      className='p-2 rounded-full bg-white text-black h-10 w-10 cursor-pointer flex items-center justify-center' 
      onClick={() => setValue((prev) => prev - 1) }>-</div>
        <Incrementer value={value} text='md'/>
      <div className='p-2 rounded-full bg-white text-black h-10 w-10 cursor-pointer flex items-center justify-center' 
      onClick={() => setValue((prev) => prev + 1) }>+</div>
    </div>
  )
}

export default Page
`