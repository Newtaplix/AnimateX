"use client"
import React, { useState } from 'react'
import { BlurFade } from './blurfade'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Page = () => {
  const [text, setText] = useState(0)

  const textArr = [
    "Crazy appearing text for hero sections. It enhances your user experience with a smooth fluid appearance",
    "Wow you just keep moving forward so let the story continue. Hehehe!!",
    "Crazy appearing text for hero sections. It enhances your user experience with a smooth fluid appearance"
  ]

  const next = () => {
    if(text === textArr.length - 1){
        return null
    }else{
        setText(text +  1)
    }
  }
  const previous = () => {
    if(text === 0){
        return null
    }else{
        setText(text -  1)
    }
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
          {
              textArr.map((texts, i) => 
                  i === text &&
              <BlurFade key={i} text={texts}/>
              )
          }
          <div className='mt-10 flex gap-2'>
              <div onClick={previous} className='p-1 rounded-md shadow-xs shadow-white cursor-pointer bg-black text-white'><ChevronLeft size={24}/></div>
              <div onClick={next} className='p-1 rounded-md shadow-xs shadow-white bg-black cursor-pointer text-white'><ChevronRight size={24}/></div>
          </div>
    </div>
  )
}

export default Page