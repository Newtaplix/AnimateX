"use client"
import React, { useState } from 'react'
import { ContentAlert } from './contentAlert'

const Page = () => {
    const [alert, setAlert] = useState(false)
  return (
    <div className='flex items-center justify-center'>
    <ContentAlert width={32} height={32} 
    conditional={alert} 
    image="/pic.jpg"
    displayDuration={5}
    iconStyle='bg-white rounded-full'
    alertStyle='p-1 bg-black text-white mx-auto rounded-full'/>
    <button onClick={() => setAlert(!alert)} className='p-2 rounded-md text-black bg-white mt-20'>New Content</button>
</div>
  )
}

export default Page