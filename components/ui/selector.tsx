import { Car, Code, Drama, Gamepad, Pizza, Plane, Popcorn } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

export const Selector = () => {
    const items = [
        {
            text: "Gaming",
            icon: <Gamepad size={20}/>
        },
        {
            text: "Entertainment",
            icon: <Popcorn size={20}/>
        },
        {
            text: "Dancing",
            icon: <Drama size={20}/>
        },
        {
            text: "Driving",
            icon: <Car size={20}/>
        },
        {
            text: "Eating",
            icon: <Pizza size={20}/>
        },
        {
            text: "Aeroplanes",
            icon: <Plane size={20}/>
        },
        {
            text: "Coding",
            icon: <Code size={20}/>
        },
        {
            text: "Gaming",
            icon: <Gamepad size={20}/>
        },
        {
            text: "Entertainment",
            icon: <Popcorn size={20}/>
        },
        {
            text: "Dancing",
            icon: <Drama size={20}/>
        },
        {
            text: "Driving",
            icon: <Car size={20}/>
        },
        {
            text: "Eating",
            icon: <Pizza size={20}/>
        },
        {
            text: "Aeroplanes",
            icon: <Plane size={20}/>
        },
        {
            text: "Coding",
            icon: <Code size={20}/>
        },
        {
            text: "Gaming",
            icon: <Gamepad size={20}/>
        },
        {
            text: "Entertainment",
            icon: <Popcorn size={20}/>
        },
        {
            text: "Dancing",
            icon: <Drama size={20}/>
        },
        {
            text: "Driving",
            icon: <Car size={20}/>
        },
        {
            text: "Eating",
            icon: <Pizza size={20}/>
        },
        {
            text: "Aeroplanes",
            icon: <Plane size={20}/>
        },
        {
            text: "Coding",
            icon: <Code size={20}/>
        },
        {
            text: "Gaming",
            icon: <Gamepad size={20}/>
        },
        {
            text: "Entertainment",
            icon: <Popcorn size={20}/>
        },
        {
            text: "Dancing",
            icon: <Drama size={20}/>
        }
    ]
  return (
    <div className='flex flex-col gap-1 w-full h-full'>
        <div className='w-full overflow-x-auto'>
            <div className='flex-wrap items-center p-2 gap-2 flex h-full w-fit'>
            {
                    items.map((item, i) => 
                        <motion.div key={i} className='h-10 w-fit px-4 relative rounded-full bg-gray-800 p-[2px]'>
                            <div className=' text-white rounded-full opacity-0 inset-[2px] cursor-pointer
                                bg-black flex gap-2 items-center justify-center'>
                                {item.icon}
                                <span>{item.text}</span>
                            </div>
                            <div className=' text-white rounded-full absolute inset-[2px] cursor-pointer
                            bg-black flex gap-2 items-center justify-center'>
                                {item.icon}
                                <span>{item.text}</span>
                            </div>
                        </motion.div>
                    )
            }
            </div>
        </div>
        <div className='mt-auto'>

        </div>
    </div>
  )
}
