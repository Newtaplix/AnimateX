"use client"
import React, {  useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


type model = "password" | "confirm"

interface inputProp{
    className?: string,
    onChange?: (e?:React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    model? : model,
    confirm:string,
    setVal?:React.Dispatch<React.SetStateAction<string>>
}

interface parent{
    children: React.ReactNode,
    className?: string
}

export const PasswordConfirm = ({children, className}:parent) => {
    const defaulMine = 'flex flex-col gap-4 w-full items-center justify-center'
  return (
    <div className={className + " " + defaulMine}>
        {children}
    </div>
  )
}



export const Input = ({ className, onChange, model="password", confirm}:inputProp) => {

    const defaultStyle = "rounded-md border-2 w-full relative h-10 overflow-hidden md:w-1/2 border-gray-200/8"
    const [userInput, setPass] = useState("")

    const InputArr = userInput.split("")

    const [splitted, setSplitted] = useState<string[]>([])
        
    useEffect(() => {
        const text = confirm.slice(0, userInput.length).split("")
        setSplitted(text)

    }, [confirm, userInput])

    return (
     <>
          {
            model === "password" &&
            <motion.div 
            initial={{
                x: 0
            }}
            animate={{
                x: confirm.split("").length > userInput.length ? [-7, 7, -7, 7, 0] : undefined
            }}
            transition={{
                duration: 0.153
            }}
            className={className + " " + defaultStyle}>
                <input onChange={(e) => {
                    if(onChange){
                        onChange(e)
                    }
                    setPass(e.target.value)
                }} 
                placeholder='Input Password'
                type='password'
                style={{ letterSpacing : 6}}
                className={className + " " + "h-full relative z-30 bg-transparent w-full outline-0 px-2"}/> 
                <div className='bg-transparent top-1/2 -translate-y-1/2 flex px-1 items-center absolute z-20 w-full h-full w-fit top-0'>
                 <AnimatePresence>
                    {
                        splitted.map((l,i) => 
                            splitted.includes(l) &&
                            <motion.span 
                            initial={{width: 0}}
                            animate={{width: 13}}
                            exit={{ width: 0}}
                            layout
                            key={i} className='w-[10px] h-[12px] py-3 opacity-9' 
                            style={{ 
                                background: InputArr[i] === splitted[i] ? "#22c55e" : "red",
                                borderTopLeftRadius: i === 0 ? 12 : 0,
                                borderBottomLeftRadius: i === 0 ? 12 : 0,
                                borderTopRightRadius: i === (InputArr.length - 1) ? 12 : 0,
                                borderBottomRightRadius: i === (InputArr.length - 1) ? 12 : 0,
                                
                            }}/>
                        
                    )
                    }
                 </AnimatePresence>
                </div>
            </motion.div>
        }
        {
            model === "confirm" && 
            <div  className={className + " " + defaultStyle}>
                <input onChange={(e) => {
                if(onChange){
                    onChange(e)
                }
            }} placeholder='Confirm Password' 
            style={{
                letterSpacing: 6
            }}
                type='password'
                className={className + " " + "h-full relative z-30 bg-transparent w-full outline-0 px-2"}/>
            </div>
        }
     </>
    )
}



export const code = `
"use client"
import React, {  useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


type model = "password" | "confirm"

interface inputProp{
    className?: string,
    onChange?: (e?:React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    model? : model,
    confirm:string,
    setVal?:React.Dispatch<React.SetStateAction<string>>
}

interface parent{
    children: React.ReactNode,
    className?: string
}

export const PasswordConfirm = ({children, className}:parent) => {
    const defaulMine = 'flex flex-col gap-4 w-full items-center justify-center'
  return (
    <div className={className + " " + defaulMine}>
        {children}
    </div>
  )
}



export const Input = ({ className, onChange, model="password", confirm}:inputProp) => {

    const defaultStyle = "rounded-md border-2 w-full relative h-10 overflow-hidden md:w-1/2 border-gray-200/8"
    const [userInput, setPass] = useState("")

    const InputArr = userInput.split("")

    const [splitted, setSplitted] = useState<string[]>([])
        
    useEffect(() => {
        const text = confirm.slice(0, userInput.length).split("")
        setSplitted(text)

    }, [confirm, userInput])

    return (
     <>
          {
            model === "password" &&
            <motion.div 
            initial={{
                x: 0
            }}
            animate={{
                x: confirm.split("").length > userInput.length ? [-7, 7, -7, 7, 0] : undefined
            }}
            transition={{
                duration: 0.153
            }}
            className={className + " " + defaultStyle}>
                <input onChange={(e) => {
                    if(onChange){
                        onChange(e)
                    }
                    setPass(e.target.value)
                }} 
                placeholder='Input Password'
                type='password'
                style={{ letterSpacing : 6}}
                className={className + " " + "h-full relative z-30 bg-transparent w-full outline-0 px-2"}/> 
                <div className='bg-transparent top-1/2 -translate-y-1/2 flex px-1 items-center absolute z-10 w-full h-full w-fit top-0'>
                 <AnimatePresence>
                    {
                        splitted.map((l,i) => 
                            splitted.includes(l) &&
                            <motion.span 
                            initial={{width: 0}}
                            animate={{width: 13}}
                            exit={{ width: 0}}
                            layout
                            key={i} className='w-[10px] h-[12px] py-3 opacity-9' 
                            style={{ 
                                background: InputArr[i] === splitted[i] ? "#22c55e" : "red",
                                borderTopLeftRadius: i === 0 ? 12 : 0,
                                borderBottomLeftRadius: i === 0 ? 12 : 0,
                                borderTopRightRadius: i === (InputArr.length - 1) ? 12 : 0,
                                borderBottomRightRadius: i === (InputArr.length - 1) ? 12 : 0,
                                
                            }}/>
                        
                    )
                    }
                 </AnimatePresence>
                </div>
            </motion.div>
        }
        {
            model === "confirm" && 
            <div  className={className + " " + defaultStyle}>
                <input onChange={(e) => {
                if(onChange){
                    onChange(e)
                }
            }} placeholder='Confirm Password' 
            style={{
                letterSpacing: 6
            }}
                type='password'
                className={className + " " + "h-full relative z-30 bg-transparent w-full outline-0 px-2"}/>
            </div>
        }
     </>
    )
}
`


export const useCase = `
"use client"
import React, { useState } from 'react'
import { Input, PasswordConfirm } from './passwordConfirm'

const Page = () => {
  const [confirm, setConfirm] = useState("")  
 
  return (
    <PasswordConfirm>
          <Input confirm={confirm} className='text-gray-200'/>                     
          <Input confirm="" className='text-gray-200' onChange={(e) => setConfirm(e ? e.target.value : "")} model='confirm'/>
      </PasswordConfirm>
  )
}

export default Page
`