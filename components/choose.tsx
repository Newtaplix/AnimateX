"use client"
import React, { useEffect, useState } from 'react'
import { X, } from 'lucide-react'
import { motion } from 'framer-motion'




const Choose = () => {
    const [isHovered, setIsHovered] = useState<string>("")
    {/** Basic functionalities */}
    const [skillsList, setSkillList] = useState<string[]>([""])
    const [choosenSkillList, setChoosenSkillList] = useState<string[]>([])
    const [isFull, setIsFull] = useState("")

    const handleadd = (item:string) => {
        if(choosenSkillList.length === 6){
            setIsFull("full")
        }else{
            setChoosenSkillList(prev => [...prev, item])
            const newSkillset = skillsList.filter((i) => i !== item)
            setSkillList(newSkillset)
            setIsFull("nope")
        }
    }

    const handleremove = (item:string) => {
        const newArr = choosenSkillList.filter((i) => i !== item)
        setSkillList(prev => [...prev, item])
        setChoosenSkillList(newArr)
        setIsFull("nope")
    }

    useEffect(() => {
        const skillsList=[
            "Motion","ReactJs","NextJs","HTML","CSS","Bootstrap","VanillaJs","Nestjs","Node","Django","Flask","Figma",
            "AdobeXD","Photoshop","Flutter","DotMod","Mongo"
        ]
        setSkillList(skillsList)
    }, [])
    
   
  return (
   <>
    
    <motion.div layout className="py-8 md:py-0">
        <div className='text-center mb-2'>
            <h1>What are your skills?</h1>
        </div>
        <motion.div layout>
                <motion.div layout 
                 animate={{
                    x: isFull === "full" ? [0, -12, 12, 0] : 0
                }}
                transition={{
                    duration: 0.2
                }}
                className='border-2 rounded-md p-2 w-80 border-gray-300 flex-wrap gap-2 flex relative'>
                   
                    {
                        choosenSkillList.length === 0 ?
                        <motion.span className='text-xs text-gray-400'>No skill selected (max: 6)</motion.span> :
                        choosenSkillList.map((item) => 
                        <motion.span 
                        layoutId={`${item}`}
                        layout
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                        key={`${item}`} className='cursor-pointer h-fit bg-gray-200 rounded-full flex gap-2 items-center py-1 px-2 text-xs'>
                            {item}
                            <motion.span
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            exit={{
                                opacity: 0
                            }}
                            transition = {{
                                duration: 0.2
                            }}
                            onClick={() => handleremove(item)}
                            className='bg-white p-1 rounded-full flex justify-center text-center items-center'><X size={8}/></motion.span>
                        </motion.span>)
                    }

                </motion.div>
                <motion.div layout className='border-2 rounded-md p-2 w-80 border-gray-300 flex gap-2 flex-wrap mt-4 overflow-clip relative pt-7'>
                    <span className='absolute top-0 left-0 text-xs bg-gray-100 p-1 text-gray-500 rounded-br-md'>
                        skill list
                    </span>
                    {
                        skillsList.map((item) => 
                        <motion.span
                        layoutId={`${item}`}
                        layout
                        onMouseEnter={() => {setIsHovered(item)
                            setIsFull("nope")
                        }}
                        onMouseLeave={() => setIsHovered("null")}
                        whileTap={{ scale: 0.95}}
                        animate={{
                            scale: isHovered ===  item ? 1.1 : 1,
                            opacity: 1
                        }}
                        exit={{
                            scale: 1.1
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                        key={`${item}`}  onClick={() => handleadd(item)} className='cursor-pointer bg-gray-200 rounded-full py-1 px-2'>
                            {item}
                        </motion.span>)
                    }

                </motion.div>
        </motion.div>
    
    </motion.div>
   </>
  )
}

export default Choose