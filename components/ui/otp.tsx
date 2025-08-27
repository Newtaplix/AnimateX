import React, { useState, useRef} from 'react'
import { motion, AnimatePresence, useAnimate} from 'framer-motion'


interface otpProps{
    otpValue: string,
    id: string
}

export const OTP = ({otpValue="12345", id="mui"}:otpProps) => {
    const val = otpValue.split("")
    const [scope, animate] = useAnimate()
  const [otp, setOtp] = useState(Array(val.length).fill(""))
  const [current, setCurrent] = useState(0)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input if value is entered
    if (value === val[index] && index < 5) {
      inputRefs.current[index + 1]?.focus()
        setCurrent(index + 1)
    } else {
        animate(
            `.input-${index}`, {x: otp[index].length === 1 ? 0 : [-5, 5, -5, 5, 0]}, {duration: 0.15}
        )
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus()
      setCurrent(index - 1)
    }
  }

  return (
    <div ref={scope} className="flex flex-col items-center gap-6 p-6">
      <div className="flex gap-3">
        {otp.map((digit, index) => (
          <motion.div key={index} className={`input-${index} w-fit h-fit flex relative rounded-[12px] p-[4px]`}>
                <motion.input
                ref={(el) => {
                inputRefs.current[index] = el
                }}
                animate={{
                    color: otp[index].length === 0 ? "white" : val[index] === otp[index] ? "#00FF00" : "#FF0000",
                    background: otp[index].length === 0 ? "#00000000" : val[index] === otp[index] ? "#00FF0050" : "#FF000050"
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center z-20 text-lg font-semibold border-2 border-gray-300/6 outline-none rounded-[8px]"
                    />
               <AnimatePresence>
               {
                    current === index &&
                    <motion.div
                    layoutId={`${id}`}
                    className='border-blue-400 border-4 bg-transparent z-10 absolute bottom-0 left-0 w-full h-full rounded-[12px]'/>
                }
               </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}



export const code = `
import React, { useState, useRef} from 'react'
import { motion, AnimatePresence, useAnimate} from 'framer-motion'


interface otpProps{
    otpValue: string,
    id: string
}

export const OTP = ({otpValue="12345", id="mui"}:otpProps) => {
    const val = otpValue.split("")
    const [scope, animate] = useAnimate()
  const [otp, setOtp] = useState(Array(val.length).fill(""))
  const [current, setCurrent] = useState(0)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input if value is entered
    if (value === val[index] && index < 5) {
      inputRefs.current[index + 1]?.focus()
        setCurrent(index + 1)
    } else {
        animate(
            \`.input-$\{index}\`, {x: otp[index].length === 1 ? 0 : [-5, 5, -5, 5, 0]}, {duration: 0.15}
        )
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus()
      setCurrent(index - 1)
    }
  }

  return (
    <div ref={scope} className="flex flex-col items-center gap-6 p-6">
      <div className="flex gap-3">
        {otp.map((digit, index) => (
          <motion.div key={index} className={\`input-$\{index} w-fit h-fit flex relative rounded-[12px] p-[4px]\`}>
                <motion.input
                ref={(el) => {
                inputRefs.current[index] = el
                }}
                animate={{
                    color: otp[index].length === 0 ? "white" : val[index] === otp[index] ? "#00FF00" : "#FF0000",
                    background: otp[index].length === 0 ? "#00000000" : val[index] === otp[index] ? "#00FF0050" : "#FF000050"
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center z-20 text-lg font-semibold border-2 border-gray-300/6 outline-none rounded-[8px]"
                    />
               <AnimatePresence>
               {
                    current === index &&
                    <motion.div
                    layoutId={\`$\{id}\`}
                    className='border-blue-400 border-4 bg-transparent z-10 absolute bottom-0 left-0 w-full h-full rounded-[12px]'/>
                }
               </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


`

export const useCase = `
"use client"
import React from 'react'
import { OTP } from './otp'

const Page = () => {
  return (
    <OTP id='mui' otpValue='45768'/>
  )
}

export default Page
`