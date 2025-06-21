"use client"
import React from 'react'
import { Github} from 'lucide-react'
import Link from 'next/link'
import Logo from './logo'
import Search_Input from './texts/search_input'
const Navbar = () => {
  return (
    <div className='w-full sticky top-0 md:top-1 left-0 right-0 bg-transparent md:w-[95%] mx-auto rounded-md border-1 border-gray-300/50 backdrop-blur-md px-3 py-1 z-60'>
           <div className='flex  gap-2 justify-between items-center text-black'>
                <div className="">
                    <Logo/>
                </div>
                <div className='flex-1 md:w-1/2'>
                    <Search_Input/>
                </div>
              <Link href="https://github.com/Newtaplix/AnimateX">
                <div className="bg-white p-1 rounded-md relative flex gap-2 items-center"> 
                      <Github/> 
                      {/* <Moon/>
                      <Twitter/>      */}
                </div>
              </Link>
           </div>
    </div>
  )
}

export default Navbar