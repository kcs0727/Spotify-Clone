import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'


export default function Layout({children}) {
    return (
        <div className='h-[90vh]'>
            <div className='h-full flex'>
                <Sidebar/>
                <div className='w-[100%] lg:w-[75%] m-2 px-6 py-4 rounded bg-[#121212] overflow-auto'>
                    <Navbar/>
                    {children}
                </div>
            </div>
        </div>
    )
}
