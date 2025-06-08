"use client"
import React from 'react'
import { Github, Star} from 'lucide-react'
import Link from 'next/link'
import Logo from './logo'
const Navbar = () => {
  return (
    <div className='md:hidden w-full fixed top-0 bg-transparent border-gray-300 border backdrop-blur-md rounded-md px-3 py-2 z-10'>
           <div className='flex relative justify-between items-center text-black'>
                <div className="">
                    <Logo/>
                </div>
              <Link href="https://github.com/Newtaplix/AnimateX">
                <div className="bg-white p-2 rounded-md relative border rounded-md"> 
                      <Github/>
                      <span className="absolute bottom-0 right-0 text-yellow-500"><Star size={16} fill="yellow"/></span>
                </div>
              </Link>
           </div>
    </div>
  )
}

export default Navbar