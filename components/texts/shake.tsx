"use client"
import React from 'react'

const ShakingText = () => {

    const text="AnimateX"
    const textArray = text.split("")
  return (
    <>
        {
            textArray.map((me, i) => 
            <span key={me + i}>
                {me}
            </span>)
        }
    </>
  )
}

export default ShakingText