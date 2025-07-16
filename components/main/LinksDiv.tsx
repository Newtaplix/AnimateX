"use client"
import React from 'react'
import Github from '../buttons/github'
import { useRouter } from 'next/navigation'
import { Heart } from 'lucide-react'

interface linksProp{
    previous?: string,
    next?:string,
    prevText?:string,
    nexText?:string
}
const LinksDiv = ({previous="", next="", prevText, nexText}:linksProp) => {
    const router = useRouter()
  return (
    <div className=' border-t-1 text-center bc py-3 flex-col gap-2 mt-10'>
        <div className="justify-between flex items-center">
            <Github onClick={() => router.push(previous)} text={prevText}/>
            <Github onClick={() => router.push(next)} text={nexText}/>
        </div>
        <div className="text-center flex flex-col items-center mt-4 justify-center">
        <p className='underline text-[14px] flex gap-2'>Created with <Heart size={14} color='red'/> by Ngwa Newton-Raul</p>
        <p onClick={() => router.push("https://github.com/Newtaplix/AnimateX")}className='underline text-[14px] gap-2 hover:text-white'>Star on Github.</p>
        </div>
    </div>
  )
}

export default LinksDiv