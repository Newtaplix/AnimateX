import React from 'react'
import Footer from '@/components/main/footer'
import Navbar from '@/components/main/navbar'
import { Steps, CodeTs, CodeJs } from '@/components/sliders/try'
import { SliderContainer } from '@/components/docs/slidercont'
import { Fading, codeJs, codeTs } from '@/components/sliders/fading'

const SliderPage = () => {
  const images = [
    "/pic.jpg","/pic2.jpg","/pic3.jpg","/pic4.jpg","/pic5.jpg","/pic3.jpg","/pic.jpg","/pic4.jpg"
  ]
  const imagelist = ['/anime/aura.jpeg', '/anime/gojo.jpeg', '/anime/sung.jpeg', '/anime/tengen.jpeg', '/anime/zenitsu.jpeg']
  return (
    <div className='flex flex-col items-center w-full max-w-5xl mx-auto p-2 pt-20 gap-10'>
        <Navbar/>
        <SliderContainer codejs={CodeJs} codets={CodeTs} component={<Steps images={images} slidesInView={4}/>}/>
        <SliderContainer codejs={codeJs} codets={codeTs} component={<Fading images={imagelist} className='w-[100%] mx-auto h-full'/>}/>
        <div className='w-full mt-auto'>
            <Footer/>
        </div>
    </div>
  )
}

export default SliderPage