"use client"
import React from 'react'
import { TouchPad } from './touchpad'
import { ShimmerButton } from './shimmerbtn'

const Page = () => {
  return (
    <TouchPad className="flex items-center justify-center">
            <ShimmerButton text="Try to Click Me!"/>
    </TouchPad>
  )
}

export default Page