"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    const [action, setAction] = useState<string>("")
    const [lastState, setLastState] = useState("")
    const handleAdd = () => {
        setCounter(counter + 1)
        setLastState("")
        if (counter === 10){
            setCounter(10)
            setLastState("shake")
        }
    }

    const handleSubtract = () => {
        setCounter(counter - 1)
        setLastState("")
        if (counter === 0){
            setCounter(0)
            setLastState("shake")
        }
    }
  return (
    <>
    
    <div>
        <div className='flex gap-4 font-bold items-center'>
            <Button onClick={handleSubtract} 
            onMouseEnter={() => setAction("decrement")} 
            onMouseLeave={() => {setAction("")
                setLastState("")
            }}
            className='rounded-full w-8 h-8 text-xl p-2 cursor-pointer'>-</Button>
            <div className='relative w-8 h-8'>
                <AnimatePresence>
                {
                    [0,1,2,3,4,5,6,7,8,9,10].map((num, i) => 
                        counter === i &&
                        <motion.span 
                        initial={{
                            y: action === "decrement" ? 30 : -30,
                            opacity: 0,
                            filter: "blur(10px)"
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            x: lastState === "shake" ? [-5,5,0] : 0,
                            filter: "blur(0px)"
                        }}
                        exit={{
                            y: action === "decrement" ? -30 : 30,
                            opacity: 0,
                            filter: "blur(10px)"
                        }}
                        transition={{
                            duration: 0.4
                        }}
                        key={i} className='text-3xl absolute top-0 left-0 right-0'>
                            {num}
                        </motion.span>
                    )
                        
                }
                </AnimatePresence>
            </div>
            <Button onClick={handleAdd}
             onMouseEnter={() => setAction("increment")} 
             onMouseLeave={() => {setAction("")
                setLastState("")
             }} 
            className='rounded-full w-8 h-8 text-xl p-2 cursor-pointer'>+</Button>
        </div>
    </div>
    </>
  )
}

export default Counter