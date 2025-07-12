"use client"
import React from 'react'
import { motion } from "framer-motion"
import { Button } from '../refer/button'
import { UserPlus } from 'lucide-react'



const Vercel = () => {
  const text = `Collaborate on a Pro Trial`
  return (
    <div className='p-2 rounded-md relative'>
       <motion.div animate={{}} className={`bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 w-full blur-[8px] absolute h-full rounded-md inset-0`}></motion.div>
       <Button className='z-10 w-fit bg-white text-black absolute inset-0 mx-auto my-auto flex items-center gap-2'><UserPlus size={20}/>{text}</Button>
       <span className='opacity-0 flex items-center gap-0'><UserPlus size={10}/>{text}</span>
    </div>
  )
}

export default Vercel