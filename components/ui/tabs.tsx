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
    triggerContainerStyle?:string,
    contentContainerStyle?:string,
    index: string
}

export const Tabs = ({tabs, 
    tabsTriggerStyle='flex-1 flex items-center relative p-2 justify-center',
    triggerTrailStyle='inset-0 rounded-md bg-black ',
    className='w-full h-full rounded-md bg-white p-1 overflow-hidden border-gray-400',
    triggerContainerStyle="",
    contentContainerStyle = 'h-fit mt-2 rounded-md flex ',
    index 

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
                        layoutId={index}
                        className={"absolute z-10" + " " + triggerTrailStyle}/>
                    }
                </button>)
            }

        </div>

        {/* tabscontent */}

        <div className={contentContainerStyle + " " + "overflow-hidden w-full"}>
            <motion.div className='flex w-full mx-auto gap-2' 
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

export const Case = () => {
    return(
        <Tabs 
        index='vin' 
        className='w-1/2 h-[350px]'
       triggerContainerStyle='bg-transparent rounded-md text-white p-1 border-2 border-gray-200/4'
       contentContainerStyle='border-2 border-gray-200/4 rounded-md mt-2'
        tabs={[
            {title: "Account", 
                content: 
                <div className='w-full text-white p-2'>
                    <h1>Account</h1>
                    <p>Make changes to your account click save when done. </p>
                    <div>
                        <div className='flex flex-col gap-2'>
                            <h1>Name</h1>
                            <input className='border-1 border-gray-200' placeholder='Name' value={"Newton"}/>
                        </div>
                        <div>
                            <h1>Username</h1>
                            <input/>
                        </div>
                    </div>
                    <div>
                        <button>Save Changes</button>
                    </div>
                </div>},
                 {title: "Password", 
                    content: 
                    <div>
                        <h1>Password</h1>
                        <p>Change your password here. After saving, you`ll be logged out</p>
                        <div>
                            <div>
                                <h1>Current Password</h1>
                                <input/>
                            </div>
                            <div>
                                <h1>New Password</h1>
                                <input/>
                            </div>
                        </div>
                        <div>
                            <button>Save password</button>
                        </div>
                    </div>}]}/>
        
    )
}