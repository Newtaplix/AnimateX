import React from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from './button'
import { motion, useInView } from 'framer-motion'


interface prop{
  ref: React.RefObject<Element | null>
}


export const InvoiceNavBar = ({ref}:prop) => {
  
  const isInView = useInView(ref, {once: false, amount: 0.6})
  
  const list = [{
    name: "Product",
    content: "something"},
    {
      name: "Pricing",
      content: null
    },
    {
      name: "About",
      content: null
    },
    {
      name: "Blog",
      content: null
    }
]
  return (
    <motion.div layout 
    animate={{maxWidth: isInView ? "1000px" : "700px", 
    scale: isInView ? 1.05 : 1}} 
    transition={{duration: 0.35}}
    className='nav'>
          <div className='px-1'>
              <motion.p layout className='gradient'>Annabelle</motion.p>
          </div>
          <motion.div className='flex gap-8'>
            {
              list.map((content, i) => 
              <p key={i} className='flex items-center justify-center gap-1'>
                {content.name}
                {
                  content.content ? <ChevronDown size={24}/> : ""
                }
              </p>)
            }
          </motion.div>
          <motion.div layout className='flex gap-2 items-center justify-between'>
              <button>Sign Up</button>
              <Button text='Login'/>
          </motion.div>
    </motion.div>
  )
}
