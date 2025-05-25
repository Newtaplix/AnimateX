"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Star,LayoutGrid, LayoutList, Drama} from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, Variants } from 'framer-motion'

const Stack:Variants = {
  initail:{
    opacity: 0
  },
  animate:{
    opacity:1,
    transition:{
      delay: 0.2
    }
  }
}

const FlowStack = () => {
  const [Layout, setLayout] = useState("grid")
  const current = 2
  const [isRotate, setRotate] = useState(false)


  useEffect(() => {
    const timer = setTimeout(() => {
      if(Layout === "stack"){
        setRotate(true)
      }else{
        setRotate(false)
      }
    }, 200);
    return () => clearTimeout(timer)
  }, [isRotate, Layout])
  

  const changeLayout = (item:string) => {
    setLayout(item)
  }

  const items = [
    {
      name:"Bahamas",
      image: "/pic2.jpg",
      rating: 5,
      likes: 10
    },
    {
      name:"Kyoto",
      image: "/pic.jpg",
      rating: 5,
      likes: 10
    }, 

  ]
  return (
    <motion.div className='flex flex-col justify-start h-full w-110 items-center'>
        <div className="flex gap-3 mb-4">
            <button onClick={() => changeLayout("list")} className={cn('rounded-full px-4 py-2 flex gap-2 items-center border-2 border-gray-300 cursor-pointer', Layout === "list" ? "bg-red-400":"")}><LayoutList size={20}/>List</button>
            <button onClick={() => changeLayout("grid")}  className={cn('rounded-full px-4 py-2 flex gap-2 items-center border-2 border-gray-300 cursor-pointer', Layout === "grid" ? "bg-red-400":"")}><LayoutGrid size={20}/>Grid</button>
            <button onClick={() => changeLayout("stack")}  className={cn('rounded-full px-4 py-2 flex gap-2 items-center border-2 border-gray-300 cursor-pointer', Layout === "stack" ? "bg-red-400":"")}><Drama size={20}/>Stack</button>
        </div>
        <motion.div layout className={cn('w-full overflow-hidden flex flex-col justify-center items-center relative', Layout === "grid" ? "flex-row gap-3" : Layout === "stack" ? "h-48 flex-col" : "")}>
           {
              items.map((item, i) => 
                <motion.div layout key={i}
                
                transition={{
                  duration: 0.5
                }}
                 className={cn('w-full flex justify-between relative', Layout === 'grid' ? "flex-col w-fit justify-center text-center items-center" : Layout === "stack" ? " absolute right-0 left-0 h-full w-fit mx-auto top-0 bottom-0 flex-col" : "")}>
                  <motion.div layout className={cn('w-fit flex items-center gap-2 p-2', Layout === 'grid' ? "flex-col gap-1 w-fit justify-center text-center items-center" : "")}>
                    
                        <motion.div 
                          layout layoutId={`${i}`} className={cn('relative w-14 h-14 rounded-md overflow-clip', Layout === "grid" ? "w-34 h-34" : Layout === "stack" ? `w-26 h-26 mx-auto bottom-0 ${ isRotate ? i%2 === 0 ? "transiton-transform duration-200 rotate-10" : "transition-transform transform-200 -rotate-10" : ""}`: "")}>
                          <Image fill src={`${item.image}`} alt='a picture'/>
                      </motion.div>
                  
      
                  
                      {
                            Layout !== "stack" &&
                            <motion.div variants={Stack} initial="initail" animate="animate" layout>
                            
                            <motion.h1>{item.name}</motion.h1>
                            <div className='flex text-yellow-400 gap-1'>
                              {
                                [1,2,3,4,5].map((item, i) => <Star className='cursor-pointer' fill={`${i <= current ? "yellow" : "white"}`} key={item}/>)
                              }
                            </div>  
                          </motion.div> 
                        }
                  
                  </motion.div>
              </motion.div>
              )
           }
              <AnimatePresence>
                     { Layout === "stack" && 
                    <motion.div layout 
                    initial={{opacity: 0, y:10}} 
                    animate={{opacity:1, y:0}} 
                    exit={{opacity: 0, y:10}}
                    transition={{
                      duration: 0.4
                    }}
                    className={cn('items-center absolute mt-1 bottom-1 mx-auto h-fit flex flex-col justify-center')}>
                        <motion.h1 className='text-gray-700'>2 locations</motion.h1>
                        <p className="flex gap-1 text-yellow-400">6 <Star fill='yellow'/></p>
                    </motion.div>}
                 </AnimatePresence>
          
        </motion.div>
    </motion.div>
  )
}

export default FlowStack