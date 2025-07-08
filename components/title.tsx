import React, { ReactNode } from 'react'


interface mytitle{
    title: string,
    icon: ReactNode
}

const Title = ({title, icon}:mytitle) => {
  return (
    <div className='mx-auto h-fit bg-black/40 text-[14px] hc
    mb-2 flex gap-2 px-4 py-[3px] border-1 border-black/40 rounded-full items-center w-fit'>
        {icon}
        <span>{title}</span>
    </div>
  )
}

export default Title