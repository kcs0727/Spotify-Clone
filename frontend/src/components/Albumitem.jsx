import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Albumitem({ image, name, desc, id }) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate("/album/" + id)} className='min-w-[140px] md:min-w-[160px] lg:min-w-[180px] px-1 lg:px-2 mb-4  rounded-lg cursor-pointer hover:bg-[#ffffff14] hover:scale-95'>
            <img src={image} alt="" className='rounded size-[130px] md:size-[150px] lg:size-[160px]' />
            <p className='font-semibold md:font-bold text-md md:text-md mt-1 md:mt-2 mb-1 pl-1 w-34 md:w-38 truncate'>{name}</p>
            <p className='text-xs md:text-md text-slate-200 pl-1 w-34 md:w-38 truncate'>{desc}</p>
        </div>
    )
}
