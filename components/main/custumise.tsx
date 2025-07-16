"use client"
import React, { useState } from 'react'
import Title from './title'
import { Bolt, Lock, X, PictureInPicture2} from 'lucide-react'
import Notify from './notify'
import Format from './format'
import { Fira_Mono } from "next/font/google";


const Fira = Fira_Mono({
    subsets: ["latin"],
    variable: "--font-fira",
    weight: ["400", "500", "700"],
  });
  


const Customise = () => {
  const [isAllowed, setIsallowed] = useState(false)
  const [text, setText] = useState("Default State")
  const [type, setType] = useState("")
  const [axis, setAxis] = useState("Default State")
  const [direction, setDirection] = useState("")
  const [displacement, setDisplacement] = useState("")
  const [duration, setDuration] = useState("")
  const entry = "() => {"
  return (
    <div className='mt-38 p-2 md:p-0'>
       <div className='gap-6 text-center flex flex-col'>
            <Title icon={<Bolt size={14}/>} title='Customisation & Flexibility'/>
            <h1 className='md:text-3xl hc text-2xl'>Unlimited Customisation for your unique needs.</h1>
            <p className='tc'>Easily <span className='hc'>customizable</span> components that <span className='hc'>adapt</span> to your every need.</p>
       </div>
       <div className='mt-10 p-2 md:max-h-[570px] h-fit w-full md:w-[80%] mx-auto bg-gray-500/6 border-1 border-gray-600 rounded-lg'>
            <div className='px-4 py-2 justify-between flex items-center tc'>
                <div className='flex gap-2 items-center flex'>
                    <div className='w-4 h-4 rounded-full bg-yellow-500'/>
                    <div className='w-4 h-4 rounded-full bg-green-500'/>
                    <div className='w-4 h-4 rounded-full bg-red-500'/>
                </div>
                <p className='flex gap-2 items-center'><Lock size={12}/>AnimateX.com</p>
                <div className='flex gap-3 tc items-center'>
                        <span className='text-[16px]'>-</span>
                        <PictureInPicture2 size={16}/>
                        <X size={16}/>
                </div>
            </div>

            {/* code snippets */}
            <div className='bg-[#0b0b0f] p-2 border-1 border-gray-300/9 m-2 h-fit md:max-h-[500px] rounded-lg '>
                    
                    <span className='hc px-3 py-1 bg-gray-600/9 ml-4 mt-2 rounded-t-md'>page.tsx</span>
                    <div className='w-full px-2 py-2 h-fit md:max-h-[440px] mt-[2px] bg-gray-600/9 rounded-lg flex flex-col md:flex-row overflow-x-scroll md:overflow-x-hidden overflow-y-hidden'>
                          <div className={` ${Fira.className} flex-1 h-full border-r-1 text-[14px] border-gray-300/7 tc`}>
                                <span className='flex gap-3'>
                                    <p>1</p>
                                    <p className='flex gap-2'><Format text='Import' type='import'/> <Format text='React' type='component'/>, <Format type='import' text='{useState}'/> from <Format text='react' type='directory'/></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>2</p>
                                    <p className='flex gap-2'><Format text='Import' type='import'/> <Format text='Notify' type='component'/> from <Format text='components/ui/notify' type='directory'/></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>3</p>
                                    <p className='text-yellow-200'><span>const</span> page = <span>{entry}</span></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>4</p>
                                    <p><span className='text-yellow-200'>const</span> <span>{"[isAllowed, setisAllowed] = useState(false)"}</span></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>5</p>
                                    <p className='text-yellow-200'><span>return</span> <span>{'('}</span></p>
                                </span>
                                
                                <span className='flex gap-3'>
                                    <p>6</p>
                                    <p className='ml-14'><span>{"<>"}</span></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>7</p>
                                    <p className='ml-17 text-green-300'><span>{"<Notify"}</span></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>8</p>
                                    <p className='ml-23'><span className='text-purple-300 italic'>&quot;type&quot;:</span> <input onChange={(e) => setType(e.target.value)} className='flex-1 border-0 bg-transparent text-orange-300 outline-0' placeholder='// danger || success' type="text" /></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>9</p>
                                    <p className='ml-23'><span className='text-purple-300 italic'>&quot;message&quot;:</span> <input onChange={(e) => setText(e.target.value)} className='flex-1 border-0 bg-transparent text-orange-300 outline-0' type="text" /></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>10</p>
                                    <p className='ml-23'><span className='text-purple-300 italic'>&quot;condition&quot;:</span> <span className='text-orange-300'>{"{isAllowed}"}</span></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>11</p>
                                    <p className='ml-23'><span className='text-purple-300 italic'>&quot;direction&quot;:</span> <input onChange={(e) => setDirection(e.target.value)} className='flex-1 border-0 bg-transparent text-orange-300 outline-0' placeholder='// left, right || up, down' type="text" /></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>12</p>
                                    <p className='ml-23'><span className='text-purple-300 italic'>&quot;axis&quot;:</span> <input onChange={(e) => setAxis(e.target.value)} className='flex-1 border-0 bg-transparent text-orange-300 outline-0' placeholder='// x || y' type="text" /></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>13</p>
                                    <p className='ml-23'><span className='text-purple-300 italic'>&quot;displacement&quot;:</span> <input onChange={(e) => setDisplacement(e.target.value)} className='flex-1 border-0 bg-transparent text-orange-300 outline-0' placeholder='default 10' type="text" /></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>14</p>
                                    <p className='ml-23'><span className='text-purple-300 italic'>&quot;duration&quot;:</span> <input onChange={(e) => setDuration(e.target.value)} className='flex-1 border-0 bg-transparent text-orange-300 outline-0' placeholder='default 0.4' type="text" /></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>15</p>
                                    <p className='ml-17 text-green-300'><span>{"/>"}</span></p>
                                </span>
                                 <span className='flex gap-3'>
                                    <p>16</p>
                                    <p className='ml-14'>{" <button className='text-white p-2 rounded-md px-4 bg-black cursor-pointer' onClick={() => setIsallowed(!isAllowed)}>Allow</button>"}</p>
                                </span>
                               
                                <span className='flex gap-3'>
                                    <p>17</p>
                                    <p className='ml-14'><span>{"</>"}</span></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>18</p>
                                    <p className='text-yellow-200'><span>{')'}</span></p>
                                </span>
                                <span className='flex gap-3'>
                                    <p>19</p>
                                    <p className='text-yellow-200'><span>{'}'}</span></p>
                                </span>
                               
                          </div>
                          <div className='w-full mt-4 border-t-1 border-gray-500 md:mt-0 md:border-transparent md:w-[35%] px-2 h-full'>
                            <span className='tc'>/preview</span>
                            <div className='flex flex-col gap-7 items-center items-center overflow-hidden my-auto py-8'>
                                <Notify message={text} duration={duration} type={type} condition={isAllowed} direction={direction} axis={axis} displacement={displacement}/>
                                <button className='text-white p-2 rounded-md px-4 bg-black cursor-pointer' onClick={() => setIsallowed(!isAllowed)}>Notify</button>
                            </div>
                          </div>
                    </div>
            </div>
       </div>
    </div>
  )
}

export default Customise