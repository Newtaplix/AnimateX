import React from 'react'
import { Copyright } from 'lucide-react'

const Footer = () => {
  return (
    <div className='w-full right-0 borde-t-2 p-3 bottom-0 text-gray-500 mt-30 items-center border-t-gray-400 flex flex-col'>
      <div className='flex gap-4 text-gray-300'>
          Created by Ngwa Newton-Raul
      </div>
      <p className='flex text-xs items-center gap-2 mt-3'>Copyright <Copyright size={14}/>2025</p>
    </div>
  )
}

export default Footer