import React from 'react'
import { assets } from '../assets/assets';


export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen bg-[#212121]'>

      <div className='flex items-center justify-center p-2 m-1 cursor-pointer logo '>
        <img src={assets.tunehive} className='h-10 z-2 animate-pulse' alt='' />
      </div>

    </div>
  )
}
