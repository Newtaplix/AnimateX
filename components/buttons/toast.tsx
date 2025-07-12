"use client"
import React, { useState } from 'react'
import { Button } from '../refer/button'
import { User, CircleCheck, Trash ,AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, Variants } from 'framer-motion';

interface toast{
    id: number;
    icon: React.JSX.Element;
    info: string;
    time: string;
    type: string;
}

const ToastVaraint:Variants = {
    hidden: {
        y: 50,
        opacity: 0,
        scale: 0.7
    },
    show: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    exit:{
        x: 50,
        opacity: 0
    }

}

const AnimateIcon:Variants = {
    hidden: {},
    animate: {
        scale: [1, 1.5, 1.5,1.5,1.5, 1],
        x: [0, -5, 5,-5,5, 0],
        transition: {
            delay: 0.5
        }
    }
}


const Toast = () => {
    const [toasts, SetToasts] = useState<toast[]>([])
    const [number, Setnumber] = useState(0)
    const now = new Date()

    const handleAddtoast = (type:string) => {
       if (type === "Notify") {
            if(toasts.length === 3){
                const newAr = toasts.filter((_, i) => i !== 0)
                SetToasts(newAr)
            }
            const data = {
                id:number,
                icon: <User/>,
                info: "Dracular usually goes Blah Blah Blah! Blah!! Blahh!!!",
                time: `${now.getHours}:${now.getMinutes}:${now.getSeconds}`,
                type: type
            }
            SetToasts(prev => [...prev, data])
           
            console.log(toasts)
       } else if(type === "Alert"){
                if(toasts.length === 3){
                    const newAr = toasts.filter((_, i) => i !== 0)
                    SetToasts(newAr)
                }
            const data = {
                id:number,
                icon: <AlertTriangle/>,
                info: "Are you sure? Your account is about to be deleted.",
                time: `${now.getMilliseconds()}`,
                type: type
            }
            SetToasts(prev => [...prev, data])
       }    else if(type === "Success"){
            if(toasts.length === 3){
                const newAr = toasts.filter((_, i) => i !== 0)
                SetToasts(newAr)
            }
            const data = {
                id:number,
                icon: <CircleCheck/>,
                info: "Your account has been created successfully!",
                time: ``,
                type: type
            }
            SetToasts(prev => [...prev, data])
       }       
       Setnumber(prev => prev + 1) 
           
    }

    const deleteToast = (id:number) => {
        const newArr = toasts.filter((_, index) => index !== id)
        SetToasts(newArr)
    }

    const deleteAll = () => {
        SetToasts([])
    }

  return (
    <motion.div layout className='h-full w-full md:w-[55%] flex flex-col justify-end'>
      <motion.div layout className="flex h-full flex-col items-end justify-end gap-1 overflow-hidden relative mb-3">
            {
                toasts.length > 0 && 
                <motion.div layout className='w-full flex justify-end items-end absolute top-0 right-0'>
                    <motion.span layout onClick={() => deleteAll()} className='cursor-pointer text-gray-500 underline'>Clear All</motion.span>
                </motion.div>
            }
          <AnimatePresence>
                {
                        toasts.map((item, i) => 
                            <motion.div layout variants={ToastVaraint} initial="hidden" animate="show" exit="exit" key={item.id} className='w-full h-fit items-end justify-center flex flex-col'>
                                <div className={cn('p-2 rounded-md border-4 border-gray-200 flex flex-col w-full items-center', item.type === "Success" ? "border-green-200" : item.type === "Alert" ? "border-red-200" : "")}>
                                    <div className='flex gap-2 items-center justify-center'>
                                        <div className={cn('w-10 h-10 text-center rounded-full justify-center items-center flex p-2', item.type === "Success" ? "bg-green-300 text-green-600" : item.type === "Alert" ? "bg-red-400 text-red-600" : "bg-gray-400 text-black")}>
                                            <motion.div variants={AnimateIcon} animate="animate" className='flex items-center rounded-full justify-center w-fit mx-auto'>
                                                {item.icon}
                                            </motion.div>
                                        
                                        </div>
                                        <div>
                                            <p>{item.info}</p>
                                        </div>
                                        <div className='hover:text-red-600 cursor-pointer' onClick={() => deleteToast(i)}><Trash/></div>
                                    </div>
                                </div>

                            </motion.div>
                        )
                    }
          </AnimatePresence>
      </motion.div>
      <div className="flex gap-3 h-fit justify-center">
        <Button className='px-4 py-2 bg-white text-black border border-gray-400 rounded-md cursor-pointer hover:bg-gray-100' onClick={() => handleAddtoast("Notify")}>Notify</Button>
        <Button className='px-4 py-2 bg-white text-black border border-gray-400 rounded-md cursor-pointer hover:bg-gray-100' onClick={() => handleAddtoast("Alert")}>Alert</Button>
        <Button className='px-4 py-2 bg-white text-black border border-gray-400 rounded-md cursor-pointer hover:bg-gray-100' onClick={() => handleAddtoast("Success")}>Success</Button>
      </div>
    </motion.div>
  )
}

export default Toast
