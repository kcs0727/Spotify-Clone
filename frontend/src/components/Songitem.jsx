import React from 'react'
import { useState } from 'react'
import { FaPlay,FaBookmark, FaRegBookmark, FaPause } from 'react-icons/fa';
import { UserData } from '../context/usercontext';
import { useEffect } from 'react';
import { SongData } from '../context/songcontext';


export default function Songitem({ image, name, desc, id }) {

    const {addtoplaylist, user}= UserData();
    const { selectedsong, setselectedsong, isplaying, setisplaying}= SongData();

    const [saved, setsaved] = useState(false);

    const playlist= user.playlist;
    useEffect(()=>{
        if(playlist && playlist.includes(id)){
            setsaved(true);
        }
    },[user])


    const playHandler=()=>{
        if(selectedsong==id && isplaying){
            setisplaying(false);
        }
        else if(selectedsong==id){
            setisplaying(true);
        }
        else{
            setselectedsong(id);
            setisplaying(true);
        }
    }

    const saveToPlaylistHandler=()=>{
        setsaved(!saved);
        addtoplaylist(id);
    }


    return (
        <div className='min-w-[150px] sm:min-w-[180px] px-3 py-2 rounded-lg hover:bg-[#ffffff14] hover:scale-95'>

            <div className='relative group'>
                <img src={image} alt="" className='rounded size-[130px] sm:size-[160px]' />

                <div className='absolute bottom-1 right-1 flex gap-2 items-center'>
                    <button type='button' className='bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer' onClick={playHandler}>
                        {isplaying && selectedsong==id ? <FaPause/>: <FaPlay/>}
                    </button>
                    <button type='button' className='bg-green-500 text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer' onClick={saveToPlaylistHandler}>
                        {saved? <FaBookmark/>:<FaRegBookmark/>}
                    </button>
                </div>
            </div>

            <p className='font-bold mt-2 mb-1 pl-1 w-38 truncate'>{name}</p>
            <p className='text-sm text-slate-200 pl-1 w-38 truncate'>{desc}</p>
        </div>
    )
}
