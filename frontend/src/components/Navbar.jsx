import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import { UserData } from '../context/usercontext';
import { assets } from '../assets/assets';

export default function Navbar() {

    const { logoutuser } = UserData();
    const navigate = useNavigate();

    const linkClass = ({ isActive }) =>
        `px-4 py-1 rounded-2xl cursor-pointer transition ${isActive
            ? 'bg-white text-black hover:bg-[#eee]'
            : 'bg-black text-white hover:bg-[#ffffff14]'
        }`;

    return (
        <>
            <div className='w-full flex justify-between items-center font-bold'>

                <div className='flex items-center gap-2'>
                    <img src={assets.arrow_left} alt="" className='w-8 bg-black p-2 cursor-pointer rounded-2xl hover:bg-[#ffffff14]' onClick={() => navigate(-1)} />
                    <img src={assets.arrow_right} alt="" className='w-8 bg-black p-2 cursor-pointer rounded-2xl hover:bg-[#ffffff14]' onClick={() => navigate(1)} />
                </div>

                <div className='flex items-center gap-4'>
                    <NavLink to='/premium'>
                        <p className='px-4 py-1 bg-[#eee] text-black rounded-2xl cursor-pointer hover:bg-white hover:scale-x-107 hidden md:block'>Explore Premium</p>
                    </NavLink>
                    <NavLink to='/installapp'>
                        <p className='px-4 py-1 bg-[#eee] text-black rounded-2xl cursor-pointer hover:bg-white hover:scale-x-107 hidden md:block'>Install App</p>
                    </NavLink>
                    <p className='px-4 py-1 bg-[#eee] text-black rounded-2xl cursor-pointer hover:bg-white hover:scale-x-107' onClick={logoutuser}>Logout</p>
                </div>

            </div>

            <div className='flex items-center gap-2 mt-4'>
                <NavLink to='/' end className={linkClass}>
                    All
                </NavLink>
                <NavLink to='/music' className={linkClass}>
                    Music
                </NavLink>
                <NavLink to='/podcast' className={linkClass}>
                    Podcasts
                </NavLink>

                <NavLink to="/playlist" className={({ isActive }) =>`${linkClass({ isActive })} lg:hidden`}>
                    Playlist
                </NavLink>
            </div>

        </>
    )
}