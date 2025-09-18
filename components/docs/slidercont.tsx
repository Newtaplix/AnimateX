"use client"
import React, { useState } from 'react'
import { Code, Copy, Eye } from 'lucide-react'
import { Prism } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface block{
    component: React.ReactNode,
    codejs: string,
    codets: string
}

export const SliderContainer = ({component, codejs, codets}:block) => {
    const [ current, setCurrent] = useState(1)
    const [code, setCode] = useState(codets)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
    }
  return (
    <div className='w-full flex flex-col gap-2'>
       {
            current === 1 ? 
            <div className='w-full h-[400px]'>
                {component}
            </div> :
            <div className='w-full main h-[400px] relative'>
                <div className='flex w-30 h-10 absolute top-4 mx-auto overflow-hidden items-center bg-black/85 rounded-full right-0 left-0 cursor-pointer'>
                    <div onClick={() => setCode(codets)} className='slider-code'>TS</div>
                    <div onClick={() => setCode(codejs)} className='slider-code'>JS</div>
                    <div onClick={() => handleCopy()} className='slider-code'><Copy size={18}/></div>
                </div>
                <Prism language='tsx' style={oneDark} customStyle={{padding: 2, height: "100%", overflowX: "hidden" }}>
                    {code.trim()}
                </Prism>

            </div>
       }
        <div className='flex w-full justify-center h-10 items-center mt-2'>
            <div className='bg-gray-600/20 flex rounded-full text-gray-300 h-full w-30'>
                <button onClick={() => setCurrent(1)} className='flex-1 h-full hover:bg-gray-600/30 cursor-pointer
                 rounded-l-full flex items-center justify-center'><Eye size={18}/></button>
                <button onClick={() => setCurrent(2)} className='flex-1 h-full rounded-r-full flex  hover:bg-gray-600/30 cursor-pointer
                 items-center justify-center'><Code size={18}/></button>
            </div>
        </div>

    </div> 
  )
}
