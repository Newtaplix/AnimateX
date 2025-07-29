"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import Swoop from './swoop'
import Link from 'next/link'
import Title from './title'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Github from '../buttons/github'



const AnimateX = () => {
  const [currentItem, setCurrentItem] = useState<number>(0)
  const [direction, setDirection] = useState(1)
  const router = useRouter()
  const max = 2
  const arr = [
    "green", "red","yellow"
  ]
  const colors = ["#00FF00", "#FF0000", "#FFFF00", "#0000FF"]

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentItem(prev => {
        let next = prev + direction;
        if(next >= max){
          setDirection(-1)
          next = max
        }
        if(next <= 0){
          setDirection(1);
          next = 0
        }
        return next;
      })
    , 1500)
    return () => clearInterval(interval)
  }, [direction])
  
  return (
    <div>
     <Title icon={<Sparkles size={14}/>} title='Introducing pre-built blocks'/>
       <div  className='relative px-4 mb-13 mt-12 w-fit h-fit mx-auto'>
         <div className="px-4 py-2 rounded-md w-fit mx-auto font-bold bg-white blur-[0.4px] relative z-20">
              AnimateX
          </div> 
          <div className='w-full flex absolute top-0 right-0 left-0 z-10 blur-[18px]'>
              {
                arr.map((item, i) => 
                  <motion.div key={item}
                    layoutId='Morph'
                    animate={{
                      scale: currentItem === i ? 1.4 : 1,
                      borderRadius: currentItem === i && i === 0 || 2 ? "8px" : "0",
                      rotate: currentItem === i ? "360deg" : "0deg",
                      backgroundColor: currentItem === i ? colors[i] : colors[Math.floor(Math.random() * colors.length)]
                    }}
                    transition={{
                      duration: 3,
                    }}
                    className={cn('bg-green-500 w-20 h-15', i === 1 ? "rounded-none" : i === 0 ? "rounded-l-md" : "rounded-r-md" )}></motion.div> 
                )
              }         
          </div>   
       </div>
       <Swoop id={currentItem}/>
       <p className='tc text-center max-w-full md:max-w-[700px] mx-auto'>
              This is more than just a library. Its a motion playground. Packed with custom-built,
              fully animated UI components, crafted with Framer Motion and styled with Tailwind. Every 
              component is smooth, responsive and ready to light up your next project. 
       </p>
       <div className='flex gap-8 mt-5 items-center justify-center'>
                
                <Github text='Components' onClick={() => router.push("/components/docs/introduction")}/>
                <Link className='bg-gray-100 px-3 py-2 rounded-md text-black text-center w-40 flex items-center justify-center shadow-md cursor-pointer' href="https://github.com/Newtaplix/AnimateX">Star on Github</Link>
                
       </div>         
      <div className='flex gap-2 tc mx-auto w-fit bg-black/40 text-[14px] items-center justify-center mt-10 px-4 rounded-full py-[3px]'>
        <span>Built with</span>
        <div className='flex gap-1'>
              <Image src={"/next2.svg"} width={20} height={20} alt='N'/>
              <Image src={"/tail.svg"} width={20} height={20} alt='N'/>
              <Image src={"/typescript.svg"} width={20} height={20} alt='N'/>
              <Image src={"/framer.png"} width={20} height={20} alt='N'/>
        </div>
      </div>
    </div>
  )
}

export default AnimateX