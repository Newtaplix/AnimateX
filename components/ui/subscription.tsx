import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AuraButton } from './aurabutton'
import { Incrementer } from './incrementer'


export const SubscriptionCard = () => {

    const [current, setCurrent] = useState(2)
    const price = ["0", "75", "249"]

    
    const subscriptions = [
        {
            services: [
                "Access to some AI features",
                "3 days complete product texting",
            ]
        },
        {
            services: [
                "Free Domain.",
                "+5 team members invite.",
                "Full access to AI capabilities.",
                "Free email services.",
                "Daily Notifications.",
                "Project plan pdf generation."
            ]
        },
        {
            services: [
                "All monthly features",
                "Monthly discount of 25%",
                "New product Free update",
                "24hrs Customer service availability",
                "+10 team member invitations",
                "Higher Visiblity"
            ]
        }
    ]


    const slants = ["Lf","Mn","Yr"]

    const [choosen, setChoosen] = useState<string[]>(subscriptions[current].services)
    const subs= [
        "Free", "Monthly", "Annual"
    ]
  return (
            <div className='w-full max-w-[350px] relative h-[500px] bg-gray-500/5 rounded-md flex flex-col border-2 border-gray-400/5 shadow-xs p-2'>
                {/* navigation tab */}
                <div className='w-full flex mb-6 rounded-md overflow-hidden'>
                    {
                        subs.map((sub, i) => 
                        <motion.div onClick={() => {
                            setCurrent(i)
                            setChoosen(subscriptions[i].services)
                        }} 
                        className='p-2 rounded-md relative cursor-pointer flex flex-1 justify-center items-center' key={i}>
                           {
                            current === i &&
                            <motion.div layoutId='tab' className='absolute inset-0 bg-gray-500/7  rounded-md top-0 left-0'/>
                           }
                            {sub}
                        </motion.div>)
                    }
                </div>


                {/* incrementer */}
                <div className='text-xs flex w-full items-end justify-center'>
                           <Incrementer text='md' value={Number(price[current])} currency='$'/>
                           <p className='transition-5'>/{`${slants[current]}`}</p>
                </div>

                {/* options */}
              <ul className='flex flex-col gap-3 mt-4 px-4'>
              {
                    choosen.map((sub, i) =>  
                            <li className='list-disc' key={`service${i}`}>{sub}</li>)
                }
              </ul>

                <AuraButton className='w-full p-2 rounded-md bg-black mt-auto text-white cursor-pointer' text='Get Plan'/>
            </div>
  )
}


export const SubCode = `
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { AuraButton } from './aurabutton'
import { Incrementer } from './incrementer'


export const SubscriptionCard = () => {

    const [current, setCurrent] = useState(2)
    const price = ["0", "75", "249"]

    
    const subscriptions = [
        {
            services: [
                "Access to some AI features",
                "3 days complete product texting",
            ]
        },
        {
            services: [
                "Free Domain.",
                "+5 team members invite.",
                "Full access to AI capabilities.",
                "Free email services.",
                "Daily Notifications.",
                "Project plan pdf generation."
            ]
        },
        {
            services: [
                "All monthly features",
                "Monthly discount of 25%",
                "New product Free update",
                "24hrs Customer service availability",
                "+10 team member invitations",
                "Higher Visiblity"
            ]
        }
    ]


    const slants = ["Lf","Mn","Yr"]

    const [choosen, setChoosen] = useState<string[]>(subscriptions[current].services)
    const subs= [
        "Free", "Monthly", "Annual"
    ]
  return (
            <div className='w-full max-w-[350px] relative h-[500px] bg-gray-500/5 rounded-md flex flex-col border-2 border-gray-400/5 shadow-xs p-2'>
                {/* navigation tab */}
                <div className='w-full flex mb-6 rounded-md overflow-hidden'>
                    {
                        subs.map((sub, i) => 
                        <motion.div onClick={() => {
                            setCurrent(i)
                            setChoosen(subscriptions[i].services)
                        }} 
                        className='p-2 rounded-md relative cursor-pointer flex flex-1 justify-center items-center' key={i}>
                           {
                            current === i &&
                            <motion.div layoutId='tab' className='absolute inset-0 bg-gray-500/7  rounded-md top-0 left-0'/>
                           }
                            {sub}
                        </motion.div>)
                    }
                </div>


                {/* incrementer */}
                <div className='text-xs flex w-full items-end justify-center'>
                           <Incrementer text='md' value={Number(price[current])} currency='$'/>
                           <p className='transition-5'>/{\`$\{slants[current]}\`}</p>
                </div>

                {/* options */}
              <ul className='flex flex-col gap-3 mt-4 px-4'>
              {
                    choosen.map((sub, i) =>  
                            <li className='list-disc' key={\`service$\{i}\`}>{sub}</li>)
                }
              </ul>

                <AuraButton className='w-full p-2 rounded-md bg-black mt-auto text-white cursor-pointer' text='Get Plan'/>
            </div>
  )
}




`


