import React, { act, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserData } from '../context/usercontext';
import { assets } from '../assets/assets';

export default function Navbar(){

    const {logoutuser}= UserData();
    const navigate= useNavigate();
    const location= useLocation().pathname;

  return (
    <>

    <div className='w-full flex justify-between items-center font-bold'>

        <div className='flex items-center gap-2'>
            <img src={assets.arrow_left} alt="" className='w-8 bg-black p-2 cursor-pointer rounded-2xl hover:bg-[#ffffff14]' onClick={()=>navigate(-1)} />
            <img src={assets.arrow_right} alt="" className='w-8 bg-black p-2 cursor-pointer rounded-2xl hover:bg-[#ffffff14]' onClick={()=>navigate(1)} />
        </div>

        <div className='flex items-center gap-4'>
            <p className='px-4 py-1 bg-[#eee] text-black rounded-2xl cursor-pointer hover:bg-white hover:scale-x-107 hidden md:block'>Explore Premium</p>
            <p className='px-4 py-1 bg-[#eee] text-black rounded-2xl cursor-pointer hover:bg-white hover:scale-x-107 hidden md:block'>Install App</p>
            <p className='px-4 py-1 bg-[#eee] text-black rounded-2xl cursor-pointer hover:bg-white hover:scale-x-107' onClick={logoutuser}>Logout</p>
        </div>

    </div>

    <div className='flex items-center gap-2 mt-4'>
        <p className={`px-4 py-1 ${location==="/"?"bg-white text-black hover:bg-[#eee]":"bg-black text-white hover:bg-[#ffffff14]"}  rounded-2xl cursor-pointer`} onClick={()=>navigate("/")}>All</p>

        <p className={`px-4 py-1 ${location==="/music"?"bg-white text-black hover:bg-[#eee]":"bg-black text-white hover:bg-[#ffffff14]"}  rounded-2xl cursor-pointer`} >Music</p>

        <p className={`px-4 py-1 ${location==="/podcast"?"bg-white text-black hover:bg-[#eee]":"bg-black text-white hover:bg-[#ffffff14]"}  rounded-2xl cursor-pointer`}>Podcasts</p>
        
        <p className={`px-4 py-1 ${location==="/playlist"?"bg-white text-black hover:bg-[#eee]":"bg-black text-white hover:bg-[#ffffff14]"}  rounded-2xl cursor-pointer lg:hidden`} onClick={()=>navigate("/playlist")}>PlayList</p>
    </div>

    </>
  )
}