"use client"
import React from 'react'
import { Blocks, Folder, MousePointer, Drama, Puzzle, File, Text} from 'lucide-react'
import { DeleteButton } from '../ui/delete'
import { CircularMenu } from '../ui/circular'
import Title from './title'
import { Meteor } from '../ui/meteobg'
import { AuraButton } from '../ui/aurabutton'
import { TiltCard } from '../ui/tiltcard'
import { Zoop } from '../ui/zoop'
const Previews = () => {
  const list2 = [
    {
        icon: <File size={24}/>,
        func: () => {},
    },
    {
      icon: <Text size={24}/>,
      func: () => {},
  },
    {
        icon: <Folder size={24}/>,
        func: () => {},
    },
    {
        icon: <MousePointer size={24}/>,
        func: () => {},
    },
    {
        icon: <Drama size={24}/>,
        func: () => {},
    },
    {
      icon: <Puzzle size={24}/>,
      func: () => {},
  }
] 
  const buttons = [
    {
      name: "Meteor Shower",
      component:  
      <Meteor meteoColor='yellow'>
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-fit h-fit rounded-full text-white text-2xl md:text-2xl relative'>
                <h1 className='z-10'>SpaceX</h1>
                <div className='absolute z-20 h-[55%] bg-[#0b0b0f] w-full blur-[18px] -bottom-5 left-0'/>
            </div>
        </div>
    </Meteor>,
    link: "/components/ui/meteo"
    },
    {
      name: "Delete Button",
      component: <DeleteButton/>,
      link: "/components/ui/delete"
    },
    {
      name: "Circular Menu",
      component: <CircularMenu displacement={70} items={list2}/>,
      link: "/components/ui/circular"
    },
    {
      name: "Aura Button",
      component: <AuraButton text='HoverMe'/>,
      link: "/components/ui/aurabutton"
    },
    {
      name: "Tilt Card",
      component: <TiltCard shadowStyle='w-full h-full' className='flex items-center justify-center text-white'> Hover Me</TiltCard>,
      link: "/components/ui/tiltcard"
    },
    {
      name: "Zoop",
      component: <Zoop className='text-white' text='HoverMe'/>,
      link: "/components/ui/zoop"
    }

  ]

  return (
        <div className='mt-34'>
              <div className='text-center flex flex-col w-full gap-3 md:gap-6 md:w-fit mx-auto'>
                      <Title icon={<Blocks size={14}/>} title='Components'/>
                      <h1 className='text-2xl hc md:text-3xl'>Complete blocks for rapid developemt.</h1>
                      <p className='tc'>
                          A library of clean, animated components designed for modern interfaces
                          and seamless user experiences.
                      </p>
            </div>
              <div className='text-center grid grid-cols-1 md:grid-cols-2 w-full px-2 lg:grid-cols-3 gap-2 mt-12 md:w-[80%] mx-auto'>
               {
                buttons.map((component, i) => 
                 <div key={i} className="rounded-md bg-gray-200/4 p-2 mt-4 flex h-60 w-full md:w-80 flex-col gap-2">
                    <div className="w-full h-full rounded-md flex items-center h-150 justify-center p-2 main">
                          {component.component}
                    </div>
                    <div className='text-white'>
                      <a href={component.link}>{component.name}</a>
                    </div>

                </div>

                )
               }
                                
            </div>
        
        </div>
  )
}

export default Previews