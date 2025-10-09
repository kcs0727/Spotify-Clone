import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'


export default function Layout() {
    return (
        <div className='h-[90vh]'>
            <div className='h-full flex'>
                <Sidebar/>
                <div className='w-[100%] lg:w-[75%] m-2 px-6 py-4 rounded bg-[#121212] overflow-auto'>
                    <Navbar/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
