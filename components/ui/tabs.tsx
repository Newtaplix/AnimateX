"use client"
import React, { useState } from 'react'
import { motion} from 'framer-motion'


interface data{
    title:string,
    content: React.ReactNode
}
interface propIn{
    tabs:data[],
    tabsTriggerStyle?: string,
    triggerTrailStyle?: string,
    className?:string,
    triggerContainerStyle?:string
}

export const Tabs = ({tabs, 
    tabsTriggerStyle='flex-1 flex items-center relative p-2 justify-center',
    triggerTrailStyle='inset-0 rounded-md bg-black ',
    className='w-full h-full rounded-md bg-white p-1 overflow-hidden border-gray-400',
    triggerContainerStyle=""

}:propIn) => {

    const [current, setCurrent] = useState(0) 

  return (
    <div className={className}>

        {/* tabs heading */}
        <div className={'flex' + " " + triggerContainerStyle} >
            {
                tabs.map((tab, i) => 
                <button onClick={() => {
                    
                    setCurrent(i)}} key={i} className={tabsTriggerStyle}>
                    <span className='z-20'>{tab.title}</span>
                    {
                        i === current &&
                        <motion.div 
                        layoutId='tab'
                        className={"absolute z-10" + " " + triggerTrailStyle}/>
                    }
                </button>)
            }

        </div>

        {/* tabscontent */}

        <div className='h-[320px] mt-2 w-full rounded-md overflow-hidden flex '>
            <motion.div className='bg-black flex mx-auto' 
            animate={{
                x: `-${current * 100}%`
            }} 
            transition={{
                duration: 0.4,
                stiffness: 0.1
            }}
            style={{
                width: `${tabs.length * 100}%`
            }}>
            {
                            tabs.map((content, i) => 
                            
                            <motion.div 
                            style={{
                                width: "100%"
                            }}
                            transition={{
                                duration: 0.4
                            }}
                            key={i} className='h-full mx-auto min-w-full'>
                                {content.content}
                            </motion.div>)
                        }
            </motion.div>
                      
            
        </div>

    </div>
  )
}

export const TabContent = () => {
    return (
        <></>
    )
}
