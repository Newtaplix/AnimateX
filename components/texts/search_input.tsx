import React from 'react'
import { Search } from 'lucide-react'

const Search_Input = () => {
  return (
    <div className='w-full gray_border flex justify-between items-center text-gray-400 px-2'>
       <div className='flex-1 h-fit flex items-center gap-2'>
            <Search/>
            <input placeholder='Search Something' type="text" className='px-1 h-full p-1 w-full outline-none'/>
       </div>
        <div className=' h-fit'>
            <span className='bg-gray-300/7 tc rounded-md text-black px-2 py-1 text-center flex items-center text-xs '>Ctrl + K</span>
        </div>
    </div>
  )
}

export default Search_Input