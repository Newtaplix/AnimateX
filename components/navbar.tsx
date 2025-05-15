"use client"
import React from 'react'
import { Github} from 'lucide-react'
import Logo from './logo'
const Navbar = () => {
  return (
    <div className='md:hidden w-full fixed top-0 bg-transparent border-gray-300 border backdrop-blur-md rounded-md px-3 py-2 z-10'>
           <div className='flex relative justify-between items-center text-black'>
                <div className="">
                    <Logo/>
                </div>
               <div className="bg-white p-2 rounded-md"> <Github/></div>
           </div>
    </div>
  )
}

export default Navbar