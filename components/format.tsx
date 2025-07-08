import React from 'react'

interface formating{
    type: string,
    text: string
}

const Format = ({type, text}:formating) => {

  return (
    <span>
        {
            type === "import" ? 
            <span className='text-green-300'>{text}</span> :
            type === "directory" ?
            <span className='text-purple-300'>{text}</span>:
            type === "component" ?
            <span className='text-blue-300'>{text}</span> : ""
        }
    </span>
   
  )
}


export default Format