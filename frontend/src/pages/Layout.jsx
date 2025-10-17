import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'


export default function Layout() {

    const [sidebar,setsidebar]=useState(true);

    return (
        <div className='h-[90dvh]'>
            <div className='h-full flex'>

                {sidebar && <Sidebar/>}

                <div className='w-[100%] m-2 px-1 sm:px-3 lg:px-6 py-1 sm:py-2 lg:py-4 rounded bg-[#121212] overflow-auto'>
                    <Navbar sidebar={sidebar} setsidebar={setsidebar}/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
