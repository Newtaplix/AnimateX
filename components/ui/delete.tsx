"use client"
import React, { useState } from 'react'
import { X, Check } from 'lucide-react'
import { motion } from 'framer-motion'

interface props{
    checkCommand?: () => void,
    cancleCommand?: () => void
}

export const DeleteButton = ({checkCommand, cancleCommand}:props) => {
    const [isOpen, setIsOpen] = useState(false)
    const DeleteVariants = {
        close: {
            x: 0,
            scale: 0.8,
            transition:{
                duration: 0.2,
            }
        },
        open1: {
            x: -62,
            scale: 1,
            transition: {
                duration: 1,
                type: "spring",
                damping: 14
            }
        },
        open2: {
            x: 62,
            scale: 1,
            transition: {
                duration: 1,
                type: "spring",
                damping: 14
            }
        }

    }
  return (
    <div style={{

    }} className="text-black bg-red-400 cursor-pointer rounded-full relative">


        {/* svg filter */}
        <svg className='w-0 h-0 absolute'>
            <defs>
                <filter id='goo'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation={"8"} result='blur'/>
                    <feColorMatrix in='blur' mode={"matrix"} values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7' result='goo'/>
                    <feBlend in='SourceGraphic' in2={"goo"}/>
                </filter>
            </defs>
        </svg>


        {/* buttons and toolgle container */}
        <motion.div className='bg-black flex rounded-full [filter:url(#goo)] relative'>

            {/* cancle button */}
            <motion.button
            variants={DeleteVariants}
            onClick={() => {
                if(cancleCommand){
                    cancleCommand()}
                
                    setIsOpen(false)
                }
               }
            initial="close"
            animate= {isOpen ? "open1" : "close"}  
            className='p-1 bg-white absolute top-0 left-0 z-10 rounded-full'>
                <X size={34}/>
            </motion.button>

            {/* check button */}
            <motion.button
            variants={DeleteVariants}
            onClick={() => {
                if(checkCommand){
                    checkCommand()}
                    setIsOpen(false)
                }
               }
            initial="close"
            animate= {isOpen ? "open2" : "close"}  
            className='p-1 bg-white absolute top-0 right-0 z-10 rounded-full'>
                <Check size={34}/>
            </motion.button>


            {/* toggle button */}
            <motion.div 
            whileTap={{
                scale: 1.09
            }}
            onClick={() => setIsOpen(!isOpen)} className='inset-0 rounded-full z-20 bg-white flex items-center justify-center p-2 px-6'>
                Delete
            </motion.div>
        </motion.div>
    </div>
  )
}



export const Code = `
"use client"
import React, { useState } from 'react'
import { X, Check } from 'lucide-react'
import { motion } from 'framer-motion'

interface props{
    checkCommand?: () => void,
    cancleCommand?: () => void
}

export const DeleteButton = ({checkCommand, cancleCommand}:props) => {
    const [isOpen, setIsOpen] = useState(false)
    const DeleteVariants = {
        close: {
            x: 0,
            scale: 0.8,
            transition:{
                duration: 0.2
            }
        },
        open1: {
            x: -62,
            scale: 1,
            transition: {
                duration: 1,
                type: "spring",
                damping: 14
            }
        },
        open2: {
            x: 62,
            scale: 1,
            transition: {
                duration: 0.4,
                type: "spring",
                damping: 14
            }
        }

    }
  return (
    <div className="text-black bg-red-400 cursor-pointer rounded-full relative">


        {/* svg filter */}
        <svg className='w-0 h-0 absolute'>
            <defs>
                <filter id='goo'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation={"10"} result='blur'/>
                    <feColorMatrix in='blur' mode={"matrix"} values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7' result='goo'/>
                    <feBlend in='SourceGraphic' in2={"goo"}/>
                </filter>
            </defs>
        </svg>


        {/* buttons and toolgle container */}
        <motion.div className='bg-black flex rounded-full [filter:url(#goo)] relative'>

            {/* cancle button */}
            <motion.button
            variants={DeleteVariants}
            onClick={cancleCommand}
            initial="close"
            animate= {isOpen ? "open1" : "close"}  
            className='p-1 bg-white absolute top-0 left-0 z-10 rounded-full'>
                <X size={34}/>
            </motion.button>

            {/* check button */}
            <motion.button
            variants={DeleteVariants}
            onClick={checkCommand}
            initial="close"
            animate= {isOpen ? "open2" : "close"}  
            className='p-1 bg-white absolute top-0 right-0 z-10 rounded-full'>
                <Check size={34}/>
            </motion.button>


            {/* toggle button */}
            <motion.div 
            whileTap={{
                scale: 1.09
            }}
            onClick={() => setIsOpen(!isOpen)} className='inset-0 rounded-full z-20 bg-white flex items-center justify-center p-2 px-6'>
                Delete
            </motion.div>
        </motion.div>
    </div>
  )
}


`

export const Case = `
"use client"
import React from 'react'
import { DeleteButton } from './delete'


const Page = () => {
  return (
    // content here

    <DeleteButton/>

    // content here
  )
}

export default Page
`