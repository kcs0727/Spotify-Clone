import React from 'react'
import { NavLink } from 'react-router-dom';
import { UserData } from '../context/usercontext';
import {assets} from '../assets/assets'
import {FaMusic} from 'react-icons/fa';

export default function Sidebar() {

    const {user}= UserData();

    return (
        <div className='w-[25%] h-full p-2 hidden lg:flex flex-col gap-2'>

            {/* home and search */}
            <div className='bg-[#121212] h-[15%] flex flex-col justify-around rounded '>

                <NavLink to="/" end className='flex items-center gap-3 p-2 pl-8 m-1 cursor-pointer rounded-lg hover:bg-[#ffffff14]'>
                    <img src={assets.home_icon} className='w-6' alt='' />
                    <p className='font-bold'>Home</p>
                </NavLink>

                <NavLink to="/" className='flex items-center gap-3 p-2 pl-8 m-1 cursor-pointer rounded-lg hover:bg-[#ffffff14]'>
                    <img src={assets.search_icon} className='w-6' alt='' />
                    <p className='font-bold'>Search</p>
                </NavLink>

            </div>

            {/* playlist and admin */}
            <div className='bg-[#121212] h-[85%] rounded overflow-auto'>

                {/* your library */}
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src={assets.stack_icon} alt="" className='w-6' />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={assets.arrow_icon} alt="" className='w-6'/>
                        <img src={assets.plus_icon} alt="" className='w-6'/>
                    </div>
                </div>

                {/* playllist card */}
                <NavLink to='/playlist' className='flex items-center p-4 m-1 shadow-md cursor-pointer rounded-lg hover:bg-[#ffffff14]'>
                    <div className='size-10 bg-gray-600 rounded-md flex items-center justify-center'>
                        <FaMusic className='text-xl'/>
                    </div>
                    <div className='ml-4'>
                        <h2 className='font-semibold'>My Playlist</h2>
                        <p className='text-sm text-gray-400'>Playlist • <span>{user.name}</span></p>
                    </div>
                </NavLink>
                

                {/* podcasts */}
                <div className='p-4 m-1 mt-4 shadow-md rounded-lg font-semibold flex flex-col items-start justify-start gap-1'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='font-light'>we'll keep you update on new episodes</p>
                    <NavLink to='/podcast' className='px-4 py-1 bg-[#eee] text-black rounded-2xl mt-4 cursor-pointer hover:bg-white'>Browse Podcasts</NavLink>
                </div>

                {/* admin */}
                {user && user.role=== "admin" &&(
                    <NavLink to='/admin' className='font-semibold px-4 py-1 bg-green-600 text-white rounded-2xl m-4 cursor-pointer hover:bg-green-800'>Admin Dashboard</NavLink>
                )}

            </div>
        </div>
    )
}
