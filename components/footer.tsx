import React from 'react'
import { Github, Twitter, Linkedin, Copyright } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full bg-black p-3 bottom-0 text-gray-500 mt-20 items-center items-center flex flex-col'>
      <div className='flex gap-4 text-gray-300'>
          <Github/>
          <Twitter/>
          <Linkedin/>
      </div>
      <p className='flex text-xs items-center gap-2 mt-3'>Copyright <Copyright size={14}/>2025</p>
    </div>
  )
}

export default Footer