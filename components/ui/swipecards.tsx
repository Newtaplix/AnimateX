import React, { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Image from 'next/image'


interface imageArr{
  id: number,
  url: string
}

interface cards{
  id:number,
  url:string,
  cardList: imageArr[],
  setCards: React.Dispatch<React.SetStateAction<imageArr[]>>
}



export const SwipeCard = () => {
  const CardsArr = [
    {
      id: 1,
      url: "/pic.jpg"
    },
    {
      id: 2,
      url: "/pic2.jpg"
    },
    {
      id: 3,
      url: "/pic3.jpg"
    },
    {
      id: 4,
      url: "/pic4.jpg"
    },
    {
      id: 5,
      url: "/pic5.jpg"
    }
  ]
  const [cards, setCards] = useState(CardsArr)
  return (
    <div className='w-full justify-center flex items-center'>
        {
          cards.map((card, i) => 
              <Cards key={i} url={card.url} id={card.id} cardList={cards} setCards={setCards} />  
          )
        }
    </div>
  )
}


export const Cards = ({id, url, cardList, setCards}:cards) => {
  const x = useMotionValue(0)
  const rotateRaw =  useTransform(x, [-100, 100], [-15, 15])
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])

  const isInfront = id === cardList[cardList.length - 1].id
  
  const rotate = useTransform(() => {
    const offset = isInfront ? 0 : id%2 ? 8 : -8
    return `${rotateRaw.get() + offset}deg`
  })

  const handleDragEnd = () => {
    if(Math.abs(x.get()) > 100){
      setCards(cardList.filter((vp) => vp.id !== id))
    }
  }

  return(
    <motion.div
    drag = {isInfront ? "x" : false} 
    dragConstraints={{ left: 0, right: 0}}
    onDragEnd={handleDragEnd}
    layout
    style={{
       x,
      rotate,
      opacity,
      boxShadow: isInfront ? "2px 2px 12px 2px black": "1px 1px 12px 1px black",
      scale: isInfront ? 1 : 0.95,
      transition: "0.125 transform"
    }}
   
    className='absolute w-50 h-64 rounded-md cursor-pointer overflow-hidden'>
      <motion.div draggable={false} layout className='group relative h-full h-full'>
        <Image draggable={false} src={url} fill alt='img'/>
      </motion.div>
    </motion.div>
  )
}