"use client"
import React, { useState } from 'react'
import { Input, PasswordConfirm } from './passwordConfirm'

const Page = () => {
  const [confirm, setConfirm] = useState("")  
 
  return (
    <PasswordConfirm>
          <Input confirm={confirm} className='text-gray-200'/>                     
          <Input confirm="" className='text-gray-200' onChange={(e) => setConfirm(e ? e.target.value : "")} model='confirm'/>
      </PasswordConfirm>
  )
}

export default Page