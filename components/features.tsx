import React from 'react'
import Title from './title'
import { Wrench, Paintbrush, Code, Star, Rocket, Zap, Wand } from 'lucide-react'
import { cn } from '@/lib/utils'

const Features = () => {
    const features = [
        {
            icon: <Paintbrush size={17}/>,
            title: "Customizable",
            info: "Modify components with props and Tailwind classes."
        },
        {
            icon: <Code size={17}/>,
            title: "Copy & Paste",
            info: "Copy and paste code directly into your project."
        },
        {
            icon: <Star size={17}/>,
            title: "Ready to use",
            info: "Production-ready components dropped out of the box."
        },
        {
            icon: <Rocket size={17}/>,
            title: "Open Source",
            info: "Free to use and modify."
        },
        {
            icon: <Zap size={17}/>,
            title: "Fast Development",
            info: "Build UIs faster with pre-built components."
        },
        {
            icon: <Wand size={17}/>,
            title: "Accessible",
            info: "Components work for everyone."
        }
    ]
  return (
    <div className='mt-38 p-2 md:p-0'>
        <div className='flex flex-col text-center justify-center w-fit mx-auto'>
            <Title icon={<Wrench size={14}/>} title='Features'/>
            <h1 className='hc mt-6 mb-6 text-2xl md:text-3xl'>Why use AnimateX?</h1>
            <p className='tc'>50+ components ready to copy and paste into your projects</p>
        </div>
        <div className='mt-8 mx-auto md:px-20 w-fit justify-center grid grid-cols-1 md:grid-cols-3'>
            {
                features.map((feature, i) => 
                <div key={i} className={cn('hc relative mx-auto border-gray-500 w-84 py-8 px-12 text-center gap-3 flex items-center flex-col',
                    i === 1 ? "border-b-1 border-l-1 border-r-1" :
                    i === 1 || i === 4 ? "border-l-1 border-r-1" :
                    i > 2 ? "border-t-1": ""
                )}>
                    {feature.icon}
                    <h1>{feature.title}</h1>
                    <p className='tc'>{feature.info}</p>
                    <div className='absolute bg-[#0b0b0f] blur-[4px] -top-4 -left-3 w-14 h-14 rounded-full'/>
                    <div className='absolute bg-[#0b0b0f] blur-[4px] -top-4 -right-3 w-14 h-14 rounded-full'/>
                    <div className='absolute bg-[#0b0b0f] blur-[4px] -bottom-4 -right-3 w-14 h-14 rounded-full'/>
                    <div className='absolute bg-[#0b0b0f] blur-[4px] -bottom-4 -left-3 w-14 h-14 rounded-full'/>
                </div>)
            }
    	    
        </div>
    </div>
  )
}

export default Features