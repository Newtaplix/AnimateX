import { Code, Command, Snail, Wand, Zap } from 'lucide-react'
import React from 'react'

const Spinner = () => {
    const quotes = [
        {
            quote: "Every pixels deserves to dance - we make sure it moves with purpurse and style",
            icon: <Wand/>
        },
        {
            quote: "Bring your interface to life - one motion at a time.",
            icon: <Command/>
        },
        {
            quote: "Clean code. slick motion. Built for developers who obsess over the details",
            icon: <Snail/>

        },
        {
            quote: "Design shouldn't sit still. We bring it to life with every interaction.",
            icon: <Zap/>
        },
        {
            quote: "Animations so smooth you'll forget your're looking at code.",
            icon: <Code/>
        }
    ]
  return (
    <div className='relative h-full bg-black items-center flex flex-col overflow-hidden'>
        {
            quotes.map((item, i) => <div className='flex gap-3 absolute items-center
             p-2 rounded-md bg-white w-80' key={i}>
                <div>{item.icon}</div>
                <div>{item.quote}</div>
            </div>)
        }
    </div>
  )
}

export default Spinner