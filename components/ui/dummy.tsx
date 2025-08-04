"use client"
import React from 'react'
import { GooeyMenu } from './gooey'
import { Drama, Folder, MousePointer, Puzzle } from 'lucide-react'

const Page = () => {
  const list = [
    {
        icon: <Folder size={34}/>,
        func: () => {},
    },
    {
        icon: <MousePointer size={34}/>,
        func: () => {},
    },
    {
        icon: <Drama size={34}/>,
        func: () => {},
    },
    {
      icon: <Puzzle size={34}/>,
      func: () => {},
  },
]

  return (
    <GooeyMenu list={list} direction='right'/>
  )
}

export default Page