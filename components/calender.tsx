"use client"
import React from 'react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion, Variants} from "framer-motion"
import { LayoutGrid, LayoutList, Calendar } from 'lucide-react'

const Divvariant:Variants ={
    initial:{
        opacity: 0,
    },
    animate:{
        opacity:1,
        transition: {
            duration: 0.4
        }
    }
}


const Carlender = () => {
    const [current, setCurrent] = useState<number>()
    const months = ["U","JANUARY","FEBUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER",'OCTOBER','NOVEMBER','DECEMBER']
    const [layout, setLayOut] = useState("grid")
    const [isOpen, setIsOpen] = useState(false)
    const dummy = [
        {
            day: ['2025', '01', '01'],
            description :  "Happy New Year Everyone!!",
            title: "New Year",
            type:"Feast"        
         },
         {
            day: ['2025', '02', '11'],
            description :  "I have a Free Fire competion to win.",
            title: "Free Fire",
            type:"Feast"        
         },
         {
            day: ['2025', '05', '20'],
            description :  "The day Bamenda will be hot!!",
            title: "Bamenda",
            type:"Business"        
         },
         {
            day: ['2025', '12', '29'],
            description :  "Hurray! it's my Birthday! ",
            title: "Birthday",
            type:"Feast"        
         },
         {
            day: ['2025', '06', '10'],
            description :  "Exams are starting. I have to start reading",
            title: "Exams",
            type:"Education"        
         }, {
            day: ['2025', '05', '10'],
            description :  "Started building AnimateX",
            title: "AnimateX",
            type:"Business"        
         },
         {
            day: ['2025', '05', '15'],
            description :  "I will be maing the Navigation bar.",
            title: "AnimateX",
            type:"Business"        
         },
         {
            day: ['2025', '05', '16'],
            description :  "I think Asernal will be playing against PSG, so I have to watch the match",
            title: "Asernal",
            type:"Feast"        
         },
         {
            day: ['2025', '05', '25'],
            description :  "Writing the GCE starts today.",
            title: "GCE",
            type:"Education"        
         },
         {
            day: ['2025', '12', '25'],
            description :  "Joy to the world!! The Lord was born.",
            title: "Christmas",
            type:"Feast"        
         },

        ]
  
  return (
   <>
      <AnimatePresence>
        {
                !isOpen ?
                <motion.div layout variants={Divvariant} initial="initial" animate="animate" exit="initial" layoutId="divcontainer" onClick={() => setIsOpen(true)} style={{ borderRadius: "12px"}} className='px-4 py-2 bg-black text-white flex gap-2 items-center justify-center cursor-pointer'><motion.p layoutId="heading">Events</motion.p></motion.div> 
                :
                <motion.div layout layoutId='divcontainer' variants={Divvariant} initial="initial" animate="animate" exit="initial" className='overflow-hidden my-10 md:my-0'>
                    <div style={{ borderRadius: "1rem" }} className="flex flex-col justify-between gap-1 w-84 pt-2 bg-black">
                        <div className='flex flex-row relative justify-between items-center bg-black rounded-md w-full py-1 px-3'>
                            <div onClick={() => setIsOpen(false)} className='cursor-pointer flex relative gap-2 items-center text-white overflow-hidden'>
                                <motion.div initial={{x: 0}} animate={{ x: 100}} transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1}} className='absolute blur-[12px] inset-0 w-[20%] bg-black '/>
                                <Calendar size={17}/>
                                <motion.span layoutId = "heading">Events</motion.span>
                            </div>
                            <div className='flex items-center text-gray-500 gap-2'>
                                <span onClick={() => setLayOut("grid")} className={cn("cursor-pointer", layout === "grid" ? "text-white" : "")} ><LayoutGrid size={17}/></span>
                                <span onClick={() => setLayOut("flex")} className={cn("cursor-pointer", layout === "flex" ? "text-white" : "")}><LayoutList size={17}/></span>
                            </div>
                        </div>
                        <div style={{ borderRadius: "1rem"}} className="bg-gray-300 h-45 py-2 relative overflow-y-scroll scrollbar-hide">
                            <div className={cn('p-2')}>
                            <AnimatePresence>
                                    {
                                            layout === "grid" ?
                                        <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.4}} className='grid grid-cols-5'>
                                                {
                                                    dummy.map((item, i) => 
                                                        <motion.div layout layoutId='container' key={`${item.title} + ${i}`} onMouseLeave={() => setCurrent(-1)} onMouseEnter={() => setCurrent(i)} className={cn('text-left cursor-pointer relative bg-transparent p-1')}>
                                                                <motion.div layoutId={`${i}content`} style={{ borderRadius: "10px"}} className={cn('bg-white rounded-md w-fit p-1')}>
                                                                    <motion.div layout className='overflow-hidden bg-white rounded-md'>
                                                                                <motion.p layoutId={`text${i}`} initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.2}} className='font-bold'>{months[Number(item.day[1])].substring(0, 3)}</motion.p>
                                                                                <motion.span layout layoutId={`day${i}`} className='text-xs text-gray-500'>{item.day[2]}</motion.span>
                                                                                <div className='flex text-gray-500 gap-3 items-center'>
                                                                                    <motion.span layout layoutId={`year${i}`} className='text-xs'>{item.day[0]}</motion.span>
                                                                                    <motion.div layoutId={`type${i}`} initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0}} transition={{duration: 0.4, ease: "easeInOut"}} style={{ borderRadius: "50%"}} className={cn(`w-2 h-2 bg-red-500`,item.type === "Business" ? "bg-blue-600" : item.type === "Feast" ? "bg-yellow-500" : "bg-red-500")}/>
                                                                                </div>
                                                                    </motion.div>
                                                                    {
                                                                        current === i ? 
                                                                        <div>
                                                                            <motion.p layoutId="tooltip" style={{ borderRadius: "12px"}} className='px-2 py-1 w-fit bg-white absolute text-xs -top-2 z-10 shadow-md -right-3'>{item.title}</motion.p>
                                                                        </div> : ""
                                                                    }
                                                                </motion.div>
                                                        </motion.div>
                                                    )
                                                }
                                        </motion.div>:
                                            
                                            <motion.div initial={{opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0}} transition={{ duration: 0.4}} className='grid grid-cols-1'>
                                            {
                                                dummy.map((item, i) => 
                                                    <motion.div  key={`${item.title} + ${i}`} onMouseLeave={() => setCurrent(-1)} onMouseEnter={() => setCurrent(i)} className={cn('text-left cursor-pointer relative rounded-md mb-2 w-full')}>
                                                            <motion.div layoutId={`${i}content`} style={{ borderRadius: "12px"}} className={cn('bg-white p-1 w-full gap-3 justify-between flex')}>
                                                                        <div>
                                                                                <div>
                                                                                        <motion.p className='font-bold'>{item.title}</motion.p>
                                                                                    </div>
                                                                                <div className='flex gap-1'>
                                                                                        <motion.p layoutId={`text${i}`} layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0}}  transition={{ duration: 0.2}}  className='text-xs'>{months[Number(item.day[1])].substring(0, 3)}</motion.p>
                                                                                        <motion.span layout layoutId={`day${i}`}  className='text-xs text-gray-500'>{item.day[2]}</motion.span>
                                                                                        <motion.span layout layoutId={`year${i}`} className='text-xs'>{item.day[0]}</motion.span>
                                                                                </div>
                                                                                <motion.div layout layoutId={`type${i}`} style={{ borderRadius: "12px"}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0}} transition={{duration: 0.4, ease: "easeInOut"}} className={cn(`px-2 text-xs text-white w-fit bg-red-500`,item.type === "Business" ? "bg-blue-600" : item.type === "Feast" ? "bg-yellow-500" : "bg-red-500")}><p>{item.type}</p></motion.div>
                                                                        </div>
                                                                        <div className='text-right w-fit'>
                                                                                <p className='text-xs text-gray-500'>{item.description}</p>
                                                                        </div>
                                                            </motion.div>
                                                    </motion.div>
                                                )
                                            }
                                        </motion.div>
                                        }
                            </AnimatePresence>
                            </div>
            
                        </div>
                    </div>
            </motion.div>
            }
      </AnimatePresence>
   </>
  )
}

export default Carlender