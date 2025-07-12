"use client"
import React, { useState } from 'react'
import { ShoppingCart } from 'lucide-react'
import { Button } from '../refer/button'
import { motion, AnimatePresence } from 'framer-motion'


interface checkOutProp{
    text: string,
    quantity: string
}
const CheckOut = ({text, quantity}:checkOutProp) => {
    const [isFocus, setIsFocus] = useState(false)
  return (
   <>
    <div className='relative z-10'>
            <Button 
                onClick={() => setIsFocus(!isFocus)}
                onMouseEnter={() => setIsFocus(true)}
                onMouseLeave={() => setIsFocus(false)}
                className='flex gap-1 bg-black cursor-pointer hover:bg-black font-bold top-0 left-0 overflow-hidden'>{text}
                <span className='relative p-1'>
                    <ShoppingCart className='size-6'/>
                    <motion.span 
                    layoutId='three'
                    animate={{
                        y: isFocus ? "-100%" : 0,
                        opacity: isFocus ? 0 : 1
                    }}
                    transition={{
                        duration: 0.4
                    }}
                    className='text-xs absolute top-0 right-1 bg-black rounded-full'>{quantity}</motion.span>
                </span>
            </Button>
            <AnimatePresence>
                <motion.div 
                    animate={{
                        y: isFocus? "-75%" : 0,
                        opacity: isFocus ? 1 : 0
                    }}
                    transition={{
                        duration: 0.4
                    }}
                    className='flex gap-1 cursor-pointer font-bold absolute pb-3 -z-10 text-gray-900 rounded-md w-full bg-gray-300 top-0 right-0'> 
                    <span className='relative p-1 flex py-2 gap-1'>
                        <motion.span
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        layoutId='three'>
                            {quantity}
                        </motion.span>
                        <p>Items in cart</p>
                    </span>
                </motion.div>
            </AnimatePresence>
        </div>
   </>
  )
}

export default CheckOut