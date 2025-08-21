import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Albumitem({ image, name, desc, id }) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate("/album/" + id)} className='min-w-[150px] sm:min-w-[180px] px-3 py-2 rounded-lg cursor-pointer hover:bg-[#ffffff14] hover:scale-95'>
            <img src={image} alt="" className='rounded size-[130px] sm:size-[160px]' />
            <p className='font-bold mt-2 mb-1 pl-1 w-38 truncate'>{name}</p>
            <p className='text-sm text-slate-200 pl-1 w-38 truncate'>{desc}</p>
        </div>
    )
}
