"use client"
import React, { useState } from 'react'
import { Search } from 'lucide-react'

const Search_Input = () => {
    const placeholder = "Find Something"
    const [isTyping, setIsTyping] = useState(false)
  return (
    <div className='w-full gray_border flex justify-between items-center pap-1 text-gray-400 px-2'>
       <div className='flex-1 h-fit flex items-center gap-2'>
            <Search/>
            <div className='relative w-full h-full'> 
                {
                    !isTyping &&
                    <span className='absolute left-2 top-1/2 -translate-y-1/2'>{placeholder}</span>
                }
                 <input onFocus={() => setIsTyping(true)} onBlur={() => setIsTyping(false)} type="text" className='px-1 h-full p-1 w-full outline-none'/>
            </div>
       </div>
        <div className=' h-fit'>
            <span className='bg-gray-300 rounded-md text-black px-2 py-1 text-center flex items-center border-1 text-xs border-gray-300/50'>Ctrl + K</span>
        </div>
    </div>
  )
}

export default Search_Input