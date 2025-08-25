"use client"
import React from 'react'
import { motion } from 'framer-motion'

interface prop{
    text?: string,
    onClick?: () => void
}

export const Button = ({text="Button", onClick}:prop) => {
  return (
    <motion.button whileTap={{scale: 0.98}} onClick={onClick} className='btn'>{text}</motion.button>
  )
}
