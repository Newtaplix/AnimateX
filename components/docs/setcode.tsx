"use client"
import React, { useState } from 'react'
import { Copy, CircleCheck } from 'lucide-react'
import { Fira_Mono } from "next/font/google";
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Prism } from "react-syntax-highlighter"
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


interface code{
    code: string,
    terminal?: string
}
interface componentProp{
    component?: React.ReactNode,
    code: string,
    copy?: boolean
}
const Fira = Fira_Mono({
    subsets: ["latin"],
    variable: "--font-fira",
    weight: ["400", "500", "700"],
  });
  
export const SetCode = ({code, terminal}:code) => {
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


export const ComponentContainer = ({code, component, copy=true}:componentProp) => {
  const [current, setCurrent] = useState("component")
  const [copycode, SetCopyCode] = useState(false)

  const CopytoClipBoard = (code:string) => {
    navigator.clipboard.writeText(code)
    SetCopyCode(true)
    setTimeout(() => SetCopyCode(false), 2000)
  }
  return (
    <div className='w-full rounded-[14px] p-[6px] bg-gray-300/4'>
        <div className='w-full justify-between hc flex items-center '>
          <div className='flex'>
            <div onClick={() => setCurrent("component")} className={cn('p-2 px-3 cursor-pointer relative', current === "component"? "hc" : "tc" )}>
              {
                  current === "component" &&
                  <motion.div layoutId="swap1" className='absolute bg-purple-600 h-[2px] w-full rounded-full bottom-0 right-0'/>
              }
                Preview
              </div>
              <div onClick={() => setCurrent("code")} className={cn('p-2 px-3 cursor-pointer relative', current === "code"? "hc" : "tc" )}>
              {
                  current === "code" &&
                  <motion.div layoutId='swap1' className='absolute bg-purple-600 h-[2px] w-full rounded-full bottom-0 right-0'/>
              }
                Code
              </div>
          </div>
         {
            copy && 
            <div onClick={() => CopytoClipBoard(code)} 
            className='rounded-md p-2 items-center justify-center cursor-pointer h-fit flex hover:bg-gray-200/4'>
               { copycode ? <CircleCheck size={16} color='#00FF00'/> :  <Copy size={16}/>}
            </div>
         }
        </div>
        <div className='h-[400px] main rounded-[8px] w-full flex items-center overflow-hidden justify-center'>
              
                    {
                    current === "code" ? 

                    <div className='w-full h-full overflow-x-hidden overflow-y-scroll p-2 scroll-dark scroll-bar scroll-button'>
                      <Prism language='tsx' style={oneDark} customStyle={{ padding: "1rem"}}>
                          {code.trim()}
                      </Prism>
                    
                    </div>
                    : <div className='p-2 w-full flex items-center justify-center'>{component}</div>

                  }
              
        </div>
    </div>
  )
}


export const PropContainer = ({code, component, copy=true}:componentProp) => {
  const [current, setCurrent] = useState("code")
  const [copycode, SetCopyCode] = useState(false)

  const CopytoClipBoard = (code:string) => {
    navigator.clipboard.writeText(code)
    SetCopyCode(true)
    setTimeout(() => SetCopyCode(false), 2000)
  }
  return (
    <div className='w-full rounded-[14px] p-[6px] bg-gray-300/4'>
        <div className='w-full justify-between hc flex items-center '>
          <div className='flex'>
              <div onClick={() => setCurrent("code")} className={cn('p-2 px-3 cursor-pointer relative', current === "code"? "hc" : "tc" )}>
              {
                  current === "code" &&
                  <motion.div layoutId='swap2' className='absolute bg-purple-600 h-[2px] w-full rounded-full bottom-0 right-0'/>
              }
                Code
              </div>
              <div onClick={() => setCurrent("component")} className={cn('p-2 px-3 cursor-pointer relative', current === "code"? "hc" : "tc" )}>
              {
                  current === "component" &&
                  <motion.div layoutId='swap2' className='absolute bg-purple-600 h-[2px] w-full rounded-full bottom-0 right-0'/>
              }
                Preview
              </div>
          </div>
         {
            copy && 
            <div onClick={() => CopytoClipBoard(code)} 
            className='rounded-md p-2 items-center justify-center cursor-pointer h-fit flex hover:bg-gray-200/4'>
               { copycode ? <CircleCheck size={16} color='#00FF00'/> :  <Copy size={16}/>}
            </div>
         }
        </div>
        <div className='h-[400px] main rounded-[8px] flex w-full p-2 items-center overflow-hidden justify-center'>
              
                    {
                    current === "code" ? 

                    <div className='w-full h-full overflow-x-hidden overflow-y-scroll p-2 scroll-dark scroll-bar scroll-button'>
                      <Prism language='tsx' style={oneDark} customStyle={{ padding: "1rem"}}>
                          {code.trim()}
                      </Prism>
                    
                    </div> : <div className='p-2 w-full flex items-center justify-center'>{component}</div>
                    

                  }
              
        </div>
    </div>
  )
}

