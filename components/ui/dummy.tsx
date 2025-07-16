import React from 'react'
import { Feedback } from './feedback'
import { MessageCircle } from 'lucide-react'


const page = () => {
  return (
    <Feedback
    buttonText='Comment'
    buttonClassName='bg-gray-300 text-black p-2 rounded-md'
    message='Thanks for the Feedback'
    blockName='Feedback'
    placeHolder='Input text here'
    inputClassName='bg-black p-2 rounded-md' 
    openLabel={<MessageCircle size={24}/>}
    buttonCommand={() => null}/>
    
  )
}

export default page