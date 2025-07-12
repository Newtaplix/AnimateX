"use client"
import React, { useState } from 'react'
import { Copy, CircleCheck } from 'lucide-react'
import { Fira_Mono } from "next/font/google";
import { motion } from 'framer-motion';

interface code{
    code: string,
    terminal?: string
}

const Fira = Fira_Mono({
    subsets: ["latin"],
    variable: "--font-fira",
    weight: ["400", "500", "700"],
  });
  
const SetCode = ({code, terminal}:code) => {
  const [copied, setCopied] = useState(false)
  const tobeCopied = `${terminal} ${code}`

  const copytoclipboard = async () => {
   try {
    await navigator.clipboard.writeText(tobeCopied);
    setCopied(true)
    setTimeout(() => setCopied(false), 2000);
   } catch (err){
    console.log("Unable to copy", err)
  }}

  return (
    <div className='mt-2 w-full rounded-[10px] p-[4px] pt-6 h-fit relative bg-gray-300/9'>
        <motion.div layout onClick={() => copytoclipboard()} className='p-1 px-3 rounded-md absolute flex items-center top-[2px] 
        right-[4px] cursor-pointer text-[14px] gap-2 bg-black'>
          {
            copied?
            <CircleCheck size={14} color='green'/>:<Copy size={14}/>
          }
          {
            copied? <span>Copied</span> : <span>Copy</span>
          }</motion.div>
        <div className={`${Fira.className} w-full text-[14px] p-2 rounded-[6px] mt-2 main`}>
            <span className='flex items-center gap-2'><span className='text-orange-500'>{terminal}</span> {code}</span>
        </div>
    </div>
  )
}

export default SetCode